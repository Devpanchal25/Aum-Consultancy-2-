import { ReactNode } from 'react';

interface LogoItem {
  name: string;
  logoSvg: ReactNode;
}

export default function SoftwareRibbon() {
  const logos: LogoItem[] = [
    {
      name: 'Xero',
      logoSvg: (
        <svg viewBox="0 0 120 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Xero Logo">
          {/* Official Xero circular blue disc icon with embedded white rings */}
          <g transform="translate(0, 2)">
            <circle cx="14" cy="14" r="14" fill="#00b7e5" />
            <circle cx="14" cy="14" r="10" stroke="#ffffff" strokeWidth="2.5" fill="none" />
            <circle cx="14" cy="14" r="5" fill="#ffffff" />
          </g>
          {/* Authentic Xero custom typography wordmark */}
          <text x="36" y="22" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="19" fill="#00b7e5" letterSpacing="-0.04em">xero</text>
        </svg>
      )
    },
    {
      name: 'QuickBooks',
      logoSvg: (
        <svg viewBox="0 0 160 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Intuit QuickBooks Logo">
          {/* Modern QuickBooks monogram green icon with inner "qb" custom curves */}
          <g transform="translate(0, 2)">
            <rect x="0" y="0" width="28" height="28" rx="6" fill="#2ca01c" />
            <path d="M10 19.5 V11 C10 9.5 11 8.5 12.5 8.5 C14 8.5 15 9.5 15 11 V19.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14" cy="16" r="3.5" fill="#ffffff" />
          </g>
          {/* Elegant official Intuit QuickBooks wordmark */}
          <text x="36" y="21" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="15" fill="#393a3d" letterSpacing="-0.02em">quickbooks</text>
        </svg>
      )
    },
    {
      name: 'Sage',
      logoSvg: (
        <svg viewBox="0 0 110 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sage Logo">
          {/* Sage dark green elegant continuous clover loop representation */}
          <g transform="translate(0, 4)">
            <path d="M4 14 C4 8, 10 4, 14 10 C18 4, 24 8, 24 14 C24 20, 18 24, 14 18 C10 24, 4 20, 4 14 Z" stroke="#008543" strokeWidth="2.5" fill="none" />
            <circle cx="14" cy="14" r="3" fill="#008543" />
          </g>
          {/* Official Sage lowercase custom wordmark */}
          <text x="32" y="22" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="21" fill="#008543" letterSpacing="-0.05em">sage</text>
        </svg>
      )
    },
    {
      name: 'Wave Accounting',
      logoSvg: (
        <svg viewBox="0 0 120 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wave Accounting Logo">
          {/* Wave apps iconic ocean-blue double wave crest path */}
          <g transform="translate(0, 2)">
            <path d="M2 18 C8 8, 12 24, 16 11 C20 8, 22 20, 26 14" stroke="#00a4e4" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M8 22 C12 14, 15 26, 19 15 C22 13, 24 22, 28 18" stroke="#1c2d5a" strokeWidth="3.2" strokeLinecap="round" opacity="0.8" fill="none" />
          </g>
          {/* Wave corporate deep blue wordmark */}
          <text x="36" y="21" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#1c2d5a" letterSpacing="-0.03em">wave</text>
        </svg>
      )
    },
    {
      name: 'AccountingSuite',
      logoSvg: (
        <svg viewBox="0 0 170 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AccountingSuite Logo">
          {/* Overlapping building/cloud dynamic vector representation */}
          <g transform="translate(0, 2)">
            <rect x="2" y="6" width="16" height="16" rx="3" fill="#00a4e4" />
            <rect x="10" y="10" width="16" height="16" rx="3" fill="#f15a24" opacity="0.9" />
          </g>
          {/* Signature corporate typeface */}
          <text x="34" y="21" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#1c2d5a" letterSpacing="-0.02em">AccountingSuite</text>
        </svg>
      )
    },
    {
      name: 'Zoho Books',
      logoSvg: (
        <svg viewBox="0 0 150 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Zoho Books Logo">
          {/* Zoho official red, green, blue, yellow interlocking block matrix */}
          <g transform="translate(0, 3)">
            <rect x="0" y="0" width="10" height="10" fill="#e21a22" rx="1.5" />
            <rect x="12" y="0" width="10" height="10" fill="#2ca01c" rx="1.5" />
            <rect x="0" y="12" width="10" height="10" fill="#00a4e4" rx="1.5" />
            <rect x="12" y="12" width="10" height="10" fill="#f15a24" rx="1.5" />
          </g>
          {/* Zoho wordmark with books subscript */}
          <text x="28" y="20" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="14" fill="#002d55" letterSpacing="-0.02em">ZOHO <tspan fill="#00a4e4" fontWeight="600">Books</tspan></text>
        </svg>
      )
    },
    {
      name: 'SAP',
      logoSvg: (
        <svg viewBox="0 0 110 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SAP Logo">
          {/* Official SAP trapezoid emblem */}
          <path d="M0 4 C0 2.5 1 1.5 2.5 1.5 L75 1.5 C77.5 1.5 79.5 3.5 78.5 6 L70 24 C69.5 25.5 68 26.5 66.5 26.5 L2.5 26.5 C1 26.5 0 25.5 0 24 Z" fill="#008fd3" />
          {/* Bold sans-serif white logotype */}
          <text x="14" y="19" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="14" fill="#ffffff" letterSpacing="0.08em">SAP</text>
        </svg>
      )
    },
    {
      name: 'FreshBooks',
      logoSvg: (
        <svg viewBox="0 0 140 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FreshBooks Logo">
          {/* Signature bright blue cursive script representation */}
          <g transform="translate(0, 1)">
            <path d="M4 14 C10 14, 12 4, 18 10 C20 12, 18 20, 24 16" stroke="#0079c1" strokeWidth="2.5" fill="none" />
          </g>
          <text x="16" y="21" fontFamily="'Georgia', 'Times New Roman', serif" fontStyle="italic" fontWeight="900" fontSize="18" fill="#0079c1" letterSpacing="-0.03em">freshbooks</text>
        </svg>
      )
    },
    {
      name: 'Class',
      logoSvg: (
        <svg viewBox="0 0 115 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Class Super Logo">
          {/* Official Australian Class Super orange/blue gradient emblem */}
          <defs>
            <linearGradient id="classGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5f00" />
              <stop offset="100%" stopColor="#002d55" />
            </linearGradient>
          </defs>
          <g transform="translate(0, 2)">
            <circle cx="14" cy="14" r="13" stroke="url(#classGrad)" strokeWidth="3" fill="none" />
            <circle cx="14" cy="14" r="6" fill="#002d55" />
          </g>
          {/* Class wordmark */}
          <text x="34" y="21" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="17" fill="#002d55" letterSpacing="-0.04em">class</text>
        </svg>
      )
    },
    {
      name: 'ProConnect Tax',
      logoSvg: (
        <svg viewBox="0 0 160 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Intuit ProConnect Logo">
          {/* Overlapping blue cloud rings vector */}
          <g transform="translate(0, 2)">
            <circle cx="10" cy="14" r="9" stroke="#0077c5" strokeWidth="2.2" opacity="0.75" fill="none" />
            <circle cx="18" cy="14" r="9" stroke="#00a4e4" strokeWidth="2.2" fill="none" />
            <circle cx="14" cy="14" r="3" fill="#0077c5" />
          </g>
          {/* ProConnect premium tax brand name */}
          <text x="34" y="20" fontFamily="'Inter', system-ui, sans-serif" fontWeight="800" fontSize="13" fill="#0077c5" letterSpacing="-0.02em">ProConnect</text>
        </svg>
      )
    },
    {
      name: 'ClearDocs',
      logoSvg: (
        <svg viewBox="0 0 130 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ClearDocs Logo">
          {/* Thomson Reuters ClearDocs modern gray & orange document symbol */}
          <g transform="translate(0, 2)">
            <rect x="0" y="2" width="18" height="22" rx="3.5" fill="#f4f4f6" stroke="#4a5568" strokeWidth="2" />
            <line x1="4" y1="9" x2="14" y2="9" stroke="#ff8f00" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4" y1="15" x2="11" y2="15" stroke="#ff8f00" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* Authentic corporate logo type */}
          <text x="26" y="20" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="14" fill="#1a202c" letterSpacing="-0.02em">Clear<tspan fill="#ff8f00">Docs</tspan></text>
        </svg>
      )
    },
    {
      name: 'TaxWise',
      logoSvg: (
        <svg viewBox="0 0 120 32" className="h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wolters Kluwer TaxWise Logo">
          {/* Classic sharp red & blue geometric box/arrow emblem exactly like Wolters Kluwer brand asset */}
          <g transform="translate(0, 2)">
            <path d="M2 2 L14 14 L2 26 Z" fill="#d32f2f" />
            <path d="M14 2 L26 14 L14 26 Z" fill="#007ac3" opacity="0.9" />
          </g>
          {/* Sharp, clean corporate text */}
          <text x="32" y="21" fontFamily="'Inter', system-ui, sans-serif" fontWeight="900" fontSize="14" fill="#007ac3" letterSpacing="-0.02em">TaxWise</text>
        </svg>
      )
    }
  ];

  // Quadruple the list to make an infinite seamless looping marquee ribbon
  const quadrupledLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-slate-50 border-y border-slate-200/50">
      {/* Soft gradient edges for professional smooth transition */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

      {/* Auto-scrolling ribbon loop with optimized gap sizes and hover-to-pause */}
      <div className="flex w-max animate-marquee gap-10 md:gap-14 items-center hover:[animation-play-state:paused]">
        {quadrupledLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 rounded-lg px-4 py-1 cursor-pointer bg-transparent"
          >
            {logo.logoSvg}
          </div>
        ))}
      </div>
    </div>
  );
}
