import { useState } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, ChevronDown, Search, ArrowRight, ShieldCheck, 
  Settings, Zap, Award, Mail, Phone, Clock, ArrowRightLeft, Check
} from 'lucide-react';

interface FaqViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    category: "Services & Solutions",
    question: "What services does AUM Consultancy provide?",
    answer: "We provide Accounting & Bookkeeping, Audit & Assurance Support, Tax Services, CFO Advisory, Virtual Assistant Support, Payroll Processing, Financial Reporting, and Offshore Staffing solutions for firms across the US, UK, Canada, and Australia."
  },
  {
    id: 2,
    category: "Operations & Security",
    question: "Which countries do you serve?",
    answer: "We primarily support businesses, CPA firms, accounting firms, and enterprises in the United States, United Kingdom, Canada, and Australia."
  },
  {
    id: 3,
    category: "Services & Solutions",
    question: "What industries do you specialize in?",
    answer: "We work with CPA firms, accounting practices, healthcare, construction, real estate, eCommerce, retail, manufacturing, professional services, technology companies, and many other industries."
  },
  {
    id: 4,
    category: "Offshore Staffing & Models",
    question: "How does your offshore staffing model work?",
    answer: "We build dedicated offshore teams that work as an extension of your business, following your workflows, software, and communication processes."
  },
  {
    id: 5,
    category: "Offshore Staffing & Models",
    question: "Do you provide dedicated resources?",
    answer: "Yes. We assign dedicated professionals who work exclusively for your business, ensuring consistency, accountability, and long-term support."
  },
  {
    id: 6,
    category: "Compliance & Technology",
    question: "What accounting software do you support?",
    answer: "Our team works with QuickBooks, Xero, Sage, NetSuite, Zoho Books, FreshBooks, Microsoft Dynamics, and other leading accounting platforms."
  },
  {
    id: 7,
    category: "Compliance & Technology",
    question: "Are your services compliant with international standards?",
    answer: "Yes. Our processes align with US GAAP, IFRS, IRS Guidelines, HMRC requirements, and ATO standards where applicable."
  },
  {
    id: 8,
    category: "Operations & Security",
    question: "How do you ensure data security?",
    answer: "We use secure cloud environments, encrypted file transfers, role-based access, NDAs, multi-factor authentication, and strict confidentiality policies to protect client data."
  },
  {
    id: 9,
    category: "Operations & Security",
    question: "Can you work with our existing systems?",
    answer: "Yes. Our professionals integrate with your existing accounting software, project management tools, and communication platforms without disrupting your workflow."
  },
  {
    id: 10,
    category: "Services & Solutions",
    question: "Do you offer bookkeeping clean-up services?",
    answer: "Yes. We can organize historical records, reconcile accounts, correct discrepancies, and prepare your books for accurate financial reporting."
  },
  {
    id: 11,
    category: "Services & Solutions",
    question: "Can you help during tax season?",
    answer: "Yes. We provide tax preparation support, workpaper preparation, document organization, and filing assistance based on your local regulatory requirements."
  },
  {
    id: 12,
    category: "Services & Solutions",
    question: "What audit support services do you provide?",
    answer: "We assist with audit preparation, reconciliations, lead schedules, supporting documentation, workpapers, and coordination with auditors."
  },
  {
    id: 13,
    category: "Services & Solutions",
    question: "Do you provide payroll services?",
    answer: "Yes. We assist with payroll processing, employee records, payroll reconciliations, and payroll reporting while maintaining compliance."
  },
  {
    id: 14,
    category: "Services & Solutions",
    question: "Can I hire a virtual CFO?",
    answer: "Yes. Our Virtual CFO services include financial planning, budgeting, forecasting, cash flow management, KPI reporting, and strategic financial guidance."
  },
  {
    id: 15,
    category: "Offshore Staffing & Models",
    question: "How quickly can we get started?",
    answer: "Most projects can begin within a few business days after understanding your requirements and completing the onboarding process."
  },
  {
    id: 16,
    category: "Billing & Pricing",
    question: "Do you require long-term contracts?",
    answer: "We offer flexible engagement models, including project-based, monthly, and dedicated resource arrangements."
  },
  {
    id: 17,
    category: "Operations & Security",
    question: "How do you communicate with clients?",
    answer: "We work through Microsoft Teams, Slack, Zoom, Google Meet, Email, and other collaboration platforms based on your preference."
  },
  {
    id: 18,
    category: "Operations & Security",
    question: "Can your team work in our time zone?",
    answer: "Yes. We offer flexible schedules and overlapping business hours to support clients across different time zones."
  },
  {
    id: 19,
    category: "Billing & Pricing",
    question: "How much can outsourcing save?",
    answer: "Depending on your business needs, outsourcing can significantly reduce hiring, infrastructure, training, and operational costs while maintaining high-quality service."
  },
  {
    id: 20,
    category: "Billing & Pricing",
    question: "How do I request a consultation?",
    answer: "Simply click Book Consultation, submit the contact form, or reach out to our team. We'll schedule a discovery call to understand your requirements and recommend the best solution."
  }
];

const CATEGORIES = [
  "All",
  "Services & Solutions",
  "Operations & Security",
  "Offshore Staffing & Models",
  "Compliance & Technology",
  "Billing & Pricing"
];

export default function FaqView({ setCurrentPage, openConsultation }: FaqViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(1); // Expand the first by default

  const filteredFaqs = FAQ_DATA.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20 sm:pt-28 sm:pb-28" id="faq-view-container">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-extrabold block">
            KNOWLEDGE BASE & FAQ
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            How Can We Assist Your Firm?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            Comprehensive, professional answers regarding our offshore financial back-office operations, software stacks, security parameters, and transition playbooks.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-1 flex items-center">
            <div className="pl-4 pr-2 text-slate-400 shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              placeholder="Search frequently asked questions, services, security or tax processes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 py-3 px-1 focus:outline-none focus:ring-0 border-0"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="px-3 py-1.5 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs Section */}
        <div className="mb-12 overflow-x-auto scrollbar-none flex justify-start sm:justify-center gap-2 pb-2">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-navy-900 text-white shadow-md shadow-navy-950/10' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Side Info Cards */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Value Prop Banner */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-lg relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#007cff]/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#007cff] uppercase tracking-widest font-extrabold block">
                  AUM ADVANTAGE
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight text-white">
                  Why Leading Firms Outshore to AUM?
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 font-light leading-relaxed">
                  We blend certified, dual-signoff quality control with high-level military grade cybersecurity architecture.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded-lg bg-white/5 text-[#007cff] border border-white/10 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold block text-white">Up to 60%+ Overhead Savings</strong>
                    <span className="text-[10px] text-slate-400 block leading-relaxed font-light">Eliminate benefits, hardware seats, and local recruitment costs.</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded-lg bg-white/5 text-[#007cff] border border-white/10 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold block text-white">Fully SOC-2 Compliant Security</strong>
                    <span className="text-[10px] text-slate-400 block leading-relaxed font-light">Thin-client workspaces with Zero Local Storage capabilities.</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-1 rounded-lg bg-white/5 text-[#007cff] border border-white/10 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold block text-white">Continuous Timezone Overlap</strong>
                    <span className="text-[10px] text-slate-400 block leading-relaxed font-light">Always responsive on Slack, Teams, and Email during your day.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-850">
                <button
                  onClick={openConsultation}
                  className="w-full bg-[#007cff] hover:bg-blue-600 text-white text-[11px] font-bold py-3.5 rounded-xl transition-all cursor-pointer text-center uppercase tracking-wider block shadow-sm shadow-blue-500/10 hover:scale-[1.01]"
                >
                  Book Transition Call
                </button>
              </div>
            </div>

            {/* Quick Contact Widget */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
              <h4 className="font-serif text-sm font-bold text-navy-950">Still have questions?</h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Our support desk operates round-the-clock to clarify specific software, audit checklists, and legal structures.
              </p>
              <div className="space-y-2.5 pt-1">
                <a 
                  href="mailto:info@aumstrategist.com" 
                  className="flex items-center gap-3 text-xs text-slate-700 hover:text-[#007cff] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#007cff]" />
                  <span>info@aumstrategist.com</span>
                </a>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Overlapping response windows 24/5</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Accordion of filtered questions */}
          <div className="lg:col-span-8">
            <div className="space-y-4" id="faq-accordions-group">
              <AnimatePresence mode="wait">
                {filteredFaqs.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3.5"
                  >
                    {filteredFaqs.map((faq, index) => {
                      const isOpen = expandedId === faq.id;
                      return (
                        <div
                          key={faq.id}
                          className={`bg-white rounded-xl border transition-all overflow-hidden ${
                            isOpen 
                              ? 'border-blue-500/30 shadow-md shadow-blue-500/[0.02]' 
                              : 'border-slate-200/80 hover:border-slate-300'
                          }`}
                          id={`faq-item-card-${faq.id}`}
                        >
                          <button
                            onClick={() => toggleAccordion(faq.id)}
                            className="w-full py-4 px-5 flex justify-between items-center text-left gap-4 transition-colors cursor-pointer group"
                            aria-expanded={isOpen}
                          >
                            <div className="flex items-start gap-3">
                              <HelpCircle className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                                isOpen ? 'text-[#007cff]' : 'text-slate-400 group-hover:text-slate-600'
                              }`} />
                              <div className="space-y-1">
                                <span className={`text-xs sm:text-sm font-bold leading-snug transition-colors block ${
                                  isOpen ? 'text-slate-950' : 'text-slate-700 group-hover:text-slate-950'
                                }`}>
                                  {faq.question}
                                </span>
                                <span className="text-[9px] font-mono tracking-wider font-semibold text-slate-400 uppercase bg-slate-50 px-2 py-0.5 rounded border border-slate-150 inline-block">
                                  {faq.category}
                                </span>
                              </div>
                            </div>
                            <div className={`p-1 rounded-lg transition-colors shrink-0 ${
                              isOpen ? 'bg-blue-500/10 text-[#007cff]' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'
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
                                <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-light pl-12">
                                  <p>{faq.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-base font-bold text-navy-950">No questions found</h3>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto font-light leading-relaxed">
                        We couldn't find any FAQs matching "{searchQuery}" under the category "{activeCategory}". Try revising your search query or choosing another category.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("All");
                      }}
                      className="text-xs font-semibold text-[#007cff] hover:text-blue-600 cursor-pointer pt-2 inline-block"
                    >
                      Reset All Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
