import React from 'react';
import { Language } from '../types';
import { professionalExperiences, honorsAndAwards } from '../data/cvData';
import { 
  Briefcase, 
  Trophy, 
  Award, 
  CheckCircle, 
  Building2, 
  ExternalLink,
  ShieldAlert,
  HeartHandshake,
  FileCheck
} from 'lucide-react';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-14 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5 text-stone-700" />
              <span>{lang === 'zh' ? '專業研究與實務經歷' : 'Research & Professional Practice'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-stone-900 tracking-tight">
              {lang === 'zh' ? '研究助理與非營利組織實習' : 'Research Assistant & NGO Internships'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              {lang === 'zh'
                ? '融合中央研究院頂尖學術助理經驗，以及台灣人權、勵馨基金會等非營利一線倡議實踐。'
                : 'Combining high-level archival scholarship at Academia Sinica with frontline human rights and social welfare advocacy.'}
            </p>
          </div>
        </div>

        {/* 3 Detailed Experience Cards */}
        <div className="space-y-4 mb-12">
          {professionalExperiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-stone-900 text-stone-100 font-mono">
                      {exp.year}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
                      {lang === 'zh' ? exp.roleZh : exp.roleEn}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif-academic font-bold text-stone-900">
                    {lang === 'zh' ? exp.titleZh : exp.titleEn}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-stone-600 flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{lang === 'zh' ? exp.orgZh : exp.orgEn}</span>
                  </div>
                </div>

                {exp.awardZh && (
                  <div className="shrink-0 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{lang === 'zh' ? exp.awardZh : exp.awardEn}</span>
                  </div>
                )}
              </div>

              {/* Bullet Descriptions */}
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 mt-3 pt-3 border-t border-stone-100">
                {(lang === 'zh' ? exp.descriptionZh : exp.descriptionEn).map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                {exp.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honors, Awards & Certifications Sub-Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-amber-700" />
            <h3 className="text-lg font-serif-academic font-bold text-stone-900">
              {lang === 'zh' ? '榮譽獎項與專業證書' : 'Honors, Awards & Language Certifications'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {honorsAndAwards.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 border border-stone-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-mono font-semibold text-stone-700">{item.year}</span>
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <h4 className="font-serif-academic font-bold text-stone-900 text-sm sm:text-base leading-snug mb-1">
                    {lang === 'zh' ? item.titleZh : item.titleEn}
                  </h4>
                  <div className="text-[11px] text-stone-500 font-medium mb-2">
                    {lang === 'zh' ? item.issuerZh : item.issuerEn}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {lang === 'zh' ? item.noteZh : item.noteEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
