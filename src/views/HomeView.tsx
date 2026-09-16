import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Page, ServiceItem, IndustryItem } from '../types';
import { SERVICES, INDUSTRIES, SOFTWARE_EXPERTISE, TESTIMONIALS, FAQS, BLOGS } from '../data';
import SoftwareRibbon from '../components/SoftwareRibbon';
import SafeImage from '../components/SafeImage';
import {
  ArrowRight, ShieldCheck, CheckCircle, Laptop, Calendar, Users,
  ChevronDown, ChevronRight, Lock, EyeOff, Award, ArrowUpRight, Check,
  Target, Globe, Sparkles, Database, FileCheck, DollarSign,
  HeartPulse, Building, Factory, HardHat, Store, ShoppingBag,
  Calculator, FileText, Percent, ShieldAlert, Briefcase, Layers,
  UserCheck, Coins, Rocket, Landmark, Receipt, ReceiptText
} from 'lucide-react';

// Map service/industry string ID to Lucide Icon component for card rendering
const getIconComponent = (name: string) => {
  switch (name) {
    case 'Calculator': return <Calculator className="w-5 h-5 text-indigo-600" />;
    case 'FileText': return <FileText className="w-5 h-5 text-indigo-600" />;
    case 'Percent': return <Percent className="w-5 h-5 text-indigo-600" />;
    case 'Receipt': return (
      <span className="relative inline-flex items-center justify-center w-5 h-5">
        <ReceiptText className="w-5 h-5 text-indigo-600 opacity-95" />
        <Calculator className="absolute -bottom-0.5 -right-0.5 w-[11px] h-[11px] bg-white rounded-[2px] p-[1px] border border-slate-200/50 text-indigo-600 shadow-xs" />
      </span>
    );
    case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-indigo-600" />;
    case 'Users': return <Users className="w-5 h-5 text-indigo-600" />;
    case 'TrendingUp': return <Database className="w-5 h-5 text-indigo-600" />; // Fallback to database
    case 'Briefcase': return <Briefcase className="w-5 h-5 text-indigo-600" />;
    case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
    case 'UserCheck': return <UserCheck className="w-5 h-5 text-indigo-600" />;
    case 'Award': return <Award className="w-5 h-5 text-indigo-600" />;
    case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-indigo-600" />;
    case 'Building': return <Building className="w-5 h-5 text-indigo-600" />;
    case 'Laptop': return <Laptop className="w-5 h-5 text-indigo-600" />;
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-indigo-600" />;
    case 'Factory': return <Factory className="w-5 h-5 text-indigo-600" />;
    case 'HardHat': return <HardHat className="w-5 h-5 text-indigo-600" />;
    case 'Store': return <Store className="w-5 h-5 text-indigo-600" />;
    case 'Coins': return <Coins className="w-5 h-5 text-indigo-600" />;
    case 'Rocket': return <Rocket className="w-5 h-5 text-indigo-600" />;
    default: return <Landmark className="w-5 h-5 text-indigo-600" />;
  }
};

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
  openQuote: () => void;
}

export default function HomeView({ setCurrentPage, openConsultation, openQuote }: HomeViewProps) {
  // FAQ accordion toggles (indices)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // States for Interactive Cost & ROI Calculator
  const [roleType, setRoleType] = useState<'bookkeeper' | 'junior' | 'senior' | 'tax' | 'cfo'>('bookkeeper');
  const [employeeCount, setEmployeeCount] = useState<number>(2);

  // State for Interactive Capability Deck
  const [activeCapabilityTab, setActiveCapabilityTab] = useState<number>(0);

  const handlePageRedirect = (page: Page, anchorId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          const yOffset = -110;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const countriesServed = [
    { name: 'United States', flag: '🇺🇸', accent: 'USA Delaware LLC Base' },
    { name: 'United Kingdom', flag: '🇬🇧', accent: 'HMRC VAT Alignment' },
    { name: 'Canada', flag: '🇨🇦', accent: 'PIPEDA Privacy Compliant' },
    { name: 'Australia', flag: '🇦🇺', accent: 'STP & Superannuation' },
    { name: 'United Arab Emirates', flag: '🇦🇪', accent: 'Corporate Tax Ready' }
  ];

  // Pricing constants for Interactive Cost Calculator
  const pricingData = {
    bookkeeper: { label: 'Junior Bookkeeper', onshore: 4800, offshore: 1500 },
    junior: { label: 'Junior Accountant', onshore: 5500, offshore: 1800 },
    senior: { label: 'Senior Accountant / CA', onshore: 7200, offshore: 2400 },
    tax: { label: 'Tax Prep Specialist', onshore: 6500, offshore: 2100 },
    cfo: { label: 'Virtual CFO Support', onshore: 12000, offshore: 3800 }
  };

  const currentRole = pricingData[roleType];
  const onshoreCost = currentRole.onshore * employeeCount;
  const offshoreCost = currentRole.offshore * employeeCount;
  const monthlySavings = onshoreCost - offshoreCost;
  const yearlySavings = monthlySavings * 12;
  const savingPercentage = Math.round((monthlySavings / onshoreCost) * 100);

  return (
    <div className="pt-20">

      {/* 1. HERO SECTION */}
      <section className="relative text-navy-950 overflow-hidden py-16 sm:py-24 lg:py-28 bg-white border-b border-slate-100" id="hero-section">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl lg:max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="font-serif text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-navy-950 tracking-tight leading-tight"
            >
              Scale Your Capacity<br />
              & Slash Your Local Overhead.<br />
              <span className="text-[#3B5998]">We'll Handle the Numbers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="text-slate-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Elite white-label accounting, bookkeeping, auditing, and back-office offshore services. Our expert, CA/CPA-led teams seamlessly manage your daily workflows and full compliance across the US, UK, Canada, and Australia—delivering strict US GAAP & IFRS precision at a fraction of the cost of an in-house hire.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
            >
              <button
                onClick={openConsultation}
                className="bg-[#007cff] hover:bg-blue-600 text-white font-extrabold text-sm sm:text-base tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-500/15 hover:scale-[1.03] active:scale-95 transition-all uppercase cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* COMPLIANCE STRIP */}
      <div className="bg-navy-950 text-white py-6 md:py-8 shadow-inner border-y border-navy-800/60 relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-base md:text-lg lg:text-xl font-bold flex flex-wrap justify-center items-center gap-3 sm:gap-4 tracking-wide">
          <span className="flex items-center gap-3">
            <svg className="w-6 h-6 md:w-7 md:h-7 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="verified-compliance-shield-icon">
              <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" fill="#0e1b2e" stroke="#007cff" strokeWidth="2" strokeLinejoin="round" />
              <path d="M9 11.5l2 2 4-4" stroke="#007cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white">Fully Compliant with:</span>
          </span>
          <span className="bg-navy-900 border border-navy-800 text-indigo-200 px-3 py-1.5 rounded font-bold font-mono text-sm md:text-base shadow-sm">US GAAP</span>
          <span className="text-[#007cff]/60 font-bold">|</span>
          <span className="bg-navy-900 border border-navy-800 text-indigo-200 px-3 py-1.5 rounded font-bold font-mono text-sm md:text-base shadow-sm">IFRS</span>
          <span className="text-[#007cff]/60 font-bold">|</span>
          <span className="bg-navy-900 border border-navy-800 text-indigo-200 px-3 py-1.5 rounded font-bold font-mono text-sm md:text-base shadow-sm">IRS Guidelines</span>
          <span className="text-[#007cff]/60 font-bold">|</span>
          <span className="bg-navy-900 border border-navy-800 text-indigo-200 px-3 py-1.5 rounded font-bold font-mono text-sm md:text-base shadow-sm">HMRC Frameworks</span>
          <span className="text-[#007cff]/60 font-bold">|</span>
          <span className="bg-navy-900 border border-navy-800 text-indigo-200 px-3 py-1.5 rounded font-bold font-mono text-sm md:text-base shadow-sm">ATO Standards</span>
        </div>
      </div>





      {/* 2.5 OPERATIONAL BOTTLENECKS SECTION */}
      <section className="py-20 bg-blue-50 relative overflow-hidden border-t border-slate-200/60" id="bottlenecks-section">
        {/* Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,159,28,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,124,255,0.02),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black leading-tight">
              Reclaim Your Time. Scale Your Firm’s Delivery Capacity.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Item 1 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Capacity Bottlenecks & High Cost of Local Hiring</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[100px] sm:min-h-[110px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE CHALLENGE</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Finding qualified local accountants in the US, UK, Canada, or Australia is slow, hyper-competitive, and incredibly expensive.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR APPROACH</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    We provide instant access to qualified, remote CA/CPA-led teams to scale your accounting capacity on demand, cutting your operational overhead.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Bookkeeping Backlogs</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[100px] sm:min-h-[110px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE CHALLENGE</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Falling behind on daily data entry, ledger maintenance, and bank reconciliations stalls your operational speed and destroys client trust.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR APPROACH</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    Our team takes over real-time bookkeeping, ledger clean-ups, and daily accounting maintenance, keeping your financial records pristine.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Tax Compliance Stress</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[100px] sm:min-h-[110px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE CHALLENGE</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Navigating evolving international tax deadlines or miscalculating corporate filings leads to brutal compliance penalties.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR APPROACH</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    Get precise, region-specific taxation preparation and filing support tailored directly to IRS, HMRC, CRA, and ATO regulations.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Complex Auditing Support & Financial Reporting</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[100px] sm:min-h-[110px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE CHALLENGE</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    When peak audit season hits, firm partners get dragged into tedious sheet verification and drafting reports instead of focusing on growth.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR APPROACH</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    Our experienced teams handle the heavy lifting of audit prep, working paper verification, and reporting compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* 11.8 INFINITE SOFTWARE RIBBON LOOP */}
      <SoftwareRibbon />

      {/* OUR CORE VALUES */}
      <section className="py-24 bg-white text-slate-800 border-t border-slate-200/60 relative overflow-hidden" id="core-values-section">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(241,159,28,0.02),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,124,255,0.02),transparent_60%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black leading-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Value 1 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Ironclad Data Security & Compliance</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>OUR COMMITMENT</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    We protect your financial data with the same rigor as an enterprise bank. Security is embedded in every layer of our operations to ensure total peace of mind.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>WHAT THIS MEANS FOR YOU</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    Your sensitive data stays in secure cloud environments with AES 256-bit encryption, strict multi-factor authentication, and zero-local-storage policies adhering to US, UK, CA, and AU privacy laws.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Absolute Quality & CPA-Grade Accuracy</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>OUR COMMITMENT</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Near enough is not good enough in compliance. We deliver pristine, audit-ready financials that match the rigorous standards of your local regulatory bodies.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>WHAT THIS MEANS FOR YOU</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    Workflows governed strictly by US GAAP & IFRS standards. Every ledger, reconciliation, and tax filing undergoes multi-tier reviews ensuring total compliance with IRS, HMRC, CRA, and ATO.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Client-Centric Scale & Responsiveness</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>OUR COMMITMENT</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    We don't operate as a detached vendor; we integrate seamlessly as your dedicated back office. Your business growth and operational speed are our primary metrics.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>WHAT THIS MEANS FOR YOU</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    You get a dedicated account manager and guaranteed overlapping business hours, ensuring rapid response times via Slack, Teams, or email to scale your capacity instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Radical Integrity & Process Transparency</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>OUR COMMITMENT</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    We believe in absolute clarity in our workflows, reporting, and pricing. Transparency means you always know who is handling your books with zero hidden fees.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>WHAT THIS MEANS FOR YOU</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    While your financial data remains entirely locked down and secure from the outside world, you retain 100% visibility into our progress through real-time tracking and audit trails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-blue-50 border-t border-b border-slate-200/60" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black leading-tight">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Choose 1 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Guaranteed Turnaround & Timely Service Deliveries</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE REALITY</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    In accounting and compliance, a missed deadline means a lost client or a severe financial penalty.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR ADVANTAGE</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    We operate on strict, contractually backed SLAs. Overnight production cycles mean you upload client files at the close of your business day and receive them completed and verified next morning.
                  </p>
                </div>
              </div>
            </div>

            {/* Choose 2 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Tech-Driven Innovations & Modern Systems</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE REALITY</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    You shouldn't have to change your entire technology stack just to work with an offshore partner.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR ADVANTAGE</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    We leverage advanced cloud tools, practice management platforms, and smart AI-assisted validation workflows to eliminate manual data entry errors and maximize processing speed.
                  </p>
                </div>
              </div>
            </div>

            {/* Choose 3 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Tailor-Made Operational Systems (Custom Solutions)</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE REALITY</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Every accounting firm has a unique way of managing working papers, communication, and client onboarding.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR ADVANTAGE</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    We build a custom operational blueprint for your firm—adapting entirely to your local cloud environment, ClickUp/Asana task boards, and internal checklists.
                  </p>
                </div>
              </div>
            </div>

            {/* Choose 4 */}
            <div className="bg-white border border-slate-200/60 border-l-4 border-l-indigo-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full p-6 sm:p-8">
              <div className="min-h-[104px] sm:min-h-[112px] lg:min-h-[116px] flex items-start pb-3 border-b border-slate-100/80 mb-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black leading-tight">Seamless Time-Zone Synchronization</h3>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="min-h-[140px] sm:min-h-[150px] lg:min-h-[155px] space-y-1.5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    <span>THE REALITY</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Waiting 24 hours just to get a simple question answered destroys your daily operational speed.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider font-mono">
                    <span>OUR ADVANTAGE</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    Our teams maintain dedicated overlapping hours with the US, UK, Canada, and Australia—enabling live Slack or Teams messages during your standard workday.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11.5 CLIENT REVIEWS & TESTIMONIALS */}
      <section className="py-16 bg-white border-t border-slate-200/80" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header styled exactly like reference image but slightly more compact */}
          <div className="text-left space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0e1b2e] tracking-tight">
              Clients Testimonials
            </h2>
            <div className="w-16 h-1 bg-[#007cff]"></div>
          </div>

          {/* Single-column vertical stack of high-impact reviews aligned with wide layout */}
          <div className="space-y-6">

            {/* Review 1 */}
            <div className="bg-white border border-slate-200/70 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  "I love working with you!!!! Your team has been very professional, courteous, and prompt in helping me handle the workload of my firm. Resolving many special and complex tasks that are beneficial to my firm."
                </p>

                <div className="pt-1">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#0e1b2e]">Shlomi Golan</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Managing Director, Golan & Associates CPA • Boston, USA</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-slate-200/70 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  "Aum's remote bookkeepers and tax assistants changed the way we scale. Our high-growth Shopify e-commerce brand was completely overwhelmed by high-volume daily transactions, inventory reconciliation, and multi-state US sales tax compliance. They run exactly like our in-house staff and saved us $65,000 in onshore hiring costs in our first year alone."
                </p>

                <div className="pt-1">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#0e1b2e]">Sarah Jenkins</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Chief Financial Officer, Apex Brands LLC • London, UK</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-slate-200/70 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  "Our dental clinic chain grew too fast, leaving us with a messy 9-month backlog of raw bookkeeping and complex payroll. Aum's team set up secure Canadian virtual desktops, conformed fully to PIPEDA privacy guidelines, and cleared the entire backlog within weeks. We now get perfect weekly reconciliations and board-ready reports early every single month."
                </p>

                <div className="pt-1">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#0e1b2e]">Dr. Michael Chen</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Founder & Managing Director, Evergreen Medical Network • Vancouver, Canada</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white border border-slate-200/70 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  "Managing variable job costing, complex subcontractor single-touch payroll (STP), and heavy equipment depreciation was stalling our project deliveries. By routing our raw data sheets directly to Aum's dedicated Australian accounting desk, we achieved immediate, real-time site profitability controls with pristine compliance."
                </p>

                <div className="pt-1">
                  <h4 className="text-base sm:text-lg font-extrabold text-[#0e1b2e]">James MacInerney</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">Chief Operating Officer, Vanguard Engineering Ltd • Melbourne, Australia</p>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
              onClick={openConsultation}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-base font-extrabold tracking-wider px-8 py-4 rounded-lg shadow-sm uppercase cursor-pointer transition-colors duration-200"
            >
              Partner With Us Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
