/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TargetInstituteSection } from './components/TargetInstituteSection';
import { CourseworkSection } from './components/CourseworkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AdvocacySection } from './components/AdvocacySection';
import { StatementSection } from './components/StatementSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintModal } from './components/PrintModal';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-950 font-sans">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenPrint={() => setIsPrintModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Profile Hero & Overview */}
        <HeroSection lang={lang} />

        {/* Target Institute Spotlight (NTU Building & Planning) */}
        <TargetInstituteSection lang={lang} />

        {/* Academic Coursework & GPA Trajectory */}
        <CourseworkSection lang={lang} />

        {/* Professional Experience, Research & Internships */}
        <ExperienceSection lang={lang} />

        {/* Social Advocacy, Bodily Praxis & Campus Engagement */}
        <AdvocacySection lang={lang} />

        {/* Statement of Purpose & Academic Trajectory */}
        <StatementSection lang={lang} />

        {/* Contact & Inquiry */}
        <ContactSection
          lang={lang}
          onOpenPrint={() => setIsPrintModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Dedicated Printable / PDF Preview Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
