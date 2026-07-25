/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, CheckCircle2, Award, Maximize2, X, Settings } from 'lucide-react';
import { Card, Language, PrivatePlayerState, PublicGameState, RoomSettings } from '../types';
import { t } from '../i18n';
import { soundEffects } from '../utils/soundEffects';
import { RoomSettingsModal } from './LobbyView';

interface GameTableProps {
  language: Language;
  roomState: PublicGameState;
  myState: PrivatePlayerState;
  onSubmitClueAndCard: (clue: string, cardId: string) => void;
  onSubmitPlayerCard: (cardId: string) => void;
  onSubmitVote: (cardId: string) => void;
  onUpdateSettings: (settings: Partial<RoomSettings>) => void;
  onSendReaction: (emoji: string) => void;
}

export const GameTable: React.FC<GameTableProps> = ({
  language,
  roomState,
  myState,
  onSubmitClueAndCard,
  onSubmitPlayerCard,
  onSubmitVote,
  onUpdateSettings,
  onSendReaction
}) => {
  const [clueInput, setClueInput] = useState('');
  const [selectedHandCardId, setSelectedHandCardId] = useState<string | null>(null);
  const [selectedVoteCardId, setSelectedVoteCardId] = useState<string | null>(null);
  const [previewCard, setPreviewCard] = useState<Card | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [showScoreboard, setShowScoreboard] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [localSettings, setLocalSettings] = useState<RoomSettings>(roomState.settings);

  const isStoryteller = roomState.storytellerPlayerId === myState.playerId;
  const storytellerObj = roomState.players.find((p) => p.id === roomState.storytellerPlayerId);
  const me = roomState.players.find((p) => p.id === myState.playerId);
  const isHost = me?.isHost || false;

  // Timer Countdown Logic
  useEffect(() => {
    if (!roomState.phaseEndsAt) return;

    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((roomState.phaseEndsAt! - Date.now()) / 1000));
      setTimeLeft(remaining);

      if (remaining <= 5 && remaining > 0) {
        soundEffects.playTimerTick();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [roomState.phaseEndsAt]);

  useEffect(() => {
    setLocalSettings(roomState.settings);
  }, [roomState.settings]);

  // Reset any stale local selection whenever the round or phase changes.
  // Without this, a card id selected in a previous round (already removed from
  // the hand) keeps the confirm button visible, and submitting it is rejected
  // by the engine ("you don't have that card") — making the button feel stuck.
  useEffect(() => {
    setSelectedHandCardId(null);
    setSelectedVoteCardId(null);
    setClueInput('');
  }, [roomState.roundNumber, roomState.phase]);

  // Guaranteed-visible fallback so a card never renders as a broken icon.
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, cardId: string) => {
    const img = e.currentTarget;
    if (img.dataset.fallback === '1') return;
    img.dataset.fallback = '1';
    img.src = `https://picsum.photos/seed/${encodeURIComponent(cardId)}/400/600`;
  };

  const selectedHandInHand = !!selectedHandCardId && myState.hand.some((c) => c.id === selectedHandCardId);

  const handleConfirmStorytellerSelection = () => {
    if (!selectedHandCardId || (roomState.settings.requireWrittenClue && !clueInput.trim())) return;
    soundEffects.playCardSelect();
    onSubmitClueAndCard(clueInput.trim(), selectedHandCardId);
  };

  const handleSaveSettings = () => {
    onUpdateSettings(localSettings);
    setShowSettingsModal(false);
  };

  const handleConfirmPlayerCard = () => {
    if (!selectedHandCardId) return;
    soundEffects.playCardSelect();
    onSubmitPlayerCard(selectedHandCardId);
  };

  const handleConfirmVote = () => {
    if (!selectedVoteCardId) return;
    soundEffects.playVoteSubmitted();
    onSubmitVote(selectedVoteCardId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 space-y-5 flex flex-col min-h-[calc(100vh-80px)]">
      {/* Top HUD Bar */}
      <div className="bg-slate-900/80 border border-purple-500/20 rounded-2xl p-4 shadow-xl backdrop-blur-xl flex flex-wrap justify-between items-center gap-3">
        {/* Round & Target */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-200 text-xs font-black">
            რაუნდი {roomState.roundNumber}
          </span>
          <span className="text-xs font-semibold text-slate-300">
            სამიზნე: <strong className="text-pink-300 font-bold">{roomState.settings.winningScore} ქულა</strong>
          </span>
        </div>

        {/* Active Storyteller Banner */}
        <div className="flex items-center gap-2 bg-slate-950/70 border border-indigo-500/30 rounded-xl px-3 py-1.5 shadow-inner">
          <span className="text-2xl">{storytellerObj?.avatarUrl || '🔮'}</span>
          <div>
            <span className="block text-[10px] text-slate-400 font-bold uppercase">
              {t(language, 'currentStoryteller')}
            </span>
            <span className="text-xs font-bold text-white">{storytellerObj?.displayName}</span>
          </div>
          {isStoryteller && (
            <span className="ml-2 px-2 py-0.5 rounded bg-pink-600 text-white text-[10px] font-black tracking-wider uppercase">
              {t(language, 'you')}
            </span>
          )}
        </div>

        {/* Timer Ring & Scoreboard Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-200 font-mono text-sm font-black">
            <Clock className={`w-4 h-4 ${timeLeft <= 10 ? 'text-rose-400 animate-bounce' : 'text-indigo-400'}`} />
            <span className={timeLeft <= 10 ? 'text-rose-400 font-bold' : ''}>{timeLeft}s</span>
          </div>

          <button
            onClick={() => setShowScoreboard(!showScoreboard)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 text-indigo-200 text-xs font-bold flex items-center gap-1.5"
          >
            <Award className="w-4 h-4 text-purple-400" />
            <span>რეიტინგი</span>
          </button>

          {isHost && (
            <button
              onClick={() => setShowSettingsModal(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 text-indigo-200 text-xs font-bold flex items-center gap-1.5"
            >
              <Settings className="w-4 h-4 text-purple-400" />
              <span>{t(language, 'settings')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Scoreboard Drawer overlay */}
      {showScoreboard && (
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
          <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-widest border-b border-indigo-500/20 pb-2 mb-3">
            ლიდერბორდი
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {roomState.players.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/60 border border-slate-800"
              >
                <span className="text-xl">{p.avatarUrl}</span>
                <div className="truncate">
                  <span className="block text-xs font-bold text-white truncate">{p.displayName}</span>
                  <span className="text-[11px] font-mono text-pink-300">{p.score} ქულა</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Center Stage */}
      <div className="flex-1 bg-gradient-to-b from-slate-900/90 via-indigo-950/60 to-slate-900/90 border border-indigo-500/20 rounded-3xl p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-center items-center relative overflow-hidden min-h-[360px]">
        
        {/* PHASE 1: STORYTELLER SELECTING */}
        {roomState.phase === 'STORYTELLER_SELECTING' && (
          <div className="w-full max-w-2xl text-center space-y-6">
            {isStoryteller ? (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-bold">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>{t(language, 'cluePrompt')}</span>
                </div>

                {roomState.settings.requireWrittenClue ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={clueInput}
                      onChange={(e) => setClueInput(e.target.value)}
                      maxLength={120}
                      placeholder={t(language, 'cluePlaceholder')}
                      className="w-full bg-slate-950/90 border-2 border-purple-500/40 focus:border-pink-400 rounded-2xl px-5 py-4 text-center font-bold text-lg text-pink-200 focus:outline-none shadow-xl"
                    />
                    <p className="text-[11px] text-slate-400">
                      რჩევა: მინიშნება არ უნდა იყოს არც ზედმეტად მარტივი და არც ზედმეტად რთული!
                    </p>
                  </div>
                ) : (
                  <p className="text-xs font-semibold text-slate-300">
                    {t(language, 'verbalClueNotice')}
                  </p>
                )}

                {selectedHandInHand && (!roomState.settings.requireWrittenClue || clueInput.trim()) && (
                  <button
                    onClick={handleConfirmStorytellerSelection}
                    className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-sm rounded-2xl shadow-xl shadow-purple-600/30 transform active:scale-95 transition-all"
                  >
                    {t(language, 'submitClueAndCard')}
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3 py-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-900/50 border border-purple-500/30 mx-auto flex items-center justify-center text-3xl animate-bounce">
                  {storytellerObj?.avatarUrl || '🔮'}
                </div>
                <h3 className="text-lg font-bold text-white">{storytellerObj?.displayName}</h3>
                <p className="text-sm text-purple-300 italic animate-pulse">
                  {t(language, 'phaseStorytellerSelecting')}...
                </p>
              </div>
            )}
          </div>
        )}

        {/* PHASE 2: PLAYERS SELECTING */}
        {roomState.phase === 'PLAYERS_SELECTING' && (
          <div className="w-full text-center space-y-6">
            {/* Display Clue Banner */}
            {roomState.settings.requireWrittenClue && (
              <div className="inline-block bg-slate-950/90 border-2 border-purple-500/40 rounded-2xl px-6 py-4 shadow-2xl max-w-2xl">
                <span className="block text-[11px] text-purple-400 font-bold uppercase tracking-wider">
                  {t(language, 'clueLabel')}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-pink-300 mt-1">
                  „{roomState.clue}“
                </h3>
              </div>
            )}

            {!isStoryteller ? (
              <div className="space-y-3">
                {myState.confirmedSubmission ? (
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold animate-pulse">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t(language, 'cardConfirmed')}</span>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs font-semibold text-slate-300 mb-3">
                      {t(language, 'selectCardForClue')}
                    </p>
                    {selectedHandInHand && (
                      <button
                        onClick={handleConfirmPlayerCard}
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                      >
                        {t(language, 'confirmCardSelection')}
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-2 py-4">
                <p className="text-xs font-semibold text-purple-200">
                  მოთამაშეები ირჩევენ ბარათებს...
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-pink-300">
                  <span>
                    არჩეულია: {roomState.submissionsCount - 1} / {roomState.targetSubmissionsCount - 1}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PHASE 3: REVEALING & VOTING */}
        {(roomState.phase === 'VOTING' || roomState.phase === 'REVEALING') && (
          <div className="w-full space-y-6">
            {/* Clue Banner */}
            {roomState.settings.requireWrittenClue && <div className="text-center">
              <div className="inline-block bg-slate-950/90 border border-purple-500/40 rounded-2xl px-6 py-3 shadow-xl">
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block">
                  {t(language, 'clueLabel')}
                </span>
                <span className="text-lg font-black text-pink-300">„{roomState.clue}“</span>
              </div>
            </div>}

            {/* Revealed Anonymous Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
              {roomState.revealedCards?.map((revCard) => {
                const isSelected = selectedVoteCardId === revCard.cardId;
                const isMyOwnSubmittedCard = myState.selectedCardId === revCard.cardId;

                return (
                  <div
                    key={revCard.cardId}
                    onClick={() => {
                      if (!isStoryteller && !isMyOwnSubmittedCard && !myState.confirmedVote) {
                        setSelectedVoteCardId(revCard.cardId);
                      }
                    }}
                    className={`relative group rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer w-36 h-52 sm:w-40 sm:h-56 ${
                      isSelected
                        ? 'border-pink-400 scale-105 shadow-2xl shadow-pink-500/50 ring-4 ring-pink-500/30'
                        : isMyOwnSubmittedCard
                        ? 'border-amber-500/50 opacity-80 cursor-not-allowed'
                        : 'border-indigo-500/30 hover:border-purple-400 hover:scale-102'
                    }`}
                  >
                    <img
                      src={revCard.thumbnailUrl || revCard.url}
                      alt="Revealed card"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => handleImgError(e, revCard.cardId)}
                      className="w-full h-full object-cover bg-slate-800"
                    />

                    {/* Preview button on card hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewCard({
                          id: revCard.cardId,
                          url: revCard.url,
                          thumbnailUrl: revCard.thumbnailUrl,
                          provider: 'curated'
                        });
                      }}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Badge for own card */}
                    {isMyOwnSubmittedCard && (
                      <div className="absolute bottom-2 left-2 right-2 bg-amber-950/90 text-amber-300 text-[10px] font-bold py-1 text-center rounded-lg border border-amber-500/40">
                        თქვენი ბარათი
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Voting Controls */}
            <div className="text-center pt-2">
              {!isStoryteller ? (
                myState.confirmedVote ? (
                  <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t(language, 'voteConfirmed')}</span>
                  </div>
                ) : (
                  selectedVoteCardId && (
                    <button
                      onClick={handleConfirmVote}
                      className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs rounded-2xl shadow-xl transition-all"
                    >
                      {t(language, 'confirmVote')}
                    </button>
                  )
                )
              ) : (
                <p className="text-xs text-purple-300 italic">{t(language, 'storytellerCantVote')}</p>
              )}
            </div>
          </div>
        )}

        {/* PHASE 4: SCORING / ROUND RESULTS OVERLAY */}
        {(roomState.phase === 'SCORING' || roomState.phase === 'ROUND_RESULTS') && (
          <div className="w-full space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-black text-pink-300">{t(language, 'roundResultsTitle')}</h3>
              <p className="text-xs text-slate-300 mt-1">{t(language, 'storytellerCardWas')}</p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {roomState.lastRoundScores?.map((sc) => (
                <div
                  key={sc.playerId}
                  className={`p-4 rounded-2xl border flex items-center justify-between ${
                    sc.isStoryteller
                      ? 'bg-purple-950/60 border-purple-400'
                      : 'bg-slate-950/60 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{sc.avatarUrl}</span>
                    <div>
                      <span className="font-bold text-sm text-white block">
                        {sc.displayName} {sc.isStoryteller && '(მთხრობელი)'}
                      </span>
                      <span className="text-xs text-slate-400">
                        {sc.correctGuessPoints > 0 && `+${sc.correctGuessPoints} გამოცნობა `}
                        {sc.storytellerPoints > 0 && `+${sc.storytellerPoints} მთხრობელი `}
                        {sc.bonusVotePoints > 0 && `+${sc.bonusVotePoints} ბლეფი `}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-mono font-black text-emerald-400">
                    +{sc.totalRoundPoints}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Player's Private Hand Drawer */}
      <div className="bg-slate-900/80 border border-purple-500/20 rounded-2xl p-4 shadow-xl backdrop-blur-xl space-y-3">
        <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-widest flex items-center gap-2">
          <span>{t(language, 'yourHand')}</span>
          <span className="text-[11px] font-mono text-purple-400">({myState.hand.length} ბარათი)</span>
        </h4>

        {/* Hand Cards Horizontal Scroll / Grid */}
        <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {myState.hand.map((card) => {
            const isSelected = selectedHandCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (roomState.phase === 'STORYTELLER_SELECTING' && isStoryteller) {
                    setSelectedHandCardId(card.id);
                  } else if (roomState.phase === 'PLAYERS_SELECTING' && !isStoryteller && !myState.confirmedSubmission) {
                    setSelectedHandCardId(card.id);
                  }
                }}
                className={`relative flex-shrink-0 w-28 h-40 sm:w-32 sm:h-44 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer group ${
                  isSelected
                    ? 'border-purple-400 scale-105 shadow-xl shadow-purple-500/40 ring-2 ring-purple-400/40'
                    : 'border-slate-800 hover:border-purple-500/40 hover:scale-102'
                }`}
              >
                <img
                  src={card.thumbnailUrl || card.url}
                  alt="Hand card"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => handleImgError(e, card.id)}
                  className="w-full h-full object-cover bg-slate-800"
                />

                {/* Card zoom icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewCard(card);
                  }}
                  className="absolute top-1.5 right-1.5 p-1 rounded bg-slate-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card Zoom Preview Modal */}
      {previewCard && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-lg w-full bg-slate-900 border border-purple-500/30 rounded-3xl p-4 shadow-2xl flex flex-col items-center">
            <button
              onClick={() => setPreviewCard(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={previewCard.url}
              alt="Preview card"
              referrerPolicy="no-referrer"
              onError={(e) => handleImgError(e, previewCard.id)}
              className="max-h-[70vh] rounded-2xl object-contain shadow-xl bg-slate-800"
            />
          </div>
        </div>
      )}

      {showSettingsModal && (
        <RoomSettingsModal
          language={language}
          settings={localSettings}
          onChange={setLocalSettings}
          onCancel={() => setShowSettingsModal(false)}
          onSave={handleSaveSettings}
          lockPlayerSetup
        />
      )}
    </div>
  );
};
