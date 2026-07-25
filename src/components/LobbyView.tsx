/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, CheckCircle2, Crown, Copy, Check, Settings, UserMinus, ShieldAlert, MessageSquare, Send, Smile } from 'lucide-react';
import { ChatMessage, Language, PrivatePlayerState, PublicGameState, RoomSettings } from '../types';
import { t } from '../i18n';
import { copyToClipboard } from '../utils/clipboard';

interface LobbyViewProps {
  language: Language;
  roomState: PublicGameState;
  myState: PrivatePlayerState;
  onToggleReady: () => void;
  onStartGame: () => void;
  onUpdateSettings: (settings: Partial<RoomSettings>) => void;
  onSendChat: (message: string) => void;
  onSendReaction: (emoji: string) => void;
  chatMessages: ChatMessage[];
}

const EMOJIS = ['🎨', '☁️', '👁️', '✨', '🔮', '🚀', '🏆', '🔥', '👑', '🎉'];

export const LobbyView: React.FC<LobbyViewProps> = ({
  language,
  roomState,
  myState,
  onToggleReady,
  onStartGame,
  onUpdateSettings,
  onSendChat,
  onSendReaction,
  chatMessages
}) => {
  const [copied, setCopied] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [localSettings, setLocalSettings] = useState<RoomSettings>(roomState.settings);

  const me = roomState.players.find((p) => p.id === myState.playerId);
  const isHost = me?.isHost || false;
  const activePlayers = roomState.players.filter((p) => !p.isSpectator);
  const canStart = isHost && activePlayers.length >= 3;

  const copyLink = async () => {
    const url = `${window.location.origin}?room=${roomState.roomCode}`;
    const ok = await copyToClipboard(url);
    if (!ok) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveSettings = () => {
    onUpdateSettings(localSettings);
    setShowSettingsModal(false);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    onSendChat(chatInput);
    setChatInput('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* Lobby Banner & Room Code */}
      <div className="bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-slate-900/80 border border-purple-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">
            {t(language, 'phaseLobby')}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">{roomState.roomName}</h2>
          <p className="text-xs text-slate-300 mt-1">
            {t(language, 'playersCount')}: {activePlayers.length} / {roomState.settings.maxPlayers}
          </p>
        </div>

        {/* Room Code Card & Copy Button */}
        <div className="flex items-center gap-3 bg-slate-950/80 border border-indigo-500/40 rounded-xl p-3 shadow-inner">
          <div className="text-right">
            <span className="block text-[10px] text-slate-400 font-bold uppercase">{t(language, 'roomCode')}</span>
            <span className="text-2xl font-mono font-black text-pink-300 tracking-wider">{roomState.roomCode}</span>
          </div>
          <button
            onClick={copyLink}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? t(language, 'linkCopied') : t(language, 'copyLink')}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Players Grid (Left 8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-indigo-200 flex items-center gap-2">
              <span>{t(language, 'playersCount')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 font-mono border border-purple-500/30">
                {activePlayers.length}/{roomState.settings.maxPlayers}
              </span>
            </h3>

            {isHost && (
              <button
                onClick={() => setShowSettingsModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 text-indigo-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Settings className="w-4 h-4 text-purple-400" />
                <span>{t(language, 'settings')}</span>
              </button>
            )}
          </div>

          {/* Players Seats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {roomState.players.map((p) => (
              <div
                key={p.id}
                className={`relative rounded-2xl p-4 border transition-all duration-300 flex flex-col items-center text-center ${
                  p.id === myState.playerId
                    ? 'bg-gradient-to-b from-purple-900/50 to-indigo-950/60 border-purple-400 shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/70 border-indigo-500/20'
                }`}
              >
                {/* Host Crown */}
                {p.isHost && (
                  <div className="absolute -top-3 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-md">
                    <Crown className="w-4 h-4 fill-current" />
                  </div>
                )}

                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-indigo-500/30 flex items-center justify-center text-3xl shadow-inner mt-1 mb-2">
                  {p.avatarUrl}
                </div>

                {/* Name */}
                <span className="text-sm font-bold text-white truncate max-w-[120px]">
                  {p.displayName} {p.id === myState.playerId && `(${t(language, 'you')})`}
                </span>

                {/* Status Badge */}
                <div className="mt-2">
                  {p.isReady ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3" /> {t(language, 'ready')}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[11px] font-bold">
                      {t(language, 'notReady')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Bar */}
          <div className="bg-slate-900/80 border border-purple-500/20 rounded-2xl p-5 backdrop-blur-xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={onToggleReady}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all transform active:scale-95 ${
                me?.isReady
                  ? 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>{me?.isReady ? t(language, 'notReady') : t(language, 'ready')}</span>
            </button>

            {isHost ? (
              <button
                onClick={onStartGame}
                disabled={!canStart}
                className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-black text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{t(language, 'startGame')}</span>
              </button>
            ) : (
              <p className="text-xs text-indigo-300 italic animate-pulse">
                {t(language, 'waitingForHost')}
              </p>
            )}
          </div>
        </div>

        {/* Chat & Reactions Column (Right 4 Cols) */}
        <div className="lg:col-span-4 bg-slate-900/80 border border-indigo-500/20 rounded-2xl p-5 backdrop-blur-xl flex flex-col h-[500px]">
          <div className="border-b border-indigo-500/20 pb-3 flex justify-between items-center">
            <h3 className="text-sm font-bold text-indigo-200 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span>{t(language, 'chat')}</span>
            </h3>

            {/* Quick Emoji Reaction Buttons */}
            <div className="flex gap-1 overflow-x-auto max-w-[150px] no-scrollbar">
              {EMOJIS.slice(0, 4).map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => onSendReaction(emoji)}
                  className="hover:scale-125 transition-transform text-sm"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto py-3 space-y-2 pr-1 text-xs">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded-xl ${
                  msg.isSystem
                    ? 'bg-purple-950/40 text-purple-300 border border-purple-500/20 italic'
                    : 'bg-slate-950/60 text-slate-200 border border-slate-800'
                }`}
              >
                {!msg.isSystem && (
                  <span className="font-bold text-pink-300 mr-1.5">{msg.playerName}:</span>
                )}
                <span>{msg.message}</span>
              </div>
            ))}
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSendChat} className="pt-2 flex gap-2 border-t border-indigo-500/20">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder={t(language, 'typeMessage')}
              className="flex-1 bg-slate-950 border border-indigo-500/30 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-400"
            />
            <button
              type="submit"
              className="p-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Room Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/30 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-indigo-500/20 pb-3">
              {t(language, 'settings')}
            </h3>

            <div className="space-y-4 text-xs font-semibold text-slate-300">
              {/* Winning Score */}
              <div className="space-y-1">
                <label>{t(language, 'winningScore')}: {localSettings.winningScore} pts</label>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={localSettings.winningScore}
                  onChange={(e) => setLocalSettings({ ...localSettings, winningScore: Number(e.target.value) })}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Clue Timer */}
              <div className="space-y-1">
                <label>{t(language, 'clueTimer')}: {localSettings.clueTimer}s</label>
                <input
                  type="range"
                  min="30"
                  max="120"
                  step="15"
                  value={localSettings.clueTimer}
                  onChange={(e) => setLocalSettings({ ...localSettings, clueTimer: Number(e.target.value) })}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Card Timer */}
              <div className="space-y-1">
                <label>{t(language, 'cardTimer')}: {localSettings.cardTimer}s</label>
                <input
                  type="range"
                  min="30"
                  max="120"
                  step="15"
                  value={localSettings.cardTimer}
                  onChange={(e) => setLocalSettings({ ...localSettings, cardTimer: Number(e.target.value) })}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* Voting Timer */}
              <div className="space-y-1">
                <label>{t(language, 'votingTimer')}: {localSettings.votingTimer}s</label>
                <input
                  type="range"
                  min="20"
                  max="90"
                  step="10"
                  value={localSettings.votingTimer}
                  onChange={(e) => setLocalSettings({ ...localSettings, votingTimer: Number(e.target.value) })}
                  className="w-full accent-purple-500"
                />
              </div>

              {/* 3-player variant */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span>{t(language, 'threePlayerVariant')}</span>
                <input
                  type="checkbox"
                  checked={localSettings.threePlayerVariant}
                  onChange={(e) => setLocalSettings({ ...localSettings, threePlayerVariant: e.target.checked })}
                  className="w-4 h-4 accent-purple-500 rounded"
                />
              </div>

              {/* Public room */}
              <div className="flex items-center justify-between">
                <span>{t(language, 'publicRoomLabel')}</span>
                <input
                  type="checkbox"
                  checked={localSettings.publicRoom}
                  onChange={(e) => setLocalSettings({ ...localSettings, publicRoom: e.target.checked })}
                  className="w-4 h-4 accent-purple-500 rounded"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-indigo-500/20">
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
              >
                გაუქმება
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold shadow-md"
              >
                {t(language, 'saveSettings')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
