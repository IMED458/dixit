/**
 * Headless unit test for the transport-agnostic DixitRoom authority.
 * No Firestore — plays full games in-process.
 * Run: tsx server/tests/engine.test.ts
 */
import { DixitRoom } from '../../src/game/room';

let pass = 0, fail = 0;
const assert = (c: boolean, m: string) => { c ? (pass++, console.log('[PASS] ' + m)) : (fail++, console.log('[FAIL] ' + m)); };

function setup(n: number, settings?: any) {
  const uids = Array.from({ length: n }, (_, i) => 'u' + i);
  const room = DixitRoom.create(uids[0], 'P0', '🔮', undefined, settings);
  for (let i = 1; i < n; i++) room.join(uids[i], 'P' + i, '🌟');
  return { room, uids };
}

function playFull(n: number) {
  const { room, uids } = setup(n, { winningScore: 6, maxRounds: 30 });
  assert(room.data.players.length === n, `${n}p: ${n} მოთამაშე`);

  // Min 3 players enforced.
  const solo = DixitRoom.create('x', 'X', '🔮');
  assert(!!solo.startGame('x').error, 'startGame უარყოფილია <3 მოთამაშეზე');

  const start = room.startGame(uids[0]);
  assert(!start.error, `${n}p: თამაში დაიწყო`);
  assert(room.data.phase === 'STORYTELLER_SELECTING', `${n}p: STORYTELLER_SELECTING`);
  assert(uids.every((u) => (room.data.playerHands[u] || []).length === room.data.settings.handSize), `${n}p: ხელები დარიგდა (${room.data.settings.handSize})`);

  // Privacy: public state during STORYTELLER_SELECTING has no revealed cards.
  assert(room.getPublicState().revealedCards === undefined, `${n}p: ბარათები ჯერ არ ვლინდება`);

  const nonSt = () => room.data.players.filter((p) => p.id !== room.data.storytellerPlayerId);
  let guard = 0;
  let sawVotingPrivacy = false;
  while (room.data.phase !== 'GAME_OVER' && guard < 400) {
    guard++;
    const d = room.data;
    switch (d.phase) {
      case 'STORYTELLER_SELECTING': {
        const st = d.storytellerPlayerId!;
        room.submitClueAndCard(st, 'მინიშნება', d.playerHands[st][0].id);
        break;
      }
      case 'PLAYERS_SELECTING': {
        nonSt().forEach((p) => {
          if (!d.submissions.some((s) => s.playerId === p.id)) room.submitPlayerCard(p.id, d.playerHands[p.id][0].id);
        });
        break;
      }
      case 'VOTING': {
        // Revealed cards must not leak owner ids in the public view.
        const pubReveal = room.getPublicState().revealedCards || [];
        if (pubReveal.length > 0) {
          sawVotingPrivacy = pubReveal.every((c: any) => c.ownerPlayerId === undefined);
        }
        nonSt().forEach((p) => {
          if (!d.votes.some((v) => v.voterId === p.id)) {
            const mySub = d.submissions.find((s) => s.playerId === p.id);
            const target = d.shuffledRevealedCards.find((rc) => !mySub || rc.cardId !== mySub.cardId);
            if (target) room.submitVote(p.id, target.cardId);
          }
        });
        break;
      }
      case 'ROUND_RESULTS':
      case 'SCORING':
        room.onTimerExpired();
        break;
      default:
        room.onTimerExpired();
        break;
    }
  }

  assert(room.data.phase === 'GAME_OVER', `${n}p: თამაში დასრულდა (guard=${guard})`);
  assert(!!room.data.winnerPlayerId, `${n}p: გამარჯვებული განისაზღვრა`);
  assert(sawVotingPrivacy, `${n}p: ხმის მიცემისას ბარათების მფლობელი დამალულია`);
  const maxScore = Math.max(...room.data.players.map((p) => p.score));
  assert(maxScore >= 6, `${n}p: გამარჯვებულმა მიაღწია სამიზნე ქულას (${maxScore})`);
}

console.log('=== DIXIT ENGINE TESTS ===');
for (const n of [3, 4, 6]) playFull(n);

// Storyteller rotation across a round.
{
  const { room, uids } = setup(3);
  room.startGame(uids[0]);
  const st1 = room.data.storytellerPlayerId;
  room.submitClueAndCard(st1!, 'x', room.data.playerHands[st1!][0].id);
  room.data.players.filter((p) => p.id !== st1).forEach((p) => room.submitPlayerCard(p.id, room.data.playerHands[p.id][0].id));
  room.data.players.filter((p) => p.id !== st1).forEach((p) => {
    const target = room.data.shuffledRevealedCards.find((rc) => rc.ownerPlayerId !== p.id)!;
    room.submitVote(p.id, target.cardId);
  });
  room.onTimerExpired(); // ROUND_RESULTS -> next round
  assert(room.data.storytellerPlayerId !== st1, 'მთხრობელი შეიცვალა შემდეგ რაუნდში');
}

console.log(`\n=== SUMMARY: ${pass} Passed, ${fail} Failed ===`);
process.exit(fail > 0 ? 1 : 0);
