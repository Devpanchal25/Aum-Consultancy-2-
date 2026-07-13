import React, { useState } from 'react';
import { X, Mail, CheckCircle, Newspaper, Calendar, ArrowRight } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a correct email format.');
      return;
    }
    setSubscribed(true);
    setEmail('');
    setError('');
  };

  const recentNewsletters = [
    {
      date: 'June 24, 2026',
      title: 'US Sales Tax Compliance: Shopify Merchant Reconciliation Rules',
      summary: 'A deep-dive into economic nexus thresholds, A2X ledger setup, and multi-state tax remittance checklists.',
      readTime: '4 min read'
    },
    {
      date: 'May 10, 2026',
      title: 'Offshore Security Protocols: Guarding Sensitive Financial Data',
      summary: 'Understanding the mechanics of Zero-Local-Storage environments, AES-256 encrypted VPN corridors, and biometric thin-clients.',
      readTime: '6 min read'
    },
    {
      date: 'April 18, 2026',
      title: 'How Western CPA Firms are Overcoming the Accounting Talent Crisis',
      summary: 'Strategies for deploying dedicated Indian Chartered Accountants (FTEs) to absorb bookkeeping loads and scale high-margin advisory.',
      readTime: '5 min read'
    },
    {
      date: 'March 05, 2026',
      title: 'UK Companies Act 2006: Accounts Production Updates',
      summary: 'A statutory checklist on HMRC CT600 structures, MTD regulations, and streamlined financial report preparation.',
      readTime: '5 min read'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-xs animate-fadeIn" id="newsletter-modal">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 flex flex-col relative animate-scaleUp">
        
        {/* Header */}
        <div className="bg-navy-900 text-white p-6 sm:p-8 relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,124,255,0.1),transparent_50%)]"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
              <Newspaper className="w-3.5 h-3.5 text-[#007cff]" />
              <span className="text-[10px] text-[#007cff] font-mono font-bold uppercase tracking-wider">Aum Executive Briefing</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">The Offshore Financial Newsletter</h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              Bi-weekly statutory briefings, global tax updates, and back-office capacity-scaling frameworks compiled by our Indian Chartered Accountants.
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-6 max-h-[55vh]">
          
          {/* Subscription Box */}
          {subscribed ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl flex items-start gap-3.5">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-sm font-bold text-slate-900 block">Subscription Successful</strong>
                <p className="text-xs text-slate-700 leading-relaxed font-light">
                  Thank you! You are now subscribed to the Aum Executive Briefing. You will receive our next tax update directly in your inbox.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <label htmlFor="newsletter-email" className="text-xs font-bold text-navy-900 block uppercase tracking-wider">Subscribe to Executive Briefs</label>
              <div className="relative">
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="Enter your corporate email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-10 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007cff] transition-colors"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-2 bottom-2 bg-[#007cff] hover:bg-blue-600 text-white rounded-lg px-3 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4 font-bold" />
                </button>
              </div>
              {error && <p className="text-[11px] text-red-500 font-medium pl-1">{error}</p>}
              <p className="text-[10px] text-slate-400 font-light leading-snug">
                * Zero-spam policy. GDPR & Privacy compliant. You can unsubscribe at any point using the link in the footer of each newsletter.
              </p>
            </form>
          )}

          <div className="border-t border-slate-100 pt-6 space-y-4">
            <span className="text-xs font-bold text-navy-900 block uppercase tracking-wider">Browse Recent Editions</span>
            
            <div className="space-y-3.5">
              {recentNewsletters.map((nl, idx) => (
                <div key={idx} className="p-4 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-2xl transition-colors space-y-1.5 text-left">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-300" />
                      {nl.date}
                    </span>
                    <span className="font-semibold">{nl.readTime}</span>
                  </div>
                  <h4 className="text-xs font-bold text-navy-900 leading-snug">
                    {nl.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    {nl.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 text-center shrink-0">
          <button 
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-navy-900 transition-colors uppercase tracking-wider py-1"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
