import React, { useState } from 'react';
import { Language, Course } from '../types';
import { courseworkList, gpaRecords } from '../data/cvData';
import { 
  BookOpen, 
  Award, 
  Calendar, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Filter,
  GraduationCap
} from 'lucide-react';

interface CourseworkSectionProps {
  lang: Language;
}

export const CourseworkSection: React.FC<CourseworkSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const categories = [
    { id: 'all', labelZh: '全部課程', labelEn: 'All Courses' },
    { id: 'gender', labelZh: '性別與環境空間', labelEn: 'Gender & Environment' },
    { id: 'urban-history', labelZh: '城市史與歷史研究', labelEn: 'Urban & History' },
    { id: 'human-rights', labelZh: '人權、法政與社運', labelEn: 'Human Rights & Politics' },
    { id: 'method-embodiment', labelZh: '身體實踐與多元方法', labelEn: 'Embodied Practice & Method' },
  ];

  const years = [
    { id: 'all', labelZh: '全部學年', labelEn: 'All Years' },
    { id: '109', labelZh: '109 學年度 (GPA 4.15/4.14)', labelEn: 'AY 109 (2020-21)' },
    { id: '110', labelZh: '110 學年度 (GPA 3.90/4.09)', labelEn: 'AY 110 (2021-22)' },
    { id: '111', labelZh: '111 學年度 (GPA 4.11/4.00)', labelEn: 'AY 111 (2022-23)' },
    { id: '112', labelZh: '112 學年度 (在學專題)', labelEn: 'AY 112 (2023-24)' },
  ];

  const filteredCourses = courseworkList.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || course.academicYear === selectedYear;
    return matchesCategory && matchesYear;
  });

  return (
    <section id="coursework" className="py-14 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-200/70 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-stone-700" />
              <span>{lang === 'zh' ? '學術奠基與成績' : 'Academic Coursework & GPA'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-stone-900 tracking-tight">
              {lang === 'zh' ? '歷年修課與學術軌跡' : 'Curated Coursework & Academic Records'}
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              {lang === 'zh'
                ? '跨越歷史文獻考證、婦女性別研究學程與城鄉所先修專題之扎實學業訓練。'
                : 'Rigorous academic trajectory bridging historiography, feminist spatial inquiry, and urban studies.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-medium">
              {lang === 'zh' ? `共收錄 ${courseworkList.length} 門核心課程` : `${courseworkList.length} Core Courses`}
            </span>
          </div>
        </div>

        {/* GPA & Honors Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {gpaRecords.map((item) => (
            <div
              key={item.year}
              onClick={() => setSelectedYear(selectedYear === item.year ? 'all' : item.year)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedYear === item.year
                  ? 'bg-amber-50/70 border-amber-400 shadow-xs ring-1 ring-amber-400'
                  : 'bg-white border-stone-200/90 hover:border-stone-400 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                <span className="font-semibold text-stone-700">
                  {lang === 'zh' ? `${item.year} 學年度` : `AY ${item.year}`}
                </span>
                {item.year === '109' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
                    <Award className="w-3 h-3" />
                    {lang === 'zh' ? '書卷獎' : 'Dean’s List'}
                  </span>
                )}
              </div>
              <div className="text-xl font-bold font-serif-academic text-stone-900">
                {item.gpa}
              </div>
              <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                {lang === 'zh' ? item.descriptionZh : item.descriptionEn}
              </p>
            </div>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-xl border border-stone-200/90 p-3 sm:p-4 mb-6 shadow-2xs space-y-3">
          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0 hidden sm:block" />
            <div className="flex items-center gap-1.5 flex-nowrap sm:flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-stone-900 text-stone-100 shadow-2xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
                  }`}
                  id={`filter-cat-${cat.id}`}
                >
                  {lang === 'zh' ? cat.labelZh : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Academic Year Quick Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-stone-100 scrollbar-none">
            <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0 hidden sm:block" />
            <span className="text-[11px] text-stone-400 uppercase font-semibold hidden sm:inline mr-1">
              {lang === 'zh' ? '年度篩選：' : 'Year:'}
            </span>
            {years.map((y) => (
              <button
                key={y.id}
                onClick={() => setSelectedYear(y.id)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedYear === y.id
                    ? 'bg-amber-900 text-amber-50'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
                }`}
                id={`filter-year-${y.id}`}
              >
                {lang === 'zh' ? y.labelZh : y.labelEn}
              </button>
            ))}
            {(selectedCategory !== 'all' || selectedYear !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="text-xs text-stone-400 hover:text-stone-700 underline ml-auto shrink-0 px-2"
              >
                {lang === 'zh' ? '清除篩選' : 'Reset'}
              </button>
            )}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredCourses.map((course) => {
            const isBiCourse = course.id === 'c110-1';
            const isAcademicWriting = course.id === 'c111-1';
            const isUrbanHistory = course.id === 'c112-1';

            return (
              <div
                key={course.id}
                className={`rounded-xl p-4 border transition-all flex flex-col justify-between ${
                  isBiCourse
                    ? 'bg-amber-50/50 border-amber-300 shadow-xs'
                    : 'bg-white border-stone-200/90 hover:border-stone-300 shadow-2xs'
                }`}
              >
                <div>
                  {/* Top semester & badge row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-mono">
                      {lang === 'zh' ? course.semesterZh : course.semesterEn}
                    </span>

                    {isBiCourse && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded-md">
                        <Sparkles className="w-3 h-3 text-amber-700" />
                        {lang === 'zh' ? '城鄉所必提課程' : 'Taught by Prof. Bi'}
                      </span>
                    )}

                    {isAcademicWriting && (
                      <span className="text-[11px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
                        {lang === 'zh' ? '歷史必修寫作' : 'Required Writing'}
                      </span>
                    )}

                    {isUrbanHistory && (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                        {lang === 'zh' ? '城鄉空間核心' : 'Urban Space'}
                      </span>
                    )}
                  </div>

                  {/* Course Name */}
                  <h3 className="text-base font-serif-academic font-bold text-stone-900 leading-snug">
                    {course.nameZh}
                  </h3>
                  <div className="text-xs text-stone-500 font-sans mt-0.5">
                    {course.nameEn}
                  </div>

                  {/* Instructor / Special note */}
                  {course.instructor && (
                    <div className="mt-2 text-xs font-medium text-amber-900 bg-amber-100/60 px-2 py-1 rounded">
                      {course.instructor}
                    </div>
                  )}

                  {course.noteZh && (
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed bg-stone-50 p-2 rounded border border-stone-100">
                      {lang === 'zh' ? course.noteZh : course.noteEn}
                    </p>
                  )}
                </div>

                {/* Bottom Tags */}
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-wrap gap-1">
                  {course.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200 text-stone-500">
            {lang === 'zh' ? '沒有符合目前篩選條件的課程。' : 'No courses found matching selected filters.'}
          </div>
        )}

      </div>
    </section>
  );
};
