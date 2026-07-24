/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { LandingView } from './components/LandingView';
import { LobbyView } from './components/LobbyView';
import { GameTable } from './components/GameTable';
import { GameOverView } from './components/GameOverView';
import { RulesModal } from './components/RulesModal';
import { AdminPanel } from './components/AdminPanel';
import {
  ChatMessage,
  ClientToServerAction,
  FloatingReaction,
  Language,
  PrivatePlayerState,
  PublicGameState,
  RoomSettings,
  ServerToClientMessage
} from './types';
import { soundEffects } from './utils/soundEffects';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('dreamclue_lang') as Language) || 'ka';
  });

  const [roomState, setRoomState] = useState<PublicGameState | null>(null);
  const [myState, setMyState] = useState<PrivatePlayerState | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [reactions, setReactions] = useState<FloatingReaction[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showRulesModal, setShowRulesModal] = useState<boolean>(false);
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);

  const wsRef = useRef<WebSocket | null>(null);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('dreamclue_lang', lang);
  };

  // WebSocket Connection Lifecycle
  useEffect(() => {
    let ws: WebSocket;
    let reconnectTimeout: NodeJS.Timeout;

    const connectWs = () => {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}`;
      ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        setIsConnected(true);
        // Attempt automatic reconnection if token exists
        const storedToken = localStorage.getItem('dreamclue_token');
        if (storedToken) {
          sendAction({ type: 'RECONNECT', reconnectToken: storedToken });
        }
      };

      ws.onmessage = (event) => {
        try {
          const msg: ServerToClientMessage = JSON.parse(event.data);
          switch (msg.type) {
            case 'ROOM_UPDATE':
              setRoomState(msg.state);
              setMyState(msg.myState);
              break;

            case 'CHAT_MESSAGE':
              setChatMessages((prev) => [...prev.slice(-90), msg.message]);
              break;

            case 'REACTION_EVENT':
              setReactions((prev) => [...prev, msg.reaction]);
              setTimeout(() => {
                setReactions((prev) => prev.filter((r) => r.id !== msg.reaction.id));
              }, 3000);
              break;

            case 'RECONNECT_SUCCESS':
              localStorage.setItem('dreamclue_token', msg.reconnectToken);
              break;

            case 'ERROR':
              setErrorMessage(msg.message);
              setTimeout(() => setErrorMessage(null), 4000);
              break;
          }
        } catch (err) {
          console.error('Error parsing WS message:', err);
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        // Attempt reconnect after 2 seconds
        reconnectTimeout = setTimeout(connectWs, 2000);
      };

      ws.onerror = (err) => {
        console.warn('WS error:', err);
      };
    };

    connectWs();

    return () => {
      if (ws) ws.close();
      if (reconnectTimeout) clearTimeout(reconnectTimeout);
    };
  }, []);

  const sendAction = (action: ClientToServerAction) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(action));
    }
  };

  // Room Actions
  const handleCreateRoom = (displayName: string, avatarUrl: string) => {
    sendAction({ type: 'CREATE_ROOM', displayName, avatarUrl });
  };

  const handleJoinRoom = (roomCode: string, displayName: string, avatarUrl: string) => {
    sendAction({ type: 'JOIN_ROOM', roomCode, displayName, avatarUrl });
  };

  const handleLeaveRoom = () => {
    sendAction({ type: 'LEAVE_ROOM' });
    localStorage.removeItem('dreamclue_token');
    setRoomState(null);
    setMyState(null);
  };

  const handleToggleReady = () => {
    sendAction({ type: 'TOGGLE_READY' });
  };

  const handleStartGame = () => {
    sendAction({ type: 'START_GAME' });
  };

  const handleUpdateSettings = (settings: Partial<RoomSettings>) => {
    sendAction({ type: 'UPDATE_SETTINGS', settings });
  };

  const handleSubmitClueAndCard = (clue: string, cardId: string) => {
    sendAction({ type: 'SUBMIT_CLUE_AND_CARD', clue, cardId });
  };

  const handleSubmitPlayerCard = (cardId: string) => {
    sendAction({ type: 'SUBMIT_PLAYER_CARD', cardId });
  };

  const handleSubmitVote = (cardId: string) => {
    sendAction({ type: 'SUBMIT_VOTE', cardId });
  };

  const handleSendChat = (message: string) => {
    sendAction({ type: 'SEND_CHAT', message });
  };

  const handleSendReaction = (emoji: string) => {
    sendAction({ type: 'SEND_REACTION', emoji });
  };

  const handleRestartGame = () => {
    sendAction({ type: 'START_GAME' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* Background Glow Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        roomState={roomState}
        onOpenRules={() => setShowRulesModal(true)}
        onOpenAdmin={() => setShowAdminPanel(true)}
        onLeaveRoom={roomState ? handleLeaveRoom : undefined}
        isConnected={isConnected}
      />

      {/* Toast Error Alert */}
      {errorMessage && (
        <div className="fixed top-20 right-4 z-50 bg-rose-900/90 border border-rose-500/50 text-rose-100 px-4 py-3 rounded-xl shadow-2xl text-xs font-bold animate-bounce">
          {errorMessage}
        </div>
      )}

      {/* Floating Emojis Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {reactions.map((react) => (
          <div
            key={react.id}
            className="absolute animate-float-up text-4xl"
            style={{
              left: `${Math.floor(Math.random() * 80 + 10)}%`,
              bottom: '10%'
            }}
          >
            {react.emoji}
          </div>
        ))}
      </div>

      {/* Main Content Router */}
      <main className="relative z-10 pb-8">
        {!roomState ? (
          <LandingView
            language={language}
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoom}
            onOpenRules={() => setShowRulesModal(true)}
          />
        ) : roomState.phase === 'LOBBY' ? (
          <LobbyView
            language={language}
            roomState={roomState}
            myState={myState!}
            onToggleReady={handleToggleReady}
            onStartGame={handleStartGame}
            onUpdateSettings={handleUpdateSettings}
            onSendChat={handleSendChat}
            onSendReaction={handleSendReaction}
            chatMessages={chatMessages}
          />
        ) : roomState.phase === 'GAME_OVER' ? (
          <GameOverView
            language={language}
            roomState={roomState}
            onRestartGame={handleRestartGame}
            onBackToLobby={handleLeaveRoom}
          />
        ) : (
          <GameTable
            language={language}
            roomState={roomState}
            myState={myState!}
            onSubmitClueAndCard={handleSubmitClueAndCard}
            onSubmitPlayerCard={handleSubmitPlayerCard}
            onSubmitVote={handleSubmitVote}
            onSendReaction={handleSendReaction}
          />
        )}
      </main>

      {/* Rules Modal */}
      {showRulesModal && (
        <RulesModal language={language} onClose={() => setShowRulesModal(false)} />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <AdminPanel language={language} onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  );
}
