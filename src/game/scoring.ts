/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CardSubmission, CardVote, RoundScoreDetail } from '../types';

export interface PlayerProfile {
  id: string;
  displayName: string;
  avatarUrl: string;
  score: number;
}

export function calculateRoundScores(
  storytellerId: string,
  submissions: CardSubmission[],
  votes: CardVote[],
  players: PlayerProfile[]
): RoundScoreDetail[] {
  const cardOwnerMap = new Map<string, string>();
  submissions.forEach((sub) => { cardOwnerMap.set(sub.cardId, sub.playerId); });

  const storytellerSub = submissions.find((s) => s.playerId === storytellerId);
  const storytellerCardId = storytellerSub ? storytellerSub.cardId : null;

  const correctVoters = votes.filter((v) => v.voterId !== storytellerId && v.cardId === storytellerCardId);

  const nonStorytellers = players.filter((p) => p.id !== storytellerId);
  const totalNonStorytellersCount = nonStorytellers.length;
  const correctCount = correctVoters.length;

  const everyoneGuessed = totalNonStorytellersCount > 0 && correctCount === totalNonStorytellersCount;
  const nobodyGuessed = correctCount === 0;

  const votesReceivedByPlayer = new Map<string, string[]>();
  players.forEach((p) => votesReceivedByPlayer.set(p.id, []));

  votes.forEach((v) => {
    const cardOwnerId = cardOwnerMap.get(v.cardId);
    if (cardOwnerId && cardOwnerId !== v.voterId) {
      const voterObj = players.find((p) => p.id === v.voterId);
      const voterName = voterObj ? voterObj.displayName : v.voterId;
      const currentList = votesReceivedByPlayer.get(cardOwnerId) || [];
      currentList.push(voterName);
      votesReceivedByPlayer.set(cardOwnerId, currentList);
    }
  });

  return players.map((player) => {
    const isStoryteller = player.id === storytellerId;
    const mySub = submissions.find((s) => s.playerId === player.id);
    const myVote = votes.find((v) => v.voterId === player.id);

    let storytellerPoints = 0;
    let correctGuessPoints = 0;
    let bonusVotePoints = 0;

    if (isStoryteller) {
      if (!everyoneGuessed && !nobodyGuessed) storytellerPoints = 3;
    } else {
      if (everyoneGuessed || nobodyGuessed) {
        correctGuessPoints = 2;
      } else {
        const guessedRight = myVote && myVote.cardId === storytellerCardId;
        if (guessedRight) correctGuessPoints = 3;
      }
      const votersForMe = votesReceivedByPlayer.get(player.id) || [];
      bonusVotePoints = votersForMe.length;
    }

    const totalRoundPoints = storytellerPoints + correctGuessPoints + bonusVotePoints;
    const newTotalScore = player.score + totalRoundPoints;

    return {
      playerId: player.id,
      displayName: player.displayName,
      avatarUrl: player.avatarUrl,
      isStoryteller,
      submittedCardId: mySub ? mySub.cardId : '',
      votedCardId: myVote ? myVote.cardId : null,
      correctGuessPoints,
      storytellerPoints,
      bonusVotePoints,
      totalRoundPoints,
      newTotalScore,
      votersWhoVotedForMyCard: votesReceivedByPlayer.get(player.id) || [],
    };
  });
}
