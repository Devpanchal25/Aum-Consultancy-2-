import { ServiceItem, ServiceCategory, IndustryItem, SoftwareExpertiseItem, BlogPost, Testimonial, FaqItem, TeamMember } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'accounting',
    title: 'Offshore Bookkeeping & Accounting',
    shortDesc: 'Clean, real-time books managed on cloud software. We handle daily data entry, bank reconciliations, multi-currency tracking, and monthly management reporting.',
    longDesc: 'Our core accounting and bookkeeping division handles everything from basic daily ledger maintenance to complex financial statement preparation, payroll administration, business valuations, and Virtual CFO support. We ensure complete precision, double-checked by experienced Chartered Accountants.',
    iconName: 'Calculator',
    details: [
      'Bookkeeping & Backlog Clean-Up Services',
      'Year-End Accounting & Financial Closing Services',
      'Accounts Payable (AP) Management Services',
      'Accounts Receivable (AR) Optimization Services',
      'Payroll Processing & Management Services'
    ],
    features: ['GAAP & IFRS Compliant', 'Dedicated Chartered Accountants', 'Daily Transaction Checks', 'Real-time Reporting']
  },
  {
    id: 'audit',
    title: 'Audit & Assurance Assistance',
    shortDesc: 'Get your books 100% audit-ready. We prepare comprehensive workpapers, evaluate internal control frameworks, and streamline your coordination with external auditors.',
    longDesc: 'Minimize audit friction and reduce external audit fees by up to 50%. We bridge the gap between your operational team and the external auditors, preparing flawless workpapers and trial balances under rigorous compliance guidelines.',
    iconName: 'ShieldAlert',
    details: [
      'Audit Support & Assurance Services'
    ],
    features: ['Trial Balance Cleansing', 'Pre-Audit File Review', '100% Audit Readiness Guarantee']
  },
  {
    id: 'tax',
    title: 'Cross-Border Taxation',
    shortDesc: 'Navigate complex international tax laws easily. Expert support for US/UK tax preparation, Double Taxation Avoidance Agreements (DTAA), and transfer pricing compliance.',
    longDesc: 'Navigate complex global tax landscapes with our certified international tax analysts. We prepare and file federal, state, and local returns while proactively designing legal structures to minimize tax liabilities for companies and individuals.',
    iconName: 'Receipt',
    details: [
      'S-Corporation Tax Return Services (Form 1120-S)',
      'Back-Year Tax Services & Catch-Up Filing',
      'Individual & Personal Tax Return Services',
      'C-Corporation Tax Return Services (Form 1120)',
      'LLC, LLP & Partnership Tax Return Services',
      'Multistate & Multi-Region Tax Services',
      'Strategic Tax Planning & Advisory Services',
      'Trust & Fiduciary Tax Services'
    ],
    features: ['CPA Double-checked', 'Multi-state Tax Compliance', 'Federal & Local Filings Ready']
  },
  {
    id: 'other',
    title: 'CFO Advisory & Virtual Assistant Support',
    shortDesc: 'Elite financial leadership, live KPI performance dashboards, M&A deal advisory, and executive virtual assistant support.',
    longDesc: 'Our specialized CFO advisory and administrative support division provides top-tier corporate strategy, cash flow modeling, independent valuations, and dedicated virtual assistants to handle administrative backlog.',
    iconName: 'Briefcase',
    details: [
      'Fractional Virtual CFO Services',
      'FP&A & Performance Dashboards',
      'Deal Advisory & Valuation Services',
      'Virtual Admin and Assistant support',
      'Risk & Corporate Strategy Consulting'
    ],
    features: ['SOP Custom Blueprints', 'Corporate Advisory Plans', 'Dedicated Operational VAs']
  },
  {
    id: 'offshore-team',
    title: 'Build Your Team',
    shortDesc: 'Instantly add full-time equivalent (FTE) accounting and finance experts to your local organization.',
    longDesc: 'Instantly scale your organization with top-tier, certified remote finance professionals from India. From dedicated bookkeepers to senior tax reviewers and Virtual CFOs, we handle recruitment and physical secure hosting.',
    iconName: 'Users',
    details: [
      'Hire An Accountant',
      'Hire a Bookkeeper',
      'Hire a tax preparer',
      'Hire a tax reviewer',
      'Hire a virtual CFO',
      'Hire a account supervisor',
      'Hire a audit support staff',
      'Hire a payroll manager',
      'Hire Billing executive',
      'Hire account receivables specialist',
      'Hire any assistant for the head of company, HR, Marketing, production, distribution etc.'
    ],
    features: ['Top 2% Certified Talents', 'Zero Overhead Sourcing', 'Time-Zone Overlaps (3-4 hours)', 'Replacement Guarantee']
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    iconName: 'Calculator',
    shortDesc: 'Comprehensive cloud accounting, general ledgers, inventory management, and fractional CFO governance.',
    items: [
      { title: 'Bookkeeping & Backlog Clean-Up Services', description: 'Pristine, audit-ready financial records and legacy data recovery on autopilot.' },
      { title: 'Year-End Accounting & Financial Closing Services', description: 'Turn messy year-end data into pristine, compliant financial statements strictly on time.' },
      { title: 'Accounts Payable (AP) Management Services', description: 'Eliminate manual data entry, optimize vendor relations, and capture early discounts.' },
      { title: 'Accounts Receivable (AR) Optimization Services', description: 'Accelerate your cash inflows, lower DSO, and turn unpaid invoices into cash.' },
      { title: 'Payroll Processing & Management Services', description: 'Simplify your payroll, protect compliance, and pay your team with confidence.' }
    ]
  },
  {
    id: 'audit',
    title: 'Audit',
    iconName: 'ShieldAlert',
    shortDesc: 'Pre-audit trial balance preparation, internal control auditing, and external audit liaison assistance.',
    items: [
      { title: 'Audit Support & Assurance Services', description: 'Build instant audit capacity, protect margins, and eliminate busy-season bottlenecks.' }
    ]
  },
  {
    id: 'tax',
    title: 'Tax Services',
    iconName: 'Receipt',
    shortDesc: 'Full US, UK, and Australian tax compliance, multistate returns, and year-round corporate strategy.',
    items: [
      { title: 'S-Corporation Tax Return Services (Form 1120-S)', description: 'Let tax experts handle your S-Corp compliance and Schedule K-1 shareholder allocations.' },
      { title: 'Back-Year Tax Services & Catch-Up Filing', description: 'Clean up historical tax records, handle IRS/tax authorities, and clear your backlog.' },
      { title: 'Individual & Personal Tax Return Services', description: 'Get maximum legal refunds, avoid audit traps, and let experts handle your personal filing.' },
      { title: 'C-Corporation Tax Return Services (Form 1120)', description: 'Maximize corporate tax efficiency, protect balance sheets, and handle complex tax codes.' },
      { title: 'LLC, LLP & Partnership Tax Return Services', description: 'Multi-jurisdictional partnership tax support and precise capital accounts allocation.' },
      { title: 'Multistate & Multi-Region Tax Services', description: 'Protect your business from economic nexus traps and multi-jurisdictional filings.' },
      { title: 'Strategic Tax Planning & Advisory Services', description: 'Proactively reduce tax liability, protect wealth, and optimize global cash flow.' },
      { title: 'Trust & Fiduciary Tax Services', description: 'Complex fiduciary tax preparation and precise distribution accounting.' }
    ]
  },
  {
    id: 'other',
    title: 'CFO Advisory & Virtual Assistant Support',
    iconName: 'Briefcase',
    shortDesc: 'Strategic consulting, risk assessments, deal advisory, and corporate backup frameworks.',
    items: [
      { title: 'Fractional Virtual CFO', description: '"Fix my cash flow, manage my runway, and lead our financial strategy."' },
      { title: 'FP&A & Performance Dashboards', description: '"Build my budgets, rolling forecasts, and clear metric trackers."' },
      { title: 'M&A Deal Advisory & Valuation', description: '"Audit the numbers and find the true value of a company before I buy/sell."' },
      { title: 'Executive Virtual Assistant (VA)', description: '"Clean out my inbox, manage my calendar, track my CRM, and chase documents."' },
      { title: 'Risk & Corporate Strategy Consulting', description: '"Audit internal controls to stop fraud, protect profit margins, and structure joint ventures."' }
    ]
  },
  {
    id: 'offshore-team',
    title: 'Build Your Team',
    iconName: 'Users',
    shortDesc: 'Instantly add full-time equivalent (FTE) accounting and finance experts to your local organization.',
    items: [
      { title: 'Hire An Accountant', description: 'Onboard a dedicated general accountant for general ledgers and corporate files.' },
      { title: 'Hire a Bookkeeper', description: 'Dedicated remote bookkeeping specialists for daily transactions and reconciliations.' },
      { title: 'Hire a tax preparer', description: 'Hire qualified tax preparers to manage heavy busy-season filing queues.' },
      { title: 'Hire a tax reviewer', description: 'Onboard senior Enrolled Agents or CAs to audit and sign off tax returns.' },
      { title: 'Hire a virtual CFO', description: 'Secure part-time or full-time high-level financial strategy leaders.' },
      { title: 'Hire a account supervisor', description: 'Mid-level management staff to supervise your remote bookkeeping queues.' },
      { title: 'Hire a audit support staff', description: 'Hire experts to compile trial balances, audit schedules, and clear workpapers.' },
      { title: 'Hire a payroll manager', description: 'Dedicated personnel to run global payroll systems, withholding, and filings.' },
      { title: 'Hire Billing executive', description: 'Billing and invoice specialists to handle high-frequency customer billing.' },
      { title: 'Hire account receivables specialist', description: 'Credit and collection experts to accelerate cash recovery and clear A/R.' },
      { title: 'Hire any assistant for the head of company, HR, Marketing, production, distribution etc.', description: 'Versatile operational virtual assistants for core department heads.' }
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'automobile-ancillary-manufacturing',
    title: 'Automobile, Auto Ancillary and Manufacturing',
    description: 'Specialized cost accounting, raw material tracing, inventory valuation, and multi-tier supplier invoice matching for automotive manufacturers.',
    iconName: 'Factory',
    challenges: [
      'Managing high-volume multi-tier bill of materials (BOM)',
      'Reconciling tool-room costs and machinery depreciation metrics',
      'Tracking fluctuating steel, rubber, and plastic raw material price variances'
    ],
    solutions: [
      'Standard cost accounting setup matched with variance reports',
      'Tracking manufacturing overhead allocation per production line',
      'Automatic tooling capital assets classification and scrap management'
    ],
    benefits: ['Accurate product margin reports per automotive part', 'Streamlined vendor payments with automatic 3-way matching', 'Minimized inventory shrinkage in toolrooms']
  },
  {
    id: 'banking-insurance-financial',
    title: 'Banking, Insurance and Financial Institutions',
    description: 'Strict regulatory financial bookkeeping, fund reconciliation, premium ledger tracking, and audit preparation for finance companies and insurers.',
    iconName: 'Coins',
    challenges: [
      'Reconciling large daily volumes of multi-channel transactions and premium payments',
      'Ensuring strict compliance with capital adequacy ratios and regional central bank rules',
      'Tracking policyholder claim reserves and commission ledger distributions'
    ],
    solutions: [
      'Automated daily bank ledger matching with deep-clearing protocols',
      'Structured reporting pipelines for regulatory compliance and audit readiness',
      'Accrued liability and reserves tracking sheets updated in real-time'
    ],
    benefits: ['Accelerated external audits with clean workpapers', 'Zero leakage on premium collections and agent commissions', 'Complete visibility into liquid assets and liquidity ratios']
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Fee collection accounting, grant management, payroll for academic staff, and budget controls for universities, K-12 schools, and EdTech firms.',
    iconName: 'Landmark',
    challenges: [
      'Tracking student fee advances, installment schedules, and deferred revenue Recognition',
      'Monitoring grant funds spend against strict compliance guidelines',
      'Managing variable hourly payroll for visiting lecturers and academic staff'
    ],
    solutions: [
      'Structured deferred tuition revenue recognition schedules',
      'Restricted fund accounting for governmental and private grants',
      'Student database integrations linked to main financial ledger accounts'
    ],
    benefits: ['Real-time student fee collection and receivables reports', 'Accurate compliance tracking on educational grants', 'Seamless monthly staff payroll with proper tax withholdings']
  },
  {
    id: 'fmcg',
    title: 'FMCG',
    description: 'Fast-Moving Consumer Goods trade spend auditing, distributor ledger reconciliation, supply chain cost monitoring, and inventory age tracking.',
    iconName: 'ShoppingBag',
    challenges: [
      'Auditing complex trade discounts, schemes, and distributor promotional claims',
      'Tracking inventory shelf life, expirations, and write-offs across distributors',
      'Managing high-frequency freight and multi-hub logistics cost invoices'
    ],
    solutions: [
      'Distributor claims verification modules linked to sales orders',
      'FIFO inventory valuation and aged-stock alert systems',
      'Landed-cost algorithms applied to freight-in and warehousing'
    ],
    benefits: ['Up to 15% recovery on erroneous or duplicate distributor claims', 'Minimized inventory aging write-offs in distribution hubs', 'Accurate SKU-level gross profit margin visibility']
  },
  {
    id: 'hospitality-healthcare',
    title: 'Hospitality and Healthcare',
    description: 'Dual-discipline financial controls for patient billing, hospitality linen/F&B inventories, room occupancy cash settlements, and clinical staff payroll.',
    iconName: 'HeartPulse',
    challenges: [
      'Managing complex billing cycles including corporate insurance and patient copays',
      'Reconciling multi-source daily POS revenue from food, spa, and lodging units',
      'Maintaining HIPAA data privacy on patient ledgers and financial documents'
    ],
    solutions: [
      'Secure isolated cloud servers with zero patient health information storage',
      'POS-to-general-ledger automated mapping for hotel-clinic combos',
      'Cost-center accounting tracking clinical supplies versus F&B inventories'
    ],
    benefits: ['Sovereign patient privacy compliance with zero leaks', 'Reconciled daily card and cash room deposits within 24 hours', 'Clear department-level profitability reports']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Long-term contract job costing, asset depreciation models, heavy machinery lease tracking, and milestone-based project billing.',
    iconName: 'Building',
    challenges: [
      'Percentage-of-completion contract revenue calculations over multi-year timelines',
      'Monitoring heavy capital equipment maintenance and lease contracts',
      'Tracking subcontractor progress certificates and retention money holdbacks'
    ],
    solutions: [
      'Work-in-progress (WIP) scheduling and AIA percentage billing setup',
      'Equipment capitalization and multi-asset depreciation schedule automation',
      'Subcontractor ledger monitoring with integrated compliance checkpoints'
    ],
    benefits: ['Accurate tracking of infrastructure project budget vs actual margins', 'Optimized cash flows via timely milestone billings', 'Fully compliant subcontractor retention bookkeeping']
  },
  {
    id: 'media-entertainment',
    title: 'Media and Entertainment',
    description: 'Royalty reporting, project-based production costing, license agreement tracking, and digital subscription deferred revenue models.',
    iconName: 'Laptop',
    challenges: [
      'Calculating multi-tier creator royalties and agent commission distributions',
      'Tracking unpredictable production budgets across films, ads, and digital content',
      'Amortizing capitalized content production assets over their licensing life'
    ],
    solutions: [
      'Automated royalty distribution engines based on contract terms',
      'Real-time production budget tracking sheets with cost codes',
      'Deferred revenue amortization for media subscriptions and syndications'
    ],
    benefits: ['Zero-error royalty payments to creators and studios', 'Complete cost control on active media production sets', 'Compliant amortization under modern accounting standards']
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing',
    description: 'Service level cost-center monitoring, seat utilization billing, multi-currency transfer pricing, and offshore service payroll.',
    iconName: 'Briefcase',
    challenges: [
      'Allocating employee hour costs to specific client delivery centers',
      'Managing complex cross-border intercompany contracts and transfer pricing bills',
      'Invoicing clients accurately based on fluctuating seat counts or FTE rates'
    ],
    solutions: [
      'Integrated seat and workstation cost allocation spreadsheets',
      'Transfer pricing documentation compliance under international tax guidelines',
      'Time-and-material automated invoicing modules linked to attendance'
    ],
    benefits: ['Optimized billing utilization metrics', 'Compliant transfer pricing that satisfies multinational tax regulations', 'Accurate, timely client billing for offshore centers']
  },
  {
    id: 'paper-sugar-liquor',
    title: 'Paper, Sugar and Liquor',
    description: 'Process costing, regulatory excise tax reporting, raw crop purchase settlements, and distillery batch inventory accounting.',
    iconName: 'Factory',
    challenges: [
      'Handling excise duty compliance and state licensing fees for spirits',
      'Accounting for raw cane or wood pulp purchase settlements based on crop weight and quality',
      'Tracking loss and waste percentages during batch distilling or paper rolling'
    ],
    solutions: [
      'Batch process costing setups tracing raw material to finished product',
      'Excise duty tracking and state-by-state compliant filing files',
      'Yield variance analysis sheets tracking raw sugarcane and timber pulp inputs'
    ],
    benefits: ['Accurate batch yield reports and process profit margins', 'Hands-free liquor excise tax filings', 'Auditable farmer sugarcane/pulp purchase logs']
  },
  {
    id: 'retail-white-goods',
    title: 'Retail, White Goods and Consumer Electronics',
    description: 'POS sales reconciliation, brand warranty provision accounting, manufacturer rebate tracking, and multi-location showroom inventory.',
    iconName: 'Store',
    challenges: [
      'Reconciling physical appliance inventories across scattered showrooms and warehouses',
      'Accounting for manufacturer backend rebates and price protection claims',
      'Tracking extended warranties and deferred service revenue packages'
    ],
    solutions: [
      'Automated stock levels tracking integrated with warehouse scanners',
      'Rebate tracking schedules matching purchase volumes with brand terms',
      'Warranty provision bookkeeping mapping deferred income streams'
    ],
    benefits: ['Real-time inventory visibility across all physical stores', 'Maximization of manufacturer backend rebate recoveries', 'Clean, compliant warranty liability provisions']
  },
  {
    id: 'shipping',
    title: 'Shipping',
    description: 'Vessel cost voyage accounting, fuel (bunker) inventory tracking, port expense classification, and multi-currency freight billing.',
    iconName: 'ShoppingBag',
    challenges: [
      ' voyage-by-voyage profit accounting with complex multi-port costs',
      'Tracking fluctuating bunker fuel inventories and fuel purchase hedges',
      'Managing billing across different countries, jurisdictions, and currencies'
    ],
    solutions: [
      'Custom voyage costing ledger tracking cargo revenue and port disbursements',
      'Multi-currency ledger matching invoices in USD, EUR, and local coins',
      'Bunker fuel cost allocation schedules updated after every leg'
    ],
    benefits: ['Instant voyage profitability analysis reports', 'Minimized foreign exchange conversion leakages', 'Accurate port-of-call fee reconciliations']
  },
  {
    id: 'hotel-restaurants',
    title: 'Hotel & restaurants',
    description: 'F&B recipe cost control, daily POS credit card settlement, linen and supplier payables management, and tip pool distribution.',
    iconName: 'Store',
    challenges: [
      'Daily reconciliation of merchant account payouts with physical POS receipts',
      'Monitoring food ingredient waste, kitchen theft, and high recipe margin variances',
      'Managing cash tips, service charges, and shift-based seasonal payroll'
    ],
    solutions: [
      'POS-to-bank daily matching integrations (Toast, Micros, Square)',
      'F&B inventory controls tracking ingredient purchase cost versus sales',
      'Compliant tip pool distribution and payroll processing modules'
    ],
    benefits: ['Identified cash register variances within 24 hours', 'Reduced kitchen ingredient cost leakage by up to 20%', 'Timely vendor payments protecting supplier lines']
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Production overhead absorption, work-in-progress (WIP) asset tracking, raw materials procurement, and COGS optimization panels.',
    iconName: 'Factory',
    challenges: [
      'Inaccurate allocation of fixed plant overheads to finished product units',
      'WIP inventory value discrepancies between shop-floor and balance sheet',
      'Fluctuating component costs eroding initial sales price margins'
    ],
    solutions: [
      'Activity-Based Costing (ABC) for granular overhead allocation',
      'WIP inventory ledger tracking raw materials in active production lines',
      'Dynamic Bill of Materials (BOM) cost updates linked to vendor feeds'
    ],
    benefits: ['Perfect inventory valuations matching physical audits', 'Optimized production batch size decisions', 'Accurate cost of goods sold calculations']
  },
  {
    id: 'healthcare-medicals',
    title: 'Healthcare and medicals',
    description: 'Clinician fee structures, dental/medical supply inventories, outpatient billing reconciliations, and local health insurance files.',
    iconName: 'HeartPulse',
    challenges: [
      'Tracking doctor payout shares based on services rendered',
      'Managing high-value surgical implant and clinical medicine inventories',
      'Handling aged insurance receivables and outstanding patient balances'
    ],
    solutions: [
      'Automated clinician revenue-share calculation logs',
      'Inventory management modules with expiration date alerts for pharmaceuticals',
      'Aged outstanding bills chasing workflow with structured reminder plans'
    ],
    benefits: ['Zero-error doctor fee distributions', 'Minimized waste on expired clinical inventories', 'Accelerated insurance payouts recovering aged debt']
  },
  {
    id: 'construction-engineering',
    title: 'Construction and engineering',
    description: 'Job costing, AIA progress billing sheets, subcontractor compliance checking, and equipment usage depreciation scheduling.',
    iconName: 'HardHat',
    challenges: [
      'Under/Over-billing adjustments causing sudden fluctuations in revenue',
      'Ensuring subcontractors are insured and compliant prior to making payments',
      'Allocating engineering labor hours and heavy loader costs per project'
    ],
    solutions: [
      'WIP percentage-of-completion scheduling updated monthly',
      'Automated subcontractor pre-qualification check before cash release',
      'Project cost-center tracking for machinery fuel and engineer timesheets'
    ],
    benefits: ['Accurate, bank-ready project financial reports', 'Zero subcontractor compliance or insurance audit penalties', 'Clear visibility into individual construction site profits']
  },
  {
    id: 'non-profit-trust',
    title: 'Non profit charitable trust or organization',
    description: 'Donor-restricted fund accounting, public donation tracking, 80G tax benefit compliance reporting, and annual transparency audits.',
    iconName: 'Landmark',
    challenges: [
      'Ensuring strict isolation of donor-restricted funds from general reserves',
      'Processing massive volumes of micro-donations with prompt tax receipt generation',
      'Preparing regulatory tax-exempt status filing sheets and compliance audits'
    ],
    solutions: [
      'Strict multi-class fund bookkeeping isolating program grants',
      'Donor management integration with automatic donation receipting',
      'Audit file preparation proving non-profit status and fund distribution'
    ],
    benefits: ['100% compliant tax-exempt donor status maintenance', 'Impeccable donor trust backed by public audited sheets', 'Efficient program-by-program funding track record']
  }
];

export const SOFTWARE_EXPERTISE: SoftwareExpertiseItem[] = [
  { name: 'QuickBooks Online / Desktop', category: 'Accounting Core', description: 'Certified ProAdvisors handling complex configuration, cleanups, multi-currency books, and integrations.' },
  { name: 'Xero', category: 'Accounting Core', description: 'Xero Bronze Partners specializing in cloud accounting, bank rules automation, and hubdoc integration.' },
  { name: 'Zoho Books', category: 'Accounting Core', description: 'Expert setups customized for global operations, automated invoicing workflows, and custom portal integrations.' },
  { name: 'Sage Intacct', category: 'Enterprise ERP', description: 'Managing mid-market multi-entity accounting, automated dimensions, and customized financial reporting consolidation.' },
  { name: 'SAP Business One', category: 'Enterprise ERP', description: 'Assisting in inventory control, procurement, ledger management, and financial module synchronization.' },
  { name: 'Bill.com', category: 'AP/AR Automation', description: 'Full setup and operation of modern accounts payable & receivable payment flows, workflows, and automated approvals.' },
  { name: 'Dext / Hubdoc', category: 'Receipt Automation', description: 'Seamless electronic receipt capturing, Optical Character Recognition (OCR), and direct accounting ledger synchronization.' },
  { name: 'Gusto / ADP', category: 'Payroll & Benefits', description: 'Comprehensive payroll processing, automated state and federal tax filings, and benefit plan administration.' },
  { name: 'TaxWise / ProConnect Online', category: 'Tax Filing Suites', description: 'Intuit-powered tax filing platforms leveraged to complete seamless US Federal, State, and multi-nexus returns.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Partnering with Aum Consultancy changed the way we scale. They took over our daily Shopify merchant reconciliation and multi-state US sales tax. We saved over $65,000 in local hiring costs in our first year alone.',
    author: 'Sarah Jenkins',
    role: 'Chief Financial Officer',
    company: 'Apex Brands LLC',
    country: 'USA',
    rating: 5
  },
  {
    id: '2',
    quote: 'As a rapidly growing dental clinic chain, maintaining HIPAA compliance while keeping up with medical billing and doctor payroll was a nightmare. Aum’s team set up secure VPN access, cleaned our books, and now delivers perfect reports every month.',
    author: 'Dr. Michael Chen',
    role: 'Founder & Managing Director',
    company: 'Evergreen Medical Network',
    country: 'Canada',
    rating: 5
  },
  {
    id: '3',
    quote: 'We outsource our year-end tax preparation and weekly VAT management to Aum. Their deep knowledge of the UK CT600 forms and MTD regulations is exemplary. Communication is immediate, and their attention to detail is unrivaled.',
    author: 'David Harrison',
    role: 'Senior Partner',
    company: 'Harrison & Associates CPA',
    country: 'UK',
    rating: 5
  },
  {
    id: '4',
    quote: 'Aum has become our reliable back-office backplane. We hired three full-time equivalent (FTE) bookkeepers. They integrated seamlessly into our Slack and Xero setups, operating exactly like our in-house staff.',
    author: 'James MacInerney',
    role: 'COO',
    company: 'Vanguard Engineering Ltd',
    country: 'Australia',
    rating: 5
  },
  {
    id: '5',
    quote: 'Our tech startup had variable FX hedging risks and complex board reporting. Aum provided a dedicated Virtual CFO who designed our cash-flow forecasting templates and joined our board calls. Exceptional premium service.',
    author: 'Tariq Al-Mansoor',
    role: 'CEO',
    company: 'NexaTech Systems',
    country: 'UAE',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How does Aum Consultancy guarantee the security of our sensitive financial files?',
    answer: 'Data security is our absolute highest priority. We use secure VPN tunnels and Multi-Factor Authentication (MFA). Our staff operates on thin-client virtual machines with Zero Local Storage, meaning they cannot download, print, or copy files onto local devices. All data stays encrypted on certified Cloud storage (AES-256). Every employee signs strict, legally binding Non-Disclosure Agreements (NDAs), and our processes align with GDPR, CCPA, and PIPEDA standards.',
    category: 'Security'
  },
  {
    question: 'How do you handle communication and time zone differences?',
    answer: 'We schedule daily shifts to provide a 3-4 hour overlap with your business hours, whether you are in the US, UK, Canada, Australia, or the UAE. We integrate directly into your preferred messaging suites (Slack, Microsoft Teams, WhatsApp, Zoom, or email) to ensure seamless, real-time collaboration. Your dedicated point of contact speaks fluent English and is always available during scheduled check-ins.',
    category: 'Operations'
  },
  {
    question: 'What is the step-by-step onboarding and service transition process for new clients?',
    answer: 'Our transition framework is seamless and divided into four clear phases: 1) Kickoff & Mapping: We sign a comprehensive mutual NDA and analyze your current systems and standard operating procedures (SOPs). 2) Shadowing & Setup: We assign your dedicated remote team, set up secure VPN/thin-client access corridors, and shadow your current workflows. 3) Parallel Run: We execute your accounting or bookkeeping tasks in parallel with your onshore team to verify 99.9% consistency and speed. 4) Full Handover: Once accuracy is validated, we assume full responsibility of the back-office process with structured daily reporting and ongoing quality checks.',
    category: 'Transition'
  },
  {
    question: 'What accounting software packages is your team certified to use?',
    answer: 'Our team consists of certified experts across all leading accounting systems. We are highly proficient in QuickBooks Online/Desktop, Xero, Zoho Books, Sage Intacct, SAP Business One, Wave, FreshBooks, and specialized tax software like TaxWise and ProConnect. We adapt to your existing software stack; you never have to change tools for us.',
    category: 'Software'
  },
  {
    question: 'Are we locked into long-term contracts?',
    answer: 'No. We believe in building trust through performance. We offer flexible, month-to-month contracts for bookkeeping and monthly accounting services. You can scale up or adjust your offshore dedicated staff (FTEs) with a simple 30-day notice.',
    category: 'Billing'
  },
  {
    question: 'Can you work directly on our onshore CPA firm’s client books as a white-labeled partner?',
    answer: 'Yes! We act as white-labeled offshore processing departments for multiple CPA and accounting firms in the USA, UK, and Australia. We work strictly under your brand, process the books, prepare the tax returns, and compile audit files, allowing your core partners to focus on client relationship management and advisory.',
    category: 'Outsourcing'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Blueprint for Safe Financial Outsourcing: Navigating GDPR & CCPA Compliance',
    category: 'Compliance',
    date: 'June 24, 2026',
    readTime: '6 min read',
    summary: 'Outsourcing accounting does not mean sacrificing data control. Learn how secure VPNs, MFA, and zero-local-storage architectures keep your client books fully compliant with Western regulations.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=400',
    content: [
      'In today’s hyper-regulated corporate environment, outsourcing accounting and bookkeeping is an excellent strategic move to reduce operational costs. However, data privacy remains a critical point of concern for leadership teams. The introduction of strict consumer acts like GDPR in Europe, CCPA in California, and PIPEDA in Canada has turned data leakage into an expensive liability.',
      'At Aum Consultancy, we have structured our offshore delivery center to meet these global standards directly. Here is how we guarantee complete compliance:',
      '1. VPN and Thin-Client Infrastructures: Our accounting professionals never access your accounting platform from public networks. Every connection goes through secure, dedicated virtual private network tunnels (VPNs). We operate under thin-client models where data remains strictly on the server; zero local storage is allowed on terminal devices, preventing downloading, local copying, or printing.',
      '2. Strict Non-Disclosure Agreements (NDAs): Every personnel onboarding includes signing robust, multi-jurisdictional non-disclosure agreements. We enforce strict cleanroom guidelines, including restricting mobile phone entry into the physical processing bays.',
      '3. Mandatory Multi-Factor Authentication: We require MFA on all external SaaS tools including QuickBooks, Xero, Slack, and email accounts, blocking unauthorized logins even in the event of credential theft.',
      'By selecting an offshore partner who treats data security as an architectural requirement rather than a secondary checklist, you protect your customers while improving your margins.',
      'Please verify from official legal sources before finalizing compliance procedures in your specific state.'
    ],
    author: 'Amish Patel, Founder'
  },
  {
    id: '2',
    title: 'Why Venture-Backed Startups Are Transitioning to Fractional Virtual CFOs',
    category: 'Accounting',
    date: 'May 18, 2026',
    readTime: '8 min read',
    summary: 'Discover how virtual CFOs supply early-stage startups with crucial cash-flow modeling, burn-rate metrics, and board presentation decks without the prohibitive executive salary.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400',
    content: [
      'Venture-backed startups operate under intense clock pressure. Between funding rounds, founders must maintain full control over key metrics: Runway, Burn Rate, Monthly Recurring Revenue (MRR) expansion, and unit economics. Hiring a full-time, seasoned Chief Financial Officer (CFO) is often too expensive for early-stage companies, with salaries often exceeding $200,000 annually.',
      'This financial gap is why fractional Virtual CFO services are experiencing high adoption. A virtual CFO delivers high-level strategy at a fraction of the cost.',
      'Our virtual CFO services include designing dynamic cash flow forecasting sheets that run real-time stress tests: what happens if client churn rises by 3%? What if our marketing costs double? We transform messy transaction databases into clear board decks that increase investor trust.',
      'Furthermore, we help startups calculate and document federal research & development (R&D) payroll wage tax credits, saving early-stage firms thousands of dollars annually in cash offsets.',
      'Scaling smartly means keeping fixed overhead as small as possible. Outsourcing your financial management gives you the corporate structure you need to prepare for your next funding round.'
    ],
    author: 'Rajiv Sharma, Senior Valuation Expert'
  },
  {
    id: '3',
    title: 'Navigating US Nexus Rules: Sales Tax Compliance for Global Shopify Sellers',
    category: 'Tax',
    date: 'April 02, 2026',
    readTime: '7 min read',
    summary: 'A simple guide to physical and economic nexus rules in the United States, helping international e-commerce sellers stay clear of expensive audit penalties.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400',
    content: [
      'For e-commerce sellers outside the United States, the US market represents an incredible growth opportunity. However, the complex sales tax landscape can quickly become a legal maze. Since the landmark South Dakota v. Wayfair Supreme Court decision, states are authorized to enforce sales tax collection on out-of-state sellers who meet "economic nexus" thresholds.',
      'If your Shopify brand sells to US customers, you might have tax obligations without even realizing it. Here is what you need to track:',
      '1. Economic Nexus Thresholds: Most states enforce a threshold of $100,000 in gross sales or 200 distinct transactions within a calendar year. Once your brand exceeds this metric in a state, you must register, collect, and file sales taxes in that state.',
      '2. Marketplace Facilitator Laws: If you sell through Amazon, they often collect and remit taxes on your behalf. However, Shopify stores require active, manual setup to ensure local taxes are automatically collected and properly accounted for.',
      '3. Sales Tax Reconciliation: Reconciling Shopify sales data against Stripe deposits and corresponding tax filings is a highly complex process. Our specialized e-commerce team integrates tools like A2X with QuickBooks Online, matching daily deposits to corresponding liabilities automatically.',
      'Staying compliant from day one prevents surprise penalties that can erase your entire product margin. Partnering with a specialized offshore tax group ensures your sales reporting is flawless.',
      'Please verify nexus details with official regional tax departments or local CPAs, as rules shift frequently.'
    ],
    author: 'Priya Nair, Tax Director'
  },
  {
    id: '4',
    title: 'The CPA Talent Crisis in the West and the Rise of Back-Office Outsourcing',
    category: 'Outsourcing',
    date: 'March 11, 2026',
    readTime: '5 min read',
    summary: 'Onshore accounting firms are facing unprecedented recruitment shortages. Here is how leading CPA firms are utilizing secure Indian offshore departments to scale client capacity.',
    image: 'https://images.unsplash.com/photo-1521791136364-72861c619292?auto=format&fit=crop&q=80&w=600&h=400',
    content: [
      'Accounting firms across the USA, UK, and Australia are fighting a quiet battle: a severe shortage of certified talent. Fewer university students are pursuing CPA tracks due to intensive testing requirements and high entry stress. Consequently, onshore hiring salaries have surged, reducing small-firm margins and limiting their ability to accept new clients.',
      'To combat this, forward-looking CPA firms are establishing whitelabel offshore departments. Instead of hiring local junior bookkeepers, firms partner with Indian back-office firms to handle baseline processing, payroll entries, and tax preparation.',
      'By outsourcing time-consuming bookkeeping and data entry tasks, local CPAs can dedicate their office hours to high-value strategic advisory, client onboarding, and relationship development.',
      'Our whitelabel offshore teams operate as logical extensions of your local office, logging into your secure servers and adhering strictly to your standard operating procedures.',
      'The math is simple: outsourcing reduces labor expenses by up to 60%, turning compliance seasons from stressful crunches into highly profitable opportunities.'
    ],
    author: 'Amish Patel, Founder'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'CA Jitendra Tilwani',
    role: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'CA Jitendra Ashok Tilwani is the Founder and Managing Director of AUM Consultancy, a premier offshore hub providing global accounting firms and businesses with end-to-end finance, tax, and staffing solutions. Under his visionary leadership, the firm serves as an agile, white-label extension for international practices, particularly across the USA and Canada.\n\nHe directly orchestrates AUM’s comprehensive service architecture, which spans full-scale Client Accounting Advisory Services (CAAS)—including bookkeeping, AP/AR, and payroll—alongside high-tier Virtual CFO and Business Valuation advisory. A specialist in cross-border compliance, Jitendra oversees an extensive tax practice handling complex Individual, Partnership, C-Corp, S-Corp, and Trust returns, as well as multi-state planning and back-year tax resolution.\n\nFurthermore, he pioneered AUM’s "Build Your Offshore Team" model, allowing global CPA firms to seamlessly scale capacity by hiring dedicated, pre-vetted Indian professionals—ranging from tax preparers and reviewers to audit support staff, payroll managers, and executive assistants. Through strategic alliances and rigorous risk consulting, Jitendra drives operational excellence, bridging Indian financial talent with global market demands.',
    linkedinUrl: 'https://www.linkedin.com/in/ca-jitendra-tilwani-offshoring-accounting/'
  },
  {
    name: 'CA Heena Tilwani',
    role: 'Co-Founder & Proprietor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Heena Tilwani is the Co-Founder and Proprietor of AUM Consultancy, driving the firm\'s core operational execution, internal financial frameworks, and international service delivery. Working in close synergy with the leadership team, she ensures the seamless daily functioning of the offshore delivery center, translating corporate strategy into robust, high-performance client operations.\n\nShe holds complete oversight of internal financial health, managing organizational records, compliance, and employee payroll infrastructure. On the service execution front, Heena actively leads the processing pipelines for global clients, ensuring absolute precision in high-volume bookkeeping (AP/AR), payroll processing, and cross-border tax return preparation.\n\nAdditionally, she is deeply involved in the operational success of the "Build Your Offshore Team" initiative, managing the end-to-end onboarding, training, and workflow alignment of specialized Indian talent for global accounting practices. Through her meticulous administrative leadership and focus on process continuity, Heena ensures that AUM Consultancy consistently maintains its institutional-grade service benchmarks.',
    linkedinUrl: 'https://www.linkedin.com/in/heena-karamchandani-tilwani-4b07a93b0/'
  }
];

