import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldCheck, Newspaper, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NewslettersView() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

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

  const PAST_ISSUES = [
    {
      issue: 'Issue #47',
      date: 'June 2026',
      title: 'Global Compliance Watch: Multi-State Economic Nexus Threshold Updates',
      summary: 'A critical review of state-level sales tax nexus adjustments in California, Texas, and New York. What remote eCommerce businesses must file this quarter.'
    },
    {
      issue: 'Issue #46',
      date: 'May 2026',
      title: 'Offshore Security Architecture: SOC-2 Audit Preparation Playbook',
      summary: 'Step-by-step walkthrough of isolating network environments, securing thin clients, biometric locks, and eliminating data-leak hazards in offshore accounting hubs.'
    },
    {
      issue: 'Issue #45',
      date: 'April 2026',
      title: 'CPA Scaling Guide: Whitelabel FTE Accountants vs. Hourly Bookkeepers',
      summary: 'A direct cost-efficiency analysis of dedicated Full-Time Equivalent (FTE) staffing. How offshore Chartered Accountants deliver up to 60% margin expansions.'
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,124,255,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <button
            onClick={() => navigate('/resources')}
            className="flex items-center gap-1.5 text-xs text-[#007cff] font-mono hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Resource Hub</span>
          </button>
          <span className="text-xs font-mono text-[#007cff] uppercase tracking-widest font-semibold block">Aum Taxation Briefings</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Bi-Weekly Regulatory Taxation briefings
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Direct, practical updates on GAAP amendments, IRS tax codes, sales tax nexus guidelines, and back-office efficiency methodologies.
          </p>
        </div>
      </section>

      {/* Main Content split */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Subscribe Panel */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl w-fit">
              <Mail className="w-6 h-6 text-[#007cff]" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-navy-900">Subscribe Today</h2>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                Enter your professional corporate email to receive our bi-weekly briefings. We deliver purely technical guides, cost saving analyses, and legislative tax alerts.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-5 rounded-2xl space-y-2 animate-fadeIn">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <strong className="text-xs font-bold text-slate-900">Subscription Complete</strong>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Thank you! You have successfully subscribed. Our next technical taxation brief will arrive in your inbox next Tuesday.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="newsletter-email" className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pl-1">Corporate Email Address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="e.g. partner@cpafirm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#007cff] focus:bg-white transition-all"
                  />
                  {error && <p className="text-[11px] text-red-500 font-medium pl-1">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Join Technical Digest list
                </button>
              </form>
            )}

            <div className="flex gap-2 items-start text-[11px] text-slate-500 pt-4 border-t border-slate-100">
              <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>Zero spam guaranteed. All lists comply with GDPR, CCPA, and Australian SPAM Acts. Unsubscribe anytime with a single click.</span>
            </div>
          </div>

          {/* Right Side: Archive headlines list */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="w-5 h-5 text-[#007cff]" />
              <h3 className="font-serif text-lg font-bold text-navy-900">Recent Briefings Highlights</h3>
            </div>

            <div className="space-y-6">
              {PAST_ISSUES.map((issue, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-[#007cff]/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#007cff] bg-blue-500/10 px-2.5 py-0.5 rounded-full uppercase">
                      {issue.issue}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-medium">{issue.date}</span>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-navy-900 mb-2">
                    {issue.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    {issue.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
