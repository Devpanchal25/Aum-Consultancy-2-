import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import BookConsultationModal from './components/BookConsultationModal';
import DataSecurityPolicyModal from './components/DataSecurityPolicyModal';
import NewsletterModal from './components/NewsletterModal';

// Views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import IndustriesView from './views/IndustriesView';
import SecurityView from './views/SecurityView';
import BlogView from './views/BlogView';
import ContactView from './views/ContactView';
import FaqView from './views/FaqView';
import ResourcesView from './views/ResourcesView';
import NewslettersView from './views/NewslettersView';
import PrivacyPolicyView from './views/PrivacyPolicyView';
import TermsConditionsView from './views/TermsConditionsView';
import NotFoundView from './views/NotFoundView';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const navigate = useNavigate();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSecurityPolicyOpen, setIsSecurityPolicyOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Shared active selection states for Navbar options navigation
  const [selectedServiceId, setSelectedServiceId] = useState<string>('accounting');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>('healthcare');
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string>('');

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  const openQuote = () => setIsConsultationOpen(true);

  const openSecurityPolicy = () => setIsSecurityPolicyOpen(true);
  const closeSecurityPolicy = () => setIsSecurityPolicyOpen(false);

  const openNewsletter = () => setIsNewsletterOpen(true);
  const closeNewsletter = () => setIsNewsletterOpen(false);

  // Compatibility helper that routes dynamically
  const setCurrentPage = (page: Page) => {
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

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-gold-500/30 selection:text-navy-900" id="main-application-container">
      <ScrollToTop />
      {/* Dynamic Header */}
      <Navbar 
        openConsultation={openConsultation}
        openQuote={openQuote}
        openNewsletter={openNewsletter}
        setSelectedServiceId={setSelectedServiceId}
        setSelectedIndustryId={setSelectedIndustryId}
        setSelectedSubServiceId={setSelectedSubServiceId}
      />

      {/* Main Page Render View with Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} />} />
          <Route path="/about" element={<AboutView setCurrentPage={setCurrentPage} openConsultation={openConsultation} />} />
          
          {/* Services URL Routes */}
          <Route path="/services" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          <Route path="/services/accounting-bookkeeping" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          <Route path="/services/audit-assurance" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          <Route path="/services/tax-services" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          <Route path="/services/cfo-advisory" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          <Route path="/services/build-offshore-team" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          
          {/* Build Your Team Roles */}
          <Route path="/build-your-team/:roleId?" element={<ServicesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openQuote={openQuote} selectedServiceId={selectedServiceId} setSelectedServiceId={setSelectedServiceId} selectedSubServiceId={selectedSubServiceId} setSelectedSubServiceId={setSelectedSubServiceId} />} />
          
          <Route path="/industries" element={<IndustriesView setCurrentPage={setCurrentPage} openConsultation={openConsultation} selectedIndustryId={selectedIndustryId} setSelectedIndustryId={setSelectedIndustryId} />} />
          <Route path="/security" element={<SecurityView setCurrentPage={setCurrentPage} openConsultation={openConsultation} openSecurityPolicy={openSecurityPolicy} />} />
          
          {/* Resources Routes */}
          <Route path="/resources" element={<ResourcesView />} />
          <Route path="/resources/blogs" element={<BlogView setCurrentPage={setCurrentPage} openConsultation={openConsultation} />} />
          <Route path="/resources/newsletters" element={<NewslettersView />} />
          <Route path="/resources/articles" element={<BlogView setCurrentPage={setCurrentPage} openConsultation={openConsultation} />} />
          <Route path="/resources/faqs" element={<FaqView setCurrentPage={setCurrentPage} openConsultation={openConsultation} />} />
          
          <Route path="/contact" element={<ContactView setCurrentPage={setCurrentPage} openConsultation={openConsultation} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyView />} />
          <Route path="/terms-conditions" element={<TermsConditionsView />} />
          
          {/* Fallback route */}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>

      {/* Dynamic Footer */}
      <Footer 
        openConsultation={openConsultation}
        openSecurityPolicy={openSecurityPolicy}
      />

      {/* Floating Action widgets */}
      <WhatsAppButton />
      <BackToTop />

      {/* Scheduler and Savings Calculator Modals */}
      <BookConsultationModal 
        isOpen={isConsultationOpen}
        onClose={closeConsultation}
      />
      <DataSecurityPolicyModal 
        isOpen={isSecurityPolicyOpen}
        onClose={closeSecurityPolicy}
        openConsultation={openConsultation}
      />
      <NewsletterModal 
        isOpen={isNewsletterOpen}
        onClose={closeNewsletter}
      />
    </div>
  );
}
