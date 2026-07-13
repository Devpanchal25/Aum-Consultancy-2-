import { Page } from '../types';
import { 
  ShieldCheck, Lock, EyeOff, Server, FileText, CheckCircle, 
  Terminal, Cpu, Network, ArrowRight, BookOpen, AlertCircle
} from 'lucide-react';
import SafeImage from '../components/SafeImage';

interface SecurityViewProps {
  setCurrentPage: (page: Page) => void;
  openConsultation: () => void;
  openSecurityPolicy: () => void;
}

export default function SecurityView({ setCurrentPage, openConsultation, openSecurityPolicy }: SecurityViewProps) {
  
  const protocols = [
    {
      title: 'Cryptographic Encrypted Cloud Storage',
      desc: 'All host ledger databases and shared files are encrypted at rest and in transit using advanced AES-256 encryption. We utilize ISO-certified cloud environments to store records.',
      icon: <Lock className="w-5 h-5 text-[#007cff]" />
    },
    {
      title: 'Mandatory Multi-Factor Authentication (MFA)',
      desc: 'We enforce rigid MFA access tokens on all core financial ecosystems. No staff can authenticate inside QuickBooks, Xero, or email databases without dynamic biometric verification.',
      icon: <ShieldCheck className="w-5 h-5 text-[#007cff]" />
    },
    {
      title: 'Zero Local Storage Terminal Operations',
      desc: 'Workstations operate on thin-client models without USB ports, print queues, or writing systems. Staff cannot download or copy sensitive files locally. External devices are blocked.',
      icon: <EyeOff className="w-5 h-5 text-[#007cff]" />
    },
    {
      title: 'Biometric Facility Security Controls',
      desc: 'Our physical server databases and processing bays in Ahmedabad are restricted via multi-level biometric locks, CCTV surveillance, and secure entry clearances.',
      icon: <Server className="w-5 h-5 text-[#007cff]" />
    },
    {
      title: 'Rigid Non-Disclosure Agreements (NDAs)',
      desc: 'Before accessing any client information, all accountants sign multi-jurisdictional, legally binding NDAs. We maintain strict penal codes for any unauthorized handling of books.',
      icon: <FileText className="w-5 h-5 text-[#007cff]" />
    }
  ];

  const regulations = [
    {
      name: 'GDPR (European Union)',
      accent: 'General Data Protection Regulation',
      status: 'Fully Compliant',
      desc: 'We sign explicit Data Processing Addendums (DPA) containing standard contractual clauses, ensuring completely safe processing of EU customer details.'
    },
    {
      name: 'CCPA (California, USA)',
      accent: 'California Consumer Privacy Act',
      status: 'Fully Compliant',
      desc: 'We enforce explicit consumer rights limits, strictly blocking any processing that triggers California personal identifier tracking vectors.'
    },
    {
      name: 'PIPEDA (Canada)',
      accent: 'Personal Information Protection Act',
      status: 'Fully Compliant',
      desc: 'Ensures our remote cloud-ledger processing systems conform strictly to Canadian federal records protection protocols.'
    },
    {
      name: 'Privacy Act (Australia)',
      accent: 'Australian Privacy Principles (APPs)',
      status: 'Fully Compliant',
      desc: 'Our financial bookkeeping processes correspond perfectly with APP rules governing the safe holding of foreign cross-border data.'
    }
  ];

  return (
    <div className="pt-20">
      
      {/* Header Banner with Premium Background Photo */}
      <section className="relative text-white overflow-hidden py-24 sm:py-32 lg:py-40 bg-navy-950 border-b border-navy-850">
        {/* Premium background photo with high-contrast dual-layer dark overlay */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600" 
            alt="Secure data defense center background" 
            className="w-full h-full object-cover opacity-45 select-none pointer-events-none"
            category="other"
          />
          {/* Layer 1: Solid high-density dark tint for rich text-contrast */}
          <div className="absolute inset-0 bg-navy-950/75 mix-blend-multiply"></div>
          {/* Layer 2: Radial and vertical gradients for elegant lighting and focus */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/45 via-navy-950/85 to-navy-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,124,255,0.06),transparent_65%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Centered Hero Panel with Premium Glass Overlay */}
            <div className="bg-navy-950/70 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-4 sm:space-y-6">
              <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Confidentiality Standards</span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Security & Compliance Playbook
              </h1>
              <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
                International CPA firms require absolute confidentiality. We treat data protection as an architectural requirement rather than a secondary operational checklist.
              </p>
              <div className="pt-2">
                <button 
                  onClick={openSecurityPolicy}
                  className="bg-[#007cff] hover:bg-blue-600 text-white font-bold text-xs tracking-wider px-6 py-3 rounded-lg transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/15 uppercase cursor-pointer inline-block"
                >
                  Open Interactive Security Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core Protocols */}
      <section className="py-20 bg-white" id="security-protocols-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-[#007cff] uppercase tracking-widest block font-sans">System Security</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
              Military-Grade Workstation & Data Corridors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protocols.map((p) => (
              <div 
                key={p.title}
                className="bg-slate-50 border border-slate-150 p-6 sm:p-8 rounded-2xl space-y-4 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}

            {/* Replaced Simulated Terminal Block with a beautiful premium security imagery card */}
            <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group shadow-lg min-h-[300px]">
              <div className="relative h-44 w-full overflow-hidden shrink-0">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400" 
                  alt="Cybersecurity defense systems" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  category="other"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-[#007cff] font-mono font-bold uppercase tracking-wider block">SOC-2 Type II Alignment</span>
                  <h4 className="font-serif text-sm font-bold text-white">Continuous Compliance Controls</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                    Our अहमदाबाद facility executes routine automated audit logs, ensuring zero external ports are exposed.
                  </p>
                </div>
                <div className="border-t border-slate-800/80 pt-3 mt-4 text-[10px] text-slate-500 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse mr-1"></span>
                  Active session logging & verification
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Jurisdictional Compliances */}
      <section className="py-20 bg-blue-50 border-t border-b border-blue-100" id="compliance-regulations-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#007cff] uppercase tracking-widest block font-sans">Regional Accordances</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
              Regulatory Alignment Across Global Jurisdictions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light">
              We operate under specific DPA provisions, ensuring completely safe client-records processing per your domestic privacy guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regulations.map((r) => (
              <div 
                key={r.name}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 shadow-sm space-y-3 hover:border-blue-500/20 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider">{r.name}</h3>
                    <span className="text-[10px] text-slate-400 font-mono">{r.accent}</span>
                  </div>
                  <span className="text-[9px] font-mono font-extrabold text-emerald-600 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded">
                    {r.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ISO Certification & NDA details */}
      <section className="py-16 bg-navy-900 text-white relative overflow-hidden" id="iso-nda-details">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center relative z-10">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 text-[#007cff] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold">Unconditional Confidentiality Framework</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              Aum Consultancy guarantees that no client data, bank logins, invoice trails, or personal information will ever be shared, sold, or exposed. Our Ahmedabad office operates under an unconditional "Clean Desk" policy. Employees are banned from bringing personal smart devices, cameras, or writing pads inside the workstation bays.
            </p>
          </div>

          <div className="bg-navy-950/60 p-4 rounded-xl border border-navy-800 max-w-md mx-auto text-left text-[11px] text-slate-400 flex gap-2.5 items-start">
            <AlertCircle className="w-4 h-4 text-[#007cff] shrink-0 mt-0.5" />
            <p>
              <strong>Security Audits:</strong> We accommodate annual remote security assessments and physical facility visits for CPA firms arranging dedicated offshore FTE bays (over 5 FTEs).
            </p>
          </div>
        </div>
      </section>

      {/* Contact redirection CTA */}
      <section className="bg-blue-50/40 border-t border-blue-100/55 py-16 text-center space-y-6">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="font-serif text-xl font-bold text-navy-900">Want to review our secure DPA terms?</h3>
          <p className="text-slate-500 text-xs font-light">
            We provide standard contractual clauses and detailed IT security briefs to compliance officers before onboarding.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={openSecurityPolicy}
            className="border border-[#007cff] text-[#007cff] hover:bg-blue-50 font-bold text-xs tracking-wider px-8 py-3.5 rounded-lg transition-all shadow-sm inline-block uppercase cursor-pointer"
          >
            Review Security Policy Overlay
          </button>
          <button 
            onClick={openConsultation}
            className="bg-[#007cff] hover:bg-blue-600 text-white font-bold text-xs tracking-wider px-8 py-3.5 rounded-lg transition-all shadow-md inline-block uppercase cursor-pointer"
          >
            Request IT Security Playbook
          </button>
        </div>
      </section>

    </div>
  );
}
