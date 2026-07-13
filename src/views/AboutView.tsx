import { useState } from 'react';
import { Page } from '../types';
import { TEAM } from '../data';
import { ShieldCheck, Target, Eye, CheckCircle, GraduationCap, X, Linkedin, ChevronRight } from 'lucide-react';
import SafeImage from '../components/SafeImage';

interface AboutViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
}

export default function AboutView({ setCurrentPage, openConsultation }: AboutViewProps) {
  const [activeMember, setActiveMember] = useState<any>(null);

  return (
    <div className="pt-20">
      
      {/* Hero Banner Header */}
      <section className="relative text-navy-950 overflow-hidden py-16 sm:py-24 bg-white border-b border-slate-100" id="about-hero-header">
        <div className="absolute inset-0 z-0">
          {/* Radial and vertical gradients for elegant lighting and focus */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,124,255,0.02),transparent_65%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Centered Hero Panel with Premium Glass Overlay */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-4 sm:space-y-6">
              <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Secure, competent, scalable, and culturally aligned</span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0e1b2e] leading-tight">
                Your Global Financial Engine. <br />
                <span className="text-[#007cff] font-sans">Driven by Precision, Built for Scale.</span>
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                Bridging the gap between elite CA/CPA-led oversight and cost-efficient back-office execution for growing businesses and public accounting practices worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Aum Consultancy - Brand Story */}
      <section className="py-20 bg-slate-50 border-b border-slate-100" id="brand-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                About Aum Consultancy
              </h2>
            </div>
            
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed font-light space-y-6">
              <p>
                As a premier offshore financial architecture partner, we seamlessly integrate into businesses and public accounting practices across the US, UK, Canada, and Australia. At Aum Consultancy, we don't operate as a detached vendor; we act as your hidden competitive advantage. We manage the heavy data processing and compliance rules behind the scenes, freeing your core leadership team to focus entirely on what matters most.
              </p>
              <p>
                What truly sets us apart is our commitment to absolute data security, modern cloud synchronization, and a rigorous multi-tier quality review process. We eliminate the traditional pain points of offshoring by maintaining dedicated overlapping time zones, contractually backed turnaround times, and flexible, custom-tailored workflows that match your exact software stack and internal checklists.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* Founder & Core Leadership Team */}
      <section className="py-20 bg-white" id="founders-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
              Our Leadership Team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {TEAM.map((member) => (
              <div 
                key={member.name}
                className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 text-center flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group w-full max-w-sm"
              >
                <div className="space-y-4 flex flex-col items-center">
                  
                  {/* Circular Avatar with LinkedIn overlay */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-100 shadow-sm bg-slate-50">
                      <SafeImage 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        category="team"
                      />
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/ca-jitendra-tilwani-offshoring-accounting/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-1 right-2 bg-[#007cff] p-2 rounded-full text-white border-2 border-white hover:bg-blue-600 transition-colors shadow-md cursor-pointer flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-current" />
                    </a>
                  </div>

                  {/* Info */}
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-navy-900 block">{member.name}</h3>
                    <span className="text-[10px] text-[#007cff] uppercase font-mono tracking-wider font-bold block">{member.role}</span>
                  </div>

                  {/* Snippet of Bio */}
                  <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                    {member.bio}
                  </p>

                </div>

                {/* Know More Pill Button */}
                <div className="pt-6">
                  <button
                    onClick={() => setActiveMember(member)}
                    className="border border-[#007cff]/30 text-[#007cff] hover:bg-[#007cff]/5 px-6 py-2 rounded-full text-xs font-medium hover:border-[#007cff] transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Know More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Strategic Positioning & Capability Summary */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100/80" id="core-values-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Block 1: Prominent Statement */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#007cff] font-bold leading-relaxed italic">
              "Your dedicated global extension for elite accounting, advisory, Back office and administrative excellence."
            </p>
            <div className="w-16 h-1 bg-[#007cff]/30 rounded-full mx-auto"></div>
          </div>

          {/* Block 2 & 3: Strategic Partner and Our Team (2-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 tracking-tight leading-snug">
                Your Strategic Delivery Partner for Global Scale & Efficiency
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                We are a premier, CA/CPA-led outsourcing partner delivering elite accounting, bookkeeping, auditing, taxation, administrative, and advisory services across the US, UK, Canada, and Australia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#007cff] tracking-tight leading-snug">
                Our Team
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                With a powerful powerhouse team of qualified financial experts, we possess the precision, technical depth, and operational scale to handle any level of bookkeeping, tax preparation, audit support, and advisory services.
              </p>
            </div>
          </div>

          {/* Block 4: Premier Chartered Accountants Detail Banner */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,124,255,0.03),transparent_50%)]"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#007cff] uppercase tracking-widest font-bold block">EXPERTISE & TRUST</span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-navy-900 leading-tight">
                  Premier Chartered Accountants providing Financial & Backend Executive Support
                </h3>
              </div>
              
              <div className="text-sm text-slate-600 leading-relaxed font-light space-y-4">
                <p>
                  We are premier Chartered Accountants providing comprehensive financial and backend executive support to international clients. We act as your trusted offshore partner, delivering expert services in accounting, auditing, taxation, back-office operations, and dedicated assistance to organizational and business heads.
                </p>
                <p>
                  Whether you are an individual, entrepreneur, a growing business, an onshore CPA firm, or any corporate entity, we manage your entire financial and administrative workload seamlessly. From handling your daily accounting, bookkeeping, back office operations, and complex taxation to managing rigorous auditing support, and assistance to any task or executive lead, we tailor our solutions to fit your exact operational and financial needs.
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-slate-100 gap-4">
                <span className="text-xs font-semibold text-[#007cff] font-sans tracking-wide uppercase flex items-center gap-1.5">
                  ✓ Tailored solutions for your exact operational & financial needs
                </span>
                <span className="text-sm font-serif font-bold text-navy-900 italic">
                  You focus on your big goals. We take care of the rest.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Ironclad Security Section */}
      <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="about-security-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,124,255,0.015),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 flex items-center justify-center gap-2">
              Ironclad Security: Enterprise-Grade Data Protection
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
              We know that handing over financial data requires absolute confidence. To gain and maintain your complete trust, we enforce bank-grade security protocols across our entire ecosystem:
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50/70 border border-slate-200/50 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300">
              <h3 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider font-sans">Zero-Local-Storage Policy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Your client data remains entirely locked within secure, designated cloud environments—never downloaded or stored on local drives.
              </p>
            </div>
 
            <div className="bg-slate-50/70 border border-slate-200/50 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300">
              <h3 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider font-sans">Multi-Tier Encryption</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                We protect your sensitive data using AES 256-bit encryption for all data at rest and in transit.
              </p>
            </div>
 
            <div className="bg-slate-50/70 border border-slate-200/50 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300">
              <h3 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider font-sans">Strict Access Control</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Enforced multi-factor authentication (MFA) and continuous security auditing ensure only authorized personnel touch your files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Modal Popup */}
      {activeMember && (
        <div className="fixed inset-0 bg-navy-950/75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 max-w-2xl w-full relative overflow-hidden max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close button */}
            <button 
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-navy-900 transition-colors p-1.5 rounded-full hover:bg-slate-100 cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Header: Avatar, Name, Role */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                    <SafeImage 
                      src={activeMember.image} 
                      alt={activeMember.name} 
                      className="w-full h-full object-cover"
                      category="team"
                    />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/heena-karamchandani-tilwani-4b07a93b0/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-1 bg-[#007cff] p-1.5 rounded-full text-white border-2 border-white hover:bg-blue-600 transition-colors shadow-sm cursor-pointer flex items-center justify-center"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">{activeMember.name}</h3>
                  <p className="text-xs sm:text-sm text-[#007cff] font-mono tracking-wider font-bold uppercase">{activeMember.role}</p>
                  <div className="w-12 h-1 bg-[#007cff] rounded-full mx-auto sm:mx-0"></div>
                  
                  {/* Qualifications */}
                  <div className="pt-2 flex flex-wrap gap-1 justify-center sm:justify-start">
                    {activeMember.qualifications.map((q: string) => (
                      <span key={q} className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium border border-slate-200/50">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="border-t border-slate-100 pt-5 space-y-3">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">Professional Background</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light whitespace-pre-line">
                  {activeMember.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
