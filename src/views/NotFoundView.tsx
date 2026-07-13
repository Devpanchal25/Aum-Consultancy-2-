import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundView() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full text-center px-6 py-16 bg-white border border-slate-200/85 shadow-xl rounded-3xl space-y-6">
        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl w-fit mx-auto">
          <AlertCircle className="w-10 h-10 text-red-500 animate-pulse" />
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest block">Error 404</span>
          <h1 className="font-serif text-2xl font-extrabold text-navy-900">Page Not Found</h1>
          <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
            The requested financial back-office resource or page has been moved, archived, or does not exist.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
