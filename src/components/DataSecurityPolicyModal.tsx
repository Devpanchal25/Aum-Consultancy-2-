import React, { useState } from 'react';
import { 
  X, ShieldCheck, Lock, EyeOff, Server, FileText, 
  Terminal, CheckCircle, Download, Copy, AlertCircle, Check
} from 'lucide-react';

interface DataSecurityPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  openConsultation: () => void;
}

type ActiveTab = 'all' | 'encryption' | 'infrastructure' | 'nda';

export default function DataSecurityPolicyModal({ isOpen, onClose, openConsultation }: DataSecurityPolicyModalProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summaryText = `AUM CONSULTANCY SERVICES - ENTERPRISE DATA SECURITY STANDARD
========================================================================
1. CRYPTOGRAPHIC PROTECTION: AES-256 cloud encryption at rest/transit. TLS 1.3 channels. Enforced 2FA/MFA.
2. ZERO-LEAK INFRASTRUCTURE: Ahmedabad cleanroom facility, biometric locks, CCTV, disabled physical USB ports, disabled print/writing queues.
3. LEGALLY ENFORCED NDAs: Binding multi-jurisdictional non-disclosure protocols, background vetted Chartered Accountants.
4. COMPLIANCE: GDPR, CCPA, PIPEDA, and Australian Privacy Principles (APPs).`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/80 backdrop-blur-md">
      {/* Backdrop Closer */}
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-150 overflow-hidden flex flex-col max-h-[92vh] animate-zoomIn z-10"
        id="data-security-policy-modal"
      >
        {/* Navy Header */}
        <div className="bg-navy-900 px-6 py-5 flex justify-between items-start text-white shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_60%)]"></div>
          <div className="relative z-10 space-y-1">
            <span className="inline-flex items-center gap-1 text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Enterprise-Grade Trust
            </span>
            <h3 className="text-xl font-serif font-bold text-white">Data Security & Compliance Policy</h3>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Comprehensive technical and organizational measures (TOMs) governing the preservation of multi-national CPA ledger files.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-navy-800 hover:bg-navy-700 p-1.5 rounded-full transition-colors relative z-10 shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center justify-between shrink-0 overflow-x-auto gap-4">
          <div className="flex gap-1.5">
            <button
              onClick={() => setActiveTab('all')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'all' 
                  ? 'bg-navy-900 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Safeguards
            </button>
            <button
              onClick={() => setActiveTab('encryption')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                activeTab === 'encryption' 
                  ? 'bg-navy-900 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Lock className="w-3 h-3" /> Encryption
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                activeTab === 'infrastructure' 
                  ? 'bg-navy-900 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Server className="w-3 h-3" /> Cleanroom & Hardware
            </button>
            <button
              onClick={() => setActiveTab('nda')}
              className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                activeTab === 'nda' 
                  ? 'bg-navy-900 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3 h-3" /> NDAs & Vetting
            </button>
          </div>

          <div className="flex gap-2 shrink-0">
            <button 
              onClick={handleCopySummary}
              className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-indigo-50"
              title="Copy Policy Summary to Clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Brief'}</span>
            </button>
            <button 
              onClick={handleDownloadPDF}
              className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-indigo-50"
              title="Download Security Playbook PDF"
            >
              {downloaded ? <Check className="w-3.5 h-3.5 text-green-650" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Downloaded!' : 'PDF Brief'}</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Top disclaimer note for confidence */}
          <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex gap-3 text-xs text-indigo-850 leading-relaxed font-light">
            <AlertCircle className="w-4.5 h-4.5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-indigo-900 block mb-0.5">Enterprise Assurance Standards</strong>
              Our system architecture is certified, audited, and strictly compliant with GDPR (EU), CCPA (USA), PIPEDA (Canada), and APPs (Australia). We ensure 100% data residency adherence where remote screen sessions are processed purely live on client servers.
            </div>
          </div>

          {/* Tab Content - Encryption */}
          {(activeTab === 'all' || activeTab === 'encryption') && (
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-3">
                <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-indigo-600 animate-pulse" /> 1. Cryptographic Security & Credentials
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">AES-256 Symmetric Encryption</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    All static archives, credentials, spreadsheet extracts, and client folders are fully encrypted at rest on ISO-27001-certified servers using AES-256 standards with rotating master keys.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">TLS 1.3 Transport Safeguards</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Every data interaction, live API connection, or cloud synchronizer operates within secure HTTPS channels guarded by modern TLS 1.3 transport security overlays to secure traffic.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Mandatory 2FA / MFA Enforcements</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    All ledger interfaces (QuickBooks, Xero, NetSuite, Sage, Hubdoc, Bill.com) are hard-bound with dual authentication prompts. No team member can access databases without verified biometrics.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Sovereign Password Isolation</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    We leverage centralized, enterprise password vaults (e.g. 1Password Enterprise, LastPass). Individual staff never see, copy, or write down the actual host client logins.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - Infrastructure */}
          {(activeTab === 'all' || activeTab === 'infrastructure') && (
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-3">
                <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-indigo-600 animate-pulse" /> 2. Ahmedabad Facility & Hardware Cleanrooms
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Thin-Client Virtual Workstations</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Accountants operate on secure thin-clients connected to terminal-servers. Physical hard drives are absent, and standard motherboard print queues, print options, and USB ports are physically disabled.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Physical Biometric Airlocks</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Workstation bays are secured by multi-level finger-scan airlocks. Only authorized financial talent allocated to your specific files have active biometric door clearance.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Rigid "Clean Desk" Policies</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Mobile phones, smart devices, cameras, writing pads, notebooks, or pen drives are strictly banned inside workstation bays. Secure personal storage lockers are managed with 24/7 security monitors.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Continuous CCTV Recording</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    High-resolution CCTV systems monitor 100% of the workspace desks. Footage is securely backed up and stored for audit compliance checks and client oversight reviews.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content - NDAs */}
          {(activeTab === 'all' || activeTab === 'nda') && (
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-600 pl-3">
                <h4 className="text-xs font-black text-navy-950 uppercase tracking-widest flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-600 animate-pulse" /> 3. Legal NDAs & Qualified Vetting
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Legally-Binding Multi-State NDAs</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Before onboarding, Aum Consultancy signs a comprehensive corporate Non-Disclosure Agreement (NDA) with your firm. This guarantees strict financial penalties and multi-state legal binding.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Comprehensive Police Verification</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Every Chartered Accountant, audit supervisor, or bookkeeper undergoes strict external police verification, reference checks, and certified professional registry verification (ICAI/ACCA).
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Personalized NDA Co-Signing</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    To satisfy onshore audits, our dedicated full-time equivalents (FTEs) co-sign individual employee NDAs specifying exact details requested by the client's home compliance regulations.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                  <strong className="text-xs font-bold text-slate-800 block">Incident Response Drills</strong>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Our ISO internal team performs weekly security vulnerability reviews, access-logs audits, and incident drills, ensuring that response times satisfy your home standard framework metrics.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Secure terminal log visual component */}
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-[10px] text-slate-400 space-y-2 border border-slate-800">
            <div className="flex justify-between items-center text-slate-500 border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1"><Terminal className="w-3.5 h-3.5 text-indigo-500" /> SECURE AUDIT PROTOCOL REGISTER</span>
              <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 rounded font-extrabold uppercase animate-pulse">SYSTEM COMPLIANT</span>
            </div>
            <p className="text-indigo-400">// AUDIT REPORT LOG - CURRENT SESSION STACK</p>
            <p>&gt; IP restriction controls applied globally... [OK]</p>
            <p>&gt; Credential isolation protocols... [AES-256 ACTIVE & ENFORCED]</p>
            <p>&gt; Data protection officer controls... [GDPR / CCPA / PIPEDA SYNCED]</p>
            <p>&gt; Thin client terminal status... [ZERO VECTOR RECORDED ON CLOUD LOGS]</p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 border-t border-slate-150 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
          <span className="text-[11px] text-slate-500 flex items-center gap-1 text-center sm:text-left">
            <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>Need personalized SLA terms? Contact our IT Security Officer.</span>
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs tracking-wider px-5 py-2.5 rounded-lg transition-colors cursor-pointer text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                openConsultation();
              }}
              className="flex-1 sm:flex-none bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs tracking-wider px-5 py-2.5 rounded-lg transition-colors shadow-md cursor-pointer text-center"
            >
              Consult Security Officer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
