import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 bg-navy-900 hover:bg-navy-800 text-indigo-400 hover:text-indigo-300 p-3 rounded-full shadow-lg border border-navy-800 transition-all hover:scale-110 active:scale-95"
      title="Back to Top"
      aria-label="Scroll back to top of the page"
      id="back-to-top-btn"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
