/**
 * DixitClient — Firestore-backed networking, replacing the old WebSocket layer.
 * Host-authoritative: the room creator's browser runs the DixitRoom engine,
 * processes the actions queue, runs phase timers, and writes the public state
 * + per-player private views. Other clients read and submit actions. Chat and
 * reactions are written directly by each client (no host round-trip).
 *
 * Firestore layout:
 *   rooms/{code}                public game state (PublicGameState + hostUid/memberUids)
 *   rooms/{code}/state/full     host-only: full DixitState (hands, deck)
 *   rooms/{code}/views/{uid}    per-player private state (read: own uid)
 *   rooms/{code}/actions/{id}   action queue (create: anyone; read/delete: host)
 *   rooms/{code}/chat/{id}      chat messages (create: members; read: members)
 *   rooms/{code}/reactions/{id} floating reactions
 */
import {
  addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query,
  setDoc, Firestore, Unsubscribe,
} from 'firebase/firestore';
import { Auth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { db as defaultDb, auth as defaultAuth } from '../firebase';
import { DixitRoom, genCode } from '../game/room';
import {
  ChatMessage, ClientToServerAction, FloatingReaction, PrivatePlayerState, PublicGameState,
  Player,
} from '../types';

const clean = <T>(v: T): T => JSON.parse(JSON.stringify(v));

// Safe in Node (tests) where localStorage is absent.
const ls = typeof localStorage !== 'undefined'
  ? localStorage
  : ({ getItem: () => null, setItem: () => {}, removeItem: () => {} } as Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>);

export interface FbCtx { db: Firestore; auth: Auth; }

export interface DixitCallbacks {
  onRoomUpdate: (state: PublicGameState, myState: PrivatePlayerState) => void;
  onChat: (msg: ChatMessage) => void;
  onReaction: (r: FloatingReaction) => void;
  onReconnectSuccess: (token: string, code: string) => void;
  onError: (msg: string) => void;
  onConnected: (connected: boolean) => void;
}

export class DixitClient {
  uid = '';
  private db: Firestore;
  private auth: Auth;
  private cb: DixitCallbacks;

  private code: string | null = null;
  private engine: DixitRoom | null = null;
  private hostRunning = false;
  private becomingHost = false;
  private actionChain: Promise<void> = Promise.resolve();
  private actionUnsub: Unsubscribe | null = null;
  private roomUnsubs: Unsubscribe[] = [];
  private timer: any = null;
  private subscribedAt = 0;

  private lastPublic: PublicGameState | null = null;
  private lastPrivate: PrivatePlayerState | null = null;
  private optimisticPlayer: Player | null = null;

  constructor(cb: DixitCallbacks, ctx?: FbCtx) {
    this.cb = cb;
    this.db = ctx?.db ?? defaultDb;
    this.auth = ctx?.auth ?? defaultAuth;
    void this.boot();
  }

  private signIn(): Promise<string> {
    if (this.auth.currentUser) return Promise.resolve(this.auth.currentUser.uid);
    return new Promise<string>((resolve, reject) => {
      const unsub = onAuthStateChanged(this.auth, (u) => { if (u) { unsub(); resolve(u.uid); } });
      signInAnonymously(this.auth).catch((e) => { unsub(); reject(e); });
    });
  }

  private async boot() {
    try { this.uid = await this.signIn(); this.cb.onConnected(true); }
    catch { this.cb.onError('Firebase-თან დაკავშირება ვერ მოხერხდა'); }
  }

  // ---- refs ----
  private roomRef(code = this.code!) { return doc(this.db, 'rooms', code); }
  private fullRef(code = this.code!) { return doc(this.db, 'rooms', code, 'state', 'full'); }
  private viewRef(uid: string, code = this.code!) { return doc(this.db, 'rooms', code, 'views', uid); }
  private actionsCol(code = this.code!) { return collection(this.db, 'rooms', code, 'actions'); }
  private chatCol(code = this.code!) { return collection(this.db, 'rooms', code, 'chat'); }
  private reactionsCol(code = this.code!) { return collection(this.db, 'rooms', code, 'reactions'); }

  // ---- public entrypoint (App calls this with the same action objects) ----
  send(action: ClientToServerAction) {
    switch (action.type) {
      case 'CREATE_ROOM': void this.createRoom(action.displayName, action.avatarUrl, action.roomName, action.settings); break;
      case 'JOIN_ROOM': void this.joinRoom(action.roomCode, action.displayName, action.avatarUrl); break;
      case 'RECONNECT': void this.reconnect(); break;
      case 'LEAVE_ROOM': void this.leave(); break;
      case 'SEND_CHAT': void this.sendChat(action.message); break;
      case 'SEND_REACTION': void this.sendReaction(action.emoji); break;
      case 'RESTART_GAME': void this.sendAction('START_GAME', {}); break;
      case 'UPDATE_PROFILE':
        this.optimisticProfile(action.displayName, action.avatarUrl);
        void this.sendAction('UPDATE_PROFILE', { displayName: action.displayName, avatarUrl: action.avatarUrl });
        break;
      case 'LIST_PUBLIC_ROOMS': case 'KICK_PLAYER': case 'TRANSFER_HOST': break;
      default: { const { type, ...payload } = action as any; void this.sendAction(type, payload); break; }
    }
  }

  private async ensureUid() { if (!this.uid) { this.uid = await this.signIn(); this.cb.onConnected(true); } }

  private async createRoom(displayName: string, avatarUrl: string, roomName?: string, settings?: any) {
    await this.ensureUid();
    this.teardown();
    this.engine = DixitRoom.create(this.uid, displayName, avatarUrl, roomName, settings);
    this.code = this.engine.data.code;
    await this.persist();
    this.startHost();
    this.subscribe(this.code);
    ls.setItem('dreamclue_room', this.code);
    this.cb.onReconnectSuccess(this.uid, this.code);
  }

  private async joinRoom(codeRaw: string, displayName: string, avatarUrl: string) {
    await this.ensureUid();
    const code = String(codeRaw || '').toUpperCase().trim();
    const snap = await getDoc(this.roomRef(code));
    if (!snap.exists() || (snap.data() as any)._deleted) return this.cb.onError('ოთახი ვერ მოიძებნა (Invalid Room Code)');
    const pub = snap.data() as any;
    const already = (pub.players || []).some((p: any) => p.id === this.uid);
    if (!already && (pub.players || []).length >= pub.settings.maxPlayers) return this.cb.onError('ოთახი სავსეა (Room is full)');
    this.teardown();
    this.code = code;
    this.optimisticJoin(pub, displayName, avatarUrl);
    this.subscribe(code);
    await this.sendAction('JOIN', { displayName, avatarUrl });
    await this.maybeBecomeHost(pub.hostPlayerId);
    ls.setItem('dreamclue_room', code);
    this.cb.onReconnectSuccess(this.uid, code);
  }

  private async reconnect() {
    await this.ensureUid();
    const code = ls.getItem('dreamclue_room');
    if (!code) return;
    const snap = await getDoc(this.roomRef(code));
    if (!snap.exists() || (snap.data() as any)._deleted) { ls.removeItem('dreamclue_room'); return; }
    const pub = snap.data() as any;
    if (!(pub.players || []).some((p: any) => p.id === this.uid)) { ls.removeItem('dreamclue_room'); return; }
    this.teardown();
    this.code = code;
    this.subscribe(code);
    await this.sendAction('RECONNECT', {});
    await this.maybeBecomeHost(pub.hostPlayerId);
    this.cb.onReconnectSuccess(this.uid, code);
  }

  private async leave() {
    if (this.code) await this.sendAction('LEAVE_ROOM', {}).catch(() => {});
    ls.removeItem('dreamclue_room');
    this.teardown();
  }

  // ---- subscriptions ----
  private subscribe(code: string) {
    this.subscribedAt = Date.now();
    this.roomUnsubs.push(onSnapshot(this.roomRef(code), (snap) => {
      if (!snap.exists()) return;
      const incoming = snap.data() as PublicGameState;
      const players = incoming.players || [];
      if (this.optimisticPlayer && !players.some((p) => p.id === this.uid)) {
        this.lastPublic = { ...incoming, players: [...players, this.optimisticPlayer] };
      } else {
        if (players.some((p) => p.id === this.uid)) this.optimisticPlayer = null;
        this.lastPublic = incoming;
      }
      void this.maybeBecomeHost((snap.data() as any).hostPlayerId);
      this.emitRoom();
    }));
    this.roomUnsubs.push(onSnapshot(this.viewRef(this.uid, code), (snap) => {
      if (!snap.exists()) return;
      this.lastPrivate = snap.data() as PrivatePlayerState;
      this.emitRoom();
    }));
    this.roomUnsubs.push(onSnapshot(query(this.chatCol(code), orderBy('timestamp', 'asc')), (snap) => {
      snap.docChanges().forEach((ch) => { if (ch.type === 'added') this.cb.onChat(ch.doc.data() as ChatMessage); });
    }));
    this.roomUnsubs.push(onSnapshot(this.reactionsCol(code), (snap) => {
      snap.docChanges().forEach((ch) => {
        if (ch.type !== 'added') return;
        const r = ch.doc.data() as FloatingReaction;
        if (r.timestamp >= this.subscribedAt - 3000) this.cb.onReaction(r);
      });
    }));
  }

  private emitRoom() { if (this.lastPublic && this.lastPrivate) this.cb.onRoomUpdate(this.lastPublic, this.lastPrivate); }

  // ---- direct writes: chat + reactions ----
  private async sendChat(message: string) {
    if (!this.code || !message.trim()) return;
    const me = this.lastPublic?.players.find((p) => p.id === this.uid);
    const msg: ChatMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      playerId: this.uid, playerName: me?.displayName || 'მოთამაშე', playerAvatar: me?.avatarUrl || '🌟',
      message: message.trim().substring(0, 300), timestamp: Date.now(),
    };
    await addDoc(this.chatCol(), clean(msg));
  }

  private async sendReaction(emoji: string) {
    if (!this.code) return;
    const me = this.lastPublic?.players.find((p) => p.id === this.uid);
    const r: FloatingReaction = {
      id: `react_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      playerId: this.uid, playerName: me?.displayName || '', emoji, timestamp: Date.now(),
    };
    await addDoc(this.reactionsCol(), clean(r));
  }

  private optimisticJoin(pub: any, displayName: string, avatarUrl: string) {
    const optimisticPlayer: Player = {
      id: this.uid,
      displayName: displayName || `მოთამაშე ${(pub.players || []).length + 1}`,
      avatarUrl: avatarUrl || '🌟',
      isHost: false,
      isReady: false,
      isConnected: true,
      isSpectator: pub.phase !== 'LOBBY',
      seatNumber: (pub.players || []).length + 1,
      score: 0,
      reconnectToken: this.uid,
      joinedAt: Date.now(),
    };
    const privateView: PrivatePlayerState = {
      playerId: this.uid,
      hand: [],
      selectedCardId: null,
      confirmedSubmission: false,
      selectedVoteCardId: null,
      confirmedVote: false,
      reconnectToken: this.uid,
    };
    this.optimisticPlayer = optimisticPlayer;
    this.lastPublic = {
      ...(pub as PublicGameState),
      players: (pub.players || []).some((p: Player) => p.id === this.uid)
        ? (pub.players || []).map((p: Player) => p.id === this.uid ? { ...p, isConnected: true } : p)
        : [...(pub.players || []), optimisticPlayer],
    };
    this.lastPrivate = privateView;
    this.emitRoom();
  }

  private optimisticProfile(displayName: string, avatarUrl: string) {
    const nextName = displayName.trim().substring(0, 32);
    const nextAvatar = avatarUrl.trim().substring(0, 16);
    if (this.optimisticPlayer?.id === this.uid) {
      if (nextName) this.optimisticPlayer.displayName = nextName;
      if (nextAvatar) this.optimisticPlayer.avatarUrl = nextAvatar;
    }
    if (!this.lastPublic) return;
    this.lastPublic = {
      ...this.lastPublic,
      players: this.lastPublic.players.map((p) => {
        if (p.id !== this.uid) return p;
        return {
          ...p,
          displayName: nextName || p.displayName,
          avatarUrl: nextAvatar || p.avatarUrl,
        };
      }),
    };
    this.emitRoom();
  }

  // ---- actions queue ----
  private async sendAction(type: string, payload: any) {
    if (!this.code) return;
    await addDoc(this.actionsCol(), { uid: this.uid, type, payload: payload ?? null, ts: Date.now() });
  }

  // ---- host authority ----
  private async maybeBecomeHost(hostUid: string) {
    if (hostUid !== this.uid || this.hostRunning || this.becomingHost || !this.code) return;
    this.becomingHost = true;
    try {
      if (!this.engine) {
        const full = await getDoc(this.fullRef());
        if (full.exists()) this.engine = DixitRoom.rehydrate((full.data() as any).data);
      }
      if (this.engine) this.startHost();
    } finally { this.becomingHost = false; }
  }

  private startHost() {
    if (this.hostRunning || !this.code || !this.engine) return;
    this.hostRunning = true;
    this.actionUnsub = onSnapshot(query(this.actionsCol(), orderBy('ts', 'asc')), (snap) => {
      snap.docChanges().forEach((ch) => {
        if (ch.type !== 'added') return;
        const id = ch.doc.id; const data = ch.doc.data() as any;
        this.actionChain = this.actionChain.then(() => this.processAction(id, data)).catch((e) => console.error('action', e));
      });
    });
    this.scheduleTimer();
  }

  private async processAction(id: string, action: { uid: string; type: string; payload?: any }) {
    const eng = this.engine;
    if (!eng) return;
    const { uid, type, payload } = action;
    const p = payload || {};
    let res: { error?: string } | undefined;
    switch (type) {
      case 'JOIN': res = eng.join(uid, p.displayName, p.avatarUrl); break;
      case 'RECONNECT': res = eng.reconnect(uid); break;
      case 'LEAVE_ROOM': res = eng.leave(uid); break;
      case 'TOGGLE_READY': res = eng.toggleReady(uid); break;
      case 'UPDATE_SETTINGS': res = eng.updateSettings(uid, p.settings); break;
      case 'UPDATE_PROFILE': res = eng.updateProfile(uid, p.displayName, p.avatarUrl); break;
      case 'START_GAME': res = eng.startGame(uid); break;
      case 'SUBMIT_CLUE_AND_CARD': res = eng.submitClueAndCard(uid, p.clue, p.cardId); break;
      case 'SUBMIT_PLAYER_CARD': res = eng.submitPlayerCard(uid, p.cardId); break;
      case 'SUBMIT_VOTE': res = eng.submitVote(uid, p.cardId); break;
    }
    if (res?.error && uid === this.uid) this.cb.onError(res.error);
    await this.persist();
    await deleteDoc(doc(this.db, 'rooms', this.code!, 'actions', id)).catch(() => {});
  }

  private scheduleTimer() {
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    const eng = this.engine;
    if (!eng) return;
    const { phase, phaseEndsAt } = eng.data;
    const timed = ['STORYTELLER_SELECTING', 'PLAYERS_SELECTING', 'VOTING', 'ROUND_RESULTS'];
    if (!phaseEndsAt || !timed.includes(phase)) return;
    const delay = Math.max(0, phaseEndsAt - Date.now());
    this.timer = setTimeout(() => {
      this.actionChain = this.actionChain.then(async () => {
        eng.onTimerExpired();
        await this.persist();
      }).catch((e) => console.error('timer', e));
    }, delay);
  }

  private async persist() {
    const eng = this.engine;
    if (!eng || !this.code) return;
    const d = eng.data;
    if (d._deleted) { this.teardown(); return; }
    const pub = eng.getPublicState();
    await setDoc(this.roomRef(), clean({ ...pub, memberUids: d.players.map((p) => p.id), updatedAt: Date.now() }));
    await setDoc(this.fullRef(), clean({ data: d }));
    for (const player of d.players) {
      await setDoc(this.viewRef(player.id), clean(eng.getPrivateState(player.id)));
    }
    const msgs = eng.flushChat();
    for (const m of msgs) await addDoc(this.chatCol(), clean(m));
    this.scheduleTimer();
  }

  /** Unsubscribe everything without leaving the room (for React unmount). */
  destroy() { this.teardown(); }

  private teardown() {
    this.roomUnsubs.forEach((u) => u());
    this.roomUnsubs = [];
    if (this.actionUnsub) { this.actionUnsub(); this.actionUnsub = null; }
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    this.hostRunning = false;
    this.becomingHost = false;
    this.engine = null;
    this.code = null;
    this.lastPublic = null;
    this.lastPrivate = null;
    this.optimisticPlayer = null;
  }
}
