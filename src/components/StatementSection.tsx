import React from 'react';
import { Language } from '../types';
import { statementOfPurpose, personalInfo } from '../data/cvData';
import { Compass, Quote, ArrowRight, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';

interface StatementSectionProps {
  lang: Language;
}

export const StatementSection: React.FC<StatementSectionProps> = ({ lang }) => {
  return (
    <section id="statement" className="py-14 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-stone-700" />
            <span>{lang === 'zh' ? '學術願景與初衷' : 'Statement of Purpose'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-stone-900 tracking-tight">
            {lang === 'zh' ? '城鄉所申請理念與研究初衷' : 'Academic Trajectory & Vision for Building & Planning'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-1">
            {lang === 'zh'
              ? '「將歷史的批判深度，化為城鄉空間的溫柔尺度。」'
              : 'Connecting historical depth with empathetic spatial scales in urban planning.'}
          </p>
        </div>

        {/* Big Quote Banner */}
        <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs mb-8 overflow-hidden">
          <Quote className="absolute -top-3 -left-3 w-16 h-16 text-stone-100 -z-0 pointer-events-none rotate-180" />
          <div className="relative z-10">
            <blockquote className="font-serif-academic font-bold text-lg sm:text-xl text-stone-800 text-center leading-relaxed italic">
              {lang === 'zh' ? statementOfPurpose.quoteZh : statementOfPurpose.quoteEn}
            </blockquote>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          {(lang === 'zh' ? statementOfPurpose.paragraphsZh : statementOfPurpose.paragraphsEn).map((para, idx) => (
            <p key={idx} className="indent-4 sm:indent-6">
              {para}
            </p>
          ))}

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <div className="font-serif-academic font-medium text-stone-700">
              {personalInfo.nameZh} · {personalInfo.nameEn}
            </div>
            <div className="text-stone-400">
              {lang === 'zh' ? '國立臺灣大學 建築與城鄉研究所 申請檔案' : 'NTU Graduate Institute of Building and Planning Candidate'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
