import { useState } from 'react';
import { Page, IndustryItem } from '../types';
import { INDUSTRIES } from '../data';
import { 
  HeartPulse, Building, Factory, HardHat, Store, Laptop, 
  ShoppingBag, Coins, Rocket, Briefcase, Landmark, CheckCircle, 
  ArrowRight, ShieldAlert, BadgeInfo, Star, Search, X, Filter
} from 'lucide-react';
import SafeImage from '../components/SafeImage';

interface IndustriesViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
  selectedIndustryId: string | null;
  setSelectedIndustryId: (id: string | null) => void;
}

const INDUSTRY_IMAGES: Record<string, string> = {
  'automobile-ancillary-manufacturing': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400&h=250',
  'banking-insurance-financial': 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=400&h=250',
  'education': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400&h=250',
  'fmcg': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=250',
  'hospitality-healthcare': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=250',
  'infrastructure': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=250',
  'media-entertainment': 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400&h=250',
  'outsourcing': 'https://images.unsplash.com/photo-1521791136364-72861c619292?auto=format&fit=crop&q=80&w=400&h=250',
  'paper-sugar-liquor': 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=400&h=250',
  'retail-white-goods': 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400&h=250',
  'shipping': 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=400&h=250',
  'hotel-restaurants': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=400&h=250',
  'manufacturing': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400&h=250',
  'healthcare-medicals': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400&h=250',
  'construction-engineering': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400&h=250',
  'non-profit-trust': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400&h=250'
};

const getIconComponent = (name: string, sizeClass = "w-5 h-5") => {
  switch (name) {
    case 'HeartPulse': return <HeartPulse className={`${sizeClass} text-[#007cff]`} />;
    case 'Building': return <Building className={`${sizeClass} text-[#007cff]`} />;
    case 'Factory': return <Factory className={`${sizeClass} text-[#007cff]`} />;
    case 'HardHat': return <HardHat className={`${sizeClass} text-[#007cff]`} />;
    case 'Store': return <Store className={`${sizeClass} text-[#007cff]`} />;
    case 'Laptop': return <Laptop className={`${sizeClass} text-[#007cff]`} />;
    case 'ShoppingBag': return <ShoppingBag className={`${sizeClass} text-[#007cff]`} />;
    case 'Coins': return <Coins className={`${sizeClass} text-[#007cff]`} />;
    case 'Rocket': return <Rocket className={`${sizeClass} text-[#007cff]`} />;
    case 'Briefcase': return <Briefcase className={`${sizeClass} text-[#007cff]`} />;
    default: return <Landmark className={`${sizeClass} text-[#007cff]`} />;
  }
};

export default function IndustriesView({ 
  setCurrentPage, 
  openConsultation,
  selectedIndustryId,
  setSelectedIndustryId
}: IndustriesViewProps) {

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Helper to map industry ID to category
  const getIndustryCategory = (id: string): string => {
    if ([
      'automobile-ancillary-manufacturing',
      'manufacturing',
      'fmcg',
      'paper-sugar-liquor'
    ].includes(id)) {
      return 'industrial';
    }
    if ([
      'banking-insurance-financial',
      'outsourcing'
    ].includes(id)) {
      return 'financial';
    }
    if ([
      'hotel-restaurants',
      'retail-white-goods',
      'media-entertainment'
    ].includes(id)) {
      return 'hospitality';
    }
    if ([
      'hospitality-healthcare',
      'healthcare-medicals',
      'education',
      'non-profit-trust'
    ].includes(id)) {
      return 'health-education';
    }
    if ([
      'infrastructure',
      'shipping',
      'construction-engineering'
    ].includes(id)) {
      return 'infra-shipping';
    }
    return 'other';
  };

  const CATEGORIES = [
    { id: 'all', label: 'All Sectors' },
    { id: 'industrial', label: 'Manufacturing & Trade' },
    { id: 'financial', label: 'Finance & Services' },
    { id: 'hospitality', label: 'Hospitality & Retail' },
    { id: 'health-education', label: 'Health & Trust' },
    { id: 'infra-shipping', label: 'Infrastructure & Cargo' }
  ];

  const filteredIndustries = INDUSTRIES.filter((ind) => {
    const matchesCategory = activeCategory === 'all' || getIndustryCategory(ind.id) === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.challenges.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ind.solutions.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ind.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      
      {/* Header with Background Photo */}
      <section className="relative text-white overflow-hidden py-24 sm:py-32 lg:py-40 bg-navy-950 border-b border-navy-850">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
            alt="Corporate skyscraper background" 
            className="w-full h-full object-cover opacity-15 select-none pointer-events-none"
            category="general"
          />
          {/* Layer 1: Solid high-density dark tint for rich text-contrast */}
          <div className="absolute inset-0 bg-navy-950/75 mix-blend-multiply"></div>
          {/* Layer 2: Radial and vertical gradients for elegant lighting and focus */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-navy-950/85 to-navy-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,124,255,0.06),transparent_65%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-navy-950/70 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-4 sm:space-y-6 animate-fadeIn">
            <span className="text-[10px] sm:text-xs font-mono text-[#007cff] uppercase tracking-[0.25em] font-extrabold block">
              Vertical Financial Expertise
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
              Sectors We Serve
            </h1>
            <div className="h-1 w-16 bg-[#007cff] mx-auto rounded-full"></div>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Accounting is not one-size-fits-all. We adapt our standard operating controls to suit complex e-commerce catalogs, healthcare patient privacy, manufacturing COGS, or multi-LLC property structures.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid & Detailed Solutions Panel */}
      <section className="py-20 bg-white" id="industries-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#007cff] uppercase tracking-widest block font-sans">Specialized Handbooks</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
              Explore Our Industry-Specific Operating Manuals
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light">
              Select your sector to view common challenges, custom Aum Secure solutions, and real benefit outcomes.
            </p>
          </div>

          {/* Interactive Filtering Panel */}
          <div className="bg-blue-50/45 rounded-2xl border border-blue-100/60 p-4 sm:p-6 space-y-4 shadow-xs">
            {/* Search and Metadata line */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search industries, challenges, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#007cff] focus:ring-1 focus:ring-[#007cff] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <div className="text-[11px] text-slate-500 font-medium font-mono shrink-0 flex items-center gap-2">
                <span className="bg-blue-500/10 border border-blue-500/20 text-[#007cff] px-2.5 py-0.5 rounded-full font-bold">
                  {filteredIndustries.length}
                </span>
                {filteredIndustries.length === 1 ? 'sector matching' : 'sectors matching search criteria'}
              </div>
            </div>

            {/* Category horizontal scroller */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedIndustryId(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-navy-950 border-navy-950 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid or No-Results State */}
          {filteredIndustries.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-navy-900">No industry handbook found</h4>
                <p className="text-slate-400 text-xs font-light max-w-xs mx-auto leading-relaxed">
                  We couldn't find any sectors matching "{searchQuery}". Try searching for other terms like "manufacturing", "hotel", "tax", or "excise".
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider font-sans border border-indigo-200 hover:border-indigo-300 px-4 py-2 bg-white rounded-xl cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((ind) => {
                const hasImage = INDUSTRY_IMAGES[ind.id];
                const isSelected = selectedIndustryId === ind.id;
                
                return (
                  <div 
                    key={ind.id}
                    id={`industry-card-${ind.id}`}
                    onClick={() => setSelectedIndustryId(isSelected ? null : ind.id)}
                    className={`bg-white rounded-3xl border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xs ${
                      isSelected 
                        ? 'border-[#007cff] ring-1 ring-[#007cff] shadow-md scale-[1.01]' 
                        : 'border-slate-150 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Full-bleed Industry Photo */}
                      {hasImage && (
                        <div className="relative h-44 w-full overflow-hidden bg-slate-100 shrink-0 select-none">
                          <SafeImage 
                            src={hasImage} 
                            alt={ind.title} 
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            category="other"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>
                          <span className="absolute top-3 right-3 text-[9px] bg-white/95 text-navy-950 font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs backdrop-blur-xs font-mono border border-slate-100">
                            {CATEGORIES.find(c => c.id === getIndustryCategory(ind.id))?.label.split(' & ')[0]}
                          </span>
                        </div>
                      )}

                      <div className="p-6 space-y-4">
                        {/* Top line with Icon & state indicators */}
                        <div className="flex justify-between items-center">
                          <div className="bg-blue-50/70 w-10 h-10 rounded-xl border border-blue-100/50 flex items-center justify-center shadow-xs transition-colors group-hover:bg-blue-500/10 group-hover:border-blue-500/20">
                            {getIconComponent(ind.iconName)}
                          </div>
                          {isSelected ? (
                            <span className="text-[9px] bg-[#007cff] text-white font-extrabold px-2.5 py-0.5 rounded-full uppercase font-mono tracking-wider shadow-sm animate-pulse">
                              ACTIVE MANUAL
                            </span>
                          ) : (
                            <span className="text-[9px] text-slate-400 font-mono uppercase bg-slate-50 border border-slate-150 px-2 py-0.5 rounded-full">
                              Click to expand
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-serif text-sm sm:text-base font-bold text-navy-900 group-hover:text-[#007cff] transition-colors leading-snug">
                            {ind.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-2">
                            {ind.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details Panel inside the card */}
                    {isSelected && (
                      <div className="px-6 pb-6 pt-5 border-t border-slate-100 space-y-5 bg-blue-50/20 animate-fadeIn shrink-0">
                        
                        {/* Challenges list */}
                        <div className="space-y-2.5">
                          <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-wider block flex items-center gap-1.5 font-mono">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            Key Industry Challenges:
                          </span>
                          <ul className="space-y-2 text-[11px] text-slate-600 pl-1 leading-relaxed">
                            {ind.challenges.map((c, i) => (
                              <li key={i} className="flex items-start gap-2 font-light">
                                <span className="inline-flex w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions list */}
                        <div className="space-y-2.5 border-t border-slate-100/70 pt-4">
                          <span className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider block flex items-center gap-1.5 font-mono">
                            <BadgeInfo className="w-3.5 h-3.5 text-[#007cff]" />
                            Aum Secure Solution:
                          </span>
                          <ul className="space-y-2 text-[11px] text-slate-600 pl-1 leading-relaxed">
                            {ind.solutions.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 font-light">
                                <span className="inline-flex w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                                <span className="text-navy-950 font-normal">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-2.5 border-t border-slate-100/70 pt-4">
                          <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider block flex items-center gap-1.5 font-mono">
                            <Star className="w-3.5 h-3.5 fill-emerald-50 text-emerald-600" />
                            Core Business Benefits:
                          </span>
                          <ul className="space-y-2 text-[11px] text-slate-600 pl-1 leading-relaxed">
                            {ind.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 font-light">
                                <span className="inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    )}

                    <div className="mx-6 py-4 border-t border-slate-100 text-[10px] text-slate-400 uppercase font-bold tracking-wide flex justify-between items-center bg-white shrink-0">
                      <span>{isSelected ? 'Close Details' : 'View specialized solutions'}</span>
                      <ArrowRight className={`w-4 h-4 text-slate-300 group-hover:text-[#007cff] transition-all ${isSelected ? 'rotate-90 text-[#007cff]' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* CTA section */}
      <section className="bg-blue-50 py-20 border-t border-b border-blue-100 text-center space-y-6">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">Need localized tax compliance in your region?</h3>
          <p className="text-slate-500 text-xs font-light leading-relaxed">
            Whether you operate multi-state physical retail networks in the USA or need quarterly VAT filing with HMRC in the UK, we've got you covered.
          </p>
        </div>
        <button 
          onClick={openConsultation}
          className="bg-[#007cff] hover:bg-blue-600 text-white font-bold text-xs tracking-wider px-8 py-3.5 rounded-lg transition-all shadow-md inline-block uppercase cursor-pointer"
        >
          Book An Onshore Compliance Sync
        </button>
      </section>

    </div>
  );
}
