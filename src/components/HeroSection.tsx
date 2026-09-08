import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/cvData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Check, 
  Copy, 
  ArrowUpRight, 
  Compass,
  BookOpen,
  Users
} from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

  return (
    <section id="about" className="pt-10 pb-14 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Quick Contacts */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Portrait Frame */}
            <div className="relative group w-48 sm:w-56 md:w-64 aspect-square rounded-2xl overflow-hidden border-2 border-stone-300 shadow-md bg-stone-100 mb-5">
              <img
                src="/profile.jpg"
                alt={personalInfo.nameZh}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent p-3 text-left">
                <span className="text-[11px] text-stone-200 font-medium tracking-wider uppercase block">
                  {lang === 'zh' ? '臺大歷史系 · 性別學程' : 'NTU History & Gender Studies'}
                </span>
                <span className="text-xs text-white font-serif-academic font-medium">
                  {personalInfo.nameZh} ({personalInfo.nameEn})
                </span>
              </div>
            </div>

            {/* Direct Contacts Panel */}
            <div className="w-full bg-white rounded-xl border border-stone-200/90 p-4 shadow-xs space-y-3">
              <div className="text-xs font-semibold tracking-wider text-stone-400 uppercase">
                {lang === 'zh' ? '聯絡方式' : 'Contact Details'}
              </div>

              {/* Email */}
              <div className="flex items-center justify-between group text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-stone-700 hover:text-stone-950 truncate transition-colors"
                  title="寄送郵件"
                >
                  <Mail className="w-4 h-4 text-stone-400 shrink-0 group-hover:text-stone-700" />
                  <span className="truncate font-mono text-xs sm:text-sm">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
                  title={copiedEmail ? '已複製' : '複製信箱'}
                  id="copy-email-btn"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between group text-sm">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-stone-700 hover:text-stone-950 transition-colors"
                  title="撥打電話"
                >
                  <Phone className="w-4 h-4 text-stone-400 shrink-0 group-hover:text-stone-700" />
                  <span className="font-mono text-xs sm:text-sm">{personalInfo.phoneFormatted}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
                  title={copiedPhone ? '已複製' : '複製電話'}
                  id="copy-phone-btn"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-xs text-stone-600 pt-1 border-t border-stone-100">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>{lang === 'zh' ? personalInfo.locationZh : personalInfo.locationEn}</span>
              </div>
            </div>

            {/* Target Institute Badge */}
            <div className="w-full mt-3.5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <Compass className="w-3.5 h-3.5 text-amber-700" />
                <span>{lang === 'zh' ? '申請目標' : 'Target Goal'}</span>
              </div>
              <p className="mt-1 text-sm font-serif-academic font-bold text-amber-950">
                {lang === 'zh' ? personalInfo.targetZh : personalInfo.targetEn}
              </p>
              <span className="text-[11px] text-amber-800/80 block mt-0.5">
                {lang === 'zh' ? '專注近代城市史、性別空間政治與參與式城鄉規劃' : 'Integrating Urban History, Gender Space & Planning'}
              </span>
            </div>
          </div>

          {/* Right Column: Narrative, Academic Credentials & Pillars */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Titles */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 text-stone-800 text-xs font-medium mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-stone-700" />
                <span>{lang === 'zh' ? '國立臺灣大學學士學位候選人' : 'National Taiwan University (NTU)'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-academic font-bold text-stone-900 tracking-tight">
                {personalInfo.nameZh}
                <span className="text-xl sm:text-2xl font-sans font-normal text-stone-500 ml-3">
                  {personalInfo.nameEn}
                </span>
              </h1>

              <div className="mt-2 text-base sm:text-lg text-stone-700 font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-stone-900 font-semibold">
                  {lang === 'zh' ? personalInfo.education.majorZh : personalInfo.education.majorEn}
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-stone-700">
                  {lang === 'zh' ? personalInfo.education.programZh : personalInfo.education.programEn}
                </span>
              </div>
            </div>

            {/* Academic Narrative Summary */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal bg-stone-100/60 p-5 rounded-xl border border-stone-200/60">
              {lang === 'zh' ? personalInfo.summaryZh : personalInfo.summaryEn}
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
                <div className="text-2xl font-bold font-serif-academic text-stone-900">4.15</div>
                <div className="text-xs font-medium text-stone-500 mt-0.5">
                  {lang === 'zh' ? '頂尖學期 GPA' : 'Top Term GPA'}
                </div>
                <div className="text-[11px] text-amber-800 font-medium mt-1 flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-600" />
                  {lang === 'zh' ? '臺大書卷獎' : 'Dean’s List'}
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
                <div className="text-2xl font-bold font-serif-academic text-stone-900">2 次</div>
                <div className="text-xs font-medium text-stone-500 mt-0.5">
                  {lang === 'zh' ? '嘉華獎學金' : 'Jiahua Scholarship'}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  {lang === 'zh' ? '2021 & 2022' : 'Consecutive'}
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
                <div className="text-2xl font-bold font-serif-academic text-stone-900">第 3 名</div>
                <div className="text-xs font-medium text-stone-500 mt-0.5">
                  {lang === 'zh' ? '青發署競賽' : 'MOE Contest'}
                </div>
                <div className="text-[11px] text-amber-800 font-medium mt-1">
                  {lang === 'zh' ? '勵馨職場體驗' : 'Garden of Hope'}
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
                <div className="text-2xl font-bold font-serif-academic text-stone-900">中研院</div>
                <div className="text-xs font-medium text-stone-500 mt-0.5">
                  {lang === 'zh' ? '歷史助理' : 'Research Assistant'}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  {lang === 'zh' ? '梁元禎老師研究' : 'Academia Sinica'}
                </div>
              </div>
            </div>

            {/* Three Core Research Pillars */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                {lang === 'zh' ? '核心學術研究關懷' : 'Core Research & Inquiry Areas'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {(lang === 'zh' ? personalInfo.researchPillarsZh : personalInfo.researchPillarsEn).map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 hover:border-stone-400 transition-colors shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center mb-2.5 font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <h3 className="font-serif-academic font-bold text-stone-900 text-sm mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Jump buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#coursework"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 text-sm font-medium transition-colors"
                id="jump-coursework-btn"
              >
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'zh' ? '檢視歷年修課與成績' : 'View Coursework & GPA'}</span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 text-sm font-medium transition-colors"
                id="jump-experience-btn"
              >
                <Users className="w-4 h-4" />
                <span>{lang === 'zh' ? '實習與學術經歷' : 'Experience & Projects'}</span>
              </a>
              <a
                href="#target"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-100/80 border border-amber-300/80 text-amber-950 hover:bg-amber-100 text-sm font-medium transition-colors"
                id="jump-target-btn"
              >
                <Compass className="w-4 h-4 text-amber-800" />
                <span>{lang === 'zh' ? '城鄉所申請理念' : 'Building & Planning Vision'}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
