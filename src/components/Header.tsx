/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Volume2, VolumeX, Globe, BookOpen, Shield, Copy, Check, LogOut, Wifi, WifiOff } from 'lucide-react';
import { Language, PublicGameState } from '../types';
import { t } from '../i18n';
import { soundEffects } from '../utils/soundEffects';
import { copyText, roomLink } from '../utils/clipboard';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  roomState: PublicGameState | null;
  onOpenRules: () => void;
  onOpenAdmin: () => void;
  onLeaveRoom?: () => void;
  isConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  roomState,
  onOpenRules,
  onOpenAdmin,
  onLeaveRoom,
  isConnected
}) => {
  const [soundEnabled, setSoundEnabled] = useState(soundEffects.enabled);
  const [copied, setCopied] = useState(false);

  const toggleSound = () => {
    soundEffects.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  const copyRoomLink = async () => {
    if (!roomState) return;
    const ok = await copyText(roomLink(roomState.roomCode));
    if (!ok) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/80 border-b border-indigo-500/20 px-3 sm:px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-0 shrink">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/30">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-black bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-100 bg-clip-text text-transparent leading-none tracking-wide truncate">
              DreamClue
            </h1>
            <p className="hidden sm:block text-[11px] font-medium text-purple-300/80 truncate">
              {t(language, 'gameSubTitle')}
            </p>
          </div>
        </div>

        {/* Room Code Badge (desktop, if in room) */}
        {roomState && (
          <div className="flex items-center gap-2 bg-indigo-950/60 border border-indigo-500/30 rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-200 order-3 sm:order-none w-full sm:w-auto justify-center">
            <span className="text-indigo-400">{t(language, 'roomCode')}:</span>
            <span className="font-mono text-sm tracking-wider text-pink-300">{roomState.roomCode}</span>
            <button
              onClick={copyRoomLink}
              title={t(language, 'copyLink')}
              className="ml-1 p-1 hover:bg-indigo-800/50 rounded transition-colors text-indigo-300"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end shrink-0">
          {/* Connection status indicator */}
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
              isConnected
                ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                : 'bg-amber-950/40 border-amber-500/30 text-amber-300 animate-pulse'
            }`}
          >
            {isConnected ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isConnected ? 'Online' : 'Reconnecting'}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-indigo-500/20 text-indigo-200 transition-colors"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => onLanguageChange(language === 'ka' ? 'en' : 'ka')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-950/50 hover:bg-indigo-900/50 border border-indigo-500/30 text-xs font-bold text-indigo-200 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-purple-300" />
            <span>{language === 'ka' ? 'KA' : 'EN'}</span>
          </button>

          {/* Rules button */}
          <button
            onClick={onOpenRules}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-indigo-500/20 text-indigo-200 transition-colors"
            title={t(language, 'rules')}
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Admin panel button */}
          <button
            onClick={onOpenAdmin}
            className="hidden sm:inline-flex p-2 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 transition-colors"
            title={t(language, 'adminPanel')}
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Leave room button */}
          {roomState && onLeaveRoom && (
            <button
              onClick={onLeaveRoom}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-rose-950/60 hover:bg-rose-900/60 border border-rose-500/30 text-rose-300 transition-colors"
              title={t(language, 'leaveRoom')}
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden lg:inline text-xs font-bold">{t(language, 'leaveRoom')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Room Code Badge (mobile, if in room) — copy is reachable on phones */}
      {roomState && (
        <div className="sm:hidden max-w-7xl mx-auto mt-2 flex items-center justify-center gap-2 bg-indigo-950/60 border border-indigo-500/30 rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-200">
          <span className="text-indigo-400">{t(language, 'roomCode')}:</span>
          <span className="font-mono text-sm tracking-wider text-pink-300">{roomState.roomCode}</span>
          <button
            onClick={copyRoomLink}
            title={t(language, 'copyLink')}
            className="ml-1 p-1 hover:bg-indigo-800/50 rounded transition-colors text-indigo-300"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}
    </header>
  );
};
