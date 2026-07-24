/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Award, RotateCcw, Home, Share2 } from 'lucide-react';
import { Language, PublicGameState } from '../types';
import { t } from '../i18n';
import { soundEffects } from '../utils/soundEffects';

interface GameOverViewProps {
  language: Language;
  roomState: PublicGameState;
  onRestartGame: () => void;
  onBackToLobby: () => void;
}

export const GameOverView: React.FC<GameOverViewProps> = ({
  language,
  roomState,
  onRestartGame,
  onBackToLobby
}) => {
  const sortedPlayers = [...roomState.players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];

  useEffect(() => {
    soundEffects.playVictoryFanfare();

    // Trigger canvas-confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.warn('Confetti fail', err);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* Winner Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-amber-500 via-purple-600 to-pink-500 text-white shadow-2xl shadow-purple-500/40 animate-bounce">
          <Trophy className="w-16 h-16" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-amber-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
          {t(language, 'congratulations')}
        </h2>

        <div className="inline-block bg-slate-900/90 border-2 border-purple-500/40 rounded-3xl px-8 py-4 shadow-2xl">
          <span className="text-3xl mr-2">{winner?.avatarUrl}</span>
          <span className="text-2xl font-black text-white">{winner?.displayName}</span>
          <span className="block text-xs font-mono font-bold text-pink-300 mt-1">
            {winner?.score} ქულა
          </span>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-slate-900/80 border border-purple-500/20 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-4">
        <h3 className="text-sm font-bold text-indigo-200 uppercase tracking-widest border-b border-indigo-500/20 pb-3">
          {t(language, 'finalLeaderboard')}
        </h3>

        <div className="space-y-3">
          {sortedPlayers.map((player, idx) => (
            <div
              key={player.id}
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                idx === 0
                  ? 'bg-gradient-to-r from-amber-950/60 to-purple-950/60 border-amber-500/40'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-lg font-black text-slate-400 w-6">#{idx + 1}</span>
                <span className="text-2xl">{player.avatarUrl}</span>
                <div>
                  <span className="font-bold text-sm text-white block">{player.displayName}</span>
                  {idx === 0 && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 font-bold">
                      <Award className="w-3 h-3" /> {t(language, 'awards.masterStoryteller')}
                    </span>
                  )}
                </div>
              </div>

              <span className="text-lg font-mono font-black text-pink-300">{player.score} ქულა</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onRestartGame}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          <span>{t(language, 'playAgain')}</span>
        </button>

        <button
          onClick={onBackToLobby}
          className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-indigo-500/30 flex items-center justify-center gap-2 transition-all"
        >
          <Home className="w-5 h-5" />
          <span>{t(language, 'backToLobby')}</span>
        </button>
      </div>
    </div>
  );
};
