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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {/* Logo and Registered Office Address */}
        <div className="space-y-6">
          <Logo
            variant="horizontal"
            darkBg={true}
            onClick={() => handlePageClick('home')}
          />
          <div className="space-y-3 text-sm text-slate-300 font-light leading-relaxed">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#007cff] shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-medium">Address:</strong>
                <p className="mt-1">
                  208-Helix Complex, Opposite Hotel Surya,<br />
                  Sayajiganj, Vadodara, Gujarat, India – 390020<br />

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-sm font-bold text-black uppercase tracking-wider border-l-2 border-[#007cff] pl-3">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button onClick={() => handlePageClick('home')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">Home Overview</button>
            </li>
            <li>
              <button onClick={() => handlePageClick('about')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">About Us</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/accounting-bookkeeping')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">Accounting & Bookkeeping</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/audit-assurance')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">Audit</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/tax-services')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">Tax Services</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/services/cfo-advisory')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">CFO Advisory</button>
            </li>
            <li>
              <button onClick={() => navigateToPath('/build-your-team')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">Build Your Team</button>
            </li>
            <li>
              <button onClick={() => handlePageClick('industries')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">Sectors We Serve</button>
            </li>
            <li>
              <button onClick={() => handlePageClick('faq')} className="hover:text-black transition-colors text-slate-800 text-left font-normal">FAQs & Help Center</button>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-5">
          <h4 className="text-sm font-bold text-black uppercase tracking-wider border-l-2 border-[#007cff] pl-3">Contact Details</h4>
          <div className="space-y-4 text-sm text-slate-800 font-light">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#007cff] shrink-0 mt-1" />
              <div>
                <strong className="text-black block font-medium">Direct Hotline:</strong>
                <a href="tel:+919879161400" className="hover:text-black transition-colors block mt-1 font-bold text-slate-900">
                  +91 9879161400 <span className="font-normal text-slate-600 text-xs block md:inline md:ml-1.5">(CA Jitendra Tilwani)</span>
                </a>
                
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-green-600 fill-current shrink-0 mt-1" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001zm10.332-6.568c-.287-.144-1.701-.84-1.963-.935-.262-.096-.453-.144-.644.144-.192.287-.741.935-.908 1.127-.167.192-.334.216-.621.072-.287-.144-1.214-.447-2.312-1.427-.855-.763-1.433-1.705-1.601-1.992-.167-.287-.018-.442.126-.585.13-.129.287-.335.431-.503.144-.168.192-.288.287-.48.096-.192.048-.36-.024-.503-.072-.144-.644-1.581-.882-2.155-.232-.559-.467-.483-.644-.492l-.55-.008c-.192 0-.503.072-.765.36-.262.287-1.004.983-1.004 2.399 0 1.416 1.028 2.783 1.171 2.975.144.192 2.025 3.093 4.906 4.337.686.296 1.221.473 1.638.605.688.218 1.314.187 1.809.113.553-.083 1.701-.695 1.94-1.365.239-.67.239-1.244.167-1.365-.072-.121-.263-.193-.55-.337z" />
              </svg>
              <div>
                <strong className="text-black block font-medium">WhatsApp:</strong>
                <a href="https://wa.me/919879161400" target="_blank" rel="noreferrer" className="hover:text-green-600 transition-colors block mt-1 font-bold text-slate-900">
                  +91 9879161400 <span className="font-normal text-slate-600 text-xs block md:inline md:ml-1.5">(CA Jitendra Tilwani)</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#007cff] shrink-0 mt-1" />
              <div>
                <strong className="text-black block font-medium">Email Address:</strong>
                <a href="mailto:aumconsulting.india@gmail.com" className="hover:text-black transition-colors block mt-1 font-bold text-slate-900 break-all">
                  aumconsulting.india@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Linkedin className="w-4 h-4 text-[#007cff] shrink-0 mt-1" />
              <div>
                <strong className="text-black block font-medium">LinkedIn:</strong>
                <a href="https://www.linkedin.com/company/aum-consultancy-india/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors block mt-1 font-bold text-slate-900">
                  Aum Consultancy India
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-navy-800">
              <p className="text-xs text-slate-400 leading-normal">
                <span className="w-1.5 h-1.5 bg-[#007cff] rounded-full inline-block mr-1.5 animate-pulse"></span>
                24/7 Global Timezone Overlap Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Under-Footer Copyright and Legal compliance indicators */}
      <div className="border-t border-navy-800 bg-navy-950 py-8 px-4 sm:px-6 lg:px-8 text-sm font-medium text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Aum Consultancy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
