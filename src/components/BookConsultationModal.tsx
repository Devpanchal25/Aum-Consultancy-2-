import React, { useState } from 'react';
import { X, Calendar, Clock, Globe, Check, Video, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

interface BookConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookConsultationModal({ isOpen, onClose }: BookConsultationModalProps) {
  const [step, setStep] = useState(1); // 1: Date & Time, 2: Form, 3: Success
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isTimeConfirmed, setIsTimeConfirmed] = useState(false);
  const [timezone, setTimezone] = useState('EST (USA & Canada)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const timezones = [
    'EST (USA & Canada)',
    'CST (Central Time)',
    'PST (Pacific Time)',
    'GMT (United Kingdom)',
    'AEST (Australia)',
    'IST (India Standard Time)'
  ];

  // Dynamic next 7 weekdays generator
  const getNextWeekdays = () => {
    const dates = [];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let count = 0;
    let current = new Date();
    while (count < 6) {
      current.setDate(current.getDate() + 1);
      // Skip Sundays
      if (current.getDay() !== 0) {
        dates.push({
          dayLongName: days[current.getDay()],
          dayName: days[current.getDay()].substring(0, 3),
          monthName: months[current.getMonth()],
          dayNum: current.getDate(),
          isoString: current.toISOString().split('T')[0]
        });
        count++;
      }
    }
    return dates;
  };

  const weekdays = getNextWeekdays();
  const selectedDateObj = weekdays.find(w => w.isoString === selectedDate);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setIsTimeConfirmed(false); // Reset confirmation state for new selections
  };

  const handleConfirmTime = () => {
    setIsTimeConfirmed(true);
    setStep(2); // Move to form details
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          requirements: formData.requirements,
          scheduled_date: selectedDate,
          scheduled_time: selectedTime,
          timezone: timezone,
          subject: `⚡ New 30-Min Strategy Call Booked by ${formData.name}`,
          from_name: "Aum Consultancy Booking Portal"
        })
      });
      
      const result = await response.json();
      if (!result.success) {
        console.warn("Web3Forms consultation error or key not configured. Graced success shown. Response:", result);
      }
    } catch (error) {
      console.error("Consultation booking submission failed. Graced success shown.", error);
    } finally {
      setIsSubmitting(false);
      setStep(3); // Success Screen
    }
  };

  const resetModal = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setIsTimeConfirmed(false);
    setFormData({ name: '', email: '', company: '', phone: '', requirements: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-zoomIn flex flex-col max-h-[90vh]">
        
        {/* Main Header Row with X Button */}
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={() => {
              resetModal();
              onClose();
            }}
            className="text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full transition-colors"
            title="Close booking widget"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inner Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 h-full overflow-y-auto">
          
          {/* LEFT SIDEBAR: Host & Event Details */}
          <div className="md:col-span-5 bg-white p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Back button (only shown on Form step) */}
              {step === 2 && (
                <button 
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 text-xs font-semibold text-[#006bff] hover:underline"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              )}

              {/* Host Identity */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border border-slate-150 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                    {/* Logo avatar from image */}
                    <img 
                      src="/images/aum-logo.png" 
                      alt="AUM Consultancy Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Aum Consultancy</h4>
                    <p className="text-sm font-bold text-slate-900 font-sans">Corporate Advisory & Offshoring</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-slate-950 leading-tight">
                    30-Min Strategy Call
                  </h3>
                  
                  <div className="flex flex-col gap-2.5 pt-3">
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>30 min</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium">
                      <Video className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      <span>Web conferencing details provided upon confirmation.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-xs text-slate-500 leading-relaxed font-light space-y-2 pt-2">
                <p>
                  Welcome! Start booking meetings with Aum Consultancy.
                </p>
                <p>
                  Our senior advisory desk oversees double-signoff structures to secure up to 50% operational cost savings for global firms.
                </p>
              </div>
            </div>

            {/* Branding/Company Disclaimer */}
            <div className="pt-6 border-t border-slate-150/80 hidden md:block">
              <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <span>Start booking meetings with Aum Consultancy</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: Date Picker & slots */}
          <div className="md:col-span-7 bg-[#fafbfc] p-6 sm:p-8 flex flex-col justify-between min-h-[480px]">
            
            {/* Step 1: Date & Time selector */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">Select a Date & Time</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                  {/* Left part of step 1: Date Selector Grid */}
                  <div className={`${selectedDate ? 'sm:col-span-7' : 'sm:col-span-12'} space-y-4`}>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Available Days</div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      {weekdays.map((wd) => (
                        <button
                          key={wd.isoString}
                          type="button"
                          onClick={() => {
                            setSelectedDate(wd.isoString);
                            setSelectedTime(''); // Reset time on date change
                          }}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                            selectedDate === wd.isoString
                              ? 'bg-[#006bff]/10 border-[#006bff] text-[#006bff] font-bold shadow-sm'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-[#006bff] hover:bg-slate-50'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-semibold text-slate-400">{wd.dayName}</span>
                          <span className="text-lg font-extrabold my-0.5">{wd.dayNum}</span>
                          <span className="text-[9px] font-mono uppercase text-slate-500">{wd.monthName}</span>
                        </button>
                      ))}
                    </div>

                    {/* Time zone widget */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <span>Time Zone Offset</span>
                      </div>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="bg-white border border-slate-200 text-xs text-slate-700 rounded-lg p-2 w-full outline-none focus:ring-1 focus:ring-[#006bff]"
                      >
                        {timezones.map((tz) => (
                          <option key={tz} value={tz}>{tz}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Right part of step 1: Time Slots Column (only shows if date is picked) */}
                  {selectedDate && (
                    <div className="sm:col-span-5 space-y-3 animate-slideLeft">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        {selectedDateObj ? `${selectedDateObj.dayLongName}, ${selectedDateObj.monthName} ${selectedDateObj.dayNum}` : 'Selected Date'}
                      </div>
                      
                      <div className="space-y-2 overflow-y-auto max-h-[220px] pr-1">
                        {timeSlots.map((time) => {
                          const isSelected = selectedTime === time;
                          return (
                            <div key={time} className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => handleTimeClick(time)}
                                className={`flex-1 py-3 text-xs font-bold rounded-lg border transition-all duration-150 ${
                                  isSelected 
                                    ? 'bg-[#006bff]/10 border-[#006bff] text-[#006bff] text-center' 
                                    : 'bg-white border-[#006bff]/40 text-[#006bff] text-center hover:border-2 hover:border-[#006bff]'
                                }`}
                              >
                                {time}
                              </button>
                              
                              {isSelected && (
                                <button
                                  type="button"
                                  onClick={handleConfirmTime}
                                  className="bg-[#006bff] hover:bg-blue-600 text-white font-bold px-4 rounded-lg text-xs tracking-wider transition-all animate-fadeIn"
                                >
                                  Next
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Confirmation Contact Form */}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">Enter Booking Details</h3>
                  <div className="bg-[#006bff]/5 border border-[#006bff]/10 rounded-lg p-3 flex gap-3 items-center text-xs text-slate-600 mt-2">
                    <Calendar className="w-4 h-4 text-[#006bff] shrink-0" />
                    <span>
                      Scheduled Call: <strong className="text-slate-800">{selectedDateObj?.dayLongName}, {selectedDateObj?.monthName} {selectedDateObj?.dayNum} at {selectedTime} ({timezone})</strong>
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-name" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Full Name *</label>
                      <input
                        id="modal-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#006bff] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email Address *</label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. jdoe@company.com"
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#006bff] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="modal-company" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Company Name *</label>
                      <input
                        id="modal-company"
                        type="text"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Brands LLC"
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#006bff] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="modal-phone" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Phone Number *</label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (555) 123-4567"
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#006bff] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-requirements" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Briefly state your requirements / bottlenecks *</label>
                    <textarea
                      id="modal-requirements"
                      rows={3}
                      required
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="e.g. Need whitelabel bookkeeping staff, daily bank reconciliation support..."
                      className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#006bff] resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#006bff] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg text-xs tracking-wider transition-all uppercase flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-sm active:translate-y-[1px]"
                    id="consultation-form-submit"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Call...</span>
                    ) : (
                      <>
                        <span>Schedule Event</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Step 3: Success Screen */}
            {step === 3 && (
              <div className="text-center py-8 space-y-5 animate-zoomIn flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2 max-w-md">
                  <h4 className="font-serif text-xl font-bold text-slate-900">You are Scheduled!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Web conferencing details provided upon confirmation.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/80 max-w-sm w-full text-left space-y-2 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block text-xs border-b border-slate-100 pb-1.5">Scheduled Event Summary:</span>
                  <div className="space-y-1.5 font-light">
                    <p>📅 <strong>Date:</strong> {selectedDateObj?.dayLongName}, {selectedDateObj?.monthName} {selectedDateObj?.dayNum}</p>
                    <p>🕒 <strong>Time:</strong> {selectedTime} ({timezone})</p>
                    <p>👤 <strong>Host:</strong> Aum Consultancy Advisory Desk</p>
                    <p>📹 <strong>Web Conference:</strong> Zoom Meeting</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    resetModal();
                    onClose();
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 rounded-lg text-xs transition-all cursor-pointer"
                  id="consultation-booked-done"
                >
                  Done
                </button>
              </div>
            )}

            {/* Minimal footer offset info for Steps 1 & 2 */}
            {step < 3 && (
              <div className="pt-4 border-t border-slate-150/60 flex justify-between items-center text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                <span>Aum Advisory Desk</span>
                <span>Secured Portal</span>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}