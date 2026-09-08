import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/cvData';
import { Globe, Printer, Menu, X, GraduationCap, Mail, Phone } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenPrint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', labelZh: '關於維媖', labelEn: 'About' },
    { href: '#target', labelZh: '申請目標', labelEn: 'Target Institute' },
    { href: '#coursework', labelZh: '修課軌跡', labelEn: 'Coursework' },
    { href: '#experience', labelZh: '研究與實習', labelEn: 'Experience' },
    { href: '#advocacy', labelZh: '社會實踐', labelEn: 'Advocacy' },
    { href: '#statement', labelZh: '學術願景', labelEn: 'Statement' },
    { href: '#contact', labelZh: '聯絡方式', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center font-serif-academic font-bold text-base shadow-sm group-hover:bg-amber-900 transition-colors">
            維
          </div>
          <div className="flex flex-col">
            <span className="font-serif-academic font-bold text-stone-900 text-base sm:text-lg tracking-tight leading-none group-hover:text-amber-900 transition-colors">
              {personalInfo.nameZh}
            </span>
            <span className="text-xs text-stone-500 font-medium tracking-wide uppercase mt-0.5">
              {personalInfo.nameEn}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 rounded-md transition-colors"
            >
              {lang === 'zh' ? item.labelZh : item.labelEn}
            </a>
          ))}
        </nav>

        {/* Actions (Lang toggle, Print CV) */}
        <div className="flex items-center gap-2">
          {/* Language Switch */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 border border-stone-300/80 rounded-full transition-colors"
            title={lang === 'zh' ? 'Switch to English' : '切換為繁體中文'}
            id="lang-toggle-btn"
          >
            <Globe className="w-3.5 h-3.5 text-stone-500" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          {/* Print CV */}
          <button
            onClick={onOpenPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-stone-800 bg-amber-100/70 hover:bg-amber-100 border border-amber-300/60 rounded-full transition-colors text-amber-950"
            title={lang === 'zh' ? '列印 / 預覽履歷' : 'Print / Export CV'}
            id="print-cv-btn"
          >
            <Printer className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">{lang === 'zh' ? '列印履歷' : 'Print CV'}</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-md"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 rounded-md"
            >
              {lang === 'zh' ? item.labelZh : item.labelEn}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500 px-3">
            <span>{personalInfo.email}</span>
            <span>{personalInfo.phoneFormatted}</span>
          </div>
        </div>
      )}
    </header>
  );
};
