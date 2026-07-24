/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { i18n, t } from '../i18n';

interface RulesModalProps {
  language: Language;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ language, onClose }) => {
  const content = i18n[language].rulesContent;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full bg-slate-900 border border-purple-500/30 rounded-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col">
        <div className="flex justify-between items-center border-b border-indigo-500/20 pb-4 mb-4">
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span>{t(language, 'rules')} - DreamClue</span>
          </h3>

          <button
            onClick={onClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-5 pr-2">
          {content.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/60 border border-indigo-500/20 space-y-2"
            >
              <h4 className="text-sm font-bold text-pink-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>{item.title}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-indigo-500/20 text-center">
          <button
            onClick={onClose}
            className="px-8 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold shadow-md"
          >
            გასაგებია
          </button>
        </div>
      </div>
    </div>
  );
};
