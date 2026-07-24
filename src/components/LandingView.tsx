/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PlusCircle, LogIn, Users, Sparkles, BookOpen, Shuffle } from 'lucide-react';
import { Language, RoomListItem } from '../types';
import { t } from '../i18n';

const AVATARS = ['🔮', '🌟', '🎨', '🎭', '🌙', '🐉', '🦄', '🦊', '🦉', '👁️', '🚀', '💎', '🌸', '⚡', '🏰'];

interface LandingViewProps {
  language: Language;
  onCreateRoom: (displayName: string, avatarUrl: string) => void;
  onJoinRoom: (roomCode: string, displayName: string, avatarUrl: string) => void;
  onOpenRules: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  language,
  onCreateRoom,
  onJoinRoom,
  onOpenRules
}) => {
  const [displayName, setDisplayName] = useState(() => {
    return localStorage.getItem('dreamclue_name') || 'მთხრობელი ' + Math.floor(Math.random() * 900 + 100);
  });
  const [avatarUrl, setAvatarUrl] = useState(() => {
    return localStorage.getItem('dreamclue_avatar') || '🔮';
  });
  const [joinCodeInput, setJoinCodeInput] = useState('');
  const [publicRooms, setPublicRooms] = useState<RoomListItem[]>([]);
  const [loadingRooms, setLoadingRooms] = useState(false);

  useEffect(() => {
    // Check URL parameters for direct join via link: ?room=CODE
    const urlParams = new URLSearchParams(window.location.search);
    const roomFromUrl = urlParams.get('room');
    if (roomFromUrl) {
      setJoinCodeInput(roomFromUrl.toUpperCase().trim());
    }

    // Fetch public rooms
    fetchPublicRooms();
  }, []);

  const fetchPublicRooms = async () => {
    // Serverless build: no public-room directory. Players join by code.
    setPublicRooms([]);
    setLoadingRooms(false);
  };

  const handleSaveProfile = (name: string, avatar: string) => {
    localStorage.setItem('dreamclue_name', name);
    localStorage.setItem('dreamclue_avatar', avatar);
  };

  const handleCreate = () => {
    const finalName = displayName.trim() || 'მთხრობელი';
    handleSaveProfile(finalName, avatarUrl);
    onCreateRoom(finalName, avatarUrl);
  };

  const handleJoin = (codeToJoin?: string) => {
    const targetCode = codeToJoin || joinCodeInput.trim();
    if (!targetCode) return;
    const finalName = displayName.trim() || 'მთხრობელი';
    handleSaveProfile(finalName, avatarUrl);
    onJoinRoom(targetCode.toUpperCase(), finalName, avatarUrl);
  };

  const randomizeName = () => {
    const kaNames = ['სიზმრის ოსტატი', 'მთვარის მოგზაური', 'ჯადოსნური მხატვარი', 'ფანტაზიორი', 'საიდუმლო მგზავრი', 'სიზმრის მცველი'];
    const enNames = ['Dream Master', 'Moon Traveler', 'Magic Painter', 'Fantasist', 'Mystic Passenger', 'Dream Keeper'];
    const list = language === 'ka' ? kaNames : enNames;
    const picked = list[Math.floor(Math.random() * list.length)] + ' ' + Math.floor(Math.random() * 90 + 10);
    setDisplayName(picked);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col justify-center px-4 py-8 max-w-5xl mx-auto">
      {/* Hero Header */}
      <div className="text-center mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border border-purple-500/30 text-purple-200 text-xs font-semibold shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" />
          <span>{t(language, 'tagline')}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-200 via-pink-300 to-indigo-100 bg-clip-text text-transparent drop-shadow-md">
          DreamClue
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
          {t(language, 'tagline')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Player Profile Customizer */}
        <div className="lg:col-span-5 bg-slate-900/80 border border-purple-500/20 rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-6">
          <h2 className="text-lg font-bold text-indigo-200 flex items-center gap-2 border-b border-indigo-500/20 pb-3">
            <span>{t(language, 'chooseAvatar')}</span>
          </h2>

          {/* Avatar Selector Grid */}
          <div className="grid grid-cols-5 gap-2">
            {AVATARS.map((av) => (
              <button
                key={av}
                onClick={() => setAvatarUrl(av)}
                className={`text-2xl p-2.5 rounded-xl border transition-all duration-200 ${
                  avatarUrl === av
                    ? 'bg-purple-600/40 border-purple-400 scale-110 shadow-lg shadow-purple-500/30'
                    : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 opacity-80'
                }`}
              >
                {av}
              </button>
            ))}
          </div>

          {/* Display Name Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex justify-between items-center">
              <span>{t(language, 'enterName')}</span>
              <button
                onClick={randomizeName}
                className="text-[11px] text-purple-400 hover:text-purple-300 flex items-center gap-1 font-normal"
              >
                <Shuffle className="w-3 h-3" /> Random
              </button>
            </label>
            <div className="relative">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                maxLength={20}
                className="w-full bg-slate-950/80 border border-indigo-500/30 rounded-xl px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                placeholder={t(language, 'enterName')}
              />
            </div>
          </div>

          {/* Quick How to Play Button */}
          <button
            onClick={onOpenRules}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-indigo-500/20 text-indigo-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>{t(language, 'howToPlay')}</span>
          </button>
        </div>

        {/* Right Column: Actions (Create / Join Room / Public Lobby) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Create Room Card */}
          <div className="bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-slate-900/80 border border-purple-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <PlusCircle className="w-32 h-32 text-purple-300" />
            </div>
            <div className="relative z-10 space-y-4">
              <div>
                <h3 className="text-xl font-black text-white">{t(language, 'createRoom')}</h3>
                <p className="text-xs text-purple-200/80 mt-1">
                  {language === 'ka'
                    ? 'შექმენით ოთახი, მოიწვიეთ მეგობრები და დააყენეთ თამაშის წესები'
                    : 'Create a private or public game room and invite your friends'}
                </p>
              </div>

              <button
                onClick={handleCreate}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <PlusCircle className="w-5 h-5" />
                <span>{t(language, 'createRoom')}</span>
              </button>
            </div>
          </div>

          {/* Join Room by Code */}
          <div className="bg-slate-900/80 border border-indigo-500/20 rounded-2xl p-6 shadow-xl backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <LogIn className="w-5 h-5 text-indigo-400" />
              <span>{t(language, 'joinRoom')}</span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={joinCodeInput}
                onChange={(e) => setJoinCodeInput(e.target.value.toUpperCase())}
                maxLength={6}
                placeholder={t(language, 'enterRoomCode')}
                className="flex-1 bg-slate-950/80 border border-indigo-500/30 rounded-xl px-4 py-3 font-mono text-center tracking-widest text-lg font-bold text-pink-300 uppercase focus:outline-none focus:border-pink-400"
              />
              <button
                onClick={() => handleJoin()}
                disabled={!joinCodeInput.trim()}
                className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>{t(language, 'join')}</span>
              </button>
            </div>
          </div>

          {/* Public Lobby List */}
          <div className="bg-slate-900/80 border border-indigo-500/20 rounded-2xl p-6 shadow-xl backdrop-blur-xl space-y-4">
            <div className="flex justify-between items-center border-b border-indigo-500/20 pb-3">
              <h3 className="text-base font-bold text-indigo-200 flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>{t(language, 'publicLobby')}</span>
              </h3>
              <button
                onClick={fetchPublicRooms}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
              >
                {loadingRooms ? '...' : 'განახლება'}
              </button>
            </div>

            {publicRooms.length === 0 ? (
              <p className="text-xs text-slate-400 italic py-2">{t(language, 'noPublicRooms')}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1">
                {publicRooms.map((rm) => (
                  <div
                    key={rm.roomId}
                    className="p-3 rounded-xl bg-slate-950/60 border border-indigo-500/20 hover:border-purple-500/40 flex justify-between items-center transition-all"
                  >
                    <div>
                      <p className="text-xs font-bold text-white">{rm.name}</p>
                      <p className="text-[11px] text-slate-400">
                        {t(language, 'host')}: {rm.hostName}
                      </p>
                    </div>
                    <button
                      onClick={() => handleJoin(rm.roomCode)}
                      className="px-3 py-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-500 text-white text-xs font-bold"
                    >
                      {rm.playerCount}/{rm.maxPlayers}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
