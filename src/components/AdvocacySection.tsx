import React from 'react';
import { Language } from '../types';
import { socialAdvocacyList } from '../data/cvData';
import { 
  Users, 
  Flag, 
  Flame, 
  MessageSquareQuote, 
  Activity, 
  HeartHandshake, 
  Sparkles,
  Award
} from 'lucide-react';

interface AdvocacySectionProps {
  lang: Language;
}

export const AdvocacySection: React.FC<AdvocacySectionProps> = ({ lang }) => {
  return (
    <section id="advocacy" className="py-14 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-stone-700" />
              <span>{lang === 'zh' ? '公共參與與身體實踐' : 'Civic Engagement & Bodily Praxis'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-stone-900 tracking-tight">
              {lang === 'zh' ? '社會實踐與校園行動' : 'Social Advocacy & Campus Engagement'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              {lang === 'zh'
                ? '不只停留在象牙塔，將日常生活體察與身體經驗轉化為公共議題對話。'
                : 'Translating embodied physical experiences and everyday observations into public dialogues and grassroots actions.'}
            </p>
          </div>
        </div>

        {/* Featured Campus Marathon Case Study Callout */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-stone-50 border border-amber-200/90 p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-900 text-amber-50 flex items-center justify-center shrink-0 shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-200/80 text-amber-950 font-mono">
                    2022
                  </span>
                  <span className="text-xs font-medium text-amber-800">
                    {lang === 'zh' ? '校園焦點實踐案例' : 'Spotlight Campus Narrative'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif-academic font-bold text-stone-900 mt-0.5">
                  {lang === 'zh'
                    ? '臺大校園馬拉松賽女學生 5KM 組（第 481 名）與性別空間觀察書寫'
                    : 'NTU Campus Marathon (481st Place) & Gender Spatial Observation Paper'}
                </h3>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-white border border-amber-200 text-xs font-semibold text-amber-950 shadow-2xs shrink-0">
              {lang === 'zh' ? '引發校內社群平台廣泛討論' : 'Viral Campus Discussion'}
            </div>
          </div>

          <div className="text-sm text-stone-700 leading-relaxed space-y-2.5 bg-white/80 p-4 sm:p-5 rounded-xl border border-amber-100">
            <p>
              {lang === 'zh'
                ? '在 2022 年臺大校園馬拉松賽中，維媖報名參與女學生 5KM 組，完賽獲得第 481 名。賽後，她並未止步於完賽成績，而是敏銳察覺賽事場地動線、競技身體常模與性別分組中的隱形符碼，撰寫了一篇深刻的個人觀察評論。'
                : 'In the 2022 NTU Campus Marathon, Wei-Ying ran the 5KM female student division, finishing 481st. Reflecting beyond athletic competition, she authored an incisive commentary dissecting campus spatial norms and gendered bodily codes.'}
            </p>
            <p>
              {lang === 'zh'
                ? '此篇文章發表於臺大校內社群平台後，引發跨系所學生熱烈轉發與迴響，促成校園對於女性運動空間、體適能制度與身體自覺的深刻思辨。此經驗充分展現其將「歷史批判力」、「性別視角」與「日常生活場域」融會貫通的倡議天賦。'
                : 'Published on NTU student community forums, the piece catalyzed extensive engagement regarding women’s athletic spaces and bodily empowerment, proving her distinctive ability to transform everyday moments into productive public critique.'}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-stone-600">
            <span className="px-2.5 py-1 rounded-md bg-white border border-stone-200">#性別地景</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-stone-200">#校園公共論壇</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-stone-200">#體育空間政治</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-stone-200">#身體常模反思</span>
          </div>
        </div>

        {/* Other Social Engagement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialAdvocacyList.slice(1).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                    {item.year}
                  </span>
                  <span className="text-amber-800 font-medium">
                    {lang === 'zh' ? item.roleZh : item.roleEn}
                  </span>
                </div>

                <h3 className="font-serif-academic font-bold text-stone-900 text-base mb-1">
                  {lang === 'zh' ? item.titleZh : item.titleEn}
                </h3>
                <div className="text-xs text-stone-500 font-medium mb-3">
                  {lang === 'zh' ? item.orgZh : item.orgEn}
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                  {(lang === 'zh' ? item.descriptionZh : item.descriptionEn).map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
