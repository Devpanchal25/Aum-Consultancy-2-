import React from 'react';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'horizontal' | 'icon' | 'square' | 'monochrome';
  className?: string;
  iconClassName?: string;
  darkBg?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  id?: string;
}

export function LogoIcon({ 
  className = 'w-10 h-10', 
  darkBg = false, 
  monochrome = false 
}: { 
  className?: string; 
  darkBg?: boolean; 
  monochrome?: boolean 
}) {
  const brandColor = monochrome ? 'currentColor' : (darkBg ? '#ffffff' : '#002c5b');
  const gapColor = darkBg ? '#0f172a' : '#ffffff'; // Blends seamlessly to create the negative space outline

  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 3D Ribbon 'A' Base Structure with elegant gradients & curls */}
      <path 
        d="M 22,76 C 14,76 16,62 26,44 C 36,26 44,12 50,12 C 56,12 64,26 74,44 C 84,62 86,76 78,76 C 72,76 68,68 64,54 C 60,40 54,34 50,34 C 46,34 40,40 36,54 C 32,68 28,76 22,76 Z" 
        fill={brandColor} 
        className="transition-colors duration-300"
      />

      {/* Ribbon bottom-left inner curl with crisp outline */}
      <path 
        d="M 22,76 C 26,76 30,70 28,64 C 26,58 20,58 18,64 C 16,70 18,76 22,76 Z" 
        fill={brandColor}
        stroke={gapColor}
        strokeWidth="2"
      />

      {/* Ribbon bottom-right inner curl with crisp outline */}
      <path 
        d="M 78,76 C 74,76 70,70 72,64 C 74,58 80,58 82,64 C 84,70 82,76 78,76 Z" 
        fill={brandColor}
        stroke={gapColor}
        strokeWidth="2"
      />

      {/* Inner crossbar arch loop of the 'A' */}
      <path 
        d="M 34,54 C 40,42 60,42 66,54 C 60,49 40,49 34,54 Z" 
        fill={brandColor}
        stroke={gapColor}
        strokeWidth="1.5"
      />

      {/* Background gap cutout for the sweeping arrow */}
      <path 
        d="M 10,54 C 8,42 24,34 36,46 C 48,58 72,56 86,34" 
        stroke={gapColor} 
        strokeWidth="8" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Main sweeping arrow wrapping from mid-left to top-right */}
      <path 
        d="M 10,54 C 8,42 24,34 36,46 C 48,58 72,56 86,34" 
        stroke={brandColor} 
        strokeWidth="5" 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Arrowhead background gap cutout */}
      <path 
        d="M 76,38 L 92,26 L 82,48 Z" 
        fill={gapColor} 
        stroke={gapColor} 
        strokeWidth="3.2" 
        strokeLinejoin="round" 
      />

      {/* The main elegant Arrowhead pointing forward */}
      <path 
        d="M 77,36 L 91,24 L 83,46 Z" 
        fill={brandColor} 
        stroke={brandColor} 
        strokeWidth="1" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

export default function Logo({ 
  variant = 'horizontal', 
  className = '', 
  iconClassName = 'w-10 h-10', 
  darkBg = false,
  ...restProps
}: LogoProps) {
  const monochrome = variant === 'monochrome';
  const displayTextColor = darkBg ? 'text-white' : 'text-[#000000]';
  const brandTextColor = monochrome ? 'currentColor' : 'text-[#002c5b]';
  const subtextColor = darkBg ? 'text-slate-400' : 'text-slate-500';

  if (variant === 'square') {
    return (
      <div 
        className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-200 ${className}`}
        {...restProps}
      >
        <LogoIcon className="w-8 h-8" darkBg={false} />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`inline-block ${className}`} {...restProps}>
        <LogoIcon className={iconClassName} darkBg={darkBg} monochrome={monochrome} />
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center gap-2.5 group cursor-pointer ${className}`}
      {...restProps}
    >
      {/* Logo Icon with responsive hover scale */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
        <LogoIcon className={iconClassName} darkBg={darkBg} monochrome={monochrome} />
        {!monochrome && (
          <div className="absolute -inset-1 border border-blue-900/10 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
        )}
      </div>

      {/* Corporate Typography branding */}
      <div className="flex flex-col select-none">
        <div className="flex items-baseline leading-none">
          <span className={`font-sans font-extrabold text-base sm:text-lg tracking-wide uppercase transition-colors duration-300 group-hover:text-[#002c5b] ${displayTextColor}`}>
            AUM
          </span>
          <span className={`font-sans font-light text-xs sm:text-sm tracking-[0.18em] ml-1.5 uppercase ${brandTextColor}`}>
            Consultancy
          </span>
        </div>
        <span className={`text-[8px] sm:text-[9px] font-mono tracking-[0.25em] mt-1 uppercase ${subtextColor}`}>
          Your Strategic Offshore Partner
        </span>
      </div>
    </div>
  );
}
