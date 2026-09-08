import React from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/cvData';
import { Compass, Building, Sparkles, BookCheck, ShieldCheck, MapPinned, ArrowRight } from 'lucide-react';

interface TargetInstituteSectionProps {
  lang: Language;
}

export const TargetInstituteSection: React.FC<TargetInstituteSectionProps> = ({ lang }) => {
  const points = [
    {
      icon: Building,
      titleZh: '修習城鄉所畢恆達教授之《性別與環境》',
      titleEn: 'Coursework with Prof. Bi Heng-da: Gender and Environment',
      descZh: '在大學階段即主動選修城鄉所核心專案課程，深入研讀性別地景、空間排拒、家戶與街道尺度的權力政治，奠定跨入城鄉所的理論視野。',
      descEn: 'Completed the landmark course taught by Prof. Bi Heng-da at NTU Building & Planning, studying gendered landscapes, bodily scales, and spatial inclusion.',
      badgeZh: '城鄉所核心先修',
      badgeEn: 'Key Preparation',
    },
    {
      icon: MapPinned,
      titleZh: '近代臺灣城市史與空間紋理考證',
      titleEn: 'Urban History of Modern Taiwan & Spatial Historiography',
      descZh: '以臺大歷史系的專業史料訓練，專注近代臺灣城市空間、殖民現代性、都市聚落與公共領域的演變，具備扎實的文獻考掘與歷史空間解讀能力。',
      descEn: 'Trained in rigorous historical methodology, exploring modern Taiwanese urban forms, colonial modernities, and collective memories in the built environment.',
      badgeZh: '史學空間縱深',
      badgeEn: 'Historical Depth',
    },
    {
      icon: ShieldCheck,
      titleZh: '人權組織實習與土地空間正義關懷',
      titleEn: 'Human Rights NGO Practice & Spatial Justice',
      descZh: '在台灣人權促進會（TAHR）與勵馨基金會的非營利實習中，直接接觸土地迫遷、集會遊行空間權利與性別弱勢居住安全，將人權理念落實為具體的空間正義。',
      descEn: 'Hands-on NGO advocacy at TAHR and Garden of Hope confronting forced eviction, right to assembly in public space, and gender-inclusive shelter security.',
      badgeZh: '草根正義實踐',
      badgeEn: 'Grassroots Justice',
    },
    {
      icon: BookCheck,
      titleZh: '本土語言認證與口述歷史田野潛力',
      titleEn: 'Taiwanese Language Certification & Fieldwork Rigor',
      descZh: '通過教育部閩南語認證，兼具中研院歷史所助理實務與校園議題書寫經驗，具備進入社區田野深訪、在地文史活化與參與式規劃的溝通基礎。',
      descEn: 'Certified in Taiwanese Hokkien by MOE with Academia Sinica research assistant experience, prepared for deep oral history and participatory community planning.',
      badgeZh: '田野訪談基石',
      badgeEn: 'Fieldwork Ready',
    },
  ];

  return (
    <section id="target" className="py-14 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-amber-800" />
              <span>{lang === 'zh' ? '研究所申請目標' : 'Application Objective'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-stone-900 tracking-tight">
              {lang === 'zh' ? '國立臺灣大學 建築與城鄉研究所' : 'NTU Graduate Institute of Building and Planning'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              {lang === 'zh' 
                ? '以歷史脈絡為根基、性別環境為視角、社會正義為信念的城鄉研究路徑' 
                : 'A cross-disciplinary trajectory connecting Historiography, Gender Spatial Politics, and Urban Equity.'}
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-3.5 py-1.5 rounded-lg bg-stone-900 text-stone-100 text-xs sm:text-sm font-medium shadow-xs">
              {lang === 'zh' ? '碩士班甄試 / 申請準備' : 'Graduate Admissions Candidate'}
            </span>
          </div>
        </div>

        {/* 4 Synergy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-900 flex items-center justify-center border border-amber-200/60">
                      <Icon className="w-5 h-5 text-amber-800" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-stone-100 text-stone-700">
                      {lang === 'zh' ? pt.badgeZh : pt.badgeEn}
                    </span>
                  </div>

                  <h3 className="font-serif-academic font-bold text-stone-900 text-base mb-2">
                    {lang === 'zh' ? pt.titleZh : pt.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {lang === 'zh' ? pt.descZh : pt.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span>{lang === 'zh' ? `構面 0${idx + 1}` : `Dimension 0${idx + 1}`}</span>
                  <span className="text-amber-800 font-medium">
                    {lang === 'zh' ? '與城鄉所高度契合' : 'Direct Alignment'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professor Bi Citation highlight banner */}
        <div className="mt-5 p-4 rounded-xl bg-white border-l-4 border-amber-700 border border-stone-200/90 shadow-2xs">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-serif-academic text-stone-800 font-medium">
                {lang === 'zh'
                  ? '「在臺大修讀畢恆達老師開授的《性別與環境》，是我學術歷程的轉捩點。從歷史檔案的考證跳入具體的物理空間與身體感知，讓我堅定了運用歷史與性別視角投身建築與城鄉規劃的志向。」'
                  : '"Taking ‘Gender and Environment’ taught by Prof. Bi Heng-da was a pivotal turning point in my academic path—bridging archival historiography to physical space and embodied perception."'}
              </p>
              <div className="text-xs text-stone-500 mt-1">
                — {personalInfo.nameZh}（{lang === 'zh' ? '歷年修課註記：110 學年度城鄉所開課' : 'Course annotation: NTU Building & Planning'}）
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
