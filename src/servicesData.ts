export interface SubService {
  id: string;
  category: 'accounting' | 'audit' | 'tax' | 'other' | 'offshore-team';
  title: string;
  catchphrase: string;
  description: string;
  image: string;
  iconName: string;
  checklists: {
    title: string;
    items: string[];
  }[];
  whyPartner: string[];
  steps?: {
    title: string;
    description: string;
  }[];
  didYouKnow?: string;
  didYouKnowTitle?: string;
  processDiagram?: string[];
  jurisdictions?: string[];
  ctaText?: string;
  ctaLink?: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
  accountingSections?: {
    type: 'paragraph' | 'checklist' | 'bullet' | 'text-block' | 'nested-sections' | 'grid';
    title: string;
    text?: string;
    items?: string[];
    subSections?: {
      title: string;
      text?: string;
      items: string[];
    }[];
    gridItems?: {
      title: string;
      text: string;
      iconName: string;
    }[];
  }[];
  whyPartnerTitle?: string;
}

const BASE_SUB_SERVICES: SubService[] = [
  {
    id: 'bookkeeping-backlog',
    category: 'accounting',
    title: 'Bookkeeping & Backlog Clean-Up Services',
    catchphrase: 'Focus on growing your business while we handle the data. Get unparalleled accuracy, seamless cloud integration, and pristine, audit-ready financial records on autopilot.',
    description: 'Looking to streamline your business operations and shift your corporate energy back to scaling? Outsource your bookkeeping to Aum consultancy to access enterprise-grade precision and senior financial oversight without the in-house payroll costs. Our team of experienced professionals will save you time, money, and stress while ensuring compliance with financial regulations and keeps your finances completely organized and tax-ready.',
    image: 'https://d21l9vkgwnizti.cloudfront.net/test_uploads/h3-online-bookkeeping-and-accounting-services-in-the-usa-1729137644.webp',
    iconName: 'Calculator',
    checklists: [],
    whyPartner: [
      'Better Financial Insights: Gain error-free accounting books that provide clear, actionable insights to drive smart business decisions.',
      'Impress Your Investors: Win the trust of stakeholders and back your scaling goals with highly accurate, real-time, and up-to-date financial data.',
      'Stay Prepared & Stress-Free: Whether you need to generate quick reports or file your year-end taxes, everything is kept ready, compliant, and delivered strictly within your deadlines.'
    ],
    didYouKnow: 'Over 60% of small businesses experience cash flow bottlenecks due to unreconciled bank balances. Real-time daily bookkeeping removes this blind spot completely.',
    ctaText: 'Schedule Consultation',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Your Daily & Monthly Upkeep Checklist',
        text: 'Every task we execute is aligned precisely with your firm\'s existing workflow. Utilizing cloud-based platforms, you gain real-time visibility, streamlined processes, and better control over your numbers—without the operational burden of daily supervision.\n\nWe simplify each step, ensuring seamless integration from initial scope to final delivery. Our process is designed to enhance your efficiency and reduce your workload.'
      },
      {
        type: 'checklist',
        title: 'Scope of Work',
        items: [
          'Basic bookkeeping work',
          'Processing sales, purchase, bank transactions and all the expenses',
          'Sales ledger control account',
          'Reconciliation of business bank and business credit card accounts',
          'Purchase ledger control account',
          'Expense analysis',
          'Monthly/quarterly trial balance',
          'Nominal ledger',
          'Aged debtors report and creditors report'
        ]
      },
      {
        type: 'bullet',
        title: 'Financial Backlog or Unfinished Books? We resolve it all.',
        text: 'Whether your books are behind by weeks, months or years- Our dedicated team step in immediately to resolve backlogs ensuring your books prepared - ready for upcoming tax deadline, an unexpected audit, or an upcoming investor review',
        items: [
          'Forensic Historical Catch-Up: We dive backward into your files to sort, categorize, and reconstruct months or years of missing data.',
          'Error Correction & Re-Classification: We hunt down misclassified entries, repair broken ledger balances, clear out duplicate entries, and reconcile old, frozen bank records.',
          'Instant Audit & Tax Readiness: We turn chaotic, messy financial history into clean, unassailable financial statements so you can confidently file back-taxes, secure bank financing, or clear regulatory audits.'
        ]
      }
    ]
  },
  {
    id: 'year-end-closing',
    category: 'accounting',
    title: 'Year-End Accounting & Financial Closing Services',
    catchphrase: 'Turn messy year-end data into pristine, compliant financial statements. Get flawless accounts production, dual-tier reviews, and completely audit-ready files delivered strictly on time.',
    description: 'Managing the year-end closing process shouldn\'t be an operational bottleneck for your company or public practice. Outsource your year-end accounts production to Aum Consultancy to access elite technical precision, compliance oversight, and rapid turnaround times. Our team of experienced financial specialists takes care of the complex reconciliations and documentation required by local tax authorities—saving you time, cutting overhead, and ensuring absolute accuracy.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYj0NnZEKtN3-imyh1GnUPpqt2NX_DMjTCiD9ohH5RBDK-6iMhLjI3mYM&s=10',
    iconName: 'FileText',
    checklists: [],
    whyPartner: [
      'Two-Level Review Process: Every single file undergoes a rigorous, multi-tier quality assurance check by senior accountants before final delivery to ensure zero errors.',
      'Secure & On-Time Delivery: Your clients\' accounts are safe, structurally accurate, and handed over well ahead of regulatory filing deadlines.',
      'Drastic Capacity Scaling: Public accounting practices can scale up their client capacity during peak busy seasons without the risk or cost of hiring local, temporary staff.'
    ],
    didYouKnow: 'Fully Compliant with: US GAAP | IFRS | IRS Guidelines | HMRC Frameworks | ATO Standards. To protect your business and guarantee regulatory compliance, our delivery workflows are strictly aligned with the framework of your specific country or operating region.',
    ctaText: 'Schedule Consultation',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Fully Compliant with: US GAAP | IFRS | IRS Guidelines | HMRC Frameworks | ATO Standards'
      },
      {
        type: 'text-block',
        title: 'Year-End Deliverables & Scope of Work',
        text: 'We act as your backend execution engine, transforming raw financial data, transaction history, and software backups into fully reconciled, submission-ready closing packages.'
      },
      {
        type: 'checklist',
        title: 'Scope of Work',
        items: [
          'Month-end and year-end financial close support',
          'Chart of accounts setup, cleanup, and maintenance',
          'Accounts reconciliation and compliance solutions',
          'Integration with major platforms: QuickBooks, Xero, NetSuite, Sage',
          'Preparation of working papers including control accounts and lead schedules',
          'Analysis of income and expenses',
          'Reconciliation of all control accounts with statement balances',
          'Preparation of extended trial balance',
          'Posting workings in accounts productions software',
          'Draft accounts in pdf and iXBRL',
          'Two-level review of processes',
          'Filing of accounts with Companies House and HMRC',
          'Full set of accounts',
          'Abbreviated accounts'
        ]
      },
      {
        type: 'text-block',
        title: '',
        text: 'To protect your business and guarantee regulatory compliance, our delivery workflows are strictly aligned with the framework of your specific country or operating region'
      }
    ]
  },
  {
    id: 'accounts-payable',
    category: 'accounting',
    title: 'Accounts Payable (AP) Management Services',
    catchphrase: 'Take control of your outflows. Eliminate manual data entry, optimize vendor relationships, and capture early-payment discounts—completely supervised by our expert team.',
    description: 'Managing supplier invoices, tracking utility bills, and scheduling payments shouldn\'t eat up your team\'s valuable hours. Outsource your payables processing to Aum Consultancy to access automated, secure, and highly precise cash-outflow workflows. We ensure your vendors are paid accurately and on time, protecting your company\'s credit reputation while keeping your internal controls perfectly locked down.',
    image: 'https://assets.smfgindiacredit.com/sites/default/files/Accounts-Payable-Thumb.png?VersionId=A8tPzjMnqNqY3v2wIf9FXRqvJWkUwSH',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [
      'Zero Late Fees, More Discounts: Dedicated resources process your bills quickly so you can wave goodbye to late penalties and easily capture early-payment supplier incentives.',
      'Cost Savings: Swap out expensive manual paper-chasing for an automated, offshore delivery pod, lowering your total processing cost per invoice dramatically.',
      'Protected Fraud Controls: We build a tight segregation of duties into your ledger—ensuring the team processing the bills never has unsupervised or unchecked access to your cash.'
    ],
    didYouKnow: 'We hook into your preferred platforms—including QuickBooks, Xero, Sage, and NetSuite—and layer in smart document tools like Dext, Hubdoc, or secure client portals to capture data instantly. Our team handles everything from the initial receipt to final payment matching.',
    ctaText: 'Schedule Consultation',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Your Bill Processing & Outflow Checklist',
        text: 'We hook into your preferred platforms—including QuickBooks, Xero, Sage, and NetSuite—and layer in smart document tools like Dext, Hubdoc, or secure client portals to capture data instantly. Our team handles everything from the initial receipt to final payment matching.'
      },
      {
        type: 'checklist',
        title: 'Our Comprehensive Scope of Work:',
        items: [
          'Digital Invoice Capture & Intake: We gather incoming vendor bills from centralized emails or portals, parsing details instantly via digital systems to eliminate paper clutter.',
          'Meticulous GL Coding & Line-Item Entry: Every invoice is coded down to the exact General Ledger account code, department, or project line.',
          'Automated 3-Way Matching: We cross-verify vendor invoices against your purchase orders (POs) and inventory receiving logs to immediately catch billing discrepancies or quantity errors.',
          'Approval Lifecycle Coordination: We handle the follow-up, routing invoices automatically to your internal managers based on your custom approval thresholds before any cash moves.',
          'Duplicate & Fraud Screenings: Every file is rigorously audited by our team to flag duplicate submissions, vendor pricing changes, or suspicious bill formats.',
          'Payment Run Scheduling & Reconciliation: We prepare secure, ready-to-authorize payment batches inside your bank or bill platform, matching final cash clearings straight back to your ledger.'
        ]
      }
    ]
  },
  {
    id: 'accounts-receivable',
    category: 'accounting',
    title: 'Accounts Receivable (AR) Optimization Services',
    catchphrase: 'Accelerate your cash inflows. Lower your Days Sales Outstanding (DSO), protect customer goodwill, and turn your unpaid invoices into bankable cash on time.',
    description: 'Delayed client payments and mounting overdue invoices can quickly suffocate a company\'s working capital. When you outsource your receivables to Aum Consultancy, you gain a dedicated collections and billing squad that protects your cash flow without compromising client relationships. We act as a seamless, professional extension of your front office to keep your incoming revenue predictable and growing.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXQoIIScHUFaX399iuCvBe2Fl3pbgQ6Ou90quGVwA0AP7Ex8n3izJrgF6&s=10',
    iconName: 'TrendingUp',
    checklists: [],
    whyPartner: [
      'Slashed DSO (Days Sales Outstanding): Our prompt, professional daily attention ensures your clients pay faster, providing immediate working capital to your accounts.',
      '75% Fewer Invoice Disputes: By utilizing disciplined software validation rules, we eliminate billing errors and typos before invoices leave your desk—wiping out common reasons for payment delays.',
      'Preserved Client Relationships: We step in to handle the repetitive, sometimes uncomfortable payment follow-ups, allowing your sales team to focus entirely on positive client growth.'
    ],
    didYouKnow: 'From customer onboarding to final cash application, we keep your customer ledgers mathematically precise and highly organized.',
    ctaText: 'Schedule Consultation',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Your Billing & Cash Collection Checklist',
        text: 'From customer onboarding to final cash application, we keep your customer ledgers mathematically precise and highly organized.'
      },
      {
        type: 'checklist',
        title: 'Our Comprehensive Scope of Work:',
        items: [
          'New Customer Profile Onboarding: We document customer preferences, credit parameters, and customized billing requirements right inside your software framework.',
          'Accurate Invoice Generation & Dispatch: We build and send clean, branded invoices featuring proper tax treatments, correct invoice numbers, and clear payment links the moment a sale closes.',
          'Real-Time Cash Application: Incoming wire transfers, ACH deposits, and credit card payments are rapidly matched to their specific open invoices inside your books.',
          'Friendly, Systemic Payment Reminders: We issue gentle, branded email follow-ups as invoice due dates approach, keeping your accounts top-of-mind without sounding aggressive.',
          'Dedicated Dispute & Deduction Resolution: If a client challenges a charge or deduction, our team handles the verification work, isolating billing errors to settle disputes fast.',
          'Live Aging Portfolio Monitoring: We provide your executive team with clean, weekly Aged Debtors reports, tracking key metrics like DSO so you always know your exact financial health.'
        ]
      }
    ]
  },
  {
    id: 'payroll-processing',
    category: 'accounting',
    title: 'Payroll Processing & Management Services',
    catchphrase: 'Simplify your payroll, protect your compliance, and pay your team with total confidence. Get end-to-end processing, tax filing, and software mastery on autopilot.',
    description: 'Running a business means taking care of the people who help it grow. However, navigating complex employment laws, calculating shifting tax deductions, and chasing down timesheets can easily exhaust your internal team. Outsource your payroll operations to Aum Consultancy to unlock enterprise-grade accuracy and strict regulatory compliance without the overhead of an in-house payroll department. From hourly tracking to year-end tax forms, we manage the entire ecosystem flawlessly so you can focus entirely on scaling.',
    image: 'https://cdn2.hubspot.net/hubfs/494075/shutterstock_482028706.jpg',
    iconName: 'Users',
    checklists: [],
    whyPartner: [
      'Punctual, Error-Free Deliveries: Your team gets paid exactly what they earned, exactly when they expect it. Happy employees build a stronger business.',
      'Drastic Risk Reduction: By handing calculations over to offshore processing experts, you completely eliminate internal processing mistakes and expensive compliance penalties.',
      'Absolute Privacy & Confidentiality: Payroll data is highly sensitive. We utilize secure, encrypted cloud data transfers and enforce strict access controls to ensure your payroll records remain completely confidential.'
    ],
    didYouKnow: 'Worried about payroll tax penalties or missing statutory deadlines? Rest easy—we track it all. Missing an employment tax deadline or miscalculating a filing can lead to massive regulatory fines. Our payroll specialists run continuous checks against the latest regional updates, guaranteeing your business remains 100% compliant with local laws (IRS/DOL in the US, HMRC in the UK,add other 2 countries’ laws or your regional equivalent). We prepare and organize your monthly, quarterly, and year-end payroll tax returns automatically.',
    ctaText: 'Schedule Consultation',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Your Seamless Payroll Execution Checklist',
        text: 'We adapt completely to your preferred payroll infrastructure—whether you utilize Gusto, ADP, Paychex, BrightPay, Xero Payroll, or QuickBooks Payroll. Our team handles the back-end calculations, data formatting, and compliance tracking from start to finish.'
      },
      {
        type: 'checklist',
        title: 'Our Comprehensive Scope of Work:',
        items: [
          'Time & Attendance Synchronization: We collect, verify, and organize employee hours, overtime logs, and timesheets to ensure data entry is 100% accurate before processing.',
          'Gross-to-Net Pay Calculations: Continuous management of salary profiles, hourly wages, bonuses, commissions, and unpaid leave allocations.',
          'Precise Statutory Deductions: Flawless processing of local employee income tax withholdings, social security, national insurance, student loans, and court-ordered attachments.',
          'Pension & Retirement Tracking: Auto-enrolling qualified staff, calculating employer matching contributions, and uploading schedules directly to your pension providers.',
          'Pay Slip Generation & Pay Run Prep: Formatting secure digital pay slips for your team and generating bank upload files (ACH, BACS, or direct deposits) for your approval.',
          'Employee Onboarding & Leaver Processing: Seamless setup of new hire profiles, collection of local tax declarations, and generation of final settlement payouts and exit documentation.'
        ]
      },
      {
        type: 'text-block',
        title: 'Worried about payroll tax penalties or missing statutory deadlines? Rest easy—we track it all.',
        text: 'Missing an employment tax deadline or miscalculating a filing can lead to massive regulatory fines. Our payroll specialists run continuous checks against the latest regional updates, guaranteeing your business remains 100% compliant with local laws (IRS/DOL in the US, HMRC in the UK,add other 2 countries’ laws or your regional equivalent). We prepare and organize your monthly, quarterly, and year-end payroll tax returns automatically.'
      }
    ]
  },
  {
    id: 'audit-assurance-support',
    category: 'audit',
    title: 'Audit Support & Assurance Services',
    catchphrase: 'Build instant audit capacity, protect your margins, and eliminate busy-season bottlenecks. Enterprise-grade audit file prep and substantive testing mapped to US, UK, Canadian, and Australian regulatory standards.',
    description: 'The tedious groundwork of financial auditing—assembling lead schedules, checking transaction trails, and compiling thousands of working papers—should never limit your firm\'s growth or drain your internal staff.\n\nAt Aum Consultancy, we act as a highly specialized, seamless extension of your audit team. We take care of the time-consuming data gathering, substantive sample testing, and file compilation behind the scenes. Whether you are a public practice looking to scale engagement capacity without adding local payroll overhead, or a corporate entity prepping for an upcoming regulatory review, we ensure your audit files are clean, unassailable, and delivered well ahead of your deadlines.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSJ9QI4dKwW0kqS4zp3_P5sYeFIJf5XvaAJA_ae-ZnZQHRLnmPqM4LX74&s=10',
    iconName: 'ShieldAlert',
    checklists: [],
    whyPartner: [
      'Strict Two-Tier Quality Review: Borrowing from elite global frameworks, every single working paper, reconciliation, and audit test we complete undergoes a mandatory secondary review by an independent compliance manager before it is sent to your desk.',
      'Flawless Integration with Core Platforms: Our specialists operate natively inside major cloud networks, securely managing data transfers without any friction.',
      'Operational Cost Reductions: Scale up your firm\'s client onboarding capacity during intense peak busy seasons while dropping your bottom-line invoice processing costs significantly.'
    ],
    whyPartnerTitle: 'The Aum Consultancy Competitive Advantage',
    ctaText: 'Explore Audit Support Capacity',
    accountingSections: [
      {
        type: 'text-block',
        title: 'End-to-End Audit Phase Support',
        text: 'We integrate effortlessly with your internal platforms, following your firm\'s custom checklists to deliver complete audit packages at every critical phase.'
      },
      {
        type: 'nested-sections',
        title: 'Our Comprehensive Scope of Work:',
        subSections: [
          {
            title: '1. Planning',
            text: 'We make sure to give proper attention to the planning stage to ensure all areas and work are properly coordinated among the team members. Our team helps you with the following:',
            items: [
              'Preparing the document and details requirement list to carry out the audit',
              'Roll forward the previous year’s electronic audit file on audit software',
              'Migration from a traditional excel audit file to an electronic file',
              'Proper Mapping and tallying of the trial balance',
              'Preliminary analytical review of the previous year’s audit file',
              'Performing and documenting guidance for internal controls',
              'Checking opening balances',
              'Sample selection & materiality calculation',
              'Checking books of accounts for their compliance with GAAP'
            ]
          },
          {
            title: '2. Execution',
            text: 'For smooth execution, our expert audit team considers the following tasks:',
            items: [
              'Assistance in preparing, verifying, and reviewing the working papers',
              'Testing internal controls and obtaining audit evidence',
              'Verifying the audit evidence and indexing them',
              'Summarizing audit observations, Cross-referencing the documents and submitting recommendations to make the review process easier',
              'Performing casting procedures on accounts for internal consistency, and mathematical accuracy, and agreeing on lead schedules with final accounts',
              'Substantive testing and Risk Assessment',
              'Assistance in circulating balance confirmations',
              'Conducting an end-to-end audit'
            ]
          },
          {
            title: '3. Finalization',
            text: 'At the final stage, we make sure to perform the following:',
            items: [
              'Quality review and preparation of financial statements',
              'Independent review of audit files to ensure completeness',
              'Preparation of management letter points,',
              'Preparation of draft memo on auditing or accounting issues',
              'Preparation of risk-based internal audit reports',
              'Preparation of Accounting policy and procedure',
              'Internal control procedure development and implementation',
              'Preparation and review of GAAP compliance checklist',
              'Preparing notes to maintain proper disclosures',
              'Prepare checklists to report errors to the onshore audit team to make necessary changes to the financial statements and future accounts'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Seamless Compliance Across 4 Global Jurisdictions',
        text: 'Your dedicated offshore pod at Aum Consultancy is thoroughly trained to prepare working papers that seamlessly meet the rigorous compliance frameworks of your home country:',
        items: [
          '🇺🇸 United States: Strict alignment with AICPA / GAAS clarity frameworks for private entities and non-profits, alongside meticulous compliance mapping for public firms following PCAOB Standards.',
          '🇬🇧 United Kingdom: Flawless file structure meeting UK ISAs as set by the Financial Reporting Council (FRC), fully compliant with the statutory parameters of the Companies Act 2006.',
          '🇨🇦 Canada: Complete integration with Canadian Auditing Standards (CAS) and rules detailed within the CPA Canada Handbook – Assurance.',
          '🇦🇺 Australia: Legally binding work structures formatted exactly to Australian Auditing Standards (ASAs) under the federal Corporations Act 2001.',
          'International Baseline: Every document we generate adheres to the International Standards on Auditing (ISA) set by the IAASB.'
        ]
      }
    ]
  },
  {
    id: 's-corp-tax',
    category: 'tax',
    title: 'S-Corporation Tax Return Services (Form 1120-S)',
    catchphrase: 'Stop Stressing Over Form 1120-S. Let Tax Experts Handle Your S-Corp Compliance.',
    description: 'As an S-Corporation owner, you enjoy incredible tax advantages—but you also face some of the strictest IRS scrutiny. One mistake in your shareholder allocations or dynamic basis tracking can trigger costly audits, up to $255 per shareholder monthly late filing penalties, or even risk losing your corporate status entirely.\n\nAt Aum Consultancy, we take the complexity out of S-Corp compliance. We don\'t just fill out forms; we structure your return to protect your business, maximize your legal deductions, and ensure flawless pass-through reporting to your personal return.',
    image: 'https://bermudafin.com/wp-content/uploads/2026/04/form-1120-s-filing-guide-2026-hero.webp',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnow: 'The IRS mandates electronic filing for corporations filing 10 or more returns of any type, and late filing penalties for Form 1120-S now automatically apply even if your business owes zero taxes. Missing the deadline is an expensive mistake you can easily avoid.',
    ctaText: 'Schedule consultation',
    accountingSections: [
      {
        type: 'bullet',
        title: 'What We Handle For Your S-Corporation',
        items: [
          'Flawless Form 1120-S & Schedule K-1 Preparation: We calculate and generate precise Schedule K-1s for all shareholders, ensuring profit and loss distributions are aligned perfectly.',
          'Shareholder Stock & Debt Basis Tracking: The IRS is heavily auditing basis tracking. We meticulously manage your Form 7203 to ensure your loss deductions are fully compliant.',
          'Reasonable Compensation Analysis: We help evaluate your W-2 salary versus shareholder distributions to shield you from the number one S-Corp audit trigger: low officer compensation.',
          'Navigating the Latest OBBBA Tax Laws: We ensure your business capitalizes on the massive new tax updates, including enhanced Section 179 immediate expensing (up to $2.5M) and optimized Qualified Business Income (QBI) deductions.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Step-by-Step Filing Process',
        subSections: [
          {
            title: '1.Secure Data Collection:',
            text: 'Step 1.',
            items: [
              'Upload your financial statements (Profit & Loss, Balance Sheet), prior-year returns, and shareholder details to our secure portal.'
            ]
          },
          {
            title: '2.Meticulous Reconciliation:',
            text: 'Step 2.',
            items: [
              'Our tax specialists review your books, reconcile book-to-tax differences (Schedule M-1/M-2), and identify overlooked industry-specific deductions.'
            ]
          },
          {
            title: '3.Draft & Strategy Review:',
            text: 'Step 3.',
            items: [
              'We walk you through a draft of your Form 1120-S and individual K-1s to verify accuracy and discuss future tax planning opportunities.'
            ]
          },
          {
            title: '4.Authorized IRS E-Filing:',
            text: 'Step 4.',
            items: [
              'We securely e-file your federal and state returns, delivering digital copies and immediate confirmation of IRS acceptance.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'back-year-tax',
    category: 'tax',
    title: 'Back-Year Tax Services & Catch-Up Filing',
    catchphrase: 'Years behind on your taxes? Stop worrying. We’ll clean up your records, handle the IRS or tax authorities, and clear your backlog completely.',
    description: 'Life happens, business moves fast, and it is incredibly easy to fall behind on tax filings. But ignoring unfiled back-taxes is a ticking time bomb. With failure-to-file penalties compounding monthly and the risk of automated substitute returns (where the government files for you without any deductions), you need an immediate strategy to wipe the slate clean.\n\nAt Aum Consultancy, we offer a 100% judgment-free zone. Our specialized tax reconstruction squad steps in to take the burden off your shoulders. We pull historical transcripts, rebuild missing books, and completely resolve your past tax liabilities so you can breathe easy again.\n\n.',
    image: 'https://images.financialexpressdigital.com/2025/03/Income-Tax-3.png',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'The Risk of Doing Nothing',
    didYouKnow: 'Leaving back-years unfiled gives tax authorities the right to freeze bank accounts, place liens on property, or seize refunds. Worse, the statute of limitations to claim old refunds expires after 3 years. If the government owes you money from a past year, delaying means losing that cash forever.',
    ctaText: 'schedule a confidential consultation',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Our Step-by-Step Back-Year Resolution Checklist',
        text: 'We don’t just fill out the missing years; we forensically audit them to ensure you pay the absolute minimum required by law while catching up.'
      },
      {
        type: 'bullet',
        title: 'Our Comprehensive Scope of Work:',
        items: [
          'IRS & State Transcript Retrieval: We pull your official historical tax transcripts directly from the authorities to see exactly what income has been reported and what years are flagged.',
          'Forensic Accounting & Document Reconstruction: Missing bank statements or old receipts? We piece your financial history together using specialized ledger reconstruction techniques.',
          'Wiping Out Automated "SFRs": If the government filed a Substitute For Return on your behalf, they likely gave you zero deductions. We file correct, updated returns to drastically lower that bill.',
          'Penalty Abatement Analysis: We review your historical files for "First-Time Abate" qualifications or reasonable cause parameters to legally request that penalties be removed.',
          'Flexible Payment Plan Structuring: Once your back-taxes are filed, we assist in setting up formal installment agreements or Offers in Compromise to settle the debt affordably.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'The Back-Year Road to Relief',
        subSections: [
          {
            title: '1.Confidential File Intake:',
            text: 'Step 1.',
            items: [
              'We review your unfiled years, gather whatever documents you currently have, and securely request your official master transcripts from the authorities.'
            ]
          },
          {
            title: '2.Data Reconstruction & Cleansing:',
            text: 'Step 2.',
            items: [
              'Our team systematically processes your past bank accounts, merchant statements, and invoices to reconstruct clean income statements for every missing year.'
            ]
          },
          {
            title: '3.Strategic Filing & Deduction Hunting:',
            text: 'Step 3.',
            items: [
              'We prepare the historical returns, applying retroactive tax laws and maximizing missed deductions to drive your tax liability down as low as legally possible.'
            ]
          },
          {
            title: '4.Final Resolution Submission:',
            text: 'Step 4.',
            items: [
              'We securely e-file your returns and, if needed, attach formal penalty waiver requests or payment plan templates to finalize your compliance.'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Why Trust Aum Consultancy with Your Catch-Up Filing?',
        items: [
          'Absolute Privacy & Confidentiality: Your financial history is completely safe, encrypted, and protected by strict professional non-disclosure protocols.',
          'Drastic Penalty Reduction: We actively seek out every legal pathway to shave off accumulated interest and compliance fines.',
          'Get a Fresh Start Fast: Our specialized backlog pods work around the clock, meaning we can process years of missing accounting data in just a fraction of the standard time.'
        ]
      }
    ]
  },
  {
    id: 'individual-tax',
    category: 'tax',
    title: 'Individual & Personal Tax Return Services',
    catchphrase: 'Stop guessing on tax software. Get your maximum legal refund, avoid audit traps, and let dedicated tax experts handle your personal filing.',
    description: 'Filing your personal tax return shouldn\'t feel like a high-stakes guessing game. With tax laws constantly shifting, relying on generic DIY software often means leaving thousands of dollars in deductions on the table—or worse, accidentally triggering a compliance red flag.\n\nAt Aum Consultancy, we take the stress completely out of tax season. We provide personalized, meticulous tax preparation for individuals, remote professionals, expatriates, and high-net-worth investors. We don\'t just input your numbers into a form; we deeply analyze your financial footprint to build a bulletproof return that keeps more of your hard-earned money exactly where it belongs: in your pocket.\n\n',
    image: 'https://www.shutterstock.com/image-photo/online-tax-return-form-submitting-260nw-2582163497.jpg',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'Are You Capitalizing on the Latest Personal Tax Credits?',
    didYouKnow: 'Recent tax updates across major global markets have significantly shifted thresholds for child tax credits, student interest deductions, and clean-energy home improvement incentives. We double-check every single life change you experienced this year to ensure you claim every single credit you legally qualify for.',
    ctaText: 'schedule a secure your stress-free personal tax filing',
    accountingSections: [
      {
        type: 'grid',
        title: 'Specialized Personal Tax Scenarios We Handle',
        text: 'We go far beyond standard wage statements. Our personal tax team is highly skilled in processing complex, multi-layered personal income streams:',
        gridItems: [
          {
            title: 'Freelance & Sole Trader Income',
            text: 'Maximizing write-offs for self-employed individuals, 1099 contractors, and small business founders.',
            iconName: 'Laptop'
          },
          {
            title: 'Real Estate & Rental Portfolios',
            text: 'Navigating depreciation, repair write-offs, and passive activity loss rules for property investors.',
            iconName: 'Home'
          },
          {
            title: 'Investment & Crypto Portfolios',
            text: 'Accurately calculating capital gains and losses across stock trading accounts, foreign investments, and cryptocurrency assets.',
            iconName: 'TrendingUp'
          },
          {
            title: 'Expat & Cross-Border Filing',
            text: 'Ensuring clean compliance for citizens working abroad or foreign nationals navigating local residency tax rules.',
            iconName: 'Globe'
          }
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Simple, 4-Step Personal Filing Process',
        subSections: [
          {
            title: '1.Secure Document Upload:',
            text: 'Step 1.',
            items: [
              'Drop your wage statements, investment logs, and expense receipts into our encrypted, highly secure client portal.'
            ]
          },
          {
            title: '2.Deduction Maximization Audit:',
            text: 'Step 2.',
            items: [
              'Our tax specialists review your files, hunting for overlooked personal deductions, credits, and country-specific tax breaks.'
            ]
          },
          {
            title: '3.Draft & Strategy Review:',
            text: 'Step 3.',
            items: [
              'We walk you through a clear summary of your draft return, showing you exactly what you owe or what your refund will be before filing.'
            ]
          },
          {
            title: '4.Secure E-Filing & Acceptance:',
            text: 'Step 4.',
            items: [
              'We securely e-file your return directly to the tax authorities (IRS, HMRC, CRA, or ATO) and send you instant digital confirmation.'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Why File Your Personal Taxes with Aum Consultancy?',
        items: [
          'Surgical Accuracy, Zero Stress: Rest easy knowing your personal return is being handled by qualified, meticulous tax professionals who know local laws inside and out.',
          'Audit Protection Check: Every personal return goes through a thorough compliance screening to flag and fix common audit triggers before submission.',
          'Year-Round Support: We don\'t vanish after tax season. If you receive a notice later in the year or need advice on a major financial move, our team is right here to help.'
        ]
      }
    ]
  },
  {
    id: 'c-corp-tax',
    category: 'tax',
    title: 'C-Corporation Tax Return Services (Form 1120)',
    catchphrase: 'Maximize corporate tax efficiency, protect your balance sheet, and ensure flawless compliance with complex corporate tax frameworks.',
    description: 'Operating as a C-Corporation provides immense flexibility for fundraising and growth, but it also carries some of the most complex filing requirements in the financial world. Navigating the pitfalls of double-taxation, tracking accumulated earnings, managing net operating losses (NOLs), and balancing complex book-to-tax differences requires advanced tax engineering.\n\nAt Aum Consultancy, we specialize in providing elite C-Corp tax compliance and structural reporting. We go far beyond basic data entry; our corporate tax specialists forensically review your financial statements to optimize your corporate tax brackets, capture major tax credits, and protect your company from costly regulatory audits.\n\n.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1McO3Ey9wwknxTPADQP5bpjwie3GjdQdM4TaAvebJWZfYorgghCZSzF3&s=10',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'Did You Know?',
    didYouKnow: 'Navigating modern tax laws requires deep mastery of corporate cost recovery systems. Our teams perform advanced calculations for accelerated depreciation, section allowances, and capitalized expenditures, ensuring your major equipment investments, software purchases, and real estate assets are written off to give your corporation the maximum immediate cash-flow advantage.',
    ctaText: 'Contact us today to secure an expert corporate tax review',
    accountingSections: [
      {
        type: 'text-block',
        title: 'Complete C-Corp Compliance Support',
        text: 'We take full ownership of the heavy financial mapping required for corporate returns, ensuring your general ledger mirrors your tax disclosures flawlessly.'
      },
      {
        type: 'bullet',
        title: 'Our Comprehensive Scope of Work:',
        items: [
          'Meticulous Form 1120 & State Filing: We prepare and file your comprehensive Federal Form 1120 along with all required state and local corporate tax returns.',
          'Schedule M-1 & M-2 Reconciliations: Meticulous tracking and reconciliation of differences between your book income and taxable income, keeping your corporate records perfectly balanced.',
          'Tax Credit Optimization: Identifying and claiming lucrative corporate tax breaks, including R&D credits, Work Opportunity Tax Credits (WOTC), and industry-specific incentives.',
          'Net Operating Loss (NOL) Tracking: Strategically managing, carrying forward, or utilizing corporate losses to offset future taxable income and protect cash flow.',
          'Dividend & Distribution Compliance: Overseeing the tax tracking of shareholder distributions and handling required reporting to prevent unexpected double-taxation traps.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Corporate Filing Workflow',
        subSections: [
          {
            title: '1.Ledger & Balance Sheet Intake:',
            text: 'Step 1.',
            items: [
              'Upload your year-end trial balance, profit & loss statement, balance sheet, and prior-year corporate returns to our secure, encrypted hub.'
            ]
          },
          {
            title: '2.Book-to-Tax Engineering:',
            text: 'Step 2.',
            items: [
              'Our corporate tax pod analyzes your data, adjusts for permanent/temporary differences (depreciation, meals, provisions), and isolates deductions.'
            ]
          },
          {
            title: '3.Executive Review & Sign-Off:',
            text: 'Step 3.',
            items: [
              'We present a clear draft of your Form 1120, highlighting your effective tax rate, optimal credit usage, and strategic financial positioning.'
            ]
          },
          {
            title: '4.Secure Corporate E-Filing:',
            text: 'Step 4.',
            items: [
              'We securely e-file your corporate return directly to the authorities and deliver instant digital receipts alongside your final compliance binder.'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Why Partner with Aum Consultancy for Your C-Corp Return?',
        items: [
          'Advanced Corporate Expertise: Your returns are processed by elite corporate tax specialists who natively understand complex equity structures, debt-to-equity compliance, and corporate code.',
          'Bulletproof Audit Readiness: We double-verify every corporate balance sheet line against clear, verifiable audit trails, minimizing red flags before submission.',
          'Seamless Global Scalability: If you are a CPA firm looking to offload bulk corporate files during busy season, we act as your high-capacity, white-label backend delivery machine.'
        ]
      }
    ]
  },
  {
    id: 'partnership-llc-tax',
    category: 'tax',
    title: 'LLC, LLP & Partnership Tax Return Services',
    catchphrase: 'Multi-jurisdictional partnership tax support for CPA firms and growing enterprises across the US, UK, Canada, and Australia.',
    description: 'Managing the tax footprint of a pass-through or flow-through business entity requires balancing the needs of the enterprise with the individual tax profiles of its members or partners. Because multi-owner LLCs, LLPs, and Partnerships do not pay income tax directly, tracking changing capital accounts, calculating shifting partner basis, and preparing accurate individual statements is a highly meticulous process. One error on an allocation schedule can trigger major compliance penalties or internal disputes.\n\nAt Aum Consultancy, we function as a high-capacity tax delivery engine. We handle the heavy groundwork of compiling ledger data, balancing capital adjustments, and preparing pristine partnership returns. Whether you are a local CPA firm looking to offload massive volume during peak filing periods, or an expanding multi-owner enterprise, our specialists deliver seamless cross-border compliance.\n\n',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'Scale your firm\'s output without expanding your local overhead.',
    didYouKnow: 'For accounting firms in the US, UK, Canada, and Australia, manually processing hundreds of complex partnership returns and partner slips drains local senior resources. By outsourcing data sorting, capital balancing, and form mapping to Aum Consultancy, you slash your seasonal operating overhead by up to 60%, speed up client turnaround times, and free your core local team to focus purely on high-margin client relationships.',
    ctaText: 'Contact us today to set up a scalable tax capacity consultation',
    accountingSections: [
      {
        type: 'grid',
        title: 'Instant Local Authority & Form Mapping',
        gridItems: [
          {
            title: '🇺🇸 United States',
            text: 'Specialized preparation of Federal Form 1065 and flawless allocation of individual Schedule K-1s, including precise tracking of Partner Stock and Debt Basis (Form 7203).',
            iconName: 'Globe'
          },
          {
            title: '🇬🇧 United Kingdom',
            text: 'Meticulous compilation of LLP accounts to file HMRC Form SA800 (Partnership Tax Return) along with required supplementary pages for trading, property, and individual partner statements.',
            iconName: 'Globe'
          },
          {
            title: '🇨🇦 Canada',
            text: 'Accurate financial structuring to generate the CRA Form T5013 (Partnership Information Return) alongside individual T5013 slips, ensuring perfect alignment with the Income Tax Regulations.',
            iconName: 'Globe'
          },
          {
            title: '🇦🇺 Australia',
            text: 'Processing complex distribution tracking to build compliant ATO Partnership Tax Returns, including full Statement of Distribution schedules and capital gain reporting.',
            iconName: 'Globe'
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Complete Partnership & Flow-Through Scope of Work',
        text: 'We handle the end-to-end accounting-to-tax transformation, ensuring your partnership agreements tie out exactly with your final filings.',
        items: [
          'Schedule M-1 & Book-to-Tax Reconciliations: We analyze and reconcile all differences between book net income and taxable net income, adjusting for permanent and temporary variations.',
          'Partner Capital Account Maintenance: Meticulous tracking of capital accounts, contributions, distributions, and multi-tier equity structures to protect investor clarity.',
          'Guaranteed Payments & Partner Remuneration: Cross-checking partner compensation, guaranteed distributions, and salary frameworks with employment documents to eliminate entry errors.',
          'Multi-State & Multi-Provincial Nexus Filing: For businesses operating across multiple boundaries, we calculate and allocate appropriate state, provincial, or regional tax profiles.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Global Data Filing Workflow',
        subSections: [
          {
            title: '1.Secure Trial Balance & Intake:',
            text: 'Step 1.',
            items: [
              'Upload your year-end financial statements, partner distribution ledgers, and local partnership agreements into our encrypted global portal.'
            ]
          },
          {
            title: '2.Allocation Framework Modeling:',
            text: 'Step 2.',
            items: [
              'Our specialized tax pod builds out the allocation models based on your entity’s specific structural laws to ensure profit/loss splits map perfectly.'
            ]
          },
          {
            title: '3.Dual-Tier Quality Review:',
            text: 'Step 3.',
            items: [
              'A senior compliance manager reviews the draft partnership return and individual slips to verify totals against the master ledger.'
            ]
          },
          {
            title: '4.Authorized Electronic Submission:',
            text: 'Step 4.',
            items: [
              'We push final files to your local review team or securely e-file directly to the appropriate regional authority, returning complete digital receipts.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'multistate-tax',
    category: 'tax',
    title: 'Multistate & Multi-Region Tax Services',
    catchphrase: 'Protect your business from hidden tax liabilities. Expert economic nexus mapping, multi-jurisdictional filings, and cross-border compliance for the US, UK, Canada, and Australia.',
    description: 'Expanding your sales across borders or hiring remote employees in other regions is fantastic for growth—but it creates a massive compliance trap. Local tax authorities are aggressively tracking where businesses generate revenue and where their employees sit. If you cross an arbitrary revenue threshold (Economic Nexus) or establish a physical footprint in a new state or territory, you are legally required to register, collect, and file taxes there. Failing to do so can lead to devastating back-tax assessments and severe fraud penalties.\n\nAt Aum Consultancy, we specialize in untangling the mess of multi-jurisdictional taxation. We actively monitor shifting regional thresholds to map out exactly where you owe taxes, calculate your liabilities with pinpoint precision, and handle all local registrations and filings so you can scale globally without fear.\n\n',
    image: 'https://www.shutterstock.com/image-photo/global-tax-audit-international-compliance-260nw-2722119609.jpg',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'Ignorance of regional tax laws is not a legal defense.',
    didYouKnow: 'Many business owners don\'t realize that simply having a single remote employee or reaching a specific dollar amount in online sales can legally subject an entire company to a state or province\'s tax laws. Our rapid-response compliance teams specialize in cleaning up historic multi-state oversights, minimizing back-tax exposures, and setting up automated systems so you never miss a filing deadline again.',
    ctaText: 'schedule a comprehensive Nexus and multi-region tax assessment',
    accountingSections: [
      {
        type: 'grid',
        title: 'Multi-Jurisdictional Frameworks We Handle',
        text: 'Our global delivery center manages complex regional and state-level tax structures natively, shielding your business or CPA firm from compliance oversights:',
        gridItems: [
          {
            title: '🇺🇸 United States',
            text: 'Comprehensive monitoring of state-by-state economic and physical nexus thresholds. We handle state Corporate Income Taxes, Franchise Taxes, state-level pass-through returns, and automated Sales & Use Tax compliance.',
            iconName: 'Globe'
          },
          {
            title: '🇬🇧 United Kingdom',
            text: 'Managing complex e-commerce VAT mapping, cross-border digital service rules, and compliance requirements for selling goods post-Brexit.',
            iconName: 'Globe'
          },
          {
            title: '🇨🇦 Canada',
            text: 'Navigating multi-provincial tax filings, managing complex Corporate Income Tax allocations across multiple provinces, and balancing GST, PST, and HST requirements.',
            iconName: 'Globe'
          },
          {
            title: '🇦🇺 Australia',
            text: 'Structuring compliance for state-based Payroll Taxes across different territories, navigating Fringe Benefits Tax (FBT), and managing national GST allocations.',
            iconName: 'Globe'
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Our Complete Multi-Region Scope of Work',
        text: 'We provide full operational oversight to ensure your sales platforms and financial ledgers align perfectly with regional tax laws.',
        items: [
          'Economic & Physical Nexus Studies: We run historical sales data through our tracking software to pinpoint exactly which states, provinces, or countries you have crossed compliance lines in.',
          'Multi-Jurisdictional File Preparation: We prepare and bundle all required local, state, and provincial tax returns, ensuring multi-tiered corporate structures are completely synchronized.',
          'Sales Tax & VAT Reconciliations: We audit and tie out your e-commerce platform data (Shopify, Amazon, Stripe) against your general ledger to ensure zero discrepancies before filings.',
          'Voluntary Disclosure Agreements (VDA): If you have historical unfiled liabilities in a region, we help execute VDAs to wipe out penalties and quietly bring you back into full compliance.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Multi-Region Compliance Process',
        subSections: [
          {
            title: '1.Data & Sales Intake:',
            text: 'Step 1.',
            items: [
              'Upload your raw transactional sales data, remote employee payroll logs, and current regional registrations into our secure portal.'
            ]
          },
          {
            title: '2.Threshold & Nexus Mapping:',
            text: 'Step 2.',
            items: [
              'Our specialized multi-region tax pod maps your sales volume and operations against the latest state, provincial, and national tax rules.'
            ]
          },
          {
            title: '3.Liability Optimization Review:',
            text: 'Step 3.',
            items: [
              'We deliver a clear breakdown of where you have filing obligations, calculate precise apportionment percentages, and review draft local returns.'
            ]
          },
          {
            title: '4.Secure Regional Filing:',
            text: 'Step 4.',
            items: [
              'We process and e-file all localized returns directly to the respective state, provincial, or local tax authorities, providing a complete compliance log.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'tax-planning-advisory',
    category: 'tax',
    title: 'Strategic Tax Planning & Advisory Services',
    catchphrase: 'Stop looking backward. Start proactively reducing your tax liability, protecting your wealth, and optimizing your global cash flow.',
    description: 'Most businesses and high-net-worth individuals make the mistake of only talking to their accountant during tax season. By then, it is already too late to change your tax bill—you are simply recording history. True wealth preservation requires a proactive, forward-looking strategy that structures your transactions, investments, and business operations to minimize what you owe before the year ends.\n\nAt Aum Consultancy, we provide elite, year-round strategic tax planning and advisory. We analyze your entire financial footprint across your corporate entities and personal investments to identify hidden tax breaks, optimize entity structures, and deploy legal, advanced wealth-protection strategies. We don\'t just file your returns; we engineer them to save you money.\n\n',
    image: 'https://dk.cpa/wp-content/uploads/2025/06/AdobeStock_1216486452-scaled-1-1024x666.jpeg',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'Tax planning pays for itself.',
    didYouKnow: 'Waiting until the end of the year means missing out on time-sensitive tax shelters, depreciation elections, and corporate structure shifts that must be legally executed before December 31st. Our advisory clients routinely see a massive return on investment, capturing savings that far outweigh our advisory fees. If your current accountant isn\'t calling you mid-year with proactive ideas to save you money, you are overpaying the government.',
    ctaText: 'schedule a private Tax Optimization Consultation',
    accountingSections: [
      {
        type: 'bullet',
        title: 'Advanced Tax Planning Frameworks We Deploy',
        text: 'We design bespoke, comprehensive tax roadmaps tailored to the complex needs of growing businesses, corporate executives, and multi-national founders:',
        items: [
          'Entity Structure Optimization: Evaluating your business structure (S-Corp, C-Corp, LLC, or LLP) to ensure you are operating under the most tax-advantageous legal framework.',
          'Maximizing Deductions & Cost Recovery: Utilizing accelerated depreciation, specialized section write-offs, and R&D credits to immediately slash your current year taxable income.',
          'Pass-Through Entity (PTE) Tax Planning: Structuring your business distributions to maximize Qualified Business Income (QBI) deductions and bypass state-level tax caps.',
          'Corporate & Personal Tax Synchronization: Aligning your corporate year-end distributions with your personal income tax brackets to avoid unnecessary double-taxation traps.',
          'Cross-Border & Multi-National Structuring: For companies operating across the US, UK, Canada, or Australia, we structure international transactions to prevent double-taxation and protect global margins.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Strategic Advisory Blueprint',
        text: 'Our forward-looking tax planning process is designed to give you complete visibility over your financial future:',
        subSections: [
          {
            title: '1.Deep Financial & Entity Audit:',
            text: 'Phase 1.',
            items: [
              'We deeply review your historical tax returns, current year-to-date financial statements, and mid-year projections to build a baseline profile.'
            ]
          },
          {
            title: '2.Scenario Modeling & Strategy Design:',
            text: 'Phase 2.',
            items: [
              'Our specialized advisory pod runs your data through advanced modeling software to simulate different tax strategies and isolate maximum savings.'
            ]
          },
          {
            title: '3.The Tax Optimization Roadmap:',
            text: 'Phase 3.',
            items: [
              'We present you with a clear, step-by-step written plan detailing exactly what moves to make—such as shifting equipment purchases, setting up retirement vehicles, or restructuring debt.'
            ]
          },
          {
            title: '4.Year-Round Implementation Support:',
            text: 'Phase 4.',
            items: [
              'We don\'t leave you with a document. We meet with you quarterly to monitor your progress, adjust the plan for shifting market regulations, and ensure every strategy executes perfectly.'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Why Partner with Aum Consultancy?',
        items: [
          'Proactive, Not Reactive: We don\'t wait for you to call us. We actively monitor global and regional tax updates to bring you cost-saving strategies before you even know they exist.',
          'White-Label Capacity for CPA Firms: If you run a local accounting firm, we act as your specialized backend research and financial modeling team, allowing you to sell high-ticket tax planning advisory services to your clients effortlessly.',
          'Multi-Jurisdictional Mastery: Our team understands how corporate tax moves in one country impact personal tax structures in another, giving cross-border founders an unassailable edge.'
        ]
      }
    ]
  },
  {
    id: 'trust-fiduciary-tax',
    category: 'tax',
    title: 'Trust & Fiduciary Tax Services',
    catchphrase: 'Complex fiduciary tax preparation, precise distribution accounting, and wealth compliance across the US, UK, Canada, and Australia.',
    description: 'Fiduciary tax compliance carries a level of legal and financial responsibility that standard accounting simply cannot match. Managing the financial footprint of a Trust or an Estate requires balancing strict local tax regulations with the specific, legal mandates written into trust deeds and wills. With tax brackets for undistributed trust income compressing at an aggressive rate, one scheduling error or misallocated distribution can lead to excessive, unnecessary tax liabilities or legal disputes from beneficiaries.\n\nAt Aum Consultancy, we specialize in the intricate domain of fiduciary tax accounting. We handle the complex legwork of tracking principal vs. income, calculating Distributable Net Income (DNI), and preparing pristine trust returns to ensure full regulatory alignment and optimal wealth preservation.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Receipt',
    checklists: [],
    whyPartner: [],
    didYouKnowTitle: 'Undistributed trust income is a major tax target worldwide.',
    didYouKnow: 'Unlike individual tax profiles, trusts hit the top tax brackets with very small amounts of retained income. Leaving income inside a trust asset pool often triggers the highest legal tax rates automatically. Our compliance teams prioritize proactive calculations to ensure your distributions are perfectly timed and structured, leaving zero cash vulnerable to over-taxation.',
    ctaText: 'secure an expert fiduciary tax consultation',
    accountingSections: [
      {
        type: 'grid',
        title: 'Trust & Fiduciary Form Mapping Across Borders',
        text: 'Our global tax delivery center natively untangles the unique reporting structures of various international trust frameworks:',
        gridItems: [
          {
            title: '🇺🇸 United States',
            text: 'Meticulous preparation of Form 1041 for Grantor, Simple, and Complex Trusts, alongside precise generation of Schedule K-1s to pass tax liabilities correctly to beneficiaries.',
            iconName: 'Globe'
          },
          {
            title: '🇬🇧 United Kingdom',
            text: 'Comprehensive accounting for Discretionary, Interest-in-Possession, and Bare Trusts to assemble and submit the HMRC Trust and Estate Tax Return smoothly.',
            iconName: 'Globe'
          },
          {
            title: '🇨🇦 Canada',
            text: 'Navigating the rigorous 21-year deemed disposition rules, managing complex capital gains allocations, and generating compliant T3 returns and slips.',
            iconName: 'Globe'
          },
          {
            title: '🇦🇺 Australia',
            text: 'Structuring immaculate trust accounting allocations to satisfy Section 99/99A requirements, ensuring flawless distribution statements to beneficiaries.',
            iconName: 'Globe'
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Complete Fiduciary Accounting & Compliance Scope',
        text: 'We handle the heavy data processing and structural compliance required to protect trustees and executors from financial exposure.',
        items: [
          'Principal vs. Income Allocations: We audit transaction trails to ensure receipts and expenditures are properly attributed according to local trust laws and deed terms.',
          'Distributable Net Income (DNI) Calculations: We track and model annual income streams to determine the absolute most tax-efficient distribution schedule before deadlines pass.',
          'Fiduciary Balance Sheet Maintenance: Keeping asset registers, cost basis profiles, and historical distribution ledgers permanently organized and audit-ready.',
          'Final Estate Tax Accounting: Assisting executors in winding down financial footprints, liquidating estate assets, and filing final terminal returns.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Our Meticulous Trust Filing Workflow',
        subSections: [
          {
            title: '1.Deed & Ledger Review:',
            text: 'Step 1.',
            items: [
              'Upload your legal trust agreements, prior-year filings, and current year financial ledger data into our secure, encrypted portal.'
            ]
          },
          {
            title: '2.Fiduciary Income Parsing:',
            text: 'Step 2.',
            items: [
              'Our specialized trust pod reviews your financial activity, isolating capital gains, tax-exempt pools, and ordinary income streams.'
            ]
          },
          {
            title: '3.Allocation Framework Check:',
            text: 'Step 3.',
            items: [
              'We verify draft distributions against your local region\'s compressed tax brackets to flag any unexpected tax traps before finalizing returns.'
            ]
          },
          {
            title: '4.Secure Regional E-Filing:',
            text: 'Step 4.',
            items: [
              'We securely e-file your fiduciary returns directly to the appropriate regional authority and package separate allocation slips for your beneficiaries.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'fractional-cfo',
    category: 'other',
    title: 'Fractional Virtual CFO Services',
    catchphrase: 'Elite financial leadership, cash flow engineering, and growth strategy—at a fraction of the cost of a full-time executive.',
    description: "Growing businesses reach a point where basic bookkeeping isn't enough. You need high-level financial strategy to scale safely, navigate tight cash flow cycles, or prepare for capital raises. However, hiring a full-time, seasoned CFO in the US, UK, Canada, or Australia is incredibly expensive, often costing $200,000 to $350,000+ per year plus equity and benefits.\n\nAum Consultancy bridges this gap. We provide flexible, fractional Virtual CFO services tailored for mid-market companies, fast-growing startups, and busy CPA practices needing outsourced advisory capacity. You get elite, corporate-grade financial guidance on a flexible monthly retainer that fits your budget.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabBhE_kuHHfwhqRTXzd3aWsg-2-wp0WyxiPGXt-b8hg&s=10',
    iconName: 'Briefcase',
    checklists: [],
    whyPartner: [],
    accountingSections: [
      {
        type: 'bullet',
        title: ' Are You Experiencing Any of These Critical Scaling challenges?',
        text: "Busy founders don't have time for theory. If your business or your client's firm is hitting any of these operational bottlenecks, our Virtual CFO team can step in and fix it immediately:",
        items: [
          '"Making sales, but bank account is always empty." → We build dynamic cash flow models to plug spending leaks and optimize operational cash cycles.',
          '"Want to expand or hire, but  don\'t know if we can afford it safely." → We build data-backed scenario models to predict the exact financial impact of your next big move.',
          '"Financial data is a mess, and can\'t make clear decisions." → We transform raw trial balances into crystal-clear executive reports that highlight your true profitability.',
          '"Investors or banks are asking for financial packages we don\'t have." → We prepare elite, investor-ready financial models, debt metrics, and board decks.'
        ]
      },
      {
        type: 'bullet',
        title: 'What Our Virtual CFO Team Handles For You',
        text: 'Our fractional CFOs handle the high-level financial engineering while keeping your local management completely in control:',
        items: [
          '13-Week Dynamic Cash Flow Forecasting: Pinpoint exactly when cash enters and leaves your business to eliminate payroll stress and inventory shortages.',
          'Strategic Profit Margin Optimization: Analyzing product lines, services, and client profiles to identify and eliminate low-margin or loss-making operations.',
          'Capital Structure & Debt Advisory: Helping you secure commercial credit lines, structure equity raises, or negotiate favorable financing terms with lenders.',
          'Board & Stakeholder Reporting: Compiling clear, professional financial narrative packages for your board of directors, investors, or regional banks.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'How We Onboard & Protect Your Business',
        subSections: [
          {
            title: '1.The 72-Hour Financial Diagnostic:',
            text: 'Phase 1.',
            items: [
              'We securely connect to your cloud accounting system (Xero, QBO, Sage) to audit your historical numbers, margins, and operational runways.'
            ]
          },
          {
            title: '2.The CFO Strategic Roadmap:',
            text: 'Phase 2.',
            items: [
              'We deliver a customized operational blueprint mapping out your true break-even points, hidden leaks, and cash flow targets.'
            ]
          },
          {
            title: '3.Ongoing Advisory Execution:',
            text: 'Phase 3.',
            items: [
              'We integrate seamlessly as your fractional partner, leading monthly or bi-weekly strategic financial meetings to keep your growth entirely on track.'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: "Why Scale with Aum Consultancy's CFO Team?",
        items: [
          'Massive Cost Reductions: Gain access to top-tier financial strategists without taking on local full-time executive payroll burdens, benefits, or bonuses.',
          "White-Label Support for CPA Firms: Expand your accounting practice's margins overnight by using our team as your white-label backend CFO delivery engine for your highest-paying clients.",
          'Multi-Jurisdictional Frameworks: Whether managing US state-level entity structures, UK corporate frameworks, Canadian corporate structures, or Australian trust components, our strategies align cleanly with your local region.'
        ]
      }
    ],
    didYouKnow: 'Hiring a full-time, seasoned CFO in the US, UK, Canada, or Australia is incredibly expensive, often costing $200,000 to $350,000+ per year. Our flexible, fractional Virtual CFO model delivers the same elite guidance at a fraction of the cost.',
    ctaText: 'Click Here to Book a Custom CFO Capability Call.'
  },
  {
    id: 'fpa-dashboards',
    category: 'other',
    title: 'FP&A & Performance Dashboards',
    catchphrase: 'Stop looking at historical data. Get real-time financial clarity, predictive rolling forecasts, and automated KPI dashboards to scale with confidence.',
    description: 'Most businesses manage their operations using past data—looking at financial statements weeks after the month has already closed. In fast-moving markets across the US, UK, Canada, and Australia, relying entirely on backward-looking data makes it incredibly difficult to navigate shifts in the market. To scale safely, you need to understand where your numbers are heading, not just where they have been.\n\nAt Aum Consultancy, our Financial Planning & Analysis (FP&A) team converts chaotic general ledgers into clear visual intelligence. We build custom budgets, rolling cash runway forecasts, and automated performance dashboards that update in real time. We give CEOs, department heads, and CPA firms the clarity they need to make rapid, data-backed decisions.',
    image: 'https://www.phocassoftware.com/hs-fs/hubfs/phocas-velocity/images/blog/four-ways-dashboards-provide%20more-insight-into-financial-performance.jpg?width=821&height=456&name=four-ways-dashboards-provide%20more-insight-into-financial-performance.jpg',
    iconName: 'TrendingUp',
    checklists: [],
    whyPartner: [],
    accountingSections: [
      {
        type: 'bullet',
        title: 'Is Your Leadership Team Guessing on These Critical Questions?',
        text: 'If your executive team or your clients are relying on guesswork to answer these questions, your business is exposed to unnecessary operational risk:',
        items: [
          '"What happens to our profit margins if raw material or labor costs spike by 15%?" → We build dynamic sensitivity models to stress-test your business against changing market conditions.',
          '"Are we on track to hit our Q3 and Q4 revenue targets based on current sales velocity?" → We build rolling forecasts that update automatically based on actual weekly trends.',
          '"Which departments, products, or marketing channels are burning the most cash?" → We isolate underperforming assets using highly targeted visual KPI trackers.',
          '"How do we present our financial projections cleanly to get bank or investor approval?" → We build clear, multi-year financial models that instantly build institutional trust.'
        ]
      },
      {
        type: 'bullet',
        title: 'The Strategic FP&A Framework We Build For You',
        text: 'We handle the heavy data modeling and software integrations to build a completely transparent reporting architecture:',
        items: [
          'Dynamic Rolling Forecasts: Move away from static annual budgets. We implement rolling 12-month forecasts that adjust automatically as actual monthly data streams in.',
          'Automated Executive KPI Dashboards: We integrate your accounting systems (Xero, QBO, NetSuite) with modern BI tools (Power BI, Looker Studio, Fathom) to create live, highly visual health metrics.',
          'Departmental Variance Analysis: We match actual financial outcomes against your planned budgets every month, highlighting exactly where your spending varies so you can adjust course quickly.',
          'Unit Economics & LTV/CAC Modeling: For SaaS, E-commerce, and service businesses, we break down your customer lifetime value, acquisition costs, and churn rates to protect your actual profitability.'
        ]
      },
      {
        type: 'text-block',
        title: 'Live Visual Reporting Architecture',
        text: `  [ Raw Data Sources ]             [ Cloud Pipeline ]             [ Executive View ]
┌──────────────────────┐        ┌──────────────────────┐        ┌──────────────────────┐
│  • Xero / QBO / Sage │        │  Automated Data      │        │  Live KPI Dashboards │
│  • Stripe / PayPal   │ ──────>│  Normalization &     │ ──────>│  & Rolling 12-Month  │
│  • HubSpot / Salesforce│      │  Consolidation       │        │  Financial Forecasts │
└──────────────────────┘        └──────────────────────┘        └──────────────────────┘`
      },
      {
        type: 'nested-sections',
        title: 'Our 3-Step Dashboards & Modeling Delivery Process',
        subSections: [
          {
            title: '1.Data Inventory & Stack Audit:',
            text: 'Step 1.',
            items: [
              'We map out your current accounting files, CRM data, and operational systems to isolate your most critical performance drivers.'
            ]
          },
          {
            title: '2.Model Engineering & Integration:',
            text: 'Step 2.',
            items: [
              'Our FP&A analysts construct your custom financial engine, linking your live ledgers to clean visual metric dashboards.'
            ]
          },
          {
            title: '3.Monthly Variance Review:',
            text: 'Step 3.',
            items: [
              'We deliver updated variance reports and updated forecasts every month, giving your management team clear data to guide every strategic decision.'
            ]
          }
        ]
      }
    ],
    didYouKnow: 'Most companies spend weeks after the month-end close compiling spreadsheets. We automate the cloud pipeline so you can view live, normalized performance data inside BI tools in real time.',
    ctaText: 'Click Here to Request a Custom Dashboard Demo'
  },
  {
    id: 'deal-advisory',
    category: 'other',
    title: 'Deal Advisory & Valuation Services',
    catchphrase: 'Maximise transactional value, eliminate hidden financial liabilities, and execute corporate transactions with absolute certainty.',
    description: 'Whether you are looking to acquire a competitor to expand market share, or preparing to exit a company you have built over decades, corporate transactions carry massive financial risks. In the highly regulated mid-markets of the US, UK, Canada, and Australia, a poorly calculated valuation or an undiscovered balance sheet liability can instantly destroy transaction value.\n\nAt Aum Consultancy, we provide forensic Buy-Side Due Diligence, Sell-Side Advisory, and Independent Business Valuations. We dig deep beneath surface-level financial statements to calculate true normalized earnings, assess historical tax exposures, and provide bulletproof valuation models. We give corporate executives, private equity buyers, and CPA firms the hard data needed to negotiate from a position of absolute strength.',
    image: 'https://www.colliers.com/-/media/images/colliers/asia/india/general-news-images/2022/valuation--advisory-services.ashx?bid=c188a00bd0ba4f9892b0a9dc5831cd59',
    iconName: 'Layers',
    checklists: [],
    whyPartner: [],
    accountingSections: [
      {
        type: 'bullet',
        title: 'Are You Protected Against These Critical Transaction Risks?',
        text: 'Corporate buyers and sellers must move fast, but they cannot afford to overlook structural risks. Our M&A pod steps in to answer the critical questions that protect your capital:',
        items: [
          '"Are the target company’s reported earnings actually sustainable?" → We run detailed Quality of Earnings (QoE) assessments to strip out one-time spikes and isolate true recurring cash flow.',
          '"Is the valuation multiple aligned with current market data?" → We use industry-specific transactional data across western markets to defend or challenge the purchase price.',
          '"Are there ticking tax or operational liabilities hidden in the ledger?" → We run forensic due diligence to identify unfiled state/provincial sales tax obligations, payroll gaps, and bad debt risks.',
          '"How do we present our company to institutional buyers to get premium value?" → We build clear sell-side financial packages that justify your valuation and withstand aggressive due diligence.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Complete Deal Advisory & Valuation Scope of Work',
        text: 'We handle the heavy financial engineering and forensic analysis required to see through transactional data:',
        subSections: [
          {
            title: 'Buy-Side Due Diligence & Financial Verification',
            items: [
              'Quality of Earnings (QoE) Analysis: Moving beyond standard audits to evaluate actual cash generation, revenue concentration risks, and normalized EBITDA adjustments.',
              'Working Capital Target Optimization: Determining the exact net working capital required to run the business post-closing to avoid day-one cash shortages.',
              'Historical Tax Compliance Audits: Checking historical filings for potential liabilities in multi-state sales tax, provincial frameworks, or regional payroll regulations.'
            ]
          },
          {
            title: 'Independent Corporate Business Valuations',
            items: [
              'Multi-Model Valuation Frameworks: Designing defensible valuations based on Discounted Cash Flow ($DCF$) modeling, Market Comparables, and Asset-Based approaches.',
              'Intangible Asset & Goodwill Analysis: Calculating the true market value of intellectual property, customer lists, brand equity, and proprietary software stacks.'
            ]
          },
          {
            title: 'Sell-Side Exit Preparation',
            items: [
              'Data Room Mobilization: Organizing, cleaning, and structuring financial ledgers and tax records to ensure smooth buyer reviews and minimize deal friction.',
              'Reversing Hidden Operating Inefficiencies: Identifying cost-saving opportunities prior to market entry to instantly lift baseline EBITDA and increase exit valuation multiples.'
            ]
          }
        ]
      },
      {
        type: 'text-block',
        title: 'The Transaction Execution Lifecycle',
        text: `    [ Phase 1: Intake ]              [ Phase 2: Analysis ]             [ Phase 3: Closing ]
┌─────────────────────────┐       ┌─────────────────────────┐       ┌─────────────────────────┐
│ • Secure Data Room Setup│       │ • QoE Modeling & Bridge │       │ • Final Valuation Draft │
│ • Multi-Year Ledger Lift│ ─────>│ • Tax Liability Mapping │ ─────>│ • Purchase Agreement    │
│ • Intention Realignment │       │ • Working Capital Target│       │   Financial Review      │
└─────────────────────────┘       └─────────────────────────┘       └─────────────────────────┘`
      },
      {
        type: 'bullet',
        title: 'Why Partner with Our Global M&A Advisory Team?',
        items: [
          'Deep Mid-Market Expertise: We understand the exact valuation dynamics and regulatory environments governing transactions across the US, UK, Canada, and Australia.',
          "On-Demand Capacity for Local CPA & Law Firms: Scale your firm's advisory capabilities instantly. We act as your specialized backend corporate finance team, delivering elite transaction reports under your brand.",
          'Uncompromising Confidentiality: Every engagement is handled via encrypted data pipelines, secure data rooms, and strict non-disclosure agreements to fully protect sensitive corporate movements.'
        ]
      }
    ],
    didYouKnow: 'Ticking tax or operational liabilities—such as unfiled state sales tax, payroll gaps, and bad debts—can lie undetected. Our forensic due diligence protects your capital and negotiates from absolute strength.',
    ctaText: 'Schedule a Business Valuation Briefing'
  },
  {
    id: 'virtual-assistant',
    category: 'other',
    title: 'Virtual Admin and Assistant Support',
    catchphrase: 'Delegate your administrative backlog, and reclaim hours every week.',
    description: 'For busy business owners, corporate executives, and CPA partners across the US, UK, Canada, and Australia, time is the rarest resource. When you spend your day responding to basic emails, updating CRM logs, organizing cloud folders, and chasing clients for missing documents, you are trapped working in your business rather than on it. Hiring a full-time, local administrative assistant comes with heavy overheads, payroll taxes, and recruitment headaches.\n\nAt Aum Consultancy, our Executive Virtual Assistants (VAs) provide reliable, high-tier administrative support tailored for modern workflows. We plug directly into your daily routines to handle your clerical bottlenecks behind the scenes. You focus on high-value client relationships and closing deals; we manage the execution.',
    image: 'https://www.brickworkindia.com/Blogs/How-Virtual-Admin-service-is-revolutionizing-business-operations_1.jpg',
    iconName: 'Users',
    checklists: [],
    whyPartner: [],
    accountingSections: [
      {
        type: 'bullet',
        title: 'Is Your Leadership Team Overwhelmed by Clerical Tasks?',
        text: 'If you or your department heads are losing valuable hours every week to these operational friction points, our dedicated VAs can step in and fix it immediately:',
        items: [
          '\t"I nbox is overflowing, and missing critical client emails." → We triage your inbox, filter out spam, categorize action items, and draft responses daily.',
          '\t" CRM data is completely outdated and disorganized." → We clean up data entry fields, log client interactions, and keep pipelines updated in real time.',
          '\t" Waste hours manually chasing clients for missing paperwork." → We set up systematic, polite follow-up schedules to retrieve files and contracts automatically.',
          '\t"Scheduling multi-timezone meetings takes forever." → We manage your executive calendar, coordinate dates across timezones, and set up meeting links seamlessly.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'The Comprehensive Administrative Support We Handle For You',
        text: 'Our Executive VAs are fluent in modern corporate tool stacks and step in to handle administrative duties across any department (Finance, Operations, Sales, or Marketing):',
        subSections: [
          {
            title: '1. Calendar & Inbox Triage',
            items: [
              'Email Management: Daily sorting, filtering, flag alerts, and draft archiving to keep you as close to "Inbox Zero" as possible.',
              'Executive Scheduling: Setting up discovery calls, managing team syncs, and coordinating complex multi-timezone agendas.'
            ]
          },
          {
            title: '2. CRM & Document Management',
            items: [
              'System Data Entry: Keeping platforms like HubSpot, Salesforce, or Zoho immaculate and up to date.',
              'Cloud Organization: Re-organizing messy Google Drive, OneDrive, or Dropbox structures into logical, secure folder hierarchies.',
              'Client Document Chasing: Running point on collecting signatures, onboarding documents, and outstanding customer data.'
            ]
          },
          {
            title: '3. Multi-Department Operational Support',
            items: [
              'Finance Admin: Preparing expense reports, organizing receipts, and routing vendor invoices to your bookkeeping team.',
              'Sales & Marketing Admin: Building clean PowerPoint or Keynote decks, formatting proposals, and inputting marketing leads.',
              'Meeting Coordination: Preparing agendas, taking detailed meeting minutes, and logging task items inside Asana, ClickUp, or Monday.com.'
            ]
          }
        ]
      },
      {
        type: 'bullet',
        title: 'Seamless Integration with the Systems You Already Use',
        text: 'Our assistants operate natively inside the major global platforms you rely on every day, requiring zero training time:',
        items: [
          'Communication & Collaboration: Slack, Microsoft Teams, Zoom, Google Meet.',
          'Productivity & Tasks: Asana, ClickUp, Monday.com, Trello.',
          'Office Suites: Google Workspace (Docs, Sheets, Slides), Microsoft 365 (Word, Excel, PowerPoint).',
          'Sales & CRM: HubSpot, Salesforce, Pipedrive, Zoho.'
        ]
      },
      {
        type: 'bullet',
        title: 'Why Scale with Aum Consultancy’s Executive VAs?',
        items: [
          'Costs savings Over Local Hiring: Eliminate the heavy financial burden of local recruitment fees, payroll taxes, physical office space, and employee benefit programs.',
          'No Long-Term Staffing Risks: Scale your virtual assistant support hours up during busy quarters or project launches, and dial them back down smoothly on demand.',
          'Strict Security & Compliance: We handle your corporate communications, customer data, and internal files via secure, encrypted data workflows under absolute non-disclosure terms.'
        ]
      },
      {
        type: 'paragraph',
        title: 'Overwhelmed by Daily Paperwork?',
        text: "Let us clear your administrative backlog so you can focus on growth.\n\nStop letting small clerical tasks dictate your schedule. Connect with our administrative operations team to outline your exact bottlenecks, map out your current systems, and assign a dedicated executive virtual assistant to your workflow.\n\n(Flexible hourly packages and dedicated monthly assistant retainers are available to match your specific business volume.)"
      }
    ],
    didYouKnow: 'Our executive virtual assistants operate natively inside major platforms like Slack, Teams, Zoom, Asana, ClickUp, Monday.com, Trello, Google Workspace, Microsoft 365, HubSpot, Salesforce, Pipedrive, and Zoho.',
    ctaText: 'Schedule an Admin Support Consultation'
  },
  {
    id: 'risk-strategy',
    category: 'other',
    title: 'Risk & Corporate Strategy Consulting',
    catchphrase: 'Protect your profit margins, mitigate operational liabilities, and engineer scalable corporate growth.',
    description: 'As mid-market companies and growing enterprises expand across the US, UK, Canada, and Australia, they face complex operational risks. Inefficient workflows, weak internal financial controls, and uncoordinated expansion plans can quickly erode hard-earned profit margins. To scale safely, you must proactively identify internal operational gaps and structure your corporate growth with absolute strategic clarity.\n\nAt Aum Consultancy, we provide data-backed Internal Controls Auditing, Risk Management, and Corporate Strategy Consulting. We help business founders, corporate executives, and expanding entities design bulletproof internal workflows, safeguard corporate assets against fraud, and structure high-value strategic alliances. We give you the strategic roadmap needed to protect your baseline operations while expanding your market share.',
    image: 'https://www.insurance-relief.com/wp-content/uploads/sites/4/2019/04/Insurance20Career20Spotlight20Risk20Management20Consultant.jpg',
    iconName: 'ShieldAlert',
    checklists: [],
    whyPartner: [],
    accountingSections: [
      {
        type: 'bullet',
        title: 'Is Your Enterprise Vulnerable to These Structural Risks?',
        text: 'Growth without structural control creates operational chaos. Our risk and strategy team steps in to help you solve critical structural vulnerabilities before they impact your bottom line:',
        items: [
          'Are our internal financial controls strong enough to prevent fraud or error? → We audit your internal systems, segregate financial duties, and build secure oversight workflows.',
          'Want to enter a strategic alliance or joint venture, but how do we structure it safely? → We evaluate the financial and operational mechanics of your proposed partnerships to protect your interests.',
          'Business is growing, but internal workflows are slow and inefficient. → We perform deep operational reviews to eliminate redundant tasks, automate manual steps, and protect your profit margins.',
          'Do we have a clear, data-backed 3-to-5 year corporate roadmap? → We map out actionable growth timelines based on your actual capital constraints and market capabilities.'
        ]
      },
      {
        type: 'nested-sections',
        title: 'Complete Risk Advisory & Corporate Strategy Scope',
        text: 'We deliver high-level corporate analysis and actionable operational frameworks to protect and grow your enterprise:',
        subSections: [
          {
            title: '1. Internal Controls & Risk Mitigation',
            items: [
              'Fraud Prevention & Workflow Auditing: Reviewing your internal accounting, procurement, and payment workflows to eliminate systemic security vulnerabilities.',
              'Regulatory & Operational Compliance: Aligning your internal processing standards with local corporate governance guidelines across western markets.',
              'Margin & Cost-Leakage Analysis: Pinpointing hidden operational waste, supply chain inefficiencies, or software overspending that quietely drains cash flow.'
            ]
          },
          {
            title: '2. Corporate Strategy & Scalable Roadmaps',
            items: [
              'Strategic Alliance & Joint Venture Structuring: Providing financial logic, risk mapping, and operational frameworks to help you execute corporate partnerships smoothly.',
              'Business Model & Pricing Optimization: Re-engineering your pricing tiers, service bundles, and delivery frameworks to maximize long-term customer profitability.',
              'Cross-Border Expansion Mapping: Building step-by-step financial and operational blueprints for companies scaling their footprint internationally.'
            ]
          }
        ]
      },
      {
        type: 'text-block',
        title: 'The Strategic Alignment Framework',
        text: `   [ 1. Risk Diagnosis ]             [ 2. Control Engineering ]          [ 3. Strategic Growth ]
┌───────────────────────────┐      ┌───────────────────────────┐      ┌───────────────────────────┐
│ • Workflow Vulnerability  │      │ • Duty Segregation        │      │ • Joint Venture Framework │
│   Mapping & Audit         │ ────>│ • Fraud Prevention Locks  │ ────>│ • Margin-Lock Packaging   │
│ • Margin Leak Isolation   │      │ • Optimized SOP Design    │      │ • Expansion Roadmap Rollout│
└───────────────────────────┘      └───────────────────────────┘      └───────────────────────────┘`
      },
      {
        type: 'bullet',
        title: 'Why Partner with Aum Consultancy for Corporate Strategy?',
        items: [
          'Objective, Data-Driven Insights: We look beyond company politics and surface-level reports to give you a clear, unbiased assessment of your operational strengths and hidden risks.',
          "On-Demand Advisory Scale for CPA Firms: Provide high-ticket management consulting to your premier clients without over-extending your local executive team. We act as your specialized backend advisory engine.",
          'Tailored for Western Mid-Markets: Our risk management frameworks and corporate growth strategies are built specifically to handle the economic landscapes of the US, UK, Canada, and Australia.'
        ]
      },
      {
        type: 'paragraph',
        title: 'Protect Your Core Operations. Engineer Your Next Move.',
        text: "Let's build a secure, high-margin roadmap for your business.\n\nDon't wait for a workflow bottleneck or financial oversight to impact your profit margins. Connect with our corporate strategy and risk advisory specialists today to schedule an operational assessment, evaluate your internal control frameworks, and design a scalable growth strategy.\n\n(All initial strategic inquiries are handled with absolute corporate confidentiality and guided directly by our senior consulting leads.)"
      }
    ],
    didYouKnow: "Don't wait for a workflow bottleneck or financial oversight to impact your profit margins. An operational audit isolates hidden waste, supply chain leakages, or software overspending early.",
    ctaText: 'Schedule an Operational Risk Assessment'
  }
];

import { OFFSHORE_SERVICES } from './offshoreServicesData';

export const SUB_SERVICES: SubService[] = [
  ...BASE_SUB_SERVICES,
  ...OFFSHORE_SERVICES
];

export function getSubServicesByCategory(category: 'accounting' | 'audit' | 'tax' | 'other' | 'offshore-team') {
  return SUB_SERVICES.filter(s => s.category === category);
}
