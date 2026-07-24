/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WebSocket } from 'ws';
import {
  Card,
  CardSubmission,
  CardVote,
  ChatMessage,
  FloatingReaction,
  GamePhase,
  Player,
  PrivatePlayerState,
  PublicGameState,
  RoomListItem,
  RoomSettings,
  RoundScoreDetail,
  ServerToClientMessage
} from '../src/types';
import { DEFAULT_CARDS } from '../src/data/defaultCards';
import { calculateRoundScores } from './scoring';

interface RoomInstance {
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
  usedCardIds: Set<string>;
  playerHands: Map<string, Card[]>; // playerId -> Card[]
  submissions: CardSubmission[];
  shuffledRevealedCards: Array<{
    cardId: string;
    url: string;
    thumbnailUrl: string;
    position: number;
    ownerPlayerId: string;
  }>;
  votes: CardVote[];
  lastRoundScores: RoundScoreDetail[] | null;
  winnerPlayerId: string | null;
  phaseStartedAt: number;
  phaseEndsAt: number | null;
  timerHandle: NodeJS.Timeout | null;
  chatMessages: ChatMessage[];
  gameHistoryCount: number;
}

export class RoomManager {
  private rooms: Map<string, RoomInstance> = new Map(); // roomCode -> RoomInstance
  private playerWsMap: Map<string, WebSocket> = new Map(); // playerId -> WebSocket
  private reconnectTokenMap: Map<string, { roomCode: string; playerId: string }> = new Map(); // token -> info
  private cardPool: Card[] = [...DEFAULT_CARDS];

  public addCardToPool(card: Card) {
    this.cardPool.unshift(card);
  }

  public getCardPool(): Card[] {
    return this.cardPool;
  }

  public registerPlayerWs(playerId: string, ws: WebSocket) {
    this.playerWsMap.set(playerId, ws);
  }

  public unregisterPlayerWs(playerId: string) {
    this.playerWsMap.delete(playerId);
  }

  public createRoom(
    displayName: string,
    avatarUrl: string,
    roomName?: string,
    customSettings?: Partial<RoomSettings>
  ): { roomCode: string; playerId: string; reconnectToken: string } {
    let code = this.generateRoomCode();
    while (this.rooms.has(code)) {
      code = this.generateRoomCode();
    }

    const playerId = `player_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const reconnectToken = `rec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const defaultSettings: RoomSettings = {
      maxPlayers: 8,
      winningScore: 30,
      maxRounds: 10,
      handSize: 6,
      clueTimer: 60,
      cardTimer: 60,
      votingTimer: 45,
      resultsTimer: 12,
      language: 'ka',
      threePlayerVariant: false,
      publicRoom: true,
      allowSpectators: true,
      imageProvider: 'all',
      ...customSettings
    };

    const hostPlayer: Player = {
      id: playerId,
      displayName: displayName || 'მთხრობელი 1',
      avatarUrl: avatarUrl || '🔮',
      isHost: true,
      isReady: true,
      isConnected: true,
      isSpectator: false,
      seatNumber: 1,
      score: 0,
      reconnectToken,
      joinedAt: Date.now()
    };

    const room: RoomInstance = {
      id: `room_${code}`,
      code,
      name: roomName || `DreamClue ოთახი #${code}`,
      hostPlayerId: playerId,
      phase: 'LOBBY',
      roundNumber: 0,
      storytellerPlayerId: null,
      clue: null,
      storytellerCardId: null,
      players: [hostPlayer],
      settings: defaultSettings,
      deck: this.shuffleArray([...this.cardPool]),
      usedCardIds: new Set(),
      playerHands: new Map(),
      submissions: [],
      shuffledRevealedCards: [],
      votes: [],
      lastRoundScores: null,
      winnerPlayerId: null,
      phaseStartedAt: Date.now(),
      phaseEndsAt: null,
      timerHandle: null,
      chatMessages: [],
      gameHistoryCount: 0
    };

    this.rooms.set(code, room);
    this.reconnectTokenMap.set(reconnectToken, { roomCode: code, playerId });

    return { roomCode: code, playerId, reconnectToken };
  }

  public joinRoom(
    roomCode: string,
    displayName: string,
    avatarUrl: string
  ): { playerId: string; reconnectToken: string } | { error: string } {
    const code = roomCode.toUpperCase().trim();
    const room = this.rooms.get(code);
    if (!room) {
      return { error: 'ოთახი ვერ მოიძებნა (Invalid Room Code)' };
    }

    if (room.players.length >= room.settings.maxPlayers) {
      return { error: 'ოთახი სავსეა (Room is full)' };
    }

    const playerId = `player_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const reconnectToken = `rec_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const newPlayer: Player = {
      id: playerId,
      displayName: displayName || `მოთამაშე ${room.players.length + 1}`,
      avatarUrl: avatarUrl || '🌟',
      isHost: false,
      isReady: false,
      isConnected: true,
      isSpectator: room.phase !== 'LOBBY', // join as spectator if game already started
      seatNumber: room.players.length + 1,
      score: 0,
      reconnectToken,
      joinedAt: Date.now()
    };

    room.players.push(newPlayer);
    this.reconnectTokenMap.set(reconnectToken, { roomCode: code, playerId });

    // System chat notification
    this.addSystemChatMessage(room, `${newPlayer.displayName} შემოუერთდა ოთახს`);

    this.broadcastRoomUpdate(code);
    return { playerId, reconnectToken };
  }

  public handleReconnect(reconnectToken: string): { roomCode: string; playerId: string } | null {
    const info = this.reconnectTokenMap.get(reconnectToken);
    if (!info) return null;

    const room = this.rooms.get(info.roomCode);
    if (!room) return null;

    const player = room.players.find((p) => p.id === info.playerId);
    if (player) {
      player.isConnected = true;
      this.broadcastRoomUpdate(info.roomCode);
      return info;
    }
    return null;
  }

  public handleDisconnect(playerId: string) {
    for (const room of this.rooms.values()) {
      const player = room.players.find((p) => p.id === playerId);
      if (player) {
        player.isConnected = false;
        this.addSystemChatMessage(room, `${player.displayName} გაითიშა...`);
        this.broadcastRoomUpdate(room.code);
        break;
      }
    }
  }

  public leaveRoom(playerId: string) {
    for (const room of this.rooms.values()) {
      const idx = room.players.findIndex((p) => p.id === playerId);
      if (idx !== -1) {
        const [leavingPlayer] = room.players.splice(idx, 1);
        this.addSystemChatMessage(room, `${leavingPlayer.displayName} დატოვა ოთახი`);

        // If host left, assign new host
        if (room.hostPlayerId === playerId && room.players.length > 0) {
          room.players[0].isHost = true;
          room.hostPlayerId = room.players[0].id;
          this.addSystemChatMessage(room, `${room.players[0].displayName} გახდა ახალი მასპინძელი`);
        }

        // Clean up empty room
        if (room.players.length === 0) {
          if (room.timerHandle) clearTimeout(room.timerHandle);
          this.rooms.delete(room.code);
        } else {
          this.broadcastRoomUpdate(room.code);
        }
        break;
      }
    }
  }

  public toggleReady(playerId: string) {
    for (const room of this.rooms.values()) {
      const player = room.players.find((p) => p.id === playerId);
      if (player && room.phase === 'LOBBY') {
        player.isReady = !player.isReady;
        this.broadcastRoomUpdate(room.code);
        break;
      }
    }
  }

  public updateSettings(playerId: string, newSettings: Partial<RoomSettings>) {
    for (const room of this.rooms.values()) {
      if (room.hostPlayerId === playerId && room.phase === 'LOBBY') {
        room.settings = { ...room.settings, ...newSettings };
        this.broadcastRoomUpdate(room.code);
        break;
      }
    }
  }

  public startGame(playerId: string) {
    for (const room of this.rooms.values()) {
      if (room.hostPlayerId === playerId && (room.phase === 'LOBBY' || room.phase === 'GAME_OVER')) {
        const activePlayers = room.players.filter((p) => !p.isSpectator);
        if (activePlayers.length < 3) {
          this.sendToPlayer(playerId, {
            type: 'ERROR',
            message: 'თამაშის დასაწყებად საჭიროა მინიმუმ 3 მოთამაშე!'
          });
          return;
        }

        // Reset scores & hands
        room.players.forEach((p) => {
          p.score = 0;
          p.isReady = true;
        });
        room.roundNumber = 1;
        room.deck = this.shuffleArray([...this.cardPool]);
        room.usedCardIds.clear();
        room.playerHands.clear();
        room.winnerPlayerId = null;
        room.lastRoundScores = null;

        // Assign initial Storyteller (first player)
        room.storytellerPlayerId = activePlayers[0].id;

        // Deal cards to each player
        this.dealCards(room, room.settings.handSize);

        room.phase = 'STORYTELLER_SELECTING';
        this.setPhaseTimer(room, room.settings.clueTimer, () => this.handleStorytellerTimeout(room));

        this.addSystemChatMessage(
          room,
          `თამაში დაიწყო! რაუნდი 1. მთხრობელია: ${this.getPlayerName(room, room.storytellerPlayerId)}`
        );
        this.broadcastRoomUpdate(room.code);
        break;
      }
    }
  }

  public submitClueAndCard(playerId: string, clue: string, cardId: string) {
    for (const room of this.rooms.values()) {
      if (
        room.phase === 'STORYTELLER_SELECTING' &&
        room.storytellerPlayerId === playerId
      ) {
        const hand = room.playerHands.get(playerId) || [];
        const cardIndex = hand.findIndex((c) => c.id === cardId);
        if (cardIndex === -1) {
          this.sendToPlayer(playerId, { type: 'ERROR', message: 'ეს ბარათი არ გაქვთ ხელში!' });
          return;
        }

        room.clue = clue.trim().substring(0, 120) || 'საიდუმლო სიზმარი';
        room.storytellerCardId = cardId;

        // Remove card from Storyteller's hand
        hand.splice(cardIndex, 1);
        room.playerHands.set(playerId, hand);

        // Add Storyteller submission
        room.submissions = [
          {
            playerId,
            cardId,
            isStorytellerCard: true,
            revealPosition: -1,
            submittedAt: Date.now(),
            autoSubmitted: false
          }
        ];

        // Transition to PLAYERS_SELECTING
        room.phase = 'PLAYERS_SELECTING';
        this.setPhaseTimer(room, room.settings.cardTimer, () => this.handlePlayersSelectingTimeout(room));

        this.addSystemChatMessage(room, `მთხრობელმა დაწერა მინიშნება: „${room.clue}“`);
        this.broadcastRoomUpdate(room.code);
        break;
      }
    }
  }

  public submitPlayerCard(playerId: string, cardId: string) {
    for (const room of this.rooms.values()) {
      if (
        room.phase === 'PLAYERS_SELECTING' &&
        playerId !== room.storytellerPlayerId
      ) {
        // Check if player already submitted
        const existingSubIndex = room.submissions.findIndex((s) => s.playerId === playerId);
        const hand = room.playerHands.get(playerId) || [];
        const cardIndex = hand.findIndex((c) => c.id === cardId);

        if (cardIndex === -1 && existingSubIndex === -1) {
          this.sendToPlayer(playerId, { type: 'ERROR', message: 'ეს ბარათი არ გაქვთ ხელში!' });
          return;
        }

        if (existingSubIndex !== -1) {
          // Player changing choice before confirmation
          const oldSub = room.submissions[existingSubIndex];
          // Return old card to hand
          const oldCard = this.cardPool.find((c) => c.id === oldSub.cardId);
          if (oldCard) hand.push(oldCard);
          room.submissions.splice(existingSubIndex, 1);
        }

        // Take card from hand
        const chosenCard = hand.find((c) => c.id === cardId);
        if (chosenCard) {
          const cIdx = hand.findIndex((c) => c.id === cardId);
          if (cIdx !== -1) hand.splice(cIdx, 1);
        }

        room.playerHands.set(playerId, hand);

        room.submissions.push({
          playerId,
          cardId,
          isStorytellerCard: false,
          revealPosition: -1,
          submittedAt: Date.now(),
          autoSubmitted: false
        });

        // Check if all non-storytellers have submitted
        const activeNonStorytellers = room.players.filter(
          (p) => !p.isSpectator && p.id !== room.storytellerPlayerId
        );

        if (room.submissions.length >= activeNonStorytellers.length + 1) {
          this.proceedToRevealing(room);
        } else {
          this.broadcastRoomUpdate(room.code);
        }
        break;
      }
    }
  }

  private proceedToRevealing(room: RoomInstance) {
    room.phase = 'REVEALING';

    // Shuffle submissions for anonymous reveal!
    const shuffledSubs = this.shuffleArray([...room.submissions]);
    room.shuffledRevealedCards = shuffledSubs.map((sub, index) => {
      sub.revealPosition = index;
      const cardObj = this.cardPool.find((c) => c.id === sub.cardId);
      return {
        cardId: sub.cardId,
        url: cardObj ? cardObj.url : 'https://picsum.photos/800/1000',
        thumbnailUrl: cardObj ? cardObj.thumbnailUrl : 'https://picsum.photos/300/400',
        position: index,
        ownerPlayerId: sub.playerId
      };
    });

    room.votes = [];

    // Automatically transition to VOTING phase
    room.phase = 'VOTING';
    this.setPhaseTimer(room, room.settings.votingTimer, () => this.handleVotingTimeout(room));

    this.addSystemChatMessage(room, 'ყველა ბარათი არეულია და გამოვლენილია! დაიწყო ხმის მიცემა.');
    this.broadcastRoomUpdate(room.code);
  }

  public submitVote(voterId: string, cardId: string) {
    for (const room of this.rooms.values()) {
      if (room.phase === 'VOTING' && voterId !== room.storytellerPlayerId) {
        // Prevent voting for own submitted card
        const mySub = room.submissions.find((s) => s.playerId === voterId);
        if (mySub && mySub.cardId === cardId) {
          this.sendToPlayer(voterId, {
            type: 'ERROR',
            message: 'საკუთარ ბარათზე ხმის მიცემა აკრძალულია!'
          });
          return;
        }

        const existingVoteIndex = room.votes.findIndex((v) => v.voterId === voterId);
        if (existingVoteIndex !== -1) {
          room.votes.splice(existingVoteIndex, 1);
        }

        room.votes.push({
          voterId,
          cardId,
          submittedAt: Date.now(),
          autoSubmitted: false
        });

        const activeVoters = room.players.filter(
          (p) => !p.isSpectator && p.id !== room.storytellerPlayerId
        );

        if (room.votes.length >= activeVoters.length) {
          this.proceedToScoring(room);
        } else {
          this.broadcastRoomUpdate(room.code);
        }
        break;
      }
    }
  }

  private proceedToScoring(room: RoomInstance) {
    room.phase = 'SCORING';

    const profiles = room.players.map((p) => ({
      id: p.id,
      displayName: p.displayName,
      avatarUrl: p.avatarUrl,
      score: p.score
    }));

    const roundScores = calculateRoundScores(
      room.storytellerPlayerId!,
      room.submissions,
      room.votes,
      profiles
    );

    // Apply scores to players
    roundScores.forEach((scoreDetail) => {
      const player = room.players.find((p) => p.id === scoreDetail.playerId);
      if (player) {
        player.score = scoreDetail.newTotalScore;
      }
    });

    room.lastRoundScores = roundScores;
    room.phase = 'ROUND_RESULTS';

    // Check game over conditions
    const winner = room.players.find((p) => p.score >= room.settings.winningScore);
    const maxRoundsReached = room.roundNumber >= room.settings.maxRounds;

    if (winner || maxRoundsReached) {
      // Game over
      const sorted = [...room.players].sort((a, b) => b.score - a.score);
      room.winnerPlayerId = sorted[0].id;
      
      this.setPhaseTimer(room, room.settings.resultsTimer, () => {
        room.phase = 'GAME_OVER';
        this.addSystemChatMessage(room, `🏆 თამაში დასრულდა! გამარჯვებულია: ${sorted[0].displayName}!`);
        this.broadcastRoomUpdate(room.code);
      });
    } else {
      // Continue to next round
      this.setPhaseTimer(room, room.settings.resultsTimer, () => this.startNextRound(room));
    }

    this.broadcastRoomUpdate(room.code);
  }

  private startNextRound(room: RoomInstance) {
    room.roundNumber += 1;
    room.submissions = [];
    room.votes = [];
    room.clue = null;
    room.storytellerCardId = null;
    room.shuffledRevealedCards = [];

    // Deal replacement cards so every active player returns to handSize
    this.dealCards(room, room.settings.handSize);

    // Rotate Storyteller
    const activePlayers = room.players.filter((p) => !p.isSpectator);
    const currentStorytellerIndex = activePlayers.findIndex(
      (p) => p.id === room.storytellerPlayerId
    );
    const nextIndex = (currentStorytellerIndex + 1) % activePlayers.length;
    room.storytellerPlayerId = activePlayers[nextIndex].id;

    room.phase = 'STORYTELLER_SELECTING';
    this.setPhaseTimer(room, room.settings.clueTimer, () => this.handleStorytellerTimeout(room));

    this.addSystemChatMessage(
      room,
      `რაუნდი ${room.roundNumber}. ახალი მთხრობელია: ${this.getPlayerName(room, room.storytellerPlayerId)}`
    );
    this.broadcastRoomUpdate(room.code);
  }

  // Auto Fallbacks on Timeout
  private handleStorytellerTimeout(room: RoomInstance) {
    if (room.phase !== 'STORYTELLER_SELECTING' || !room.storytellerPlayerId) return;

    const hand = room.playerHands.get(room.storytellerPlayerId) || [];
    if (hand.length > 0) {
      const randomCard = hand[0];
      const autoClues = [
        'საიდუმლო სიზმარი',
        'შორეული მოგონება',
        'უხილავი სამყარო',
        'ფერთა თამაში',
        'დროის მდინარე'
      ];
      const randomClue = autoClues[Math.floor(Math.random() * autoClues.length)];
      this.submitClueAndCard(room.storytellerPlayerId, randomClue, randomCard.id);
    }
  }

  private handlePlayersSelectingTimeout(room: RoomInstance) {
    if (room.phase !== 'PLAYERS_SELECTING') return;

    const activeNonStorytellers = room.players.filter(
      (p) => !p.isSpectator && p.id !== room.storytellerPlayerId
    );

    activeNonStorytellers.forEach((player) => {
      const hasSubmitted = room.submissions.some((s) => s.playerId === player.id);
      if (!hasSubmitted) {
        const hand = room.playerHands.get(player.id) || [];
        if (hand.length > 0) {
          const randomCard = hand[Math.floor(Math.random() * hand.length)];
          this.submitPlayerCard(player.id, randomCard.id);
        }
      }
    });

    if (room.submissions.length >= activeNonStorytellers.length + 1) {
      this.proceedToRevealing(room);
    }
  }

  private handleVotingTimeout(room: RoomInstance) {
    if (room.phase !== 'VOTING') return;

    const activeVoters = room.players.filter(
      (p) => !p.isSpectator && p.id !== room.storytellerPlayerId
    );

    activeVoters.forEach((player) => {
      const hasVoted = room.votes.some((v) => v.voterId === player.id);
      if (!hasVoted) {
        const mySub = room.submissions.find((s) => s.playerId === player.id);
        const validCardsToVote = room.shuffledRevealedCards.filter(
          (rc) => !mySub || rc.cardId !== mySub.cardId
        );
        if (validCardsToVote.length > 0) {
          const randomVote = validCardsToVote[Math.floor(Math.random() * validCardsToVote.length)];
          this.submitVote(player.id, randomVote.cardId);
        }
      }
    });

    this.proceedToScoring(room);
  }

  public sendChatMessage(playerId: string, messageText: string) {
    for (const room of this.rooms.values()) {
      const player = room.players.find((p) => p.id === playerId);
      if (player && messageText.trim()) {
        const msg: ChatMessage = {
          id: `msg_${Date.now()}_${Math.random()}`,
          playerId: player.id,
          playerName: player.displayName,
          playerAvatar: player.avatarUrl,
          message: messageText.trim().substring(0, 300),
          timestamp: Date.now()
        };
        room.chatMessages.push(msg);
        if (room.chatMessages.length > 100) room.chatMessages.shift();

        this.broadcastToRoom(room.code, { type: 'CHAT_MESSAGE', message: msg });
        break;
      }
    }
  }

  public sendReaction(playerId: string, emoji: string) {
    for (const room of this.rooms.values()) {
      const player = room.players.find((p) => p.id === playerId);
      if (player) {
        this.broadcastToRoom(room.code, {
          type: 'REACTION_EVENT',
          reaction: {
            id: `react_${Date.now()}_${Math.random()}`,
            playerId: player.id,
            playerName: player.displayName,
            emoji,
            timestamp: Date.now()
          }
        });
        break;
      }
    }
  }

  public getPublicList(): RoomListItem[] {
    const list: RoomListItem[] = [];
    for (const room of this.rooms.values()) {
      if (room.settings.publicRoom && room.phase === 'LOBBY') {
        const host = room.players.find((p) => p.id === room.hostPlayerId);
        list.push({
          roomId: room.id,
          roomCode: room.code,
          name: room.name,
          hostName: host ? host.displayName : 'Unknown',
          playerCount: room.players.length,
          maxPlayers: room.settings.maxPlayers,
          phase: room.phase,
          language: room.settings.language
        });
      }
    }
    return list;
  }

  // Private Helper Methods
  private dealCards(room: RoomInstance, targetHandSize: number) {
    room.players.forEach((player) => {
      const currentHand = room.playerHands.get(player.id) || [];
      const needed = targetHandSize - currentHand.length;

      for (let i = 0; i < needed; i++) {
        if (room.deck.length === 0) {
          // Reshuffle deck from card pool excluding currently held cards
          const currentlyHeldIds = new Set<string>();
          for (const h of room.playerHands.values()) {
            h.forEach((c) => currentlyHeldIds.add(c.id));
          }
          const freshCards = this.cardPool.filter((c) => !currentlyHeldIds.has(c.id));
          room.deck = this.shuffleArray([...freshCards]);
        }

        if (room.deck.length > 0) {
          const drawnCard = room.deck.pop()!;
          currentHand.push(drawnCard);
          room.usedCardIds.add(drawnCard.id);
        }
      }

      room.playerHands.set(player.id, currentHand);
    });
  }

  private setPhaseTimer(room: RoomInstance, durationSeconds: number, callback: () => void) {
    if (room.timerHandle) clearTimeout(room.timerHandle);
    room.phaseStartedAt = Date.now();
    room.phaseEndsAt = Date.now() + durationSeconds * 1000;

    room.timerHandle = setTimeout(() => {
      callback();
    }, durationSeconds * 1000);
  }

  private addSystemChatMessage(room: RoomInstance, text: string) {
    const msg: ChatMessage = {
      id: `sys_${Date.now()}_${Math.random()}`,
      playerId: 'system',
      playerName: 'DreamClue Bot',
      playerAvatar: '🔮',
      message: text,
      timestamp: Date.now(),
      isSystem: true
    };
    room.chatMessages.push(msg);
  }

  private getPlayerName(room: RoomInstance, id: string | null): string {
    if (!id) return '';
    const p = room.players.find((pl) => pl.id === id);
    return p ? p.displayName : 'Unknown';
  }

  private generateRoomCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  private shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  public broadcastRoomUpdate(roomCode: string) {
    const room = this.rooms.get(roomCode);
    if (!room) return;

    const publicState: PublicGameState = {
      roomId: room.id,
      roomCode: room.code,
      roomName: room.name,
      hostPlayerId: room.hostPlayerId,
      phase: room.phase,
      roundNumber: room.roundNumber,
      storytellerPlayerId: room.storytellerPlayerId,
      clue: room.clue,
      players: room.players,
      settings: room.settings,
      revealedCards:
        room.phase === 'VOTING' || room.phase === 'SCORING' || room.phase === 'ROUND_RESULTS'
          ? room.shuffledRevealedCards.map((rc) => ({
              cardId: rc.cardId,
              url: rc.url,
              thumbnailUrl: rc.thumbnailUrl,
              position: rc.position
            }))
          : undefined,
      submissionsCount: room.submissions.length,
      targetSubmissionsCount: room.players.filter((p) => !p.isSpectator).length,
      votesCount: room.votes.length,
      targetVotesCount: room.players.filter(
        (p) => !p.isSpectator && p.id !== room.storytellerPlayerId
      ).length,
      submittedPlayerIds: room.submissions.map((s) => s.playerId),
      votedPlayerIds: room.votes.map((v) => v.voterId),
      phaseEndsAt: room.phaseEndsAt,
      serverTime: Date.now(),
      lastRoundScores: room.lastRoundScores,
      winnerPlayerId: room.winnerPlayerId,
      usedCardCount: room.usedCardIds.size,
      totalCardCount: this.cardPool.length,
      gameHistoryCount: room.gameHistoryCount
    };

    room.players.forEach((player) => {
      const myHand = room.playerHands.get(player.id) || [];
      const mySub = room.submissions.find((s) => s.playerId === player.id);
      const myVote = room.votes.find((v) => v.voterId === player.id);

      const privateState: PrivatePlayerState = {
        playerId: player.id,
        hand: myHand,
        selectedCardId: mySub ? mySub.cardId : null,
        confirmedSubmission: !!mySub,
        selectedVoteCardId: myVote ? myVote.cardId : null,
        confirmedVote: !!myVote,
        reconnectToken: player.reconnectToken
      };

      this.sendToPlayer(player.id, {
        type: 'ROOM_UPDATE',
        state: publicState,
        myState: privateState
      });
    });
  }

  private broadcastToRoom(roomCode: string, msg: ServerToClientMessage) {
    const room = this.rooms.get(roomCode);
    if (!room) return;
    room.players.forEach((p) => {
      this.sendToPlayer(p.id, msg);
    });
  }

  private sendToPlayer(playerId: string, msg: ServerToClientMessage) {
    const ws = this.playerWsMap.get(playerId);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  }
}

export const roomManager = new RoomManager();
