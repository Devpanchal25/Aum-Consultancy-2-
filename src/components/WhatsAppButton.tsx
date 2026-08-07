import React, { useState } from 'react';
import { MessageSquare, X, Send, Check } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('India (Head Office)');
  const [submitted, setSubmitted] = useState(false);

  const countries = [
    { name: 'India (Head Office)', phone: '+919879161400', flag: '🇮🇳' },
    { name: 'United Kingdom', phone: '+442079460958', flag: '🇬🇧' },
    { name: 'Australia', phone: '+61298765432', flag: '🇦🇺' },
    { name: 'United Arab Emirates', phone: '+97142345678', flag: '🇦🇪' }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Selected representative phone number
    const selected = countries.find(c => c.name.includes(country)) || countries[0];
    const encodedText = encodeURIComponent(`Hello Aum Consultancy team, I am writing from ${country}. I would like to inquire about: ${message}`);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${selected.phone.replace('+', '')}?text=${encodedText}`;
    
    // Simulate send effect then open WhatsApp in a new tab
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noreferrer');
      setIsOpen(false);
      setSubmitted(false);
      setMessage('');
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded WhatsApp Chat Widget */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-80 mb-4 overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center p-2">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001zm10.332-6.568c-.287-.144-1.701-.84-1.963-.935-.262-.096-.453-.144-.644.144-.192.287-.741.935-.908 1.127-.167.192-.334.216-.621.072-.287-.144-1.214-.447-2.312-1.427-.855-.763-1.433-1.705-1.601-1.992-.167-.287-.018-.442.126-.585.13-.129.287-.335.431-.503.144-.168.192-.288.287-.48.096-.192.048-.36-.024-.503-.072-.144-.644-1.581-.882-2.155-.232-.559-.467-.483-.644-.492l-.55-.008c-.192 0-.503.072-.765.36-.262.287-1.004.983-1.004 2.399 0 1.416 1.028 2.783 1.171 2.975.144.192 2.025 3.093 4.906 4.337.686.296 1.221.473 1.638.605.688.218 1.314.187 1.809.113.553-.083 1.701-.695 1.94-1.365.239-.67.239-1.244.167-1.365-.072-.121-.263-.193-.55-.337z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Aum Advisory</h4>
                <p className="text-[11px] text-green-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-ping"></span>
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-64 overflow-y-auto">
            <div className="bg-white text-slate-700 text-xs p-3 rounded-lg shadow-sm border border-slate-100 max-w-[85%]">
              Hello! 👋 Thank you for visiting Aum Consultancy.
              <span className="block mt-1 font-semibold text-green-600">How can we assist you with bookkeeping, accounting, or taxes today?</span>
            </div>
          </div>

          {/* Dropdown & Message Input Form */}
          <form onSubmit={handleSendMessage} className="p-3.5 border-t border-slate-100 space-y-2.5 bg-white">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Select Regional Rep:</label>
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-slate-100 border-none rounded-lg p-2 text-xs text-slate-700 focus:ring-1 focus:ring-green-500 outline-none"
              >
                {countries.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <textarea 
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-10 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-green-500 resize-none"
                required
              />
              <button 
                type="submit"
                disabled={submitted}
                className="absolute right-2.5 bottom-2.5 bg-green-600 text-white p-1.5 rounded-full hover:bg-green-700 hover:scale-105 transition-all flex items-center justify-center"
              >
                {submitted ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:scale-110 active:scale-95 transition-all border border-green-500/20 group"
        title="Chat on WhatsApp"
        aria-label="Chat with Aum Consultancy on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <svg 
          className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform duration-300" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.842-1.001zm10.332-6.568c-.287-.144-1.701-.84-1.963-.935-.262-.096-.453-.144-.644.144-.192.287-.741.935-.908 1.127-.167.192-.334.216-.621.072-.287-.144-1.214-.447-2.312-1.427-.855-.763-1.433-1.705-1.601-1.992-.167-.287-.018-.442.126-.585.13-.129.287-.335.431-.503.144-.168.192-.288.287-.48.096-.192.048-.36-.024-.503-.072-.144-.644-1.581-.882-2.155-.232-.559-.467-.483-.644-.492l-.55-.008c-.192 0-.503.072-.765.36-.262.287-1.004.983-1.004 2.399 0 1.416 1.028 2.783 1.171 2.975.144.192 2.025 3.093 4.906 4.337.686.296 1.221.473 1.638.605.688.218 1.314.187 1.809.113.553-.083 1.701-.695 1.94-1.365.239-.67.239-1.244.167-1.365-.072-.121-.263-.193-.55-.337z" />
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold py-1 px-2.5 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          Chat With Us (WhatsApp)
        </span>
      </button>
    </div>
  );
}
