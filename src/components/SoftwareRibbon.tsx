
interface LogoItem {
  name: string;
  src: string;
  width?: string;
}

export default function SoftwareRibbon() {
  const logos: LogoItem[] = [
    {
      name: 'Xero',
      src: '/images/Xero_software_logo.svg',
      width: 'w-24',
    },
    {
      name: 'QuickBooks',
      src: '/images/QBLogo-50-50-color.png',
      width: 'w-28',
    },
    {
      name: 'Sage',
      src: '/images/Sage-logo_svg.svg',
      width: 'w-24',
    },
    {
      name: 'Wave Accounting',
      src: '/images/wave-financial-seeklogo.png',
      width: 'w-24',
    },
    {
      name: 'AccountingSuite',
      src: '/images/AccountingSuite.png',
      width: 'w-40',
    },
    {
      name: 'Zoho Books',
      src: '/images/zohobook.png',
      width: 'w-24',
    },
    {
      name: 'SAP',
      src: '/images/sap-icon.svg',
      width: 'w-20',
    },
    {
      name: 'FreshBooks',
      src: '/images/freshbooks-logo.svg',
      width: 'w-24',
    },
    {
      name: 'Class',
      src: '/images/class.png',
      width: 'w-28',
    },
    {
      name: 'ProConnect Tax',
      src: '/images/intuit-logo-png.png',
      width: 'w-36',
    },
    {
      name: 'ClearDocs',
      src: '/images/cleardocs.jpg',
      width: 'w-32',
    },
    {
      name: 'TaxWise',
      src: '/images/taxwise.png',
      width: 'w-28',
    },
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
            title={logo.name}
          >
            <img
              src={logo.src}
              alt={`${logo.name} Logo`}
              className={`h-8 ${logo.width || 'w-auto'} object-contain`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}