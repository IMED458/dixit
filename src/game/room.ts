/**
 * DixitRoom — transport-agnostic single-room authority (ported from the old
 * WebSocket server/roomManager.ts). Holds one room's full state, exposes an
 * action method per former action, and produces a public state + per-player
 * private state. Knows nothing about Firestore; the host browser drives it.
 *
 * Players are keyed by their Firebase Auth uid (was: generated playerId).
 * All state is plain/serialisable (no Map/Set) so it round-trips through
 * Firestore. Phase timers are not run here — the host schedules
 * onTimerExpired() from phaseEndsAt. The deck is the curated DEFAULT_CARDS set.
 */
import {
  Card, CardSubmission, CardVote, ChatMessage, GamePhase, Player,
  PrivatePlayerState, PublicGameState, RoomSettings, RoundScoreDetail,
} from '../types';
import { DEFAULT_CARDS } from '../data/defaultCards';
import { calculateRoundScores } from './scoring';

export interface DixitState {
  id: string;
  code: string;
  name: string;
  hostPlayerId: string;
  phase: GamePhase;
  roundNumber: number;
  storytellerPlayerId: string | null;
  clue: string | null;
  storytellerCardId: string | null;
  players: Player[];
  settings: RoomSettings;
  deck: Card[];
  usedCardIds: string[];
  playerHands: Record<string, Card[]>;
  submissions: CardSubmission[];
  shuffledRevealedCards: Array<{ cardId: string; url: string; thumbnailUrl: string; position: number; ownerPlayerId: string }>;
  votes: CardVote[];
  lastRoundScores: RoundScoreDetail[] | null;
  winnerPlayerId: string | null;
  phaseStartedAt: number;
  phaseEndsAt: number | null;
  gameHistoryCount: number;
  _deleted?: boolean;
}

export type Result = { error?: string };
const POOL: Card[] = DEFAULT_CARDS;
const GAME_DECK_SIZE = 84;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export const DEFAULT_SETTINGS: RoomSettings = {
  maxPlayers: 8, winningScore: 30, maxRounds: 10, handSize: 6,
  clueTimer: 60, cardTimer: 60, votingTimer: 45, resultsTimer: 12,
  language: 'ka', threePlayerVariant: false, publicRoom: true,
  allowSpectators: true, requireWrittenClue: false, imageProvider: 'all',
};

function selectGameDeck(): Card[] {
  return shuffle(POOL).slice(0, Math.min(GAME_DECK_SIZE, POOL.length));
}

export class DixitRoom {
  data: DixitState;
  pendingChat: ChatMessage[] = [];

  constructor(data: DixitState) { this.data = data; }

  static create(hostUid: string, displayName: string, avatarUrl: string, roomName?: string, settings?: Partial<RoomSettings>): DixitRoom {
    const code = genCode();
    const host: Player = {
      id: hostUid, displayName: displayName || 'მთხრობელი 1', avatarUrl: avatarUrl || '🔮',
      isHost: true, isReady: true, isConnected: true, isSpectator: false,
      seatNumber: 1, score: 0, reconnectToken: hostUid, joinedAt: Date.now(),
    };
    const data: DixitState = {
      id: `room_${code}`, code, name: roomName || `DreamClue ოთახი #${code}`,
      hostPlayerId: hostUid, phase: 'LOBBY', roundNumber: 0,
      storytellerPlayerId: null, clue: null, storytellerCardId: null,
      players: [host], settings: { ...DEFAULT_SETTINGS, ...settings },
      deck: selectGameDeck(), usedCardIds: [], playerHands: {},
      submissions: [], shuffledRevealedCards: [], votes: [],
      lastRoundScores: null, winnerPlayerId: null,
      phaseStartedAt: Date.now(), phaseEndsAt: null, gameHistoryCount: 0,
    };
    return new DixitRoom(data);
  }

  static rehydrate(data: DixitState): DixitRoom { return new DixitRoom(data); }

  flushChat(): ChatMessage[] { const out = this.pendingChat; this.pendingChat = []; return out; }
  private getPlayer(id: string | null) { return id ? this.data.players.find(p => p.id === id) : undefined; }
  private activePlayers() { return this.data.players.filter(p => !p.isSpectator); }
  private nonStorytellers() { return this.activePlayers().filter(p => p.id !== this.data.storytellerPlayerId); }

  private say(text: string) {
    this.pendingChat.push({
      id: `sys_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      playerId: 'system', playerName: 'DreamClue Bot', playerAvatar: '🔮',
      message: text, timestamp: Date.now(), isSystem: true,
    });
  }

  private setPhase(phase: GamePhase, timerSeconds: number | null) {
    this.data.phase = phase;
    this.data.phaseStartedAt = Date.now();
    this.data.phaseEndsAt = timerSeconds ? Date.now() + timerSeconds * 1000 : null;
  }

  // ---- lobby ----
  join(uid: string, displayName: string, avatarUrl: string): Result {
    const d = this.data;
    if (d.players.some(p => p.id === uid)) { const p = this.getPlayer(uid)!; p.isConnected = true; return {}; }
    if (d.players.length >= d.settings.maxPlayers) return { error: 'ოთახი სავსეა (Room is full)' };
    const newPlayer: Player = {
      id: uid, displayName: displayName || `მოთამაშე ${d.players.length + 1}`, avatarUrl: avatarUrl || '🌟',
      isHost: false, isReady: false, isConnected: true, isSpectator: d.phase !== 'LOBBY',
      seatNumber: d.players.length + 1, score: 0, reconnectToken: uid, joinedAt: Date.now(),
    };
    d.players.push(newPlayer);
    this.say(`${newPlayer.displayName} შემოუერთდა ოთახს`);
    return {};
  }

  reconnect(uid: string): Result { const p = this.getPlayer(uid); if (p) p.isConnected = true; return {}; }

  leave(uid: string): Result {
    const d = this.data;
    const idx = d.players.findIndex(p => p.id === uid);
    if (idx === -1) return {};
    const wasStoryteller = d.storytellerPlayerId === uid;
    const [leaving] = d.players.splice(idx, 1);
    delete d.playerHands[uid];
    // Drop any pending input from the player who left so the counts stay
    // consistent and the remaining players aren't blocked waiting on them.
    d.votes = d.votes.filter(v => v.voterId !== uid);
    if (d.phase === 'PLAYERS_SELECTING') d.submissions = d.submissions.filter(s => s.playerId !== uid);
    this.say(`${leaving.displayName} დატოვა ოთახი`);
    if (d.hostPlayerId === uid && d.players.length > 0) {
      d.players[0].isHost = true; d.hostPlayerId = d.players[0].id;
      this.say(`${d.players[0].displayName} გახდა ახალი მასპინძელი`);
    }
    if (d.players.length === 0) { d._deleted = true; return {}; }
    this.recoverAfterDeparture(wasStoryteller);
    return {};
  }

  /**
   * Keep the game moving after someone leaves mid-round — without ever forcing a
   * move for the players who stayed. If the round can now complete on its own it
   * advances; if the storyteller is the one who left, the round is handled
   * gracefully instead of deadlocking.
   */
  private recoverAfterDeparture(wasStoryteller: boolean) {
    const d = this.data;
    if (d.phase === 'LOBBY' || d.phase === 'GAME_OVER') return;
    const active = this.activePlayers();

    // Not enough players left to keep playing — stop the game gracefully.
    if (active.length < 3) {
      d.winnerPlayerId = [...d.players].sort((a, b) => b.score - a.score)[0]?.id ?? null;
      this.setPhase('GAME_OVER', null);
      this.say('მოთამაშეები ვეღარ ჰყოფნის თამაშს — თამაში შეჩერდა. დანარჩენებს შეუძლიათ ახლიდან დაწყება.');
      return;
    }

    if (wasStoryteller) {
      if (d.phase === 'STORYTELLER_SELECTING') {
        // Storyteller left before giving a clue — pass the role on and keep waiting.
        d.submissions = [];
        d.storytellerPlayerId = active[0].id;
        this.say(`მთხრობელი გავიდა. ახალი მთხრობელია: ${this.getPlayer(d.storytellerPlayerId)?.displayName || ''}. თამაში გრძელდება.`);
      } else {
        // Clue already given but the storyteller is gone — abandon this round
        // (no fair way to score it) and deal a fresh one for the others.
        this.say('მთხრობელი გავიდა — მიმდინარე რაუნდი უქმდება, დანარჩენები აგრძელებენ.');
        this.abandonRound(active[0].id);
      }
      return;
    }

    // A non-storyteller left: the phase may now be complete with fewer players.
    if (d.phase === 'PLAYERS_SELECTING' && d.submissions.length >= this.nonStorytellers().length + 1) {
      this.proceedToRevealing();
    } else if (d.phase === 'VOTING' && d.votes.length >= this.nonStorytellers().length) {
      this.proceedToScoring();
    }
  }

  /** Reset the current round and restart it with a given storyteller (no score change). */
  private abandonRound(nextStorytellerId: string) {
    const d = this.data;
    d.submissions = []; d.votes = []; d.clue = null; d.storytellerCardId = null; d.shuffledRevealedCards = [];
    this.dealCards(d.settings.handSize);
    d.storytellerPlayerId = nextStorytellerId;
    this.setPhase('STORYTELLER_SELECTING', null);
    this.say(`ახალი მთხრობელია: ${this.getPlayer(d.storytellerPlayerId)?.displayName || ''}.`);
  }

  toggleReady(uid: string): Result {
    const p = this.getPlayer(uid);
    if (p && this.data.phase === 'LOBBY') p.isReady = !p.isReady;
    return {};
  }

  updateSettings(uid: string, s: Partial<RoomSettings>): Result {
    const d = this.data;
    if (d.hostPlayerId !== uid) return {};
    const next = { ...d.settings, ...s };
    if (d.phase !== 'LOBBY') {
      next.maxPlayers = d.settings.maxPlayers;
      next.handSize = d.settings.handSize;
      next.threePlayerVariant = d.settings.threePlayerVariant;
    }
    d.settings = next;
    return {};
  }

  updateProfile(uid: string, displayName: string, avatarUrl: string): Result {
    const p = this.getPlayer(uid);
    if (!p || this.data.phase !== 'LOBBY') return {};
    const nextName = displayName.trim().substring(0, 32);
    const nextAvatar = avatarUrl.trim().substring(0, 16);
    if (nextName) p.displayName = nextName;
    if (nextAvatar) p.avatarUrl = nextAvatar;
    return {};
  }

  startGame(uid: string): Result {
    const d = this.data;
    if (d.hostPlayerId !== uid || (d.phase !== 'LOBBY' && d.phase !== 'GAME_OVER')) return {};
    const active = this.activePlayers();
    if (active.length < 3) return { error: 'თამაშის დასაწყებად საჭიროა მინიმუმ 3 მოთამაშე!' };
    d.players.forEach(p => { p.score = 0; p.isReady = true; });
    d.roundNumber = 1;
    d.deck = selectGameDeck();
    d.usedCardIds = [];
    d.playerHands = {};
    d.winnerPlayerId = null;
    d.lastRoundScores = null;
    d.submissions = []; d.votes = []; d.clue = null; d.storytellerCardId = null; d.shuffledRevealedCards = [];
    d.storytellerPlayerId = active[0].id;
    this.dealCards(d.settings.handSize);
    // No auto-advance timer on input phases: the game waits for the players
    // themselves and never plays a move on anyone's behalf.
    this.setPhase('STORYTELLER_SELECTING', null);
    this.say(`თამაში დაიწყო! რაუნდი 1. მთხრობელია: ${this.getPlayer(d.storytellerPlayerId)?.displayName || ''}`);
    return {};
  }

  submitClueAndCard(uid: string, clue: string, cardId: string): Result {
    const d = this.data;
    if (d.phase !== 'STORYTELLER_SELECTING' || d.storytellerPlayerId !== uid) return {};
    const hand = d.playerHands[uid] || [];
    const cardIndex = hand.findIndex(c => c.id === cardId);
    if (cardIndex === -1) return { error: 'ეს ბარათი არ გაქვთ ხელში!' };
    const nextClue = clue.trim().substring(0, 120);
    if (d.settings.requireWrittenClue && !nextClue) return { error: 'ჩაწერეთ მინიშნება' };
    d.clue = nextClue || 'მინიშნება ითქვა სიტყვიერად';
    d.storytellerCardId = cardId;
    hand.splice(cardIndex, 1);
    d.playerHands[uid] = hand;
    d.submissions = [{ playerId: uid, cardId, isStorytellerCard: true, revealPosition: -1, submittedAt: Date.now(), autoSubmitted: false }];
    this.setPhase('PLAYERS_SELECTING', null);
    this.say(d.settings.requireWrittenClue ? `მთხრობელმა დაწერა მინიშნება: „${d.clue}“` : 'მთხრობელმა აირჩია ბარათი და მინიშნება სიტყვიერად თქვა');
    return {};
  }

  submitPlayerCard(uid: string, cardId: string): Result {
    const d = this.data;
    if (d.phase !== 'PLAYERS_SELECTING' || uid === d.storytellerPlayerId) return {};
    const hand = d.playerHands[uid] || [];
    const existingSubIndex = d.submissions.findIndex(s => s.playerId === uid);
    const cardIndex = hand.findIndex(c => c.id === cardId);
    if (cardIndex === -1 && existingSubIndex === -1) return { error: 'ეს ბარათი არ გაქვთ ხელში!' };
    if (existingSubIndex !== -1) {
      const oldSub = d.submissions[existingSubIndex];
      const oldCard = this.activeCardPool().find(c => c.id === oldSub.cardId);
      if (oldCard) hand.push(oldCard);
      d.submissions.splice(existingSubIndex, 1);
    }
    const cIdx = hand.findIndex(c => c.id === cardId);
    if (cIdx !== -1) hand.splice(cIdx, 1);
    d.playerHands[uid] = hand;
    d.submissions.push({ playerId: uid, cardId, isStorytellerCard: false, revealPosition: -1, submittedAt: Date.now(), autoSubmitted: false });
    if (d.submissions.length >= this.nonStorytellers().length + 1) this.proceedToRevealing();
    return {};
  }

  private proceedToRevealing() {
    const d = this.data;
    const shuffledSubs = shuffle([...d.submissions]);
    d.shuffledRevealedCards = shuffledSubs.map((sub, index) => {
      sub.revealPosition = index;
      const cardObj = this.activeCardPool().find(c => c.id === sub.cardId);
      return {
        cardId: sub.cardId,
        url: cardObj ? cardObj.url : 'https://picsum.photos/800/1000',
        thumbnailUrl: cardObj ? cardObj.thumbnailUrl : 'https://picsum.photos/300/400',
        position: index, ownerPlayerId: sub.playerId,
      };
    });
    d.votes = [];
    this.setPhase('VOTING', null);
    this.say('ყველა ბარათი არეულია და გამოვლენილია! დაიწყო ხმის მიცემა.');
  }

  submitVote(uid: string, cardId: string): Result {
    const d = this.data;
    if (d.phase !== 'VOTING' || uid === d.storytellerPlayerId) return {};
    const mySub = d.submissions.find(s => s.playerId === uid);
    if (mySub && mySub.cardId === cardId) return { error: 'საკუთარ ბარათზე ხმის მიცემა აკრძალულია!' };
    const existing = d.votes.findIndex(v => v.voterId === uid);
    if (existing !== -1) d.votes.splice(existing, 1);
    d.votes.push({ voterId: uid, cardId, submittedAt: Date.now(), autoSubmitted: false });
    const activeVoters = this.nonStorytellers();
    if (d.votes.length >= activeVoters.length) this.proceedToScoring();
    return {};
  }

  private proceedToScoring() {
    const d = this.data;
    const profiles = d.players.map(p => ({ id: p.id, displayName: p.displayName, avatarUrl: p.avatarUrl, score: p.score }));
    const roundScores = calculateRoundScores(d.storytellerPlayerId!, d.submissions, d.votes, profiles);
    roundScores.forEach(sd => { const pl = d.players.find(p => p.id === sd.playerId); if (pl) pl.score = sd.newTotalScore; });
    d.lastRoundScores = roundScores;
    const winner = d.players.find(p => p.score >= d.settings.winningScore);
    const maxRoundsReached = d.roundNumber >= d.settings.maxRounds;
    if (winner || maxRoundsReached) {
      const sorted = [...d.players].sort((a, b) => b.score - a.score);
      d.winnerPlayerId = sorted[0].id;
    }
    this.setPhase('ROUND_RESULTS', d.settings.resultsTimer);
  }

  private startNextRound() {
    const d = this.data;
    d.roundNumber += 1;
    d.submissions = []; d.votes = []; d.clue = null; d.storytellerCardId = null; d.shuffledRevealedCards = [];
    this.dealCards(d.settings.handSize);
    const active = this.activePlayers();
    const idx = active.findIndex(p => p.id === d.storytellerPlayerId);
    d.storytellerPlayerId = active[(idx + 1) % active.length].id;
    this.setPhase('STORYTELLER_SELECTING', null);
    this.say(`რაუნდი ${d.roundNumber}. ახალი მთხრობელია: ${this.getPlayer(d.storytellerPlayerId)?.displayName || ''}`);
  }

  /**
   * Host calls this when the current phase timer (phaseEndsAt) elapses. Only the
   * ROUND_RESULTS screen is timed — it simply advances to the next round (or ends
   * the game). Input phases (clue / card / voting) have no timer and are never
   * auto-completed: the engine never plays a move on a player's behalf.
   */
  onTimerExpired(): Result {
    const d = this.data;
    if (d.phase === 'ROUND_RESULTS') {
      if (d.winnerPlayerId) {
        this.setPhase('GAME_OVER', null);
        const w = this.getPlayer(d.winnerPlayerId);
        this.say(`🏆 თამაში დასრულდა! გამარჯვებულია: ${w?.displayName || ''}!`);
      } else {
        this.startNextRound();
      }
    }
    return {};
  }

  private dealCards(targetHandSize: number) {
    const d = this.data;
    const used = new Set(d.usedCardIds);
    d.players.forEach(player => {
      const hand = d.playerHands[player.id] || [];
      const needed = targetHandSize - hand.length;
      for (let i = 0; i < needed; i++) {
        if (d.deck.length === 0) {
          const held = new Set<string>();
          Object.values(d.playerHands).forEach(h => h.forEach(c => held.add(c.id)));
          d.deck = shuffle(this.activeCardPool().filter(c => !held.has(c.id)));
        }
        if (d.deck.length > 0) { const drawn = d.deck.pop()!; hand.push(drawn); used.add(drawn.id); }
      }
      d.playerHands[player.id] = hand;
    });
    d.usedCardIds = [...used];
  }

  // ---- views ----
  getPublicState(): PublicGameState {
    const d = this.data;
    const revealed = (d.phase === 'VOTING' || d.phase === 'SCORING' || d.phase === 'ROUND_RESULTS')
      ? d.shuffledRevealedCards.map(rc => ({ cardId: rc.cardId, url: rc.url, thumbnailUrl: rc.thumbnailUrl, position: rc.position }))
      : undefined;
    return {
      roomId: d.id, roomCode: d.code, roomName: d.name, hostPlayerId: d.hostPlayerId,
      phase: d.phase, roundNumber: d.roundNumber, storytellerPlayerId: d.storytellerPlayerId,
      clue: d.clue, players: d.players, settings: d.settings,
      revealedCards: revealed,
      storytellerCardId: (d.phase === 'SCORING' || d.phase === 'ROUND_RESULTS') ? d.storytellerCardId : null,
      submissionsCount: d.submissions.length,
      targetSubmissionsCount: this.activePlayers().length,
      votesCount: d.votes.length,
      targetVotesCount: this.nonStorytellers().length,
      submittedPlayerIds: d.submissions.map(s => s.playerId),
      votedPlayerIds: d.votes.map(v => v.voterId),
      phaseEndsAt: d.phaseEndsAt, serverTime: Date.now(),
      lastRoundScores: d.lastRoundScores, winnerPlayerId: d.winnerPlayerId,
      usedCardCount: d.usedCardIds.length, totalCardCount: POOL.length,
      gameHistoryCount: d.gameHistoryCount,
    };
  }

  getPrivateState(uid: string): PrivatePlayerState {
    const d = this.data;
    const hand = d.playerHands[uid] || [];
    const mySub = d.submissions.find(s => s.playerId === uid);
    const myVote = d.votes.find(v => v.voterId === uid);
    return {
      playerId: uid, hand,
      selectedCardId: mySub ? mySub.cardId : null,
      confirmedSubmission: !!mySub,
      selectedVoteCardId: myVote ? myVote.cardId : null,
      confirmedVote: !!myVote,
      reconnectToken: uid,
    };
  }

  private activeCardPool(): Card[] {
    const ids = new Set([
      ...this.data.deck.map((c) => c.id),
      ...this.data.usedCardIds,
      ...Object.values(this.data.playerHands).flat().map((c) => c.id),
    ]);
    const pool = POOL.filter((c) => ids.has(c.id));
    return pool.length ? pool : POOL;
  }
}

export function genCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  return code;
}
