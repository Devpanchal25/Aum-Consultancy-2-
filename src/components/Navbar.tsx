import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { SERVICES, INDUSTRIES, SERVICE_CATEGORIES } from '../data';
import Logo from './Logo';
import {
  Menu, X, ChevronDown, Phone, MessageSquare, ShieldCheck,
  ArrowRight, Landmark, Building, HeartPulse, Laptop, ShoppingBag,
  Calculator, FileText, Percent, ShieldAlert, Users, TrendingUp,
  Briefcase, Layers, UserCheck, Award, Linkedin, Twitter, Facebook, Instagram, Mail,
  Factory, HardHat, Coins, Receipt, ReceiptText
} from 'lucide-react';

interface NavbarProps {
  currentPage?: Page;
  setCurrentPage?: (page: Page) => void;
  openConsultation: () => void;
  openQuote: () => void;
  openNewsletter: () => void;
  setSelectedServiceId: (id: string) => void;
  setSelectedIndustryId: (id: string | null) => void;
  setSelectedSubServiceId?: (id: string) => void;
}

// Map service/industry string ID to Lucide Icon component for rich mega-menu rendering
const getIconComponent = (name: string) => {
  switch (name) {
    case 'Calculator': return <Calculator className="w-5 h-5 text-[#007cff]" />;
    case 'FileText': return <FileText className="w-5 h-5 text-[#007cff]" />;
    case 'Percent': return <Percent className="w-5 h-5 text-[#007cff]" />;
    case 'Receipt': return (
      <span className="relative inline-flex items-center justify-center w-5 h-5">
        <ReceiptText className="w-5 h-5 text-[#007cff] opacity-95" />
        <Calculator className="absolute -bottom-0.5 -right-0.5 w-[11px] h-[11px] bg-white rounded-[2px] p-[1px] border border-slate-200/50 text-[#007cff] shadow-xs" />
      </span>
    );
    case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#007cff]" />;
    case 'Users': return <Users className="w-5 h-5 text-[#007cff]" />;
    case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#007cff]" />;
    case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#007cff]" />;
    case 'Layers': return <Layers className="w-5 h-5 text-[#007cff]" />;
    case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#007cff]" />;
    case 'Award': return <Award className="w-5 h-5 text-[#007cff]" />;
    case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#007cff]" />;
    case 'Building': return <Building className="w-5 h-5 text-[#007cff]" />;
    case 'Laptop': return <Laptop className="w-5 h-5 text-[#007cff]" />;
    case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#007cff]" />;
    case 'Factory': return <Factory className="w-5 h-5 text-[#007cff]" />;
    case 'HardHat': return <HardHat className="w-5 h-5 text-[#007cff]" />;
    case 'Coins': return <Coins className="w-5 h-5 text-[#007cff]" />;
    default: return <Landmark className="w-5 h-5 text-[#007cff]" />;
  }
};

const mapTitleToSubServiceId = (title: string): string => {
  const t = title.toLowerCase().trim();

  // Accounting & Bookkeeping
  if (t.includes('backlog') || t.includes('bookkeeping & backlog')) return 'bookkeeping-backlog';
  if (t.includes('year-end') || t.includes('closing')) return 'year-end-closing';
  if (t.includes('payable') || t.includes('ap management')) return 'accounts-payable';
  if (t.includes('receivable') && !t.includes('hire')) {
    if (t.includes('optimization') || t.includes('ar optimization')) return 'accounts-receivable';
  }
  if (t.includes('payroll processing') || (t.includes('payroll') && !t.includes('hire'))) return 'payroll-processing';

  // Audit
  if (t.includes('audit support & assurance') || (t.includes('audit support') && !t.includes('hire'))) return 'audit-assurance-support';

  // Tax Services
  if (t.includes('s-corporation') || t.includes('1120-s')) return 's-corp-tax';
  if (t.includes('back-year tax') || t.includes('catch-up filing')) return 'back-year-tax';
  if (t.includes('individual & personal') || t.includes('personal tax')) return 'individual-tax';
  if (t.includes('c-corporation') || t.includes('form 1120') || t.includes('c-corp-tax')) return 'c-corp-tax';
  if (t.includes('llc') || t.includes('partnership') || t.includes('partnership tax')) return 'partnership-llc-tax';
  if (t.includes('multistate') || t.includes('multi-region')) return 'multistate-tax';
  if (t.includes('tax planning') || t.includes('strategic tax')) return 'tax-planning-advisory';
  if (t.includes('trust & fiduciary') || t.includes('fiduciary tax')) return 'trust-fiduciary-tax';

  // CFO Advisory & Virtual Assistant Support
  if (t.includes('fractional') || (t.includes('cfo') && !t.includes('hire'))) return 'fractional-cfo';
  if (t.includes('fp&a') || t.includes('performance dashboards')) return 'fpa-dashboards';
  if (t.includes('m&a') || t.includes('deal advisory')) return 'deal-advisory';
  if (t.includes('executive virtual admin') || (t.includes('virtual assistant') && !t.includes('hire'))) return 'virtual-assistant';
  if (t.includes('risk & corporate') || t.includes('risk-strategy')) return 'risk-strategy';

  // Offshore Team Roles (Hire roles)
  if (t.includes('hire') || t.includes('team')) {
    if (t.includes('accountant')) return 'hire-accountant';
    if (t.includes('bookkeeper')) return 'hire-bookkeeper';
    if (t.includes('preparer')) return 'hire-tax-preparer';
    if (t.includes('reviewer')) return 'hire-tax-reviewer';
    if (t.includes('cfo')) return 'hire-virtual-cfo';
    if (t.includes('supervisor')) return 'hire-account-supervisor';
    if (t.includes('audit')) return 'hire-audit-support';
    if (t.includes('payroll')) return 'hire-payroll-manager';
    if (t.includes('billing')) return 'hire-billing-executive';
    if (t.includes('receivable') || t.includes('receivables') || t.includes('ar-specialist')) return 'hire-ar-specialist';
    if (t.includes('assistant') || t.includes('head of company') || t.includes('virtual assistant')) return 'hire-executive-assistant';
  }

  // Fallback map checks
  if (t.includes('bookkeeper')) return 'hire-bookkeeper';
  if (t.includes('accountant')) return 'hire-accountant';

  return 'hire-accountant';
};

export default function Navbar({
  currentPage: propCurrentPage,
  setCurrentPage,
  openConsultation,
  openQuote,
  openNewsletter,
  setSelectedServiceId,
  setSelectedIndustryId,
  setSelectedSubServiceId
}: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPageFromPath = (p: string): Page => {
    if (p === '/' || p === '') return 'home';
    if (p.startsWith('/about')) return 'about';
    if (p.startsWith('/services') || p.startsWith('/build-your-team')) return 'services';
    if (p.startsWith('/industries')) return 'industries';
    if (p.startsWith('/security')) return 'security';
    if (p.startsWith('/resources/faqs')) return 'faq';
    if (p.startsWith('/resources')) return 'blog';
    if (p.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const currentPage = getCurrentPageFromPath(location.pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'industries' | 'resources' | 'hire' | 'about' | null>(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('accounting');

  // Track mobile accordions
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileHireOpen, setMobileHireOpen] = useState(false);
  const [mobilePageSectorsOpen, setMobilePageSectorsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    setIsOpen(false);
    setActiveMega(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (page) {
      case 'home': navigate('/'); break;
      case 'about': navigate('/about'); break;
      case 'services': navigate('/services/accounting-bookkeeping'); break;
      case 'industries': navigate('/industries'); break;
      case 'security': navigate('/security'); break;
      case 'blog': navigate('/resources/blogs'); break;
      case 'contact': navigate('/contact'); break;
      case 'faq': navigate('/resources/faqs'); break;
      default: navigate('/');
    }
  };

  const handleAboutSectionClick = (sectionId: string) => {
    setIsOpen(false);
    setActiveMega(null);
    if (location.pathname !== '/about') {
      navigate(`/about#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -110;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleFaqsClick = () => {
    setIsOpen(false);
    setActiveMega(null);
    navigate('/resources/faqs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">

      {/* Upper Info Top Bar with Phone, Email & LinkedIn */}
      <div className="bg-slate-50 border-b border-slate-200 text-slate-600 py-1 sm:py-1.5 text-[10px] min-[380px]:text-[11px] sm:text-xs font-medium">
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-6 lg:px-10 flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 sm:gap-5 min-w-0 overflow-hidden">
            <a href="tel:+919879161400" className="flex items-center gap-1 hover:text-[#007cff] transition-colors font-bold text-navy-900 shrink-0">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#007cff]" />
              <span>+91 9879161400</span>
            </a>
            <a href="mailto:aumconsulting.india@gmail.com" className="flex items-center gap-1 hover:text-[#007cff] transition-colors text-slate-700 min-w-0 truncate">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#007cff] shrink-0" />
              <span className="truncate">aumconsulting.india@gmail.com</span>
            </a>
          </div>
          <a href="https://www.linkedin.com/company/aum-consultancy-india/" target="_blank" rel="noreferrer" className="flex items-center gap-1 pl-1.5 sm:pl-2 border-l border-slate-300 text-slate-500 hover:text-[#007cff] transition-colors shrink-0" title="LinkedIn">
            <Linkedin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#007cff]" />
          </a>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav className={`w-full transition-all duration-300 border-b ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md border-slate-200/80 py-2.5 sm:py-3'
        : 'bg-white/90 backdrop-blur-sm border-slate-100 py-3 sm:py-4'
        }`}>
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-12 sm:h-14 gap-2">

            {/* Logo with explicit left alignment and spacing */}
            <div className="shrink min-w-0 mr-1 sm:mr-3 xl:mr-8 flex items-center">
              <Logo
                onClick={() => handleNavClick('home')}
                id="navbar-logo"
                className="shrink-0"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-3 xl:gap-6 shrink-0 whitespace-nowrap">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-[15px] xl:text-[16px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'home' ? 'text-[#007cff]' : 'text-slate-600'}`}
              >
                Home
              </button>

              {/* About Us Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega('about')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'about' ? 'text-[#007cff]' : 'text-slate-600'}`}
                >
                  About Us
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'about' ? 'rotate-180' : ''}`} />
                </button>

                {/* About Us Dropdown Panel */}
                {activeMega === 'about' && (
                  <div className="absolute top-full left-0 w-56 pt-2 z-50 animate-fadeIn">
                    <div className="bg-white border border-slate-200/80 shadow-2xl rounded-xl p-2 flex flex-col gap-0.5">
                      <button
                        onClick={() => handleAboutSectionClick('brand-story-section')}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        About Aum Consultancy
                      </button>
                      <button
                        onClick={() => handleAboutSectionClick('founders-section')}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        Leadership Team
                      </button>
                      <button
                        onClick={() => handleAboutSectionClick('about-security-section')}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        Security Standards
                      </button>
                      <button
                        onClick={() => handleAboutSectionClick('vision-mission-section')}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        Vision & Mission
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Mega Dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega('services')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'services' ? 'text-[#007cff]' : 'text-slate-600'}`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Services Mega Menu Panel */}
                {activeMega === 'services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[920px] max-w-[92vw] pt-2 z-50 animate-fadeIn">
                    <div className="bg-white border border-slate-200/80 shadow-2xl rounded-2xl grid grid-cols-12 overflow-hidden">

                      {/* Left Sidebar: Division Tabs */}
                      <div className="col-span-5 bg-slate-50 p-5 border-r border-slate-200/50 flex flex-col gap-1.5">
                        <div className="space-y-1">
                          {SERVICE_CATEGORIES.filter(cat => cat.id !== 'offshore-team').map((category) => {
                            const isSelected = activeCategoryTab === category.id;
                            return (
                              <div
                                key={category.id}
                                onMouseEnter={() => setActiveCategoryTab(category.id)}
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveMega(null);
                                  if (setSelectedSubServiceId) {
                                    setSelectedSubServiceId('');
                                  }
                                  if (category.id === 'accounting') navigate('/services/accounting-bookkeeping');
                                  else if (category.id === 'audit') navigate('/services/audit-assurance');
                                  else if (category.id === 'tax') navigate('/services/tax-services');
                                  else if (category.id === 'other') navigate('/services/cfo-advisory');
                                  else navigate('/services');
                                }}
                                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 relative group/tab ${isSelected
                                  ? 'bg-white shadow-md text-[#007cff] font-bold border-l-4 border-[#007cff] pl-4'
                                  : 'text-slate-600 hover:bg-slate-100/70 border-l-4 border-transparent hover:text-slate-900'
                                  }`}
                              >
                                <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${isSelected ? 'bg-blue-50 text-[#007cff]' : 'bg-slate-100 text-slate-500 group-hover/tab:bg-white group-hover/tab:text-[#007cff]'
                                  }`}>
                                  {getIconComponent(category.iconName)}
                                </div>
                                <div className="flex-1 min-w-0 overflow-hidden">
                                  <h4 className="text-base font-bold leading-tight truncate whitespace-nowrap">{category.title}</h4>
                                </div>
                                <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-all ${isSelected ? 'text-[#007cff] translate-x-0.5 opacity-100' : 'text-slate-400 opacity-0 group-hover/tab:opacity-100 group-hover/tab:translate-x-0.5'
                                  }`} />
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Panel: Scrollable Capabilities List */}
                      <div className="col-span-7 p-5 bg-white flex flex-col h-auto max-h-[420px]">
                        <div className="space-y-4 flex-1 flex flex-col overflow-hidden">
                          {/* Active Division Header info */}
                          {(() => {
                            const activeCat = SERVICE_CATEGORIES.find(c => c.id === activeCategoryTab) || SERVICE_CATEGORIES[0];
                            return (
                              <>
                                {/* Detailed Scrollable List */}
                                <div className="flex-1 overflow-y-auto overflow-x-auto pr-1 pb-2 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-200">
                                  {activeCat.items.map((item, idx) => (
                                    <div
                                      key={idx}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setActiveMega(null);
                                        const subId = mapTitleToSubServiceId(item.title);
                                        if (setSelectedSubServiceId) {
                                          setSelectedSubServiceId(subId);
                                        }
                                        let targetPath = '/services';
                                        if (activeCat.id === 'accounting') targetPath = '/services/accounting-bookkeeping';
                                        else if (activeCat.id === 'audit') targetPath = '/services/audit-assurance';
                                        else if (activeCat.id === 'tax') targetPath = '/services/tax-services';
                                        else if (activeCat.id === 'other') targetPath = '/services/cfo-advisory';
                                        navigate(targetPath);
                                      }}
                                      className="flex items-center py-2 px-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100/60 cursor-pointer transition-all duration-150 group/item"
                                    >
                                      <h5 className="text-[14.5px] font-bold text-slate-750 group-hover/item:text-[#007cff] transition-colors leading-6 truncate whitespace-nowrap">
                                        {item.title}
                                      </h5>
                                    </div>
                                  ))}
                                </div>
                              </>
                            );
                          })()}
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Build your team Dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega('hire')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMega(null);
                    navigate('/build-your-team');
                  }}
                  className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'services' ? 'text-[#007cff]' : 'text-slate-600'}`}
                >
                  Build your team
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'hire' ? 'rotate-180' : ''}`} />
                </button>

                {/* Build your team Mega Menu Panel */}
                {activeMega === 'hire' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] max-w-[92vw] pt-2 z-50 animate-fadeIn">
                    <div className="bg-white border border-slate-200/80 shadow-2xl rounded-xl p-5">
                      <div className="border-b border-slate-100 pb-3 mb-3 flex justify-between items-center">
                        <span className="text-xs font-bold text-navy-900 uppercase tracking-widest font-mono">Build Your Team</span>
                      </div>

                      {/* Grid of hireable roles */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                        {(() => {
                          const items = SERVICE_CATEGORIES.find(c => c.id === 'offshore-team')?.items || [];
                          return items.map((item, idx) => {
                            const isLast = idx === items.length - 1;
                            return (
                              <div
                                key={idx}
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveMega(null);
                                  const subId = mapTitleToSubServiceId(item.title);
                                  if (subId === 'hire-audit-support') {
                                    navigate('/build-your-team/hire-audit-support-staff');
                                  } else if (subId === 'hire-ar-specialist') {
                                    navigate('/build-your-team/hire-accounts-receivable-specialist');
                                  } else {
                                    navigate(`/build-your-team/${subId}`);
                                  }
                                }}
                                className={`flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all group ${isLast ? 'col-span-2' : 'overflow-hidden'
                                  }`}
                              >
                                <div className="group-hover:scale-110 transition-transform flex-shrink-0">
                                  <UserCheck className="w-4 h-4 text-[#007cff]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4
                                    title={item.title}
                                    className={`text-[14.5px] font-bold text-slate-800 group-hover:text-[#007cff] transition-colors leading-snug ${isLast ? 'whitespace-nowrap' : 'truncate whitespace-nowrap overflow-hidden w-full'
                                      }`}
                                  >
                                    {item.title}
                                  </h4>
                                </div>
                              </div>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Mega Dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega('industries')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMega(null);
                    navigate('/industries');
                  }}
                  className={`flex items-center gap-1 text-[17px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'industries' ? 'text-[#007cff]' : 'text-slate-600'}`}
                >
                  Industries
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'industries' ? 'rotate-180' : ''}`} />
                </button>

                {/* Industries Mega Menu Panel */}
                {activeMega === 'industries' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] max-w-[92vw] pt-2 z-50 animate-fadeIn">
                    <div className="bg-white border border-slate-200/80 shadow-2xl rounded-xl p-6">
                      <div className="border-b border-slate-100 pb-3 mb-3 flex justify-between items-center">
                        <span className="text-xs font-bold text-navy-900 uppercase tracking-widest font-mono">Industries</span>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMega(null);
                            navigate('/industries');
                          }}
                          className="text-xs font-bold text-[#007cff] hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          Explore Industries <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Grid container for industries (no scroll) */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {INDUSTRIES.map((industry) => (
                          <div
                            key={industry.id}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveMega(null);
                              setSelectedIndustryId(industry.id);
                              navigate('/industries');
                              setTimeout(() => {
                                const el = document.getElementById(`industry-card-${industry.id}`);
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              }, 250);
                            }}
                            className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-all group overflow-hidden"
                          >
                            <div className="group-hover:scale-110 transition-transform flex-shrink-0">
                              {getIconComponent(industry.iconName)}
                            </div>
                            <div className="flex-1 min-w-0 overflow-hidden">
                              <h4
                                title={industry.title}
                                className="text-[14.5px] font-bold text-slate-800 group-hover:text-[#007cff] transition-colors leading-snug truncate whitespace-nowrap overflow-hidden w-full"
                              >
                                {industry.title}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMega('resources')}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setActiveMega(null);
                    navigate('/resources');
                  }}
                  className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'blog' ? 'text-[#007cff]' : 'text-slate-600'}`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {/* Resources Dropdown Panel */}
                {activeMega === 'resources' && (
                  <div className="absolute top-full left-0 w-48 pt-2 z-50 animate-fadeIn">
                    <div className="bg-white border border-slate-200/80 shadow-2xl rounded-xl p-2 flex flex-col gap-0.5">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setActiveMega(null);
                          navigate('/resources/blogs');
                        }}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        Blogs
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setActiveMega(null);
                          navigate('/resources/newsletters');
                        }}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        Newsletters
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setActiveMega(null);
                          navigate('/resources/articles');
                        }}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        Articles
                      </button>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setActiveMega(null);
                          navigate('/resources/faqs');
                        }}
                        className="text-left text-[14.5px] font-bold text-slate-800 hover:text-[#007cff] hover:bg-slate-50 p-2.5 rounded-lg transition-all cursor-pointer bg-transparent border-0 w-full"
                      >
                        FAQs
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-[15px] xl:text-[16px] font-bold transition-colors hover:text-[#007cff] cursor-pointer whitespace-nowrap ${currentPage === 'contact' ? 'text-[#007cff]' : 'text-slate-600'}`}
              >
                Contact Us
              </button>
            </div>

            {/* Action CTAs - Solid Warm Golden Amber Button */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <button
                onClick={openConsultation}
                className="bg-[#007cff] hover:bg-blue-600 text-white text-xs xl:text-sm px-4 xl:px-5 py-2.5 xl:py-3 rounded-lg font-bold tracking-wide shadow-md shadow-blue-500/10 hover:scale-[1.02] transition-all uppercase whitespace-nowrap cursor-pointer ml-3 xl:ml-6"
                id="nav-consultation-btn"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="xl:hidden flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto">
              <button
                onClick={openConsultation}
                className="bg-[#007cff] hover:bg-blue-600 !text-white text-[10px] min-[380px]:text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 rounded-lg font-bold transition-all uppercase whitespace-nowrap cursor-pointer shadow-sm"
              >
                Consult Now
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-750 p-1.5 sm:p-2 focus:outline-none bg-slate-100 rounded-md border border-slate-200 cursor-pointer shrink-0"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-2xl p-6 flex flex-col gap-4 animate-slideDown max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-base font-semibold pb-2 border-b border-slate-100 ${currentPage === 'home' ? 'text-[#007cff]' : 'text-slate-700'}`}
            >
              Home
            </button>
            {/* Mobile About Us Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex justify-between items-center text-left text-base font-semibold text-slate-700"
              >
                <span className={currentPage === 'about' ? 'text-[#007cff]' : ''}>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="mt-3 pl-3 flex flex-col gap-2.5 border-l-2 border-blue-500/30">
                  <button
                    onClick={() => handleAboutSectionClick('brand-story-section')}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    About Aum Consultancy
                  </button>
                  <button
                    onClick={() => handleAboutSectionClick('founders-section')}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    Leadership Team
                  </button>
                  <button
                    onClick={() => handleAboutSectionClick('about-security-section')}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    Security Standards
                  </button>
                  <button
                    onClick={() => handleAboutSectionClick('vision-mission-section')}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    Vision & Mission
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center text-left text-base font-semibold text-slate-700"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-3 pl-3 flex flex-col gap-2.5 border-l-2 border-blue-500/30">
                  {SERVICES.filter(s => s.id !== 'offshore-team').map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedServiceId(s.id);
                        if (setSelectedSubServiceId) {
                          setSelectedSubServiceId('');
                        }
                        setIsOpen(false);
                        setActiveMega(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        if (s.id === 'accounting') navigate('/services/accounting-bookkeeping');
                        else if (s.id === 'audit') navigate('/services/audit-assurance');
                        else if (s.id === 'tax') navigate('/services/tax-services');
                        else if (s.id === 'other') navigate('/services/cfo-advisory');
                        else navigate('/services');
                        setTimeout(() => {
                          const el = document.getElementById('services-explorer-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 200);
                      }}
                      className="text-left text-xs text-slate-500 hover:text-[#007cff] py-1 transition-colors"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Build your team Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileHireOpen(!mobileHireOpen)}
                className="w-full flex justify-between items-center text-left text-base font-semibold text-slate-700"
              >
                <span>Build your team</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileHireOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileHireOpen && (
                <div className="mt-3 pl-3 flex flex-col gap-2.5 border-l-2 border-blue-500/30">
                  {SERVICE_CATEGORIES.find(c => c.id === 'offshore-team')?.items.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedServiceId('offshore-team');
                        const subId = mapTitleToSubServiceId(item.title);
                        setSelectedSubServiceId?.(subId);
                        handleNavClick('services');
                        setTimeout(() => {
                          const el = document.getElementById(subId);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          } else {
                            const sec = document.getElementById('service-detail-card');
                            if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }, 200);
                      }}
                      className="text-left text-sm sm:text-base font-semibold text-slate-700 hover:text-[#007cff] py-1 transition-colors break-words w-full"
                      title={item.title}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobilePageSectorsOpen(!mobilePageSectorsOpen)}
                className="w-full flex justify-between items-center text-left text-base font-semibold text-slate-700"
              >
                <span>Industries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePageSectorsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePageSectorsOpen && (
                <div className="mt-3 pl-3 flex flex-col gap-2.5 border-l-2 border-blue-500/30">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => {
                        setSelectedIndustryId(ind.id);
                        handleNavClick('industries');
                        setTimeout(() => {
                          const el = document.getElementById(`industry-card-${ind.id}`);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 150);
                      }}
                      className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                    >
                      {ind.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex justify-between items-center text-left text-base font-semibold text-slate-700"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="mt-3 pl-3 flex flex-col gap-2.5 border-l-2 border-blue-500/30">
                  <button
                    onClick={() => handleNavClick('blog')}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    Blogs
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openNewsletter();
                    }}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    Newsletters
                  </button>
                  <button
                    onClick={() => handleNavClick('blog')}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    Articles
                  </button>
                  <button
                    onClick={handleFaqsClick}
                    className="text-left text-base text-slate-700 hover:text-[#007cff] py-1 transition-colors"
                  >
                    FAQs
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left text-base font-semibold pb-2 border-b border-slate-100 ${currentPage === 'contact' ? 'text-[#007cff]' : 'text-slate-700'}`}
            >
              Contact Us
            </button>

            {/* Mobile Actions - Solid Warm Golden Amber */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => { setIsOpen(false); openConsultation(); }}
                className="w-full text-center bg-[#007cff] text-white text-xs py-3.5 rounded-lg font-bold shadow-lg shadow-blue-500/10 uppercase"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
