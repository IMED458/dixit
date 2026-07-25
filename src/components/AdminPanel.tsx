/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Shield, Plus } from 'lucide-react';
import { Card, Language } from '../types';
import { t } from '../i18n';
import { DEFAULT_CARDS } from '../data/defaultCards';

interface AdminPanelProps {
  language: Language;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ language, onClose }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loadingCards, setLoadingCards] = useState(false);
  const [customUrl, setCustomUrl] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    // Serverless build: the curated deck ships with the client.
    setCards(DEFAULT_CARDS);
    setLoadingCards(false);
  };

  const handleAddCustomCard = () => {
    if (!customUrl.trim()) return;
    const newCard: Card = {
      id: `custom_${Date.now()}`,
      url: customUrl.trim(),
      thumbnailUrl: customUrl.trim(),
      provider: 'curated',
      tags: ['custom']
    };
    setCards([newCard, ...cards]);
    setCustomUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full bg-slate-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl max-h-[90vh] flex flex-col space-y-5">
        <div className="flex justify-between items-center border-b border-indigo-500/20 pb-4">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            <span>{t(language, 'adminPanel')}</span>
          </h3>

          <button
            onClick={onClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Custom URL Card Bar */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder={t(language, 'imageUrl')}
            className="flex-1 bg-slate-950 border border-indigo-500/30 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-purple-400"
          />
          <button
            onClick={handleAddCustomCard}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-indigo-200 border border-indigo-500/30 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>{t(language, 'addCard')}</span>
          </button>
        </div>

        {/* Cards Library Grid */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
            {t(language, 'cardLibrary')} ({cards.length} ბარათი)
          </h4>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {cards.map((c) => (
              <div
                key={c.id}
                className="relative rounded-xl overflow-hidden border border-slate-800 aspect-[3/4] group bg-slate-950"
              >
                <img
                  src={c.thumbnailUrl || c.url}
                  alt="Card"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallback === '1') return;
                    img.dataset.fallback = '1';
                    img.src = `https://picsum.photos/seed/${encodeURIComponent(c.id)}/400/600`;
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-1 right-1 bg-slate-950/80 rounded px-1 py-0.5 text-[9px] font-mono text-purple-300 truncate text-center">
                  {c.provider}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
