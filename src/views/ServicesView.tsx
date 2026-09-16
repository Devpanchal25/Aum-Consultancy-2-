import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { SERVICES } from '../data';
import { SUB_SERVICES, SubService } from '../servicesData';
import SafeImage from '../components/SafeImage';
import {
  Calculator, FileText, Percent, ShieldAlert, Users, TrendingUp,
  Briefcase, Layers, UserCheck, Award, ArrowRight, Check,
  Clock, ShieldCheck, ClipboardCheck, Sparkles, Server, ChevronRight,
  ChevronDown, Lightbulb, AlertTriangle, Phone, HelpCircle, Receipt, ReceiptText,
  Laptop, Home, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
  openQuote: () => void;
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  selectedSubServiceId?: string;
  setSelectedSubServiceId?: (id: string) => void;
}

const getIconComponent = (name: string, sizeClass = "w-5 h-5", colorClass = "text-[#007cff]") => {
  switch (name) {
    case 'Calculator': return <Calculator className={`${sizeClass} ${colorClass}`} />;
    case 'FileText': return <FileText className={`${sizeClass} ${colorClass}`} />;
    case 'Percent': return <Percent className={`${sizeClass} ${colorClass}`} />;
    case 'Receipt': return (
      <span className="relative inline-flex items-center justify-center">
        <ReceiptText className={`${sizeClass} ${colorClass} opacity-95`} />
        <Calculator className="absolute -bottom-1 -right-1 w-[55%] h-[55%] min-w-[10px] min-h-[10px] bg-white rounded-[2px] p-[1.5px] border border-slate-200/50 text-[#007cff] shadow-xs" />
      </span>
    );
    case 'ShieldAlert': return <ShieldAlert className={`${sizeClass} ${colorClass}`} />;
    case 'Users': return <Users className={`${sizeClass} ${colorClass}`} />;
    case 'TrendingUp': return <TrendingUp className={`${sizeClass} ${colorClass}`} />;
    case 'Briefcase': return <Briefcase className={`${sizeClass} ${colorClass}`} />;
    case 'Layers': return <Layers className={`${sizeClass} ${colorClass}`} />;
    case 'UserCheck': return <UserCheck className={`${sizeClass} ${colorClass}`} />;
    case 'Award': return <Award className={`${sizeClass} ${colorClass}`} />;
    case 'Laptop': return <Laptop className={`${sizeClass} ${colorClass}`} />;
    case 'Home': return <Home className={`${sizeClass} ${colorClass}`} />;
    case 'Globe': return <Globe className={`${sizeClass} ${colorClass}`} />;
    default: return <Calculator className={`${sizeClass} ${colorClass}`} />;
  }
};

const renderFormattedText = (text: string) => {
  if (!text) return text;

  // Clean up tabs, leading/trailing whitespace
  let cleaned = text.replace(/^\t+/, '').trim();

  const colonIndex = cleaned.indexOf(': ');
  if (colonIndex > 0 && colonIndex < 250) {
    let rawTitle = cleaned.substring(0, colonIndex + 1);
    let rest = cleaned.substring(colonIndex + 1);

    // Strip double quotes from title and rest
    rawTitle = rawTitle.replace(/"/g, '').trim();
    rest = rest.replace(/^"+/, '').trim();

    return (
      <>
        <strong className="font-bold text-navy-950 font-inter">{rawTitle} </strong>
        <span className="font-inter">{rest}</span>
      </>
    );
  }

  const arrowIndex = cleaned.indexOf(' → ');
  if (arrowIndex > 0 && arrowIndex < 250) {
    let rawTitle = cleaned.substring(0, arrowIndex);
    let rest = cleaned.substring(arrowIndex + 3);

    // Strip double quotes from title and rest
    rawTitle = rawTitle.replace(/"/g, '').trim();
    rest = rest.replace(/^"+/, '').trim();

    return (
      <>
        <strong className="font-bold text-navy-950 font-inter">{rawTitle} → </strong>
        <span className="font-inter">{rest}</span>
      </>
    );
  }

  // Fallback: strip double quotes if present
  return cleaned.replace(/"/g, '');
};

const TRANSITION_FAQS = [
  {
    question: "How do we transition our existing financial data to an offshore team without disruption?",
    answer: "We follow a structured 3-phase onboarding playbook. Phase 1 (Access & Audit): Secure integration via dedicated VPN or multi-factor cloud access. Phase 2 (Shadowing & Documentation): We record live screen capture walkthroughs, map your existing chart of accounts, and compile custom Standard Operating Procedures (SOPs). Phase 3 (Parallel Run): Our offshore team runs parallel to your local team for 1-2 weeks to ensure absolute consistency and CPA-grade accuracy before complete sign-off."
  },
  {
    question: "What are the tax implications of hiring an offshore team? Are we subject to dual taxation?",
    answer: "No, there is no dual taxation risk. Because Aum Consultancy operates as an offshore whitelabel BPO partner, your payments are structured as standard professional services fees. This is an ordinary, fully deductible business expense under local tax laws (such as IRS rules in the US). We provide transparent corporate invoicing and complete Form W-8BEN-E documentation, eliminating payroll taxes, healthcare mandates, and benefits overhead."
  },
  {
    question: "How does Aum Consultancy handle multi-state economic nexus and regional taxation?",
    answer: "Our specialized tax compliance analysts actively monitor state-level economic nexus thresholds, sales taxes, and regional employment laws. We use industry-standard platforms (such as Avalara, TaxJar, or Vertex) to compute multi-jurisdictional liabilities accurately, preparing draft filings that your in-house CPA or finance lead can authorize and submit with a single click."
  },
  {
    question: "How do you handle software licenses and proprietary platform access?",
    answer: "Our team is software-agnostic and highly proficient in QuickBooks, Xero, NetSuite, Zoho Books, Sage, Hubdoc, and more. For proprietary databases or specialized custom ERP systems, we set up secure virtual machines (VMs) with strictly limited user-level credentials. You do not need to buy new software licenses; we utilize your existing cloud seats with full encryption."
  },
  {
    question: "What is the typical timeline to onboard a dedicated offshore accountant?",
    answer: "We can deploy individual bookkeeping assistants or tax processors within 3 to 5 business days. For larger dedicated whitelabel pods (5+ FTEs) or fully specialized audit prep teams, onboarding takes 10 to 14 days. This includes robust process shadowing, custom software configuration, supervisor assignment, and mock-run verification."
  },
  {
    question: "How do we communicate with our offshore team and track daily output?",
    answer: "Your dedicated offshore staff operates on flexible schedules to maximize timezone overlap. You can reach them directly via Slack, Microsoft Teams, Zoom, or email during your standard business hours. Additionally, we provide granular daily production reports and verified timesheets with task-level tracking, giving you total visibility into work volume and efficiency."
  }
];

export default function ServicesView({
  setCurrentPage,
  openConsultation,
  openQuote,
  selectedServiceId,
  setSelectedServiceId,
  selectedSubServiceId,
  setSelectedSubServiceId
}: ServicesViewProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const hasScrolledRef = useRef<string | null>(null);

  const handleCategoryChange = (catId: string) => {
    if (setSelectedServiceId) {
      setSelectedServiceId(catId);
    }
    if (setSelectedSubServiceId) {
      setSelectedSubServiceId('');
    }

    if (catId === 'accounting') navigate('/services/accounting-bookkeeping');
    else if (catId === 'audit') navigate('/services/audit-assurance');
    else if (catId === 'tax') navigate('/services/tax-services');
    else if (catId === 'other') navigate('/services/cfo-advisory');
    else if (catId === 'offshore-team') navigate('/services/build-offshore-team');
  };

  // Determine the active category based on the URL route
  let activeCategoryId = 'accounting';
  const path = location.pathname;
  if (path.startsWith('/services/accounting-bookkeeping')) {
    activeCategoryId = 'accounting';
  } else if (path.startsWith('/services/audit-assurance')) {
    activeCategoryId = 'audit';
  } else if (path.startsWith('/services/tax-services')) {
    activeCategoryId = 'tax';
  } else if (path.startsWith('/services/cfo-advisory')) {
    activeCategoryId = 'other';
  } else if (path.startsWith('/services/build-offshore-team') || path.startsWith('/build-your-team')) {
    activeCategoryId = 'offshore-team';
  } else {
    activeCategoryId = ['accounting', 'audit', 'tax', 'other', 'offshore-team'].includes(selectedServiceId)
      ? selectedServiceId
      : 'accounting';
  }

  // Determine active sub-service from the URL route
  let activeSubServiceId = '';
  if (path.includes('/hire-accountant')) activeSubServiceId = 'hire-accountant';
  else if (path.includes('/hire-bookkeeper')) activeSubServiceId = 'hire-bookkeeper';
  else if (path.includes('/hire-tax-preparer')) activeSubServiceId = 'hire-tax-preparer';
  else if (path.includes('/hire-tax-reviewer')) activeSubServiceId = 'hire-tax-reviewer';
  else if (path.includes('/hire-virtual-cfo')) activeSubServiceId = 'hire-virtual-cfo';
  else if (path.includes('/hire-account-supervisor')) activeSubServiceId = 'hire-account-supervisor';
  else if (path.includes('/hire-audit-support-staff')) activeSubServiceId = 'hire-audit-support';
  else if (path.includes('/hire-payroll-manager')) activeSubServiceId = 'hire-payroll-manager';
  else if (path.includes('/hire-billing-executive')) activeSubServiceId = 'hire-billing-executive';
  else if (path.includes('/hire-accounts-receivable-specialist')) activeSubServiceId = 'hire-ar-specialist';
  else if (path.includes('/hire-executive-assistant')) activeSubServiceId = 'hire-executive-assistant';
  else if (selectedSubServiceId && activeCategoryId !== 'offshore-team') {
    activeSubServiceId = selectedSubServiceId;
  }

  const activeCategory = SERVICES.find(s => s.id === activeCategoryId) || SERVICES[0];

  // Get all 19 sub-services matching the active category
  const activeSubServices = SUB_SERVICES.filter(s => s.category === activeCategoryId);

  // Keep track of which sub-service is expanded. Expand the first one by default when category changes.
  const [expandedSubServiceId, setExpandedSubServiceId] = useState<string>('');
  const [openTransitionFaqIndex, setOpenTransitionFaqIndex] = useState<number | null>(0);
  const [isClosedByUser, setIsClosedByUser] = useState<boolean>(false);

  // Reset isClosedByUser when the category changes
  useEffect(() => {
    setIsClosedByUser(false);
  }, [activeCategoryId]);

  useEffect(() => {
    const isClosedRouteState = location.state?.isClosedByUser === true;
    if (activeSubServiceId) {
      setExpandedSubServiceId(activeSubServiceId);
      setIsClosedByUser(false);

      // Auto scroll to the expanded sub service on load/change starting cleanly from its top title
      const timer = setTimeout(() => {
        const el = document.getElementById(activeSubServiceId);
        if (el) {
          const yOffset = -110; // Clear fixed navbar and upper contact bar
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);

      return () => clearTimeout(timer);
    } else {
      if (isClosedByUser || isClosedRouteState) {
        setExpandedSubServiceId('');
      } else if (activeSubServices.length > 0) {
        setExpandedSubServiceId(activeSubServices[0].id);
      }
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [activeCategoryId, activeSubServiceId, location.pathname, location.state, isClosedByUser]);

  // Sync state upward in case parents use it
  useEffect(() => {
    if (setSelectedServiceId && activeCategoryId !== selectedServiceId) {
      setSelectedServiceId(activeCategoryId);
    }
    if (setSelectedSubServiceId && activeSubServiceId !== selectedSubServiceId) {
      setSelectedSubServiceId(activeSubServiceId);
    }
  }, [activeCategoryId, activeSubServiceId, selectedServiceId, selectedSubServiceId]);

  // Category Banner Images
  const categoryBanners: Record<string, string> = {
    accounting: 'https://images.unsplash.com/photo-1554224155-6b99479a49d2?auto=format&fit=crop&q=80&w=1200&h=400',
    audit: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200&h=400',
    tax: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fa98?auto=format&fit=crop&q=80&w=1200&h=400',
    other: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200&h=400',
    'offshore-team': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200&h=400',
  };

  return (
    <div className="pt-20 font-inter">



      {/* 2. Detailed Sub-Services Explorer */}
      <section className="py-20 bg-white" id="services-explorer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Detail Panel and Sub-Services Explorer */}
          <div className="space-y-8" id="sub-services-explorer">

            {/* Category Tab Switcher */}
            <div className="flex overflow-x-auto pb-4 border-b border-slate-100 gap-2 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-x-visible sm:justify-center">
              {SERVICES.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-libre font-bold text-sm uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer snap-start ${isActive
                      ? 'service-tab-active border-[#0e1b2e] shadow-md'
                      : 'bg-slate-50 border-slate-200/60 text-slate-600 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    style={!isActive ? {} : undefined}
                  >
                    {getIconComponent(cat.iconName, 'w-3.5 h-3.5', isActive ? 'text-white' : 'text-[#007cff]')}
                    <span>
                      {cat.id === 'accounting' && 'Accounting'}
                      {cat.id === 'audit' && 'Audit'}
                      {cat.id === 'tax' && 'Tax Services'}
                      {cat.id === 'other' && 'CFO Advisory'}
                      {cat.id === 'offshore-team' && 'Build Your Team'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Domain Overview Banner Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm bg-slate-50/70 text-navy-900">
              <div className="relative p-6 sm:p-10 space-y-3 z-10">
                <h2 className="font-libre text-3xl sm:text-4xl font-bold text-[#0e1b2e]">{activeCategory.title} Overview</h2>
                <p className="font-inter text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-5xl">
                  {activeCategory.longDesc}
                </p>
              </div>
            </div>

            {/* Sub-Services Expandable Accordion List */}
            <div className="space-y-4">

              {activeSubServices.map((sub) => {
                const isExpanded = expandedSubServiceId === sub.id;
                const isAccounting = activeCategoryId === 'accounting' || activeCategoryId === 'tax' || sub.id === 'audit-assurance-support' || activeCategoryId === 'other' || activeCategoryId === 'offshore-team';

                return (
                  <div
                    key={sub.id}
                    id={sub.id}
                    className={`scroll-mt-28 sm:scroll-mt-32 ${isAccounting
                      ? `rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded
                        ? 'border-[#007cff] bg-white shadow-lg ring-1 ring-[#007cff]/20'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                      }`
                      : `bg-blue-50/45 rounded-2xl border transition-all overflow-hidden ${isExpanded ? 'border-[#007cff] bg-white shadow-md' : 'border-blue-100/60 hover:border-blue-200'
                      }`
                      }`}
                  >
                    {/* Header Toggle */}
                    <button
                      id={`btn-${sub.id}`}
                      aria-expanded={isExpanded}
                      aria-controls={`panel-${sub.id}`}
                      onClick={() => {
                        if (activeCategoryId === 'offshore-team') {
                          if (isExpanded) {
                            setIsClosedByUser(true);
                            setExpandedSubServiceId('');
                            navigate('/build-your-team', { state: { isClosedByUser: true } });
                          } else {
                            setIsClosedByUser(false);
                            setExpandedSubServiceId(sub.id);
                            if (sub.id === 'hire-audit-support') {
                              navigate('/build-your-team/hire-audit-support-staff');
                            } else if (sub.id === 'hire-ar-specialist') {
                              navigate('/build-your-team/hire-accounts-receivable-specialist');
                            } else {
                              navigate(`/build-your-team/${sub.id}`);
                            }
                          }
                        } else {
                          const nextState = !isExpanded;
                          setExpandedSubServiceId(isExpanded ? '' : sub.id);
                          if (nextState) {
                            setTimeout(() => {
                              const el = document.getElementById(sub.id);
                              if (el) {
                                const yOffset = -120;
                                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                              }
                            }, 100);
                          }
                        }
                      }}
                      className={isAccounting
                        ? "w-full flex justify-between items-center p-6 sm:p-7 text-left transition-colors cursor-pointer group"
                        : "w-full flex justify-between items-center p-5 text-left transition-colors cursor-pointer"
                      }
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        <div className={isAccounting
                          ? `p-3 rounded-xl border shadow-sm transition-all duration-300 ${isExpanded ? 'bg-[#007cff] border-[#005fcc] text-white' : 'bg-white border-slate-200 text-[#007cff] group-hover:border-slate-300'
                          }`
                          : `p-2 rounded-xl border shadow-sm ${isExpanded ? 'bg-navy-900 border-navy-950 text-white' : 'bg-white'}`
                        }>
                          {getIconComponent(sub.iconName, isAccounting ? 'w-5 h-5' : 'w-4 h-4', isExpanded && isAccounting ? 'text-white' : 'text-[#007cff]')}
                        </div>
                        <div>
                          <h3 className={isAccounting
                            ? "font-libre text-[18.1px] sm:text-[20.1px] md:text-[24.1px] font-bold text-navy-900 tracking-tight"
                            : "font-libre text-[16.1px] sm:text-[18.1px] font-bold text-navy-900"
                          }>
                            {sub.title}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown className={`text-slate-400 transition-transform duration-300 group-hover:text-slate-600 ${isExpanded ? 'rotate-180 text-[#007cff]' : ''} ${isAccounting ? 'w-5 h-5' : 'w-4 h-4'}`} />
                    </button>

                    {/* Expandable Content Panel */}
                    {isExpanded && (
                      <div
                        id={`panel-${sub.id}`}
                        role="region"
                        aria-labelledby={`btn-${sub.id}`}
                        className={isAccounting
                          ? "border-t border-slate-200 p-6 sm:p-8 space-y-8 animate-fadeIn"
                          : "border-t border-slate-150 p-5 sm:p-8 space-y-6 animate-fadeIn"
                        }
                      >

                        {/* 1. Interactive Image Header & Catchphrase */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          <div className="col-span-12 md:col-span-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video md:aspect-square">
                            <SafeImage
                              src={sub.image}
                              alt={sub.title}
                              className="w-full h-full object-cover"
                              category={activeCategoryId === 'accounting' ? 'accounting' : activeCategoryId === 'tax' ? 'tax' : activeCategoryId === 'audit' ? 'audit' : 'other'}
                            />
                          </div>
                          <div className="col-span-12 md:col-span-8 space-y-4">
                            <span
                              style={{ color: '#4682B4' }}
                              className={isAccounting
                                ? "inline-block text-[18.1px] sm:text-[20.1px] bg-blue-50 border border-blue-200/80 px-4 py-3 rounded-lg font-inter font-bold"
                                : "inline-block text-[18.1px] sm:text-[20.1px] bg-blue-50 border border-blue-100 px-4 py-3 rounded-lg font-inter font-bold"
                              }
                            >
                              {sub.catchphrase}
                            </span>
                            <p className={isAccounting
                              ? "font-inter text-[18.1px] sm:text-[20.1px] text-slate-700 leading-relaxed font-normal text-left"
                              : "font-inter text-[18.1px] sm:text-[20.1px] text-slate-600 leading-relaxed font-light"
                            }>
                              {sub.description}
                            </p>
                          </div>
                        </div>                           {/* 2. Checklists Grid or Structured Sections */}
                        {isAccounting && sub.accountingSections && sub.accountingSections.length > 0 ? (
                          <div className="space-y-6 pt-6 border-t border-slate-200">
                            {sub.accountingSections.map((section, sIdx) => {
                              if (section.type === 'checklist') {
                                return (
                                  <div key={sIdx} className="bg-slate-50/80 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
                                    <h4 className="font-libre text-lg sm:text-xl font-bold text-navy-900 flex items-center gap-2 border-b border-slate-200 pb-3 uppercase tracking-wider">
                                      <ClipboardCheck className="w-5 h-5 text-[#007cff]" />
                                      {section.title}
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                      {section.items?.map((item, itemIdx) => (
                                        <div key={itemIdx} className="font-inter flex gap-3 text-base sm:text-lg text-slate-700 leading-relaxed font-normal items-start">
                                          <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                                          <span>{renderFormattedText(item)}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              } else if (section.type === 'bullet') {
                                return (
                                  <div key={sIdx} className="bg-slate-50/80 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
                                    <h4 className="font-libre text-lg sm:text-xl font-bold text-navy-900 flex items-center gap-2 border-b border-slate-200 pb-3 uppercase tracking-wider">
                                      <ClipboardCheck className="w-5 h-5 text-[#007cff]" />
                                      {section.title}
                                    </h4>
                                    {section.text && (
                                      <p className="font-inter text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-left">
                                        {section.text}
                                      </p>
                                    )}
                                    <ul className="space-y-3 pl-1 list-none">
                                      {section.items?.map((item, itemIdx) => (
                                        <li key={itemIdx} className="font-inter flex gap-3 text-base sm:text-lg text-slate-700 leading-relaxed font-normal items-start">
                                          <span className="text-[#007cff] font-bold shrink-0 mt-0.5">✓</span>
                                          <span>{renderFormattedText(item)}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              } else if (section.type === 'nested-sections') {
                                return (
                                  <div key={sIdx} className="bg-slate-50/80 border border-slate-200 p-6 rounded-2xl space-y-5 shadow-xs">
                                    <h4 className="font-libre text-lg sm:text-xl font-bold text-navy-900 flex items-center gap-2 border-b border-slate-200 pb-3 uppercase tracking-wider">
                                      <ClipboardCheck className="w-5 h-5 text-[#007cff]" />
                                      {section.title}
                                    </h4>
                                    {section.text && (
                                      <p className="font-inter text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-left">
                                        {section.text}
                                      </p>
                                    )}
                                    <div className="grid grid-cols-1 gap-5">
                                      {section.subSections?.map((subSec, subIdx) => (
                                        <div key={subIdx} className="bg-white border border-slate-200/80 p-5 rounded-xl space-y-3 shadow-2xs">
                                          <h5 className="font-libre text-lg sm:text-xl font-bold text-navy-900 flex items-center gap-2 border-b border-slate-100 pb-2 uppercase tracking-wider">
                                            {subSec.title}
                                          </h5>
                                          {subSec.text && (
                                            <p className="font-inter text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-left">
                                              {subSec.text}
                                            </p>
                                          )}
                                          <ul className={`grid grid-cols-1 ${subSec.items?.length === 1 ? '' : 'md:grid-cols-2'} gap-x-6 gap-y-2.5 pl-1 list-none`}>
                                            {subSec.items?.map((item, itemIdx) => (
                                              <li key={itemIdx} className="font-inter flex gap-2.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal items-start">
                                                <span className="text-[#007cff] font-bold shrink-0 mt-0.5">✓</span>
                                                <span>{renderFormattedText(item)}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              } else if (section.type === 'grid') {
                                return (
                                  <div key={sIdx} className="bg-slate-50/80 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
                                    {section.title && (
                                      <h4 className="font-libre text-lg sm:text-xl font-bold text-navy-900 flex items-center gap-2 border-b border-slate-200 pb-3 uppercase tracking-wider">
                                        <ClipboardCheck className="w-5 h-5 text-[#007cff]" />
                                        {section.title}
                                      </h4>
                                    )}
                                    {section.text && (
                                      <p className="font-inter text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-left">
                                        {section.text}
                                      </p>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                                      {section.gridItems?.map((gItem, gIdx) => (
                                        <div key={gIdx} className="bg-white border border-slate-200 p-5 rounded-xl space-y-3 shadow-2xs hover:shadow-xs hover:border-[#007cff]/40 transition-all duration-300">
                                          <div className="bg-blue-50 text-[#007cff] p-2.5 rounded-lg w-fit">
                                            {getIconComponent(gItem.iconName, 'w-5 h-5', 'text-[#007cff]')}
                                          </div>
                                          <h5 className="font-libre text-base sm:text-lg font-bold text-navy-900 leading-snug">
                                            {gItem.title}
                                          </h5>
                                          <p className="font-inter text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-left">
                                            {gItem.text}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              } else {
                                // text-block or paragraph
                                const isDiagram = section.text && (section.text.includes('┌') || section.text.includes('─'));
                                return (
                                  <div key={sIdx} className="bg-slate-50/80 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
                                    {section.title && (
                                      <h4 className="font-libre text-lg sm:text-xl font-bold text-navy-900 flex items-center gap-2 border-b border-slate-200 pb-3 uppercase tracking-wider">
                                        <ClipboardCheck className="w-5 h-5 text-[#007cff]" />
                                        {section.title}
                                      </h4>
                                    )}
                                    {section.text && (
                                      isDiagram ? (
                                        <div className="bg-[#0e1b2e] border border-slate-800 p-5 rounded-xl overflow-x-auto shadow-inner">
                                          <pre className="font-mono text-[10px] sm:text-xs text-[#007cff] leading-normal whitespace-pre min-w-[500px] md:min-w-0">
                                            {section.text}
                                          </pre>
                                        </div>
                                      ) : (
                                        <p className="font-inter text-base sm:text-lg text-slate-700 leading-relaxed font-normal whitespace-pre-line text-left">
                                          {section.text}
                                        </p>
                                      )
                                    )}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        ) : (
                          <div className={isAccounting
                            ? "grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200"
                            : "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100"
                          }>
                            {sub.checklists.map((check, idx) => (
                              <div key={idx} className={isAccounting
                                ? "bg-slate-50/80 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs"
                                : "bg-slate-50 border border-slate-200/60 p-5 rounded-xl space-y-4"
                              }>
                                <span className={isAccounting
                                  ? "font-libre text-lg sm:text-xl font-bold text-navy-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-3"
                                  : "font-libre text-lg sm:text-xl font-extrabold text-navy-950 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2.5"
                                }>
                                  <ClipboardCheck className="w-5 h-5 text-[#007cff]" />
                                  {check.title}
                                </span>
                                <ul className="space-y-3 list-none">
                                  {check.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className={isAccounting
                                      ? "font-inter flex gap-3 text-[16.1px] sm:text-[18.1px] text-slate-700 leading-relaxed font-normal items-start"
                                      : "font-inter flex gap-2 text-[14.1px] sm:text-[16.1px] text-slate-600 leading-relaxed font-light"
                                    }>
                                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                                      <span>{renderFormattedText(item)}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* 4. Why Partner List */}
                        {sub.whyPartner && sub.whyPartner.length > 0 && (
                          <div className={isAccounting
                            ? "space-y-4 pt-6 border-t border-slate-200"
                            : "space-y-3 pt-4 border-t border-slate-100"
                          }>
                            <span className={isAccounting
                              ? "font-libre text-xs font-bold text-slate-500 uppercase tracking-widest block"
                              : "font-libre text-xs font-extrabold text-slate-400 uppercase tracking-widest block"
                            }>
                              {sub.whyPartnerTitle || "Key Competitive Advantage:"}
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {sub.whyPartner.map((why, wIdx) => (
                                <div key={wIdx} className={isAccounting
                                  ? "bg-white border border-slate-200 p-5 rounded-xl flex gap-3 items-start shadow-xs hover:border-slate-300 transition-colors"
                                  : "bg-white border border-slate-150 p-4 rounded-lg flex gap-3 items-start"
                                }>
                                  <div className="bg-emerald-50 text-emerald-600 p-1 rounded-lg mt-0.5 shrink-0">
                                    <Check className="w-4 h-4" />
                                  </div>
                                  <p className={isAccounting
                                    ? "font-inter text-sm sm:text-base text-slate-700 leading-relaxed font-normal"
                                    : "font-inter text-sm sm:text-base text-slate-600 leading-relaxed font-light"
                                  }>{renderFormattedText(why)}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 5. Did You Know (Above Line) */}
                        {sub.didYouKnow && activeCategoryId === 'tax' && (
                          <div className={isAccounting
                            ? "bg-blue-50/70 border border-blue-200/80 p-5 rounded-2xl flex gap-4 items-start mt-6"
                            : "bg-blue-50 border border-blue-200 p-4 rounded-xl flex gap-3 items-start mt-5"
                          }>
                            <div className={isAccounting
                              ? "bg-blue-100 text-[#007cff] p-2 rounded-xl shrink-0 mt-0.5 shadow-xs"
                              : "text-[#007cff] shrink-0 mt-0.5 animate-bounce"
                            }>
                              <Lightbulb className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <strong className={isAccounting
                                ? "font-libre text-sm text-blue-900 uppercase tracking-wider block font-bold"
                                : "font-libre text-sm text-blue-800 uppercase tracking-wider block font-bold"
                              }>{sub.didYouKnowTitle || 'Did You Know?'}</strong>
                              <p className={isAccounting
                                ? "font-inter text-sm sm:text-base text-slate-700 leading-relaxed font-normal"
                                : "font-inter text-sm sm:text-base text-slate-600 leading-relaxed font-light"
                              }>{sub.didYouKnow}</p>
                            </div>
                          </div>
                        )}

                        {/* 6. CTAs (Below Line) */}
                        <div className={isAccounting
                          ? "pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center"
                          : "pt-5 border-t border-slate-150 flex flex-wrap gap-3 w-full sm:w-auto"
                        }>
                          <a
                            href="tel:+919879161400"
                            className={isAccounting
                              ? "font-inter bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/10 hover:shadow-md cursor-pointer text-center"
                              : "font-inter bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-lg transition-colors uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                            }
                          >
                            <Phone className="w-4 h-4" /> Click to Call
                          </a>
                          <button
                            onClick={openConsultation}
                            className={isAccounting
                              ? "font-inter bg-[#007cff] hover:bg-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 uppercase tracking-wider shadow-sm shadow-blue-500/10 hover:shadow-md cursor-pointer text-center"
                              : "font-inter bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base px-5 py-3 rounded-lg transition-colors uppercase tracking-wider shadow-sm shadow-indigo-600/10"
                            }
                          >
                            {sub.ctaText || 'Schedule Consultation'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 Transition & Taxation FAQ Section */}
      <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200" id="services-faq-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Context Card */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <div className="space-y-3">
                <span className="font-libre text-sm text-[#007cff] uppercase tracking-widest font-extrabold block">TRANSITION & COMPLIANCE</span>
                <h2 className="font-libre text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
                  Demystifying the Offshore Leap
                </h2>
                <p className="font-inter text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  Moving financial operations offshore comes with valid questions about control, taxation, and setup. We answer the most common concerns transparently.
                </p>
              </div>

              <div className="bg-navy-900 text-white rounded-2xl p-6 border border-navy-800 space-y-5 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-xl"></div>
                <div className="space-y-2">
                  <span className="font-libre text-[9px] text-blue-400 uppercase tracking-wider block">HAVE MORE QUESTIONS?</span>
                  <h3 className="font-libre text-sm font-bold">Speak Directly with a Transition Specialist</h3>
                  <p className="font-inter text-[11px] text-slate-300 font-light leading-relaxed">
                    Every firm has unique regulatory and workflow requirements. Schedule a customized briefing with our transition team today.
                  </p>
                </div>
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={openConsultation}
                    className="font-inter w-full bg-[#007cff] hover:bg-blue-600 text-white text-sm sm:text-base font-bold py-3 rounded-lg transition-colors cursor-pointer text-center block uppercase tracking-wider shadow-sm shadow-blue-500/20"
                  >
                    Schedule Onboarding Briefing
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Accordion */}
            <div className="lg:col-span-8 space-y-4">
              {TRANSITION_FAQS.map((faq, idx) => {
                const isOpen = openTransitionFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl border transition-all overflow-hidden ${isOpen
                      ? 'border-blue-500/30 shadow-md shadow-blue-500/[0.02]'
                      : 'border-slate-200/80 hover:border-slate-300'
                      }`}
                  >
                    <button
                      onClick={() => setOpenTransitionFaqIndex(isOpen ? null : idx)}
                      className="w-full py-4 px-5 flex justify-between items-center text-left gap-4 transition-colors cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <HelpCircle className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-[#007cff]' : 'text-slate-400 group-hover:text-slate-600'
                          }`} />
                        <span className={`font-libre text-sm sm:text-base font-bold leading-snug transition-colors ${isOpen ? 'text-slate-950' : 'text-slate-700 group-hover:text-slate-950'
                          }`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`p-1 rounded-lg transition-colors shrink-0 ${isOpen ? 'bg-blue-500/10 text-[#007cff]' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'
                        }`}>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 font-inter text-sm sm:text-base text-slate-600 leading-relaxed font-light pl-12">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SLA Guarantees Banner */}
      <section className="bg-navy-900 text-white py-12 border-t border-navy-850" id="services-sla-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <Clock className="w-8 h-8 text-blue-500 shrink-0" />
              <div>
                <strong className="font-libre text-white block text-sm">Fast Turnaround Guarantee</strong>
                <span className="font-inter text-[11px] text-slate-400">All books cleared daily or within a pre-agreed 24-hour cycle.</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <ShieldCheck className="w-8 h-8 text-[#007cff] shrink-0" />
              <div>
                <strong className="font-libre text-white block text-sm">Professional Double Check</strong>
                <span className="font-inter text-[11px] text-slate-400">Zero entry errors. Formulated results reviewed by full-time CAs.</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-center text-center">
              <div className="w-full">
                <button
                  onClick={openConsultation}
                  className="font-inter bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm tracking-wider px-6 py-3.5 rounded-lg transition-colors uppercase block w-full text-center"
                >
                  Onboard Your First FTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
