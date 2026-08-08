import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Page } from '../types';
import { TEAM } from '../data';
import { ShieldCheck, Target, Eye, CheckCircle, GraduationCap, X, Linkedin, ChevronRight, Globe, Lock, TrendingUp } from 'lucide-react';
import SafeImage from '../components/SafeImage';

interface AboutViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
}

export default function AboutView({ setCurrentPage, openConsultation }: AboutViewProps) {
  const location = useLocation();
  const [activeMember, setActiveMember] = useState<any>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -110;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="pt-20">

      {/* Hero Banner Header */}
      <section className="relative text-navy-950 overflow-hidden py-16 sm:py-24 bg-white border-b border-slate-100 scroll-mt-28 sm:scroll-mt-32" id="about-hero-header">
        <div className="absolute inset-0 z-0">
          {/* Radial and vertical gradients for elegant lighting and focus */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,124,255,0.02),transparent_65%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
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
      </section>

      {/* 1. What is Aum Consultancy - Brand Story */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 scroll-mt-28 sm:scroll-mt-32" id="brand-story-section">
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

      {/* 2. Founder & Core Leadership Team */}
      <section className="py-20 bg-white border-b border-slate-100 scroll-mt-28 sm:scroll-mt-32" id="founders-section">
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
                      href={member.linkedinUrl || "https://www.linkedin.com/company/aum-consultancy-india/"}
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

                </div>

                <div className="pt-4">
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

      {/* 3. Ironclad Security Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden scroll-mt-28 sm:scroll-mt-32" id="about-security-section">
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
            <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300">
              <h3 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider font-sans">Zero-Local-Storage Policy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Your client data remains entirely locked within secure, designated cloud environments—never downloaded or stored on local drives.
              </p>
            </div>

            <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300">
              <h3 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider font-sans">Multi-Tier Encryption</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                We protect your sensitive data using AES 256-bit encryption for all data at rest and in transit.
              </p>
            </div>

            <div className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg hover:border-slate-300/60 transition-all duration-300">
              <h3 className="text-xs font-extrabold text-navy-900 uppercase tracking-wider font-sans">Strict Access Control</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Enforced multi-factor authentication (MFA) and continuous security auditing ensure only authorized personnel touch your files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section className="py-20 bg-white scroll-mt-28 sm:scroll-mt-32" id="vision-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Main Title Header - Centered */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-extrabold block">
              OUR GUIDING PRINCIPLES & CORE COMMITMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-950 tracking-tight">
              Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-[#007cff] rounded-full mx-auto"></div>
          </div>

          {/* ================= VISION SECTION ================= */}
          <div className="space-y-10">
            {/* Vision Title & Statement */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 text-[#007cff]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#007cff] uppercase tracking-widest font-extrabold block">STRATEGIC OUTLOOK</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">Vision Statement</h3>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#007cff] pl-6 py-2 text-lg sm:text-xl text-slate-800 leading-relaxed font-serif italic text-left">
                "To transform the structural landscape of the global professional services sector by becoming the definitive, trusted offshore engine for remote accounting, tax, and audit delivery. Based out of our high-capacity delivery center in Vadodara, India, we envision a future where international talent shortages and localized wage inflation no longer restrict firm growth. By seamlessly connecting elite Indian financial expertise with public practices and corporations across the US, UK, Canada, Australia, and the UAE, we aim to redefine operational efficiency, elevate capital allocation, and empower our global partners to scale their firms without administrative boundaries."
              </blockquote>
            </div>

            {/* Strategic Pillars of the Vision */}
            <div className="space-y-6 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-extrabold text-navy-900 uppercase tracking-widest font-mono flex items-center gap-2">
                <span></span> Strategic Pillars of the Vision
              </h4>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 text-[#007cff] shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-base sm:text-lg font-bold text-navy-950">Eradicating Geographical Barriers</h5>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                      Utilizing an optimized time-zone model to create a continuous, overnight production cycle where local onshore firms upload raw workflows at close of business and receive pristine, audit-ready deliverables by the following morning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 text-[#007cff] shrink-0 mt-0.5">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-base sm:text-lg font-bold text-navy-950">Setting the Standard for Offshore Security</h5>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                      Becoming the global benchmark for secure remote staffing by proving that multi-jurisdictional financial data can be processed under bank-grade encryption frameworks with zero local vulnerability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 text-[#007cff] shrink-0 mt-0.5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-base sm:text-lg font-bold text-navy-950">Championing Growth-Focused Outsourcing</h5>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                      Shifting the perception of outsourcing from a mere cost-cutting tool to a high-level strategic partnership that allows local executive leadership to reclaim valuable billable hours and pivot entirely toward high-margin advisory services and client relationship management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-200"></div>

          {/* ================= MISSION SECTION ================= */}
          <div className="space-y-10">
            {/* Mission Title & Statement */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 text-[#007cff]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#007cff] uppercase tracking-widest font-extrabold block">PURPOSE & EXECUTION</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">Mission Statement</h3>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#007cff] pl-6 py-2 text-lg sm:text-xl text-slate-800 leading-relaxed font-serif italic text-left">
                "Our mission is to eliminate the severe operational bottlenecks, high recruitment fees, and prohibitive overhead costs that threaten the growth of modern accounting firms and corporate finance divisions. We deliver pre-trained, CA and CPA-led remote specialized teams—spanning Bookkeepers, Tax Preparers, Audit Support Staff, and Fractional CFOs—who are fully fluent in global software ecosystems and regional compliance codes from Day 1. We fulfill this by executing a structured two-week onboarding blueprint, enforcing a strict multi-tier quality assurance protocol, and maintaining an ironclad, zero-local-storage security environment that protects data integrity while systematically slashing client staffing overhead by 70% to 80%."
              </blockquote>
            </div>

            {/* Core Mission Commitments in Action */}
            <div className="space-y-8 pt-4 border-t border-slate-100">
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-navy-900 uppercase tracking-widest font-mono flex items-center gap-2">
                  <span></span> Core Mission Commitments in Action
                </h4>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed text-left">
                  To turn this mission into measurable business impact for our global partners, Aum Consultancy operates under four non-negotiable execution mandates:
                </p>
              </div>

              {/* Vertical list of 4 Mandates */}
              <div className="space-y-8">

                {/* Mandate 1 */}
                <div className="space-y-3 pb-6 border-b border-slate-150">
                  <div className="flex items-center gap-2 text-navy-950 font-bold text-lg sm:text-xl">
                    <span className="text-[#007cff] font-mono font-extrabold">1.</span>
                    <span>Absolute Software Fluency and Compliance Readiness</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                    We eliminate the costly, non-billable training cycles that typically accompany staff expansion. Every remote professional deployed is pre-vetted and fully certified across major industry platforms (including QuickBooks, Xero, Sage, NetSuite, and TaxWise) and thoroughly trained in localized statutory frameworks:
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed font-normal pl-4 list-disc marker:text-[#007cff]">
                    <li>
                      <strong className="text-navy-950 font-semibold">United States:</strong> Strict adherence to US GAAP, GAAS clarity frameworks, PCAOB compliance, and complex IRS codes (including Form 1120-S, Form 1120, and Form 7203 tracking).
                    </li>
                    <li>
                      <strong className="text-navy-950 font-semibold">United Kingdom:</strong> Complete alignment with UK GAAP/IFRS, HMRC frameworks, and accounts production under the Companies Act 2006.
                    </li>
                    <li>
                      <strong className="text-navy-950 font-semibold">Canada & Australia:</strong> Comprehensive mastery of Canadian Auditing Standards (CAS), CRA guidelines, Australian Auditing Standards (ASAs), and localized corporate tax and economic nexus structures.
                    </li>
                  </ul>
                </div>

                {/* Mandate 2 */}
                <div className="space-y-3 pb-6 border-b border-slate-150">
                  <div className="flex items-center gap-2 text-navy-950 font-bold text-lg sm:text-xl">
                    <span className="text-[#007cff] font-mono font-extrabold">2.</span>
                    <span>Guarding the Gate with Multi-Tier Quality Assurance</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                    We pledge to deliver 'Right the First Time' financial packages. To protect the regulatory standing of our partner firms, every work paper, tax return, ledger reconciliation, and financial draft must pass through our mandatory, multi-layer review workflow:
                  </p>

                  {/* Flow Steps - Clean Left Aligned, No Box */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-navy-900 my-3">
                    <span>Preparer</span>
                    <span className="text-[#007cff]">➔</span>
                    <span>Senior Reviewer</span>
                    <span className="text-[#007cff]">➔</span>
                    <span className="text-emerald-600">Compliance Check</span>
                  </div>

                  <p className="text-sm text-slate-600 font-light leading-relaxed text-left">
                    This internal mechanism guarantees that historical data reconstruction, substantive audit sampling, and corporate tax engineering are executed with CPA-grade accuracy before final transmission.
                  </p>
                </div>

                {/* Mandate 3 */}
                <div className="space-y-3 pb-6 border-b border-slate-150">
                  <div className="flex items-center gap-2 text-navy-950 font-bold text-lg sm:text-xl">
                    <span className="text-[#007cff] font-mono font-extrabold">3.</span>
                    <span>Maintaining a Bank-Grade Data Security Infrastructure</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                    We recognize that managing sensitive client data requires uncompromised vigilance. Our delivery infrastructure is architected to mirror enterprise banking protocols, utilizing:
                  </p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal pl-1">
                    <li className="flex gap-2.5 items-start">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span><strong className="text-navy-950 font-semibold">Zero-Local-Storage Policy:</strong> Remote personnel operate strictly within the client’s secure cloud environment; no files or records can be downloaded onto physical local hardware.</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span><strong className="text-navy-950 font-semibold">End-to-End Encryption:</strong> All data transiting cloud pipelines is shielded by AES 256-bit encryption and protected by mandatory multi-factor authentication (MFA).</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span><strong className="text-navy-950 font-semibold">Global Privacy Alignment:</strong> Workflows are legally mapped to comply directly with regional data mandates, including the CCPA/CPRA (US), GDPR (UK), PIPEDA (Canada), and the Privacy Act (Australia).</span>
                    </li>
                  </ul>
                </div>

                {/* Mandate 4 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-navy-950 font-bold text-lg sm:text-xl">
                    <span className="text-[#007cff] font-mono font-extrabold">4.</span>
                    <span>Maximizing Arbitrage and Capital Efficiency</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light text-left">
                    We are dedicated to fundamentally transforming the unit economics of our client organizations. By absorbing all onboarding, administrative retention, physical office overhead, and workstation hardware costs, we shift the financial burden of scaling away from the client. We turn variable, soaring local labor costs into a predictable, fixed monthly fee, enabling companies to achieve a <strong className="text-navy-950 font-bold underline decoration-[#007cff] underline-offset-4">70% to 80% reduction</strong> in fully loaded operational expenses.
                  </p>
                </div>

              </div>
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
                    href={activeMember.linkedinUrl || "https://www.linkedin.com/company/aum-consultancy-india/"}
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
