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
    <div className={`${className} overflow-hidden rounded-xl shrink-0 flex items-center justify-center relative`}>
      <img
        src="/images/aum-logo.png"
        alt="AUM Consultancy Logo"
        className="w-full h-full object-cover scale-[1.28]"
        aria-hidden="true"
      />
    </div>
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
  const brandTextColor = darkBg ? 'text-white' : 'text-[#000000]';
  const subtextColor = darkBg ? 'text-slate-300' : 'text-slate-800 font-medium';

  if (variant === 'square') {
    return (
      <div
        className={`w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shadow-lg border border-slate-200 ${className}`}
        {...restProps}
      >
        <LogoIcon className="w-full h-full object-cover rounded-xl" darkBg={false} />
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
      className={`flex items-center gap-2.5 group cursor-pointer shrink-0 ${className}`}
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
          <span className={`font-sans font-extrabold text-sm sm:text-lg tracking-wide uppercase transition-colors duration-300 ${displayTextColor}`}>
            AUM
          </span>
          <span className={`font-sans font-light text-[11px] sm:text-sm tracking-[0.12em] sm:tracking-[0.18em] ml-1 sm:ml-1.5 uppercase ${brandTextColor}`}>
            Consultancy
          </span>
        </div>
        <span className={`text-[7.5px] sm:text-[9px] font-mono tracking-[0.1em] sm:tracking-[0.25em] mt-0.5 uppercase ${subtextColor}`}>
          Your Strategic Offshore Partner
        </span>
      </div>
    </div>
  );
}