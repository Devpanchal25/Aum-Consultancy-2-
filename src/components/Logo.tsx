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
}: {
  className?: string;
  darkBg?: boolean;
  monochrome?: boolean
}) {
  return (
    <img
      src="/images/aum-logo.png"
      alt="AUM Consultancy Logo"
      className={`${className} object-contain`}
      aria-hidden="true"
    />
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