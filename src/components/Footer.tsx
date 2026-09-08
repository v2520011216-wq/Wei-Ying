import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/cvData';
import { ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-10 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="font-serif-academic font-bold text-white text-base">
            {personalInfo.nameZh}
            <span className="font-sans font-normal text-stone-400 ml-2 text-sm">
              {personalInfo.nameEn}
            </span>
          </div>
          <span className="hidden sm:inline text-stone-600">|</span>
          <div className="text-xs text-stone-400">
            {lang === 'zh' 
              ? '國立臺灣大學歷史學系 · 婦女與性別研究學程' 
              : 'NTU Department of History · Women’s and Gender Studies'}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-stone-400">
          <span>{lang === 'zh' ? '申請目標：國立臺灣大學建築與城鄉研究所' : 'Candidate: NTU Building and Planning'}</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-300 hover:text-white p-1.5 rounded bg-stone-800 hover:bg-stone-700 transition-colors"
            title={lang === 'zh' ? '回到頂部' : 'Back to Top'}
            id="back-to-top-btn"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'zh' ? '頂部' : 'Top'}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
