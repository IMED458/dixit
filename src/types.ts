/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ka' | 'en';

export type GamePhase =
  | 'LOBBY'
  | 'DEALING'
  | 'STORYTELLER_SELECTING'
  | 'PLAYERS_SELECTING'
  | 'REVEALING'
  | 'VOTING'
  | 'SCORING'
  | 'ROUND_RESULTS'
  | 'GAME_OVER';

export interface Player {
  id: string;
  displayName: string;
  avatarUrl: string;
  isHost: boolean;
  isReady: boolean;
  isConnected: boolean;
  isSpectator: boolean;
  seatNumber: number;
  score: number;
  reconnectToken: string;
  joinedAt: number;
}

export interface Card {
  id: string;
  url: string;
  thumbnailUrl: string;
  title?: string;
  tags?: string[];
  category?: string;
  provider: 'curated' | 'ai' | 'external' | 'demo';
  author?: string;
}

export interface RoomSettings {
  maxPlayers: number; // 3 - 8
  winningScore: number; // 10 - 50
  maxRounds: number; // 3 - 20
  handSize: number; // 5 - 8
  clueTimer: number; // seconds
  cardTimer: number; // seconds
  votingTimer: number; // seconds
  resultsTimer: number; // seconds
  language: Language;
  threePlayerVariant: boolean;
  publicRoom: boolean;
  allowSpectators: boolean;
  requireWrittenClue: boolean;
  imageProvider: 'curated' | 'all' | 'ai';
}

export interface CardSubmission {
  playerId: string;
  cardId: string;
  isStorytellerCard: boolean;
  revealPosition: number;
  submittedAt: number;
  autoSubmitted: boolean;
}

export interface CardVote {
  voterId: string;
  cardId: string;
  submittedAt: number;
  autoSubmitted: boolean;
}

export interface RoundScoreDetail {
  playerId: string;
  displayName: string;
  avatarUrl: string;
  isStoryteller: boolean;
  submittedCardId: string;
  votedCardId: string | null;
  correctGuessPoints: number;
  storytellerPoints: number;
  bonusVotePoints: number;
  totalRoundPoints: number;
  newTotalScore: number;
  votersWhoVotedForMyCard: string[];
}

export interface GameEventLog {
  id: string;
  timestamp: number;
  type: 'JOIN' | 'LEAVE' | 'CLUE' | 'SUBMIT' | 'VOTE' | 'PHASE' | 'CHAT' | 'REACTION' | 'SYSTEM';
  playerId?: string;
  playerName?: string;
  message: string;
  payload?: any;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  playerAvatar: string;
  message: string;
  timestamp: number;
  isSystem?: boolean;
}

export interface FloatingReaction {
  id: string;
  playerId: string;
  playerName: string;
  emoji: string;
  timestamp: number;
}

export interface PublicGameState {
  roomId: string;
  roomCode: string;
  roomName: string;
  hostPlayerId: string;
  phase: GamePhase;
  roundNumber: number;
  storytellerPlayerId: string | null;
  clue: string | null;
  players: Player[];
  settings: RoomSettings;
  // During VOTING / REVEALING, cards are revealed anonymously without owner IDs!
  revealedCards?: Array<{
    cardId: string;
    url: string;
    thumbnailUrl: string;
    position: number;
  }>;
  submissionsCount: number;
  targetSubmissionsCount: number;
  votesCount: number;
  targetVotesCount: number;
  submittedPlayerIds: string[];
  votedPlayerIds: string[];
  phaseEndsAt: number | null;
  serverTime: number;
  lastRoundScores: RoundScoreDetail[] | null;
  winnerPlayerId: string | null;
  usedCardCount: number;
  totalCardCount: number;
  gameHistoryCount: number;
}

export interface PrivatePlayerState {
  playerId: string;
  hand: Card[];
  selectedCardId: string | null;
  confirmedSubmission: boolean;
  selectedVoteCardId: string | null;
  confirmedVote: boolean;
  reconnectToken: string;
}

export interface RoomListItem {
  roomId: string;
  roomCode: string;
  name: string;
  hostName: string;
  playerCount: number;
  maxPlayers: number;
  phase: GamePhase;
  language: Language;
}

export type ClientToServerAction =
  | { type: 'CREATE_ROOM'; displayName: string; avatarUrl: string; roomName?: string; settings?: Partial<RoomSettings> }
  | { type: 'JOIN_ROOM'; roomCode: string; displayName: string; avatarUrl: string }
  | { type: 'RECONNECT'; reconnectToken: string }
  | { type: 'LEAVE_ROOM' }
  | { type: 'TOGGLE_READY' }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<RoomSettings> }
  | { type: 'UPDATE_PROFILE'; displayName: string; avatarUrl: string }
  | { type: 'START_GAME' }
  | { type: 'SUBMIT_CLUE_AND_CARD'; clue: string; cardId: string }
  | { type: 'SUBMIT_PLAYER_CARD'; cardId: string }
  | { type: 'SUBMIT_VOTE'; cardId: string }
  | { type: 'SEND_CHAT'; message: string }
  | { type: 'SEND_REACTION'; emoji: string }
  | { type: 'KICK_PLAYER'; targetPlayerId: string }
  | { type: 'TRANSFER_HOST'; targetPlayerId: string }
  | { type: 'RESTART_GAME' }
  | { type: 'LIST_PUBLIC_ROOMS' };

export type ServerToClientMessage =
  | { type: 'ROOM_UPDATE'; state: PublicGameState; myState: PrivatePlayerState }
  | { type: 'CHAT_MESSAGE'; message: ChatMessage }
  | { type: 'REACTION_EVENT'; reaction: FloatingReaction }
  | { type: 'ROOM_LIST'; rooms: RoomListItem[] }
  | { type: 'ERROR'; message: string; code?: string }
  | { type: 'RECONNECT_SUCCESS'; reconnectToken: string; roomCode: string }
  | { type: 'ADMIN_CARD_LIST'; cards: Card[] };
