import React from 'react';
import { Language } from '../types';
import { personalInfo, courseworkList, professionalExperiences, socialAdvocacyList, honorsAndAwards } from '../data/cvData';
import { X, Printer, Download, Check } from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:rounded-none">
        
        {/* Modal Toolbar (hidden on print) */}
        <div className="no-print bg-stone-900 text-stone-100 px-4 py-3 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-amber-400" />
            <span className="font-serif-academic font-bold text-sm">
              {lang === 'zh' ? '紙本履歷與 PDF 匯出預覽' : 'CV Print & PDF Export Preview'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold transition-colors shadow-xs"
              id="print-action-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '列印 / 存為 PDF' : 'Print / Save as PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-stone-400 hover:text-stone-100 rounded-md transition-colors"
              aria-label="Close Preview"
              id="close-print-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Sheet Body */}
        <div className="overflow-y-auto p-6 sm:p-10 text-stone-900 bg-white font-sans print:p-0 print:overflow-visible text-sm leading-normal">
          
          {/* Top Header Row with Name & Photo */}
          <div className="flex justify-between items-start border-b-2 border-stone-800 pb-4 mb-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif-academic font-bold tracking-tight text-stone-950">
                {personalInfo.nameZh} <span className="text-lg font-sans font-normal text-stone-600 ml-2">{personalInfo.nameEn}</span>
              </h1>
              <div className="text-xs sm:text-sm text-stone-600 mt-1 font-mono">
                {personalInfo.locationZh} ｜ {personalInfo.phoneFormatted} ｜ {personalInfo.email}
              </div>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-stone-300 shrink-0 ml-4 bg-stone-100">
              <img
                src="/profile.jpg"
                alt={personalInfo.nameZh}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Section: 申請目標 */}
          <div className="mb-5">
            <h2 className="text-base font-serif-academic font-bold text-stone-950 border-b border-stone-300 pb-1 mb-2">
              申請目標
            </h2>
            <div className="font-serif-academic font-semibold text-stone-800 text-sm">
              國立臺灣大學 建築與城鄉研究所 NTU Graduate Institute of Building and Planning
            </div>
          </div>

          {/* Section: 學歷 */}
          <div className="mb-5">
            <h2 className="text-base font-serif-academic font-bold text-stone-950 border-b border-stone-300 pb-1 mb-2">
              學歷
            </h2>
            <div className="space-y-1 text-sm">
              <div>
                <span className="font-semibold">在學：</span>國立臺灣大學 歷史學系（預計畢業於：2024 六月）
                <div className="text-xs text-stone-500 font-mono">Major: NTU Department of History (Graduate in June, 2024)</div>
              </div>
              <div>
                <span className="font-semibold">學程：</span>婦女與性別研究學程
                <div className="text-xs text-stone-500 font-mono">Program: Women’s and Gender Studies Program</div>
              </div>
            </div>
          </div>

          {/* Section: 相關課程 */}
          <div className="mb-6">
            <h2 className="text-base font-serif-academic font-bold text-stone-950 border-b border-stone-300 pb-1 mb-2">
              相關課程
            </h2>

            {/* 109 */}
            <div className="mb-3">
              <div className="bg-stone-100 font-semibold px-2 py-1 text-xs border border-stone-300 flex justify-between">
                <span>109 學年度（2020 Fall - 2021 Summer）</span>
                <span className="font-mono">GPA: 4.15 & 4.14</span>
              </div>
              <div className="grid grid-cols-2 text-xs border-x border-b border-stone-200 divide-x divide-stone-200">
                <div className="p-1.5">
                  <div className="font-medium">邏輯</div>
                  <div className="text-stone-500 text-[11px]">Logic</div>
                </div>
                <div className="p-1.5">
                  <div className="font-medium">民主憲政與基本人權</div>
                  <div className="text-stone-500 text-[11px]">Democracy and Human Rights</div>
                </div>
              </div>
              <div className="border-x border-b border-stone-200 p-1.5 text-xs">
                <div className="font-medium">健康體適能</div>
                <div className="text-stone-500 text-[11px]">Health Related Physical Fitness</div>
              </div>
            </div>

            {/* 110 */}
            <div className="mb-3">
              <div className="bg-stone-100 font-semibold px-2 py-1 text-xs border border-stone-300 flex justify-between">
                <span>110 學年度（2021 Fall - 2022 Summer）</span>
                <span className="font-mono">GPA: 3.90 & 4.09</span>
              </div>
              <div className="grid grid-cols-2 text-xs border-x border-b border-stone-200 divide-x divide-stone-200">
                <div className="p-1.5">
                  <div className="font-medium">女性主義與法律</div>
                  <div className="text-stone-500 text-[11px]">Feminism and Law</div>
                </div>
                <div className="p-1.5">
                  <div className="font-medium">性別政治</div>
                  <div className="text-stone-500 text-[11px]">Gender Politics</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium">臺灣近現代史</div>
                  <div className="text-stone-500 text-[11px]">History of Taiwan, 1860s-1992</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium">越南文</div>
                  <div className="text-stone-500 text-[11px]">Vietnamese</div>
                </div>
                <div className="p-1.5 border-t border-stone-200 bg-amber-50/40">
                  <div className="font-medium text-amber-950">性別與環境 ¹</div>
                  <div className="text-stone-500 text-[11px]">Gender and Environment</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium">月經：理論、思潮與行動</div>
                  <div className="text-stone-500 text-[11px]">Period: Theory, Thoughts and Actions</div>
                </div>
              </div>
              <div className="text-[10px] text-stone-500 mt-1 italic">
                ¹ 城鄉所畢恆達老師開授。Taught by 畢恆達, professor of NTU Graduate Institute of Building and Planning.
              </div>
            </div>

            {/* 111 */}
            <div className="mb-3">
              <div className="bg-stone-100 font-semibold px-2 py-1 text-xs border border-stone-300 flex justify-between">
                <span>111 學年度（2022 Fall - 2023 Summer）</span>
                <span className="font-mono">GPA: 4.11 & 4.00</span>
              </div>
              <div className="grid grid-cols-2 text-xs border-x border-b border-stone-200 divide-x divide-stone-200">
                <div className="p-1.5">
                  <div className="font-medium">歷史研究與寫作 ²</div>
                  <div className="text-stone-500 text-[11px]">Historical Study and Writing</div>
                </div>
                <div className="p-1.5">
                  <div className="font-medium">仇恨語言與抗拒論述</div>
                  <div className="text-stone-500 text-[11px]">Hate Speech and Resistance Discourse</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium">現代舞</div>
                  <div className="text-stone-500 text-[11px]">Modern Dancing</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium">婦女與性別研究導論</div>
                  <div className="text-stone-500 text-[11px]">Introduction to Gender and Women's Studies</div>
                </div>
              </div>
              <div className="text-[10px] text-stone-500 mt-1 italic">
                ² 歷史學系必修課，學習學術寫作。A required course in the Department of History to learn academic writing.
              </div>
            </div>

            {/* 112 */}
            <div className="mb-3">
              <div className="bg-stone-100 font-semibold px-2 py-1 text-xs border border-stone-300 flex justify-between">
                <span>112 學年度上半（2023 Fall - Now）</span>
                <span className="font-mono">在學研修</span>
              </div>
              <div className="grid grid-cols-2 text-xs border-x border-b border-stone-200 divide-x divide-stone-200">
                <div className="p-1.5">
                  <div className="font-medium">重量訓練</div>
                  <div className="text-stone-500 text-[11px]">Weight Training</div>
                </div>
                <div className="p-1.5">
                  <div className="font-medium">性別與健康</div>
                  <div className="text-stone-500 text-[11px]">Gender and Health</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium">社會運動</div>
                  <div className="text-stone-500 text-[11px]">Social Movement</div>
                </div>
                <div className="p-1.5 border-t border-stone-200">
                  <div className="font-medium text-amber-950">近代臺灣城市史</div>
                  <div className="text-stone-500 text-[11px]">Urban History of Modern Taiwan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: 經歷 */}
          <div className="mb-6">
            <h2 className="text-base font-serif-academic font-bold text-stone-950 border-b border-stone-300 pb-1 mb-2">
              經歷
            </h2>

            {/* 在校經歷 */}
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">在校經歷</h3>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-stone-800">
                <li>
                  <span className="font-medium">2020 年秋，獲書卷獎。</span>
                  <span className="text-stone-500 ml-1">2020, Fall. Got Certificate of Excellence.</span>
                </li>
                <li>
                  <span className="font-medium">2020 年，參與學生會學術部。</span>
                  <span className="text-stone-500 ml-1">2020. Participate in Academic Affairs Department of Student Association.</span>
                </li>
                <li>
                  <span className="font-medium">2021 年，始修習婦女與性別研究學程。</span>
                  <span className="text-stone-500 ml-1">2021. Start “Women’s and Gender Studies Program.”</span>
                </li>
                <li>
                  <span className="font-medium">2021、2022 年，獲嘉華獎學金。</span>
                  <span className="text-stone-500 ml-1">2021, 2022. Got Scholarship of 嘉華 Foundation.</span>
                </li>
                <li>
                  <span className="font-medium">2022 年，參加臺大校園馬拉松賽女學生 5KM 組，獲 481 名。並以此經驗書寫個人觀察，引起校內社群平台討論。</span>
                  <span className="text-stone-500 block pl-4">
                    Participated in the 5KM group of female students in the National Taiwan University Campus Marathon and won 481st place. I also wrote personal observations based on my experience, bringing out discussions about gender issue among the NTU’s community on the Internet.
                  </span>
                </li>
                <li>
                  <span className="font-medium">2022 年，通過教育部閩南語語言能力認證考試合格證書。</span>
                  <span className="text-stone-500 ml-1">Passed the Taiwanese Language Proficiency Certification Examination of the Ministry of Education.</span>
                </li>
              </ol>
            </div>

            {/* 職場實習經歷 */}
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">職場實習經歷</h3>
              <ol className="list-decimal list-inside space-y-2 text-xs text-stone-800">
                <li>
                  <span className="font-medium">2022 夏，在非營利組織台灣人權促進會 TAHR 實習。</span>
                  <span className="text-stone-500 ml-1">2022, Summer. Internship at NGO, Taiwan Association of Human Right.</span>
                </li>
                <li>
                  <span className="font-medium">2023 夏，在非營利組織勵馨社會福利事業基金會實習。</span>
                  <span className="text-stone-500 ml-1">2023, Summer. Internship at NGO, Garden of Hope Foundation.</span>
                  <div className="pl-4 font-semibold text-amber-950 mt-0.5">
                    甲、並於青發署暑期職場體驗計畫成果競賽中獲得第三名。
                    <span className="text-stone-500 font-normal ml-1">Got the third Prize in Contest of Youth Development Administration, Ministry of Education.</span>
                  </div>
                </li>
                <li>
                  <span className="font-medium">2023 年，在中研院擔任梁元禎老師勞僱型兼任助理。</span>
                  <span className="text-stone-500 ml-1">2023. Work as Part-time student assistant of Professor Yuen-Gen Liang at Academia Sinica.</span>
                </li>
              </ol>
            </div>

            {/* 其他 */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">其他</h3>
              <ol className="list-decimal list-inside space-y-1 text-xs text-stone-800">
                <li>
                  <span className="font-medium">2020、2022 年，擔任同志大遊行旗手組志工。</span>
                  <span className="text-stone-500 ml-1">2020, 2022. Volunteer of Pride parade.</span>
                </li>
                <li>
                  <span className="font-medium">2023 年，擔任 #Me_Too 大遊行文宣組志工。</span>
                  <span className="text-stone-500 ml-1">2023. Volunteer of #Me_Too Parade of Taiwan.</span>
                </li>
                <li>
                  <span className="font-medium">2023 年，自主參與教會，學習與人互動、奉獻精神。</span>
                  <span className="text-stone-500 ml-1">2023. Start to join church activities.</span>
                </li>
              </ol>
            </div>

          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-stone-200 text-center text-[11px] text-stone-400 font-mono">
            Generated from Official Curriculum Vitae · National Taiwan University · Graduate Admissions Dossier
          </div>

        </div>

      </div>
    </div>
  );
};
