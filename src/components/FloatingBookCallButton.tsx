import { Phone, Calendar, Sparkles } from 'lucide-react';

interface FloatingBookCallButtonProps {
  onClick: () => void;
}

export default function FloatingBookCallButton({ onClick }: FloatingBookCallButtonProps) {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <button
        onClick={onClick}
        className="flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-black text-xs tracking-wider px-5 py-3.5 rounded-full shadow-xl shadow-indigo-500/15 hover:scale-105 active:scale-95 transition-all uppercase cursor-pointer border border-white/20 animate-pulse"
        id="floating-book-call-cta"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>Book 30-Min Call</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </button>
    </div>
  );
}
