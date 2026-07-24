/**
 * End-to-end test of the Firestore host-authoritative transport with three
 * independent anonymous players, exercising the REAL security rules.
 * Requires: firestore.rules published + Anonymous auth enabled.
 * Run: npx tsx server/tests/firestore.e2e.ts
 */
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { DixitClient, FbCtx } from '../../src/net/client';
import { PublicGameState, PrivatePlayerState } from '../../src/types';

const CONFIG = {
  apiKey: 'AIzaSyBbtyxT_MpsMTvh1yFF_aLtriWkQ0SASWw',
  authDomain: 'dixit-4a8cc.firebaseapp.com',
  projectId: 'dixit-4a8cc',
  appId: '1:446095008501:web:fa03cc8f16a953fa055bbc',
};

let pass = 0, fail = 0;
const assert = (c: boolean, m: string) => { c ? (pass++, console.log('[PASS] ' + m)) : (fail++, console.log('[FAIL] ' + m)); };
const waitFor = async (pred: () => boolean, ms = 15000, step = 200) => {
  const end = Date.now() + ms;
  while (Date.now() < end) { if (pred()) return true; await new Promise(r => setTimeout(r, step)); }
  return pred();
};

function makeCtx(name: string): FbCtx {
  const app = initializeApp(CONFIG, name + '-' + Math.random().toString(36).slice(2, 6));
  const auth: Auth = getAuth(app);
  const db: Firestore = getFirestore(app);
  return { db, auth };
}

interface Seat { client: DixitClient; pub: PublicGameState | null; priv: PrivatePlayerState | null; code: string | null; }
function makeSeat(name: string): Seat {
  const seat: Seat = { client: null as any, pub: null, priv: null, code: null };
  seat.client = new DixitClient({
    onRoomUpdate: (s, p) => { seat.pub = s; seat.priv = p; },
    onChat: () => {},
    onReaction: () => {},
    onReconnectSuccess: (_t, c) => { seat.code = c; },
    onError: (m) => console.log(`[${name} error] ${m}`),
    onConnected: () => {},
  }, makeCtx(name));
  return seat;
}

async function main() {
  const a = makeSeat('A'), b = makeSeat('B'), c = makeSeat('C');
  await waitFor(() => !!a.client.uid && !!b.client.uid && !!c.client.uid);
  assert(!!a.client.uid, 'სამივე კლიენტი დაუკავშირდა (anonymous auth)');

  a.client.send({ type: 'CREATE_ROOM', displayName: 'ალისა', avatarUrl: '🔮' });
  await waitFor(() => !!a.code && !!a.pub);
  assert(!!a.code, 'ჰოსტმა შექმნა ოთახი (rules: create)');
  const code = a.code!;

  b.client.send({ type: 'JOIN_ROOM', roomCode: code, displayName: 'ბექა', avatarUrl: '🌟' });
  c.client.send({ type: 'JOIN_ROOM', roomCode: code, displayName: 'ცისკო', avatarUrl: '🦊' });
  await waitFor(() => (a.pub?.players.length ?? 0) === 3 && !!b.pub && !!c.pub);
  assert(a.pub!.players.length === 3, 'სამი მოთამაშე შემოვიდა (JOIN → host → views)');

  a.client.send({ type: 'START_GAME' });
  await waitFor(() => a.pub!.phase === 'STORYTELLER_SELECTING' && (a.priv!.hand.length > 0));
  assert(a.pub!.phase === 'STORYTELLER_SELECTING', 'თამაში დაიწყო');
  assert([a, b, c].every(s => (s.priv?.hand.length ?? 0) === a.pub!.settings.handSize), 'თითო მოთამაშეს დაურიგდა ხელი (privacy view)');

  const seatOf = (id: string | null) => [a, b, c].find(s => s.client.uid === id)!;
  const stSeat = seatOf(a.pub!.storytellerPlayerId);
  stSeat.client.send({ type: 'SUBMIT_CLUE_AND_CARD', clue: 'ოცნება', cardId: stSeat.priv!.hand[0].id });
  await waitFor(() => a.pub!.phase === 'PLAYERS_SELECTING');
  assert(a.pub!.phase === 'PLAYERS_SELECTING', 'მთხრობელმა გააგზავნა მინიშნება → PLAYERS_SELECTING');

  [a, b, c].filter(s => s !== stSeat).forEach(s => s.client.send({ type: 'SUBMIT_PLAYER_CARD', cardId: s.priv!.hand[0].id }));
  await waitFor(() => a.pub!.phase === 'VOTING', 12000);
  assert(a.pub!.phase === 'VOTING', 'ყველამ ჩააგდო ბარათი → VOTING');
  const reveal = a.pub!.revealedCards || [];
  assert(reveal.length === 3 && reveal.every((r: any) => r.ownerPlayerId === undefined), 'გამოვლენილი ბარათები ანონიმურია (privacy)');

  [a, b, c].filter(s => s !== stSeat).forEach(s => {
    const mine = a.pub!.submittedPlayerIds; void mine;
    const target = reveal.find((rc) => rc.cardId !== s.priv!.selectedCardId);
    if (target) s.client.send({ type: 'SUBMIT_VOTE', cardId: target.cardId });
  });
  await waitFor(() => a.pub!.phase === 'ROUND_RESULTS', 12000);
  assert(a.pub!.phase === 'ROUND_RESULTS', 'ყველამ მისცა ხმა → ROUND_RESULTS');
  assert(!!a.pub!.lastRoundScores && a.pub!.lastRoundScores.length === 3, 'რაუნდის ქულები დათვლილია');

  [a, b, c].forEach(s => s.client.send({ type: 'LEAVE_ROOM' }));
  console.log(`\n=== DIXIT FIRESTORE E2E: ${pass} Passed, ${fail} Failed ===`);
  process.exit(fail > 0 ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
