import React, { useState } from 'react';
import { Language } from '../types';
import { personalInfo } from '../data/cvData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Send, 
  Printer, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  onOpenPrint: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenPrint }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

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

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      senderSubject || (lang === 'zh' ? `【學術聯絡】來自 ${senderName || '訪客'}` : `Academic Inquiry from ${senderName || 'Visitor'}`)
    );
    const body = encodeURIComponent(
      `${senderMessage}\n\n---\n${lang === 'zh' ? '寄件人' : 'From'}: ${senderName}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-14 bg-white border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-stone-700" />
            <span>{lang === 'zh' ? '聯繫與交流' : 'Get in Touch'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-academic font-bold text-stone-900 tracking-tight">
            {lang === 'zh' ? '聯絡方式與交流邀約' : 'Contact Information & Academic Collaboration'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-1">
            {lang === 'zh'
              ? '歡迎學術交流、研究合作與城鄉空間議題探討。'
              : 'Welcome academic discussions, research collaborations, and spatial inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left: Contact Info Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-50 transition-colors">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span className="font-semibold uppercase tracking-wider">
                  {lang === 'zh' ? '電子郵件' : 'Email Address'}
                </span>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? (lang === 'zh' ? '已複製' : 'Copied') : (lang === 'zh' ? '複製' : 'Copy')}</span>
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-mono text-sm sm:text-base font-semibold text-stone-900 hover:text-amber-900 block truncate"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-50 transition-colors">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span className="font-semibold uppercase tracking-wider">
                  {lang === 'zh' ? '聯絡電話' : 'Phone Number'}
                </span>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? (lang === 'zh' ? '已複製' : 'Copied') : (lang === 'zh' ? '複製' : 'Copy')}</span>
                </button>
              </div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="font-mono text-sm sm:text-base font-semibold text-stone-900 hover:text-amber-900 block"
              >
                {personalInfo.phoneFormatted}
              </a>
            </div>

            {/* Address Card */}
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
              <div className="text-xs text-stone-500 font-semibold uppercase tracking-wider mb-1">
                {lang === 'zh' ? '聯絡地址' : 'Address'}
              </div>
              <div className="text-sm font-medium text-stone-800">
                {lang === 'zh' ? personalInfo.locationZh : personalInfo.locationEn}
              </div>
            </div>

            {/* Print CV button */}
            <button
              onClick={onOpenPrint}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-amber-900 text-amber-50 hover:bg-amber-950 font-medium text-sm transition-colors shadow-xs"
              id="footer-print-btn"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'zh' ? '預覽並列印完整學術履歷 (Print / Save PDF)' : 'Print / Export CV as PDF'}</span>
            </button>
          </div>

          {/* Right: Quick Email Form */}
          <div className="md:col-span-7 bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200">
            <h3 className="font-serif-academic font-bold text-stone-900 text-base mb-1">
              {lang === 'zh' ? '快速信件草擬' : 'Quick Message Drafter'}
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              {lang === 'zh' ? '輸入內容後將直接喚起您的郵件客戶端進行傳送' : 'Pre-fills your local email app for instant sending'}
            </p>

            <form onSubmit={handleSendEmail} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'zh' ? '您的姓名 / 稱謂' : 'Your Name / Title'}
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={lang === 'zh' ? '例：王老師 / 林研究員' : 'e.g., Prof. Smith / Research Fellow'}
                  className="w-full text-sm px-3.5 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-stone-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'zh' ? '主旨' : 'Subject'}
                </label>
                <input
                  type="text"
                  required
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  placeholder={lang === 'zh' ? '例：臺大城鄉所申請交流 / 學術探討' : 'e.g., Academic Exchange / Inquiry'}
                  className="w-full text-sm px-3.5 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-stone-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'zh' ? '信件內文' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder={lang === 'zh' ? '請在此輸入您的留言內容...' : 'Write your message here...'}
                  className="w-full text-sm px-3.5 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-stone-800"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 text-sm font-medium transition-colors"
                id="submit-email-btn"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'zh' ? '寄發郵件給維媖' : 'Open Email Client to Send'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
