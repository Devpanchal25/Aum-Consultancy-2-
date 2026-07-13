import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, Youtube, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface FooterProps {
  setCurrentPage?: (page: Page) => void;
  openConsultation: () => void;
  openSecurityPolicy: () => void;
}

export default function Footer({ setCurrentPage, openConsultation, openSecurityPolicy }: FooterProps) {
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

  const handlePageClick = (page: Page) => {
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

  const navigateToPath = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-navy-800/80">
      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Name */}
        <div className="space-y-5">
          <Logo 
            variant="horizontal" 
            darkBg={true} 
            onClick={() => handlePageClick('home')} 
          />
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aum Consultancy Services</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Premium secure offshore accounting, bookkeeping, and global tax compliance services. Powering firms with elite financial talent.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-slate-400" title="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#007cff] pl-3">Registered Office</h4>
          <div className="space-y-3 text-xs text-slate-400 font-light leading-relaxed">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#007cff] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">India Head Office:</strong>
                <p className="mt-1">
                  Aum Consultancy, A-4 Hare Krishna 2, <br />
                  Behind Earth Icon, New VIP Road,,<br />
                  Vadodara, Gujarat, India – 390006
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#007cff] pl-3">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handlePageClick('home')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">Home Overview</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/accounting-bookkeeping')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">Accounting & Bookkeeping</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/audit-assurance')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">Audit</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/tax-services')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">Tax Services</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/cfo-advisory')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">CFO Advisory</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/build-your-team')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">Build Your Team</button>
            </li>
            <li>
              <button onClick={() => handlePageClick('industries')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">Sectors We Serve</button>
            </li>
            <li>
              <button onClick={() => handlePageClick('faq')} className="hover:text-[#007cff] transition-colors text-slate-400 text-left font-light">FAQs & Help Center</button>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-5">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider border-l-2 border-[#007cff] pl-3">Contact Details</h4>
          <div className="space-y-3.5 text-xs text-slate-400 font-light">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#007cff] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Direct Hotline:</strong>
                <a href="tel:+919879161400" className="hover:text-[#007cff] transition-colors block mt-1 font-bold text-slate-300">
                  +91 9879161400 <span className="font-light text-slate-400 text-[11px] block md:inline md:ml-1.5">(CA Jitendra Tilwani)</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#007cff] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-medium">Email Address:</strong>
                <a href="mailto:aumconsulting.india@gmail.com" className="hover:text-[#007cff] transition-colors block mt-1 font-medium text-slate-300 break-all">
                  aumconsulting.india@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-navy-800">
              <p className="text-[11px] text-slate-500 leading-normal">
                <span className="w-1.5 h-1.5 bg-[#007cff] rounded-full inline-block mr-1.5 animate-pulse"></span>
                24/7 Global Timezone Overlap Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Under-Footer Copyright and Legal compliance indicators */}
      <div className="border-t border-navy-800 bg-navy-950 py-8 px-4 sm:px-6 lg:px-8 text-xs font-medium text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Aum Consultancy Services Private Limited. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-600 mt-1 leading-relaxed text-center md:text-left">
              Corporate legal disclosures: All back-office operations adhere fully to GDPR, CCPA, PIPEDA, and Australian Privacy Principles. Services are provided through secure dedicated remote virtual frameworks.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[11px]">
            <button onClick={openSecurityPolicy} className="hover:text-slate-300 text-indigo-400 font-bold transition-colors">Data Security Policy</button>
            <span>•</span>
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => navigate('/terms-conditions')} className="hover:text-slate-300 transition-colors">Terms of Service</button>
            <span>•</span>
            <button onClick={openSecurityPolicy} className="hover:text-slate-300 transition-colors">Data Processing Addendum</button>
            <span>•</span>
            <button onClick={openSecurityPolicy} className="hover:text-slate-300 transition-colors">ISO 27001 Controls</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
