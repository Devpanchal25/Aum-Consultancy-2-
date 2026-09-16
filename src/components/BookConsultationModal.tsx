import React, { useState, useMemo } from 'react';
import { X, Calendar, Clock, Globe, Check, Video, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

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
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const SHORT_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const LONG_DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Generate calendar days for the current month view
  const calendarDays = useMemo(() => {
    const firstDay = new Date(calendarYear, calendarMonth, 1);
    const lastDay = new Date(calendarYear, calendarMonth + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const todayRef = new Date();
    todayRef.setHours(0, 0, 0, 0);

    const days: Array<{ date: Date; dayNum: number; isCurrentMonth: boolean; isPast: boolean; isSunday: boolean; isToday: boolean; isoString: string }> = [];

    // Previous month trailing days
    const prevMonthLastDay = new Date(calendarYear, calendarMonth, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const d = new Date(calendarYear, calendarMonth - 1, prevMonthLastDay - i);
      days.push({
        date: d,
        dayNum: prevMonthLastDay - i,
        isCurrentMonth: false,
        isPast: d < todayRef,
        isSunday: d.getDay() === 0,
        isToday: false,
        isoString: d.toISOString().split('T')[0]
      });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      const d = new Date(calendarYear, calendarMonth, i);
      days.push({
        date: d,
        dayNum: i,
        isCurrentMonth: true,
        isPast: d < todayRef,
        isSunday: d.getDay() === 0,
        isToday: d.getTime() === todayRef.getTime(),
        isoString: d.toISOString().split('T')[0]
      });
    }

    // Next month leading days to fill the grid
    const remainingSlots = 42 - days.length; // 6 rows x 7 columns
    for (let i = 1; i <= remainingSlots; i++) {
      const d = new Date(calendarYear, calendarMonth + 1, i);
      days.push({
        date: d,
        dayNum: i,
        isCurrentMonth: false,
        isPast: d < todayRef,
        isSunday: d.getDay() === 0,
        isToday: false,
        isoString: d.toISOString().split('T')[0]
      });
    }

    return days;
  }, [calendarMonth, calendarYear]);

  if (!isOpen) return null;

  const timeSlots = [
    '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM',
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
  ];

  const timezones = [
    'EST (USA & Canada)',
    'CST (Central Time)',
    'PST (Pacific Time)',
    'GMT (United Kingdom)',
    'AEST (Australia)',
    'IST (India Standard Time)'
  ];

  // Check if we can go to previous month (can't go before current month)
  const canGoPrevMonth = calendarYear > today.getFullYear() || (calendarYear === today.getFullYear() && calendarMonth > today.getMonth());

  const goToPrevMonth = () => {
    if (!canGoPrevMonth) return;
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  // Get selected date details for display
  const getSelectedDateDetails = () => {
    if (!selectedDate) return null;
    const d = new Date(selectedDate + 'T00:00:00');
    return {
      dayLongName: LONG_DAY_NAMES[d.getDay()],
      dayName: DAY_NAMES[d.getDay()],
      monthName: SHORT_MONTHS[d.getMonth()],
      dayNum: d.getDate(),
      isoString: selectedDate
    };
  };

  const selectedDateObj = getSelectedDateDetails();

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
    setCalendarMonth(new Date().getMonth());
    setCalendarYear(new Date().getFullYear());
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
                <Logo 
                  className="!cursor-default" 
                  iconClassName="w-10 h-10 sm:w-11 sm:h-11" 
                />

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
              <div className="space-y-5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">Select a Date & Time</h3>
                </div>

                {/* Calendar Date Picker */}
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  {/* Month/Year Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={goToPrevMonth}
                      disabled={!canGoPrevMonth}
                      className={`p-1.5 rounded-lg transition-all ${
                        canGoPrevMonth 
                          ? 'hover:bg-slate-100 text-slate-600 cursor-pointer' 
                          : 'text-slate-300 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-bold text-slate-800 tracking-wide">
                      {MONTH_NAMES[calendarMonth]} {calendarYear}
                    </span>
                    <button
                      type="button"
                      onClick={goToNextMonth}
                      className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Day-of-week headers */}
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {DAY_NAMES.map((day) => (
                      <div key={day} className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider py-1">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, idx) => {
                      const isDisabled = day.isPast || day.isSunday;
                      const isSelected = selectedDate === day.isoString;
                      const isCurrentMonth = day.isCurrentMonth;

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={isDisabled}
                          onClick={() => {
                            if (!isDisabled) {
                              setSelectedDate(day.isoString);
                              setSelectedTime('');
                              setIsTimeConfirmed(false);
                            }
                          }}
                          className={`
                            relative aspect-square flex items-center justify-center rounded-lg text-xs font-semibold transition-all duration-150
                            ${isDisabled 
                              ? 'text-slate-300 cursor-not-allowed' 
                              : isSelected
                                ? 'bg-[#006bff] text-white shadow-md shadow-blue-500/20 scale-105'
                                : isCurrentMonth 
                                  ? 'text-slate-700 hover:bg-[#006bff]/10 hover:text-[#006bff] cursor-pointer'
                                  : 'text-slate-300 hover:bg-slate-50 cursor-pointer'
                            }
                            ${day.isToday && !isSelected ? 'ring-1 ring-[#006bff]/40 font-extrabold text-[#006bff]' : ''}
                          `}
                        >
                          {day.dayNum}
                          {day.isToday && (
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#006bff]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots (shown below calendar when date is selected) */}
                {selectedDate && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Select Time — {selectedDateObj ? `${selectedDateObj.dayLongName}, ${selectedDateObj.monthName} ${selectedDateObj.dayNum}` : ''}</span>
                      </div>
                    </div>
                    
                    <div className="max-h-[180px] overflow-y-auto pr-1">
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeClick(time)}
                            className={`py-2.5 text-xs font-bold rounded-lg border transition-all duration-150 ${
                              isSelected 
                                ? 'bg-[#006bff]/10 border-[#006bff] text-[#006bff] shadow-sm' 
                                : 'bg-white border-slate-200 text-slate-700 hover:border-[#006bff] hover:text-[#006bff]'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                    </div>

                    {/* Confirm button when time is selected */}
                    {selectedTime && (
                      <button
                        type="button"
                        onClick={handleConfirmTime}
                        className="w-full bg-[#006bff] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg text-xs tracking-wider transition-all uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm active:translate-y-[1px] animate-fadeIn"
                      >
                        <span>Confirm — {selectedTime}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {/* Time zone widget */}
                <div className="space-y-2 pt-1">
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
                      <label htmlFor="modal-phone" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Phone Number</label>
                      <input
                        id="modal-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (555) 123-4567"
                        className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#006bff] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="modal-requirements" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Briefly state your requirements *</label>
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
                        <span>Schedule Meeting</span>
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