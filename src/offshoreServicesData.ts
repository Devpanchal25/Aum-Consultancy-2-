import { SubService } from './servicesData';

export const OFFSHORE_SERVICES: SubService[] = [
  {
    id: 'hire-accountant',
    category: 'offshore-team',
    title: 'Hire an Accountant',
    catchphrase: 'Onboard a dedicated general accountant for general ledgers, corporate files, and month-end close.',
    description: 'Accurate financial accounting is the cornerstone of every successful enterprise, yet finding skilled local general ledger accountants is an ongoing operational challenge. Local salary expectations, competitive job markets, and administrative overhead make scaling an in-house accounting department highly expensive. AUM Consultancy provides highly qualified, dedicated offshore accountants who seamlessly integrate into your corporate structure. Our accountants are thoroughly trained in international standards, including US GAAP and IFRS, and are proficient in major global accounting platforms. They manage your general ledger, perform complex balance sheet reconciliations, and compile audit-ready monthly close files with absolute technical precision. When you hire a dedicated offshore accountant through AUM Consultancy, you are not just outsourcing tasks; you are adding a high-caliber professional to your team. Our accountants operate exclusively for your business, adapting to your specific software systems, internal reporting templates, and communication schedules. They take full ownership of the month-end and year-end closing processes, ensuring that all accruals, prepayments, and adjusting journal entries are recorded accurately and on time.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Calculator',
    checklists: [
      {
        title: '📋 Core General Ledger Duties',
        items: [
          'Post Adjusting Entries: Manage complex accrued liabilities, deferred revenue, and amortization entries accurately.',
          'Fixed Asset Accounting: Record asset capitalizations, track disposals, and compute precise MACRS depreciation.',
          'Intercompany Reconciliations: Reconcile multiple intercompany balances and handle foreign currency translations.',
          'Month-End Closing: Execute rigorous sub-ledger closures and produce detailed preliminary trial balances.'
        ]
      },
      {
        title: '📊 Management Accounting & Reporting',
        items: [
          'Custom Reporting Packs: Compile structured profit and loss, balance sheet, and cash flow statements.',
          'Financial Variance Analysis: Highlight budget-to-actual deviations and investigate ledger discrepancies.',
          'Audit and Tax Support: Prepare clear lead schedules, workpapers, and support documentation for auditors.',
          'Software Synchronization: Keep QuickBooks, Xero, NetSuite, or Sage ledgers consistently clean and aligned.'
        ]
      }
    ],
    whyPartner: [
      'GAAP & IFRS Expertise: Onboard accountants who are thoroughly trained in international regulatory and compliance frameworks.',
      'Up to 60% Overhead Reductions: Eliminate local recruitment fees, employer taxes, office space, and healthcare costs.',
      'CPA-Checked Accuracy: Our work undergoes double-tier verification by managing Chartered Accountants.'
    ],
    steps: [
      { title: 'Step 1: System Integration', description: 'Setup read-only ERP credentials, multi-factor logins, and align on Chart of Accounts.' },
      { title: 'Step 2: Shadowing & Recording', description: 'Our senior review team records daily transaction flows and compiles custom SOP docs.' },
      { title: 'Step 3: Close-File Parallel Run', description: 'Run parallel bookkeeping and close files for 1-2 weeks to ensure complete consistency.' },
      { title: 'Step 4: Pure Dedicated Output', description: 'Your dedicated offshore accountant operates smoothly as an extension of your finance team.' }
    ],
    didYouKnow: 'Our dedicated offshore accountants prepare and deliver 100% audit-ready trial balances and lead schedules, which reduces your external CPA fees by up to 35%.',
    ctaText: 'Hire an Accountant',
    faqs: [
      {
        question: "Can your offshore accountants draft full financial statements?",
        answer: "Yes, they prepare comprehensive, audit-ready balance sheets, income statements, and cash flow statements in line with your local GAAP."
      },
      {
        question: "How do you handle multi-currency accounting?",
        answer: "Our accountants are experienced in handling foreign exchange adjustments and complex intercompany transfer pricing reconciliations."
      },
      {
        question: "What accounting platforms are they certified in?",
        answer: "They hold official certifications in QuickBooks, Xero, NetSuite, and Sage, ensuring immediate operational readiness."
      },
      {
        question: "Can they coordinate with our external auditors?",
        answer: "Yes, they prepare detailed lead schedules, workpapers, and support files to make the external audit process seamless and fast."
      },
      {
        question: "How do we communicate on daily tasks?",
        answer: "You can interact with your accountant daily via Slack, Microsoft Teams, Zoom, and Email during your preferred business hours."
      },
      {
        question: "Is my data safe with an offshore accountant?",
        answer: "Absolutely. We enforce military-grade data security, utilizing secure thin-clients with biometric access and strict NDAs."
      }
    ]
  },
  {
    id: 'hire-bookkeeper',
    category: 'offshore-team',
    title: 'Hire a Bookkeeper',
    catchphrase: 'Dedicated remote bookkeeping specialists for daily transactions, receipts, and bank reconciliations.',
    description: 'Maintaining up-to-date, error-free books is essential for cash flow visibility, yet manual daily transaction entry and bank reconciliation consume immense administrative time. Hiring local bookkeepers is increasingly expensive, with high employee turnover rates and recruitment costs. AUM Consultancy provides dedicated, certified offshore bookkeepers who handle your daily transactions on autopilot. Our bookkeepers are highly trained in cloud accounting software, bank feed reconciliation, receipt capture, and payroll ledger entries. They work exclusively as an extension of your team, ensuring your financial records remain pristine, organized, and perfectly tax-ready every single day. When you secure a dedicated remote bookkeeper through AUM Consultancy, you eliminate the daily burden of paper-chasing and manual data entry. Our bookkeepers take charge of the daily financial ledger maintenance, ensuring that every expense, sale, and bank transaction is captured, coded, and matched.',
    image: 'https://images.unsplash.com/photo-1554224155-6b99479a49d2?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Calculator',
    checklists: [
      {
        title: '📝 Meticulous Daily Operations',
        items: [
          'Daily Feed Processing: Classify bank, credit card, and payment gateway feeds (Stripe, PayPal) daily.',
          'Digital Receipt Capture: Ingest, code, and match raw receipts utilizing tools like Dext and Hubdoc.',
          'A/R & A/P Ledger Upkeep: Reconcile sales ledger control accounts and update purchase ledger balances.',
          'Expense Analysis: Verify corporate expenditures and assign precise GL account codes.'
        ]
      },
      {
        title: '🔑 Monthly Reporting & Checks',
        items: [
          'Bank Statements Reconciliation: Reconcile ledger accounts against actual bank statement balances.',
          'Aged Debtor & Creditor Reports: Compile clean accounts receivable and payable summaries.',
          'Monthly Trial Balance: Produce verified trial balances free of misclassified expenses.',
          'Sales Tax Reconciliation: Keep sales and regional VAT data organized and clean.'
        ]
      }
    ],
    whyPartner: [
      'Certified Cloud Specialists: Hold official certifications in QuickBooks Online, Xero, Zoho Books, and FreshBooks.',
      'Over 65% Cost Reductions: Swap expensive local bookkeepers for a highly trained remote delivery team.',
      'Real-Time Cash Flow Clarity: Ensure your books are updated daily for precise, data-backed decisions.'
    ],
    steps: [
      { title: 'Step 1: Platform Setup', description: 'Establish secure read-only bank feeds and connect QBO, Xero, or receipt portals.' },
      { title: 'Step 2: Custom Mapping', description: 'Review and align on your internal Chart of Accounts and expense categorization rules.' },
      { title: 'Step 3: Meticulous Upkeep', description: 'Run daily data entry, invoice processing, and balance matching with zero delays.' },
      { title: 'Step 4: Quality Review', description: 'A senior accounting supervisor audits ledgers before releasing monthly trial balances.' }
    ],
    didYouKnow: 'Over 60% of small businesses face liquidity bottlenecks due to delayed bookkeeping. Daily matching keeps your actual cash position 100% visible.',
    ctaText: 'Hire a Bookkeeper',
    faqs: [
      {
        question: "What software do your bookkeepers support?",
        answer: "They are certified experts in QuickBooks, Xero, Wave, NetSuite, Zoho Books, FreshBooks, and Sage."
      },
      {
        question: "How do they collect physical invoices and receipts?",
        answer: "They integrate with digital receipt capture platforms like Dext, Hubdoc, or secure client portals where you can upload documents."
      },
      {
        question: "Do they manage historical catch-up bookkeeping?",
        answer: "Yes, they specialize in sorting, reconstructing, and reconciling complex backlogs of historical records."
      },
      {
        question: "How is their work quality verified?",
        answer: "Every ledger undergoes a multi-tier review by a senior accountant and supervisor before final monthly sign-off."
      },
      {
        question: "Can they work in our timezone?",
        answer: "Yes, we arrange overlapping schedules to ensure they are available to answer queries and process requests during your day."
      },
      {
        question: "How do we get started?",
        answer: "Onboarding takes just a few business days—we establish read-only access and immediately begin process shadowing."
      }
    ]
  },
  {
    id: 'hire-tax-preparer',
    category: 'offshore-team',
    title: 'Hire a Tax Preparer',
    catchphrase: 'Hire qualified, dedicated tax preparers to manage heavy busy-season filing queues on autopilot.',
    description: 'Tax season brings predictable volume spikes that place immense stress on CPA practices and corporate tax departments, often leading to burnout and missed filing deadlines. Recruiting temporary, local tax preparers during peak seasons is expensive, competitive, and time-consuming. AUM Consultancy provides dedicated, certified offshore tax preparers who work as a seamless extension of your tax department. Our preparers are highly proficient in US, UK, Canadian, and Australian tax codes, handling corporate, partnership, and individual tax returns with maximum compliance and technical precision, letting you scale capacity instantly without local hiring bottlenecks. Our dedicated offshore tax preparers are trained to handle the heavy lifting of tax season, allowing your local senior CPAs to focus on high-level tax planning and client relationships. They take raw client data, organize messy source documents, and prepare comprehensive tax workpapers.',
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fa98?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Receipt',
    checklists: [
      {
        title: '📁 Complete Tax Compliance Prep',
        items: [
          'Form 1040/Individual Prep: Build comprehensive draft returns for individuals, including Schedule C/E filings.',
          'Form 1120/Corporate Filing: Gather lead schedules and prepare complex S-Corp and C-Corp tax returns.',
          'Form 1065/Partnership Allocations: Reconcile precise partner capital accounts and Schedule K-1 forms.',
          'Multistate Returns: Analyze nexus rules and prepare state-level economic nexus tax filings.'
        ]
      },
      {
        title: '🔧 Workpaper & System Operations',
        items: [
          'Book-to-Tax Adjustments: Prepare complete Schedule M-1 and M-3 balance reconciliations.',
          'Depreciation Computations: Calculate exact MACRS depreciation schedules and section 179 deductions.',
          'Source Document Organization: Triage and organize messy source documents (W-2, 1099, K-1) inside secure portals.',
          'Government Tax Notices: Draft clear, professional responses to state and federal tax authority inquiries.'
        ]
      }
    ],
    whyPartner: [
      'Expert Regulatory Alignment: Dedicated preparers trained on IRS, HMRC, and ATO tax rules and standards.',
      'Rapid Turnaround Times: High-volume preparation drafted and delivered within 24 to 48 hours.',
      'Flexible Scaling: Scale your tax preparation staff up during busy seasons and optimize down in off-peak months.'
    ],
    steps: [
      { title: 'Step 1: Access Provisioning', description: 'Establish secure credentials for your preferred cloud tax platform (UltraTax, Drake).' },
      { title: 'Step 2: Intake & Document Mapping', description: 'Our preparers ingest raw client files, organizing them into standard workpapers.' },
      { title: 'Step 3: Meticulous Drafting', description: 'Calculate book-to-tax reconciliations and input data into tax software.' },
      { title: 'Step 4: Quality Review & Handover', description: 'Verify diagnostics and hand over accurate draft returns to your onshore team.' }
    ],
    didYouKnow: 'We support all major tax systems—including UltraTax, Drake, Lacerte, CCH Axcess, and ProConnect—with multi-factor secure authentication protocols.',
    ctaText: 'Hire a Tax Preparer',
    faqs: [
      {
        question: "What tax software systems is your team trained in?",
        answer: "They are experts in UltraTax, Lacerte, Drake, CCH Axcess, ProConnect, and TaxSlayer."
      },
      {
        question: "Do they sign off on the tax returns?",
        answer: "No, our preparers handle data entry, workpaper prep, and draft return creation; your onshore CPAs review and sign off."
      },
      {
        question: "How do you handle client data security?",
        answer: "We operate in secure, paperless cloud environments with restricted local storage, thin clients, and strict NDAs."
      },
      {
        question: "What is the typical turnaround time per return?",
        answer: "Individual returns are drafted within 24-48 hours, and complex corporate returns within 3-5 business days."
      },
      {
        question: "Can they handle multi-state economic nexus returns?",
        answer: "Yes, they analyze multi-state sales and revenue thresholds to prepare all necessary state tax filings."
      },
      {
        question: "Do you offer off-season tax support?",
        answer: "Yes, our preparers assist with catch-up tax filings, back-year returns, and response drafts for tax notices year-round."
      }
    ]
  },
  {
    id: 'hire-tax-reviewer',
    category: 'offshore-team',
    title: 'Hire a Tax Reviewer',
    catchphrase: 'Onboard senior Enrolled Agents, CAs, or CPA-vetted reviewers to audit and sign off on tax returns.',
    description: 'As tax volumes grow, senior onshore CPAs and partners spend excessive time reviewing draft returns, creating massive bottlenecks that delay final filings and stall client growth. Finding local, senior tax reviewers with the required expertise to sign off on complex structures is highly difficult and incredibly costly. AUM Consultancy provides senior dedicated offshore tax reviewers, including highly experienced Enrolled Agents (EAs), Chartered Accountants, and tax experts. Our reviewers act as an elite quality control layer, auditing tax workpapers, verifying compliance with international tax laws, and signing off on pristine returns before final partner authorization. Our dedicated offshore tax reviewers have deep technical expertise across US, UK, and Australian tax structures, ensuring that every return prepared by junior staff is flawless and fully compliant.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'FileText',
    checklists: [
      {
        title: '🔎 Elite Quality Assurance Review',
        items: [
          'Detailed Audit Trail: Perform 3-way balance sheet checks to confirm all assets, liabilities, and equity match.',
          'Corporate & Partnership Audits: Verify multi-state tax returns, partner capital structures, and Schedule K-1s.',
          'IRS/HMRC Compliance Auditing: Audit draft returns against current federal tax regulations and schedules.',
          'Form 1040 Complexities: Review complex individual returns, including multi-state investments and foreign assets.'
        ]
      },
      {
        title: '📈 Performance Optimization',
        items: [
          'Resolve Software Diagnostics: Identify and clear diagnostic flags and software input discrepancies.',
          'Junior Staff Coaching: Post detailed, clear review notes to help prep staff improve data accuracy.',
          'Audit Risk Assessment: Evaluate return drafts to minimize IRS, HMRC, and ATO audit vulnerabilities.',
          'Draft Advisory Reports: Compile strategic tax projections and client advice summaries.'
        ]
      }
    ],
    whyPartner: [
      'Senior EA & Chartered Accountants: Hire experienced, high-caliber tax leaders with years of Western tax practice experience.',
      'Unblock Local Partners: Shift the tedious workpaper review cycle offshore, freeing up partners for high-fee client relations.',
      'CPA-Approved Precision: Ensure returns undergo strict dual-tier quality reviews to guarantee compliance and reduce audit risks.'
    ],
    steps: [
      { title: 'Step 1: System Integration', description: 'Provide reviewer-level credentials and connect tax prep platforms.' },
      { title: 'Step 2: Queue Setup', description: 'Establish structured review queues, clearing thresholds, and deadline prioritization.' },
      { title: 'Step 3: Meticulous Audit Review', description: 'Perform technical audits of returns, posting clear review notes and corrections.' },
      { title: 'Step 4: Final Partner Sign-off', description: 'Deliver flawless, signed-off draft files ready for partner submission.' }
    ],
    didYouKnow: 'Adding a senior offshore tax reviewer saves up to 50% of the review time for onshore partners, allowing them to focus entirely on firm scaling.',
    ctaText: 'Hire a Tax Reviewer',
    faqs: [
      {
        question: "Are your tax reviewers Enrolled Agents or CPAs?",
        answer: "Yes, we assign qualified Enrolled Agents (EAs), Chartered Accountants, and tax reviewers with deep Western tax expertise."
      },
      {
        question: "What complex tax structures can they review?",
        answer: "They review multi-state corporations, complex real estate partnerships, global multi-currency entities, and trusts."
      },
      {
        question: "How do they coordinate with our preparation team?",
        answer: "They review drafts, post clear review notes in your tax system, and guide preparers to clear any errors."
      },
      {
        question: "Can they draft client tax advisory letters?",
        answer: "Yes, they can compile detailed tax projection models and write comprehensive tax planning letters."
      },
      {
        question: "Do they have experience with foreign assets disclosure?",
        answer: "Yes, they are experts in international tax compliance, including FBAR, Form 5471, and Form 8938."
      },
      {
        question: "How quickly can they review a corporate return?",
        answer: "Complex corporate returns are reviewed and returned with detailed feedback within 24 to 48 hours."
      }
    ]
  },
  {
    id: 'hire-virtual-cfo',
    category: 'offshore-team',
    title: 'Hire a Virtual CFO',
    catchphrase: 'Secure dedicated high-level strategic advisors to engineer cash flow, budget structures, and growth.',
    description: 'Growing enterprises and forward-thinking accounting practices need strategic financial leadership to optimize cash flow, manage debt, and drive profitability, but hiring a full-time, local CFO is financially out of reach for many mid-market businesses. AUM Consultancy provides high-caliber dedicated Virtual CFOs who deliver elite financial planning, cash flow engineering, budgeting, and performance analytics fractionally or full-time. Our Virtual CFOs are senior Chartered Accountants and finance executives with extensive experience in international markets. They act as your strategic financial co-pilot, driving corporate growth, securing capital, and building comprehensive KPI dashboards without the executive payroll burden. Our Virtual CFO services go far beyond standard bookkeeping and financial reporting; they provide your business with the strategic guidance needed to navigate complex economic landscapes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Briefcase',
    checklists: [
      {
        title: '📈 High-Level Financial Advisory',
        items: [
          'Dynamic Cash Flow Forecasting: Design robust rolling cash flow forecasts to manage liquidity.',
          'Sensitivity Modeling: Map financial scenarios to evaluate capital expenditures and investments.',
          'M&A and Deal Support: Conduct thorough buy-side and sell-side due diligence and evaluations.',
          'Capital Sourcing Support: Build professional financial packages and debt models for financing.'
        ]
      },
      {
        title: '📊 Advanced Analytics & BI',
        items: [
          'Visual KPI Dashboards: Deploy dynamic performance dashboards using platforms like Power BI.',
          'Profitability Analysis: Perform in-depth cost reviews by customer, product, and territory.',
          'CPA Firm White-Label Advisory: Act as a high-value advisory arm for your CPA clients.',
          'Board-Ready Financial Reviews: Deliver comprehensive monthly performance packages.'
        ]
      }
    ],
    whyPartner: [
      'Enterprise Financial Leadership: Work with elite Chartered Accountants and former finance directors.',
      'Strategic Cost Efficiencies: Gain executive-level advisory at a fraction of the cost of a full-time local CFO.',
      'Data-Driven Decision Systems: Translate static books into visually engaging strategic plans.'
    ],
    steps: [
      { title: 'Step 1: Strategic Discovery', description: 'Review your current business goals, capital structure, and operational gaps.' },
      { title: 'Step 2: Platform Selection', description: 'Connect accounting systems with BI and planning tools (Fathom, Power BI).' },
      { title: 'Step 3: Roadmap Construction', description: 'Deliver dynamic cash models, rolling budgets, and interactive dashboards.' },
      { title: 'Step 4: Continuous Stewardship', description: 'Run monthly review calls and provide strategic financial advisory.' }
    ],
    didYouKnow: 'Implementing a Virtual CFO is shown to increase mid-market corporate margins by up to 15% through data-backed cost management.',
    ctaText: 'Hire a Virtual CFO',
    faqs: [
      {
        question: "What industries do your Virtual CFOs specialize in?",
        answer: "They specialize in healthcare, manufacturing, real estate, eCommerce, technology, and CPA firm white-label advisory."
      },
      {
        question: "What business intelligence tools do they utilize?",
        answer: "They are proficient in Power BI, Tableau, Fathom, Jirav, Syft, and Excel forecasting."
      },
      {
        question: "Can they help our business secure bank financing?",
        answer: "Yes, they compile pristine financial packages, debt service models, and strategic business plans that banks require."
      },
      {
        question: "How many hours a week can we secure a Virtual CFO for?",
        answer: "We offer highly flexible arrangements, ranging from fractional weekly support to dedicated full-time engagements."
      },
      {
        question: "Can they lead our in-house bookkeeping team?",
        answer: "Yes, they supervise your local or offshore bookkeeping staff, ensuring absolute data integrity."
      },
      {
        question: "How do they handle corporate tax planning?",
        answer: "They align your strategic corporate roadmap with optimal tax minimization structures across jurisdictions."
      }
    ]
  },
  {
    id: 'hire-account-supervisor',
    category: 'offshore-team',
    title: 'Hire an Account Supervisor',
    catchphrase: 'Onboard mid-level managers to supervise, audit, and quality-check your remote bookkeeping queues.',
    description: 'As your business scales, managing a growing team of bookkeepers and junior accountants becomes a major managerial burden that diverts valuable onshore partner hours. Local accounting supervisors expect premium salaries, and hiring them places a significant financial strain on corporate budgets. AUM Consultancy offers dedicated offshore Account Supervisors who assume full administrative and technical control over your remote bookkeeping and accounting operations. Our supervisors are experienced accounting professionals with extensive training in workflow optimization, multi-ledger audits, and localized reporting standards. They act as a critical bridge between your junior processors and onshore executives, ensuring that all ledgers are flawless, deadlines are strictly met, and your daily financial operations run with clockwork efficiency.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'UserCheck',
    checklists: [
      {
        title: '🛠️ Operational Workflow Management',
        items: [
          'Daily Queue Supervision: Manage daily tasks, assign bookkeeping loads, and resolve system issues.',
          'Workflow Optimization: Audit processes to find bottlenecks and optimize daily output.',
          'Technical SLA Compliance: Track processing turnaround times and ensure strict SLA adherence.',
          'Continuous Staff Training: Conduct regular training on software updates and localized tax laws.'
        ]
      },
      {
        title: '🔍 Rigorous Quality Controls',
        items: [
          'Dual-Signoff Ledger Audits: Audit all bookkeeping files to ensure zero errors reach your desk.',
          'SOP Compliance Reviews: Verify that all financial reconciliations strictly follow client SOPs.',
          'Sub-ledger Reconciliation Check: Review accounts payable, accounts receivable, and bank matchings.',
          'Month-End Close Preparation: Ensure close files are fully complete, audited, and ready.'
        ]
      }
    ],
    whyPartner: [
      'Strong Management Skills: Hire supervisors experienced in managing and scaling high-performing teams.',
      'Up to 60% Sourcing Savings: Save on local hiring costs while keeping complete control over operations.',
      'Seamless Operational Continuity: Ensure daily operations run consistently, even during peak seasons.'
    ],
    steps: [
      { title: 'Step 1: Role Configuration', description: 'Define supervisory requirements, reporting channels, and team size.' },
      { title: 'Step 2: Workflow Mapping', description: 'Connect the supervisor to your project tracking systems and active workflows.' },
      { title: 'Step 3: Pilot Supervision', description: 'Shadow the supervisor as they manage pilot bookkeeping queues to align standards.' },
      { title: 'Step 4: Full Queue Handover', description: 'The supervisor takes full ownership of managing and quality-checking your remote team.' }
    ],
    didYouKnow: 'A dedicated offshore Account Supervisor can successfully manage a team of 5 to 8 remote bookkeepers, maximizing your operational scale.',
    ctaText: 'Hire an Account Supervisor',
    faqs: [
      {
        question: "What is the primary role of an offshore Account Supervisor?",
        answer: "They manage, organize, and review the work of junior bookkeepers and preparers, ensuring all financial records are accurate and complete."
      },
      {
        question: "Do they have experience with Western reporting requirements?",
        answer: "Yes, our supervisors have extensive experience working with US, UK, Canadian, and Australian compliance frameworks."
      },
      {
        question: "What software are they proficient in?",
        answer: "They are certified in QuickBooks, Xero, NetSuite, Sage, and major workflow tracking tools like Asana and ClickUp."
      },
      {
        question: "How do they handle underperforming team members?",
        answer: "They run performance reviews, provide targeted software training, and implement clear corrective steps to resolve issues."
      },
      {
        question: "Can they participate in weekly partner meetings?",
        answer: "Yes, they can join your regular progress calls to present status reports, highlight milestones, and coordinate workflows."
      },
      {
        question: "What is the typical team size they supervise?",
        answer: "They comfortably supervise, audit, and quality-check teams ranging from 3 to 10 remote accounting professionals."
      }
    ]
  },
  {
    id: 'hire-audit-support',
    category: 'offshore-team',
    title: 'Hire an Audit Support Staff',
    catchphrase: 'Hire specialists to compile clean trial balances, audit schedules, and clear workpapers.',
    description: 'Audit preparation is one of the most resource-intensive and high-stress processes that accounting firms and businesses face every year. Onshore teams spend hundreds of hours gathering documents, preparing reconciliations, and chasing supporting files, which drives up audit costs and exhausts internal resources. AUM Consultancy provides dedicated offshore Audit Support Staff who specialize in the administrative and technical preparation required for audits. Our support staff are highly proficient in compiling clean trial balances, building structured audit workpapers, and preparing detailed lead schedules that external auditors require. They work diligently to ensure your records are pristine, compliant, and ready, reducing your audit timeline and external expenses dramatically.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'FileText',
    checklists: [
      {
        title: '📋 Comprehensive Audit Prep',
        items: [
          'Detailed Lead Schedules: Compile accurate lead schedules and support files for all balance sheet accounts.',
          'Subledger to GL Balancing: Reconcile accounts receivable, accounts payable, and inventory accounts.',
          'Trial Balance Structuring: Prepare extended trial balances with accurate adjusting journal entries.',
          'Process Documentation: Assemble clear, detailed workflow descriptions and internal control reviews.'
        ]
      },
      {
        title: '📁 Document Triaging & Support',
        items: [
          'Auditor Inquiry Support: Gather supporting invoices, bank records, and NDAs requested by auditors.',
          'Fixed Assets Auditing: Reconcile fixed asset registers, verifying depreciation entries and asset disposals.',
          'Verify Accruals & Prepayments: Verify accruals, prepayments, and deferred revenue calculations.',
          'Audit Portal Management: Organize and upload requested files to secure auditor portals.'
        ]
      }
    ],
    whyPartner: [
      'Certified Audit Specialists: Onboard specialists with deep training in international accounting standards.',
      'Drastically Lower Audit Costs: Reduce audit prep time by up to 50%, saving on expensive auditor fees.',
      'Stress-Free Compliance: Ensure all files are pristine, organized, and delivered well before deadlines.'
    ],
    steps: [
      { title: 'Step 1: Scope Mapping', description: 'Define audit timelines, review auditor requirements, and establish secure access.' },
      { title: 'Step 2: Trial Balance Review', description: 'Analyze the general ledger, identify missing files, and reconcile outstanding records.' },
      { title: 'Step 3: Workpaper Construction', description: 'Build structured lead schedules and compile all required supporting documentation.' },
      { title: 'Step 4: Auditor Collaboration', description: 'Help your team address auditor queries and upload files to secure portals.' }
    ],
    didYouKnow: 'Over 40% of audit delays are caused by messy, incomplete workpapers. Structured offshore audit support resolves this bottleneck completely.',
    ctaText: 'Hire an Audit Support Staff',
    faqs: [
      {
        question: "Do your audit support staff perform the actual external audit?",
        answer: "No, they prepare all the necessary workpapers, lead schedules, and reconciliations to help your external auditors complete their work fast."
      },
      {
        question: "What international accounting standards are they trained in?",
        answer: "They are highly proficient in US GAAP, IFRS, HMRC regulations, and ATO accounting standards."
      },
      {
        question: "How do they organize supporting documents for auditors?",
        answer: "They build clear, hyperlinked index files that match balance sheet items with supporting invoices, receipts, and bank statements."
      },
      {
        question: "Can they work within our auditor's secure portals?",
        answer: "Yes, they can securely access and upload files to your auditor's platform under your team's supervision."
      },
      {
        question: "What is the typical turnaround time for audit prep?",
        answer: "We can compile comprehensive audit-ready workpapers for standard mid-market entities within 5 to 7 business days."
      },
      {
        question: "How do you ensure the confidentiality of our financial data?",
        answer: "We utilize biometric-secured physical workstations, thin-client systems with blocked USB ports, and strict NDAs."
      }
    ]
  },
  {
    id: 'hire-payroll-manager',
    category: 'offshore-team',
    title: 'Hire a Payroll Manager',
    catchphrase: 'Onboard payroll specialists to manage employee files, withholding calculations, and global payroll processing.',
    description: 'Managing payroll processing, tax withholdings, and employee benefits compliance is a complex operational task where even minor errors can lead to employee dissatisfaction and severe regulatory penalties. Finding experienced local payroll specialists is highly difficult, and keeping them places a significant administrative burden on HR departments. AUM Consultancy provides dedicated offshore Payroll Managers who assume full responsibility for running your payroll systems with absolute precision. Our payroll managers are highly skilled in international payroll compliance, managing employee benefits, and tracking tax withholdings across multiple jurisdictions. They ensure that your workforce is paid accurately and on time, while keeping your company perfectly compliant with all local tax regulations.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Users',
    checklists: [
      {
        title: '📋 End-to-End Payroll Processing',
        items: [
          'Run Scheduled Payroll: Calculate and run scheduled payroll runs for hourly, salaried, and contract teams.',
          'Precise Deduction Management: Calculate withholdings, benefits, retirement plans, and court-ordered deductions.',
          'Comprehensive HR Ledger Support: Maintain accurate employee files, pay rates, and direct deposit information.',
          'Platform Reconciliations: Reconcile gross-to-net payroll records against actual bank account clearings.'
        ]
      },
      {
        title: '🔒 Tax Filing & Compliance Support',
        items: [
          'Federal and State Filings: Compile draft tax forms (W-2, 941, 1099, P60, STP) for year-end submission.',
          'Accruals and Ledger Tracking: Track accrued vacation, sick leave, and paid-time-off balances.',
          'Payroll Software Maintenance: Keep ADP, Gusto, Paychex, or Xero systems synchronized and accurate.',
          'Government Filing Updates: Monitor changes in payroll tax laws and benefit structures to ensure compliance.'
        ]
      }
    ],
    whyPartner: [
      'Certified System Experts: Highly proficient in Gusto, ADP, Paychex, Xero Payroll, and Sage Payroll.',
      'Up to 60% Sourcing Reductions: Eliminate physical office leases, local payroll taxes, and health insurance overhead.',
      'Zero Disruption Continuity: Keep payroll running consistently, with built-in backup managers on hand.'
    ],
    steps: [
      { title: 'Step 1: System Integration', description: 'Provide secure access to your preferred cloud payroll system (Gusto, ADP).' },
      { title: 'Step 2: Database Alignment', description: 'Review employee payroll records, pay rates, and tax withholding structures.' },
      { title: 'Step 3: Pilot Processing', description: 'Process initial payroll runs under supervisor review to align standards.' },
      { title: 'Step 4: Dedicated Operations', description: 'The payroll manager runs your global payroll processing with absolute precision.' }
    ],
    didYouKnow: 'Over 33% of businesses face tax penalties due to payroll filing errors. A dedicated offshore payroll manager ensures your tax filings are consistently compliant.',
    ctaText: 'Hire a Payroll Manager',
    faqs: [
      {
        question: "What payroll software systems is your team trained in?",
        answer: "They are experts in Gusto, ADP, Paychex, QuickBooks Payroll, Xero Payroll, and BrightPay."
      },
      {
        question: "How do you handle payroll tax compliance in different countries?",
        answer: "Our managers are thoroughly trained in country-specific tax withholding rules, including US IRS, UK HMRC, and Australian ATO systems."
      },
      {
        question: "Can they manage payroll for contract workers?",
        answer: "Yes, they manage onboarding, hours tracking, and payment processing for independent contractors and freelancers."
      },
      {
        question: "How is employee payroll data kept secure?",
        answer: "We utilize multi-factor secure cloud environments, thin-client systems with blocked local storage, and strict NDAs."
      },
      {
        question: "What is the typical timeline for processing payroll?",
        answer: "We prepare and deliver completed payroll runs for review 48 hours before your funding deadline."
      },
      {
        question: "Can they help with year-end payroll reconciliations?",
        answer: "Yes, they manage comprehensive year-end wage reconciliations and prepare drafts of W-2, 1099, and P60 forms."
      }
    ]
  },
  {
    id: 'hire-billing-executive',
    category: 'offshore-team',
    title: 'Hire a Billing Executive',
    catchphrase: 'Onboard billing specialists to manage high-frequency billing, invoicing, and contract tracking.',
    description: 'Invoicing errors, delayed billing cycles, and uncoordinated customer contracts can severely impact your business cash flow and lead to customer frustration. Finding local billing staff who can maintain the required attention to detail is highly difficult and increasingly expensive. AUM Consultancy provides dedicated offshore Billing Executives who manage your customer billing on autopilot. Our billing executives are highly proficient in major invoicing software, subscription management tools, and payment gateways. They ensure that customer invoices are generated accurately and on time, contract renewals are tracked meticulously, and invoice queries are resolved quickly, protecting your business revenue and vendor relationships.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'Calculator',
    checklists: [
      {
        title: '📋 Precision Customer Invoicing',
        items: [
          'Invoice Generation: Compile billable hours, time logs, and shipping files to generate customer invoices.',
          'Verify Invoicing Details: Double-check customer contracts, tax rates, and discount codes to ensure accuracy.',
          'Subscription Billing Management: Manage monthly subscription billing and recurring invoice runs.',
          'Invoice Delivery Coordination: Send invoices directly via accounting systems or custom portals.'
        ]
      },
      {
        title: '🔧 Billing Support & Database Management',
        items: [
          'Address Invoicing Queries: Resolve customer invoicing discrepancies and issue credit notes.',
          'Contract Renewal Audits: Track customer contract terms, rate revisions, and renewal timelines.',
          'Invoicing Database Upkeep: Keep customer records, tax numbers, and payment details synchronized.',
          'Payment Gateway Matching: Match customer receipts from payment gateways (Stripe, PayPal) to invoices.'
        ]
      }
    ],
    whyPartner: [
      'Invoicing System Specialists: Proficient in QuickBooks, Xero, NetSuite, Zoho Invoice, and Chargebee.',
      'Up to 60% Billing Savings: Eliminate local hiring costs while keeping complete control over invoicing.',
      'Accelerated Billing Cycles: Ensure customer invoices are drafted and delivered immediately to speed up collection.'
    ],
    steps: [
      { title: 'Step 1: System Integration', description: 'Setup secure access to your accounting systems and contract portals.' },
      { title: 'Step 2: Invoicing Alignment', description: 'Review your internal billing rules, tax rates, contract terms, and templates.' },
      { title: 'Step 3: Meticulous Billing Runs', description: 'Generate, verify, and deliver daily, weekly, or monthly customer invoices.' },
      { title: 'Step 4: Continuous Support', description: 'Resolve invoicing queries, update customer accounts, and track contract renewals.' }
    ],
    didYouKnow: 'Over 25% of commercial invoices contain minor billing errors, which delays payment. Meticulous billing management keeps your receivables pipeline moving fast.',
    ctaText: 'Hire a Billing Executive',
    faqs: [
      {
        question: "What invoicing software do your Billing Executives support?",
        answer: "They are proficient in QuickBooks, Xero, NetSuite, Zoho Books, FreshBooks, Chargebee, and Stripe Invoicing."
      },
      {
        question: "How do they calculate billable hours and expenses?",
        answer: "They gather employee timesheets, project logs, and expense receipts to build accurate customer invoices."
      },
      {
        question: "Can they handle complex recurring subscription billing?",
        answer: "Yes, they manage subscription tiers, billing cycles, prorated calculations, and recurring payment runs."
      },
      {
        question: "How do they handle customer invoicing queries?",
        answer: "They resolve customer questions, verify details with your sales managers, and draft credit notes if needed."
      },
      {
        question: "Do you offer multi-lingual billing support?",
        answer: "Our billing executives are highly fluent in English, ensuring professional customer communication."
      },
      {
        question: "How quickly can we start processing billing?",
        answer: "We can onboarding a dedicated Billing Executive and begin processing invoices within 3 to 5 business days."
      }
    ]
  },
  {
    id: 'hire-ar-specialist',
    category: 'offshore-team',
    title: 'Hire an Accounts Receivable Specialist',
    catchphrase: 'Hire collections experts to lower Days Sales Outstanding (DSO) and accelerate cash recovery.',
    description: 'Unpaid customer invoices and growing receivables balances place a major strain on company cash reserves, yet chasing payments consumes valuable staff hours and can impact client relationships. Local collections staff can be expensive, with high payroll costs and competitive markets. AUM Consultancy provides dedicated offshore Accounts Receivable (A/R) Specialists who specialize in professional payment collection and ledger management. Our A/R specialists are highly experienced in automated invoice tracking, customer outreach, payment gateway reconciliations, and dispute resolution. They work exclusively for your firm, ensuring your receivables pipeline remains clean, active, and highly optimized, while keeping your customer relations professional and strong.',
    image: 'https://images.unsplash.com/photo-1554224155-6b99479a49d2?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'TrendingUp',
    checklists: [
      {
        title: '📋 Professional Payment Collection',
        items: [
          'Aged Debtors Review: Monitor aged debtor reports regularly to identify outstanding customer balances.',
          'Friendly Payment Reminders: Coordinate professional follow-up emails and reminder calls to customers.',
          'Dispute and Query Resolution: Route invoice queries to managers and resolve payment disputes quickly.',
          'Structure Payment Agreements: Coordinate structured payment agreements for clients under cash constraints.'
        ]
      },
      {
        title: '🔑 Cash Reconciliations & Ledger Management',
        items: [
          'Customer Ledger Posting: Reconcile bank deposits, credit card payments, and wire clearings.',
          'Accounts Receivable Matching: Match incoming customer payments directly to outstanding invoices.',
          'Customer Account Reconciliation: Reconcile customer balances and issue accurate account summaries.',
          'Credit Policy Enforcement: Track credit limits and flag delinquent customer accounts for management.'
        ]
      }
    ],
    whyPartner: [
      'Experienced Collection Experts: Onboard specialists with extensive experience in professional dispute resolution.',
      'Up to 60% Sourcing Reductions: Eliminate local recruitment fees, office space, and healthcare overhead.',
      'Shorter Days Sales Outstanding: Meticulous receivables tracking lowers DSO and accelerates cash recovery.'
    ],
    steps: [
      { title: 'Step 1: System Integration', description: 'Setup secure access to your billing and collection systems.' },
      { title: 'Step 2: Collections Playbook', description: 'Review and align on collection rules, scripts, schedules, and approval limits.' },
      { title: 'Step 3: Meticulous Outreach', description: 'Generate aged summaries, send payment reminders, and reconcile collections.' },
      { title: 'Step 4: Continuous Recovery', description: 'Resolve payment disputes, adjust customer limits, and accelerate cash inflows.' }
    ],
    didYouKnow: 'Implementing automated, dedicated receivables tracking reduces average customer payment times (DSO) by up to 20%, keeping your cash flow liquid.',
    ctaText: 'Hire an AR Specialist',
    faqs: [
      {
        question: "What collections software systems is your team trained in?",
        answer: "They are proficient in QuickBooks, Xero, NetSuite, Zoho, and advanced A/R automation tools like Chaser or YayPay."
      },
      {
        question: "How do they handle sensitive customer relationship management?",
        answer: "They follow your exact company guidelines and script playbooks, keeping all communications professional and courteous."
      },
      {
        question: "Can they negotiate customer payment terms?",
        answer: "They can draft and present structured payment agreements to your finance manager for final approval."
      },
      {
        question: "How do they reconcile bank and gateway collections?",
        answer: "They match incoming cash from Stripe, PayPal, and bank wire transfers directly to individual outstanding customer invoices."
      },
      {
        question: "What is the typical DSO reduction we can expect?",
        answer: "Firms typically see a 15% to 25% reduction in Days Sales Outstanding (DSO) within 90 days of onboarding a dedicated specialist."
      },
      {
        question: "Can they work in our time zone?",
        answer: "Yes, we arrange flexible schedules to ensure they coordinate customer outreach and reconciliations during your business day."
      }
    ]
  },
  {
    id: 'hire-executive-assistant',
    category: 'offshore-team',
    title: 'Hire an Executive Assistant',
    catchphrase: 'Delegate administrative backlog, inbox/calendar triage, CRM, and document chasing to our VAs.',
    description: 'Corporate executive officers, HR managers, and department heads spend excessive time managing administrative backlogs, coordinating calendars, and chasing document signatures. This administrative overhead diverts attention from high-value strategic planning and growth. Hiring experienced local executive assistants is highly expensive, with intense competition and recruitment costs. AUM Consultancy provides dedicated offshore Executive Assistants who assume full control over your daily administrative workflows. Our assistants are highly professional, English-fluent administrative specialists who specialize in inbox management, calendar coordination, client document chasing, CRM data entry, and meeting scheduling. They work exclusively for your business, ensuring your administrative processes remain flawless and organized, letting you focus on scaling your company.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500',
    iconName: 'UserCheck',
    checklists: [
      {
        title: '📋 Executive Administration Support',
        items: [
          'Inbox Management & Triage: Sort and filter incoming corporate emails, drafting clear, professional responses.',
          'Calendar and Meetings: Coordinate multi-timezone calendars, book meetings, and send invitations.',
          'Client Document Chasing: Follow up on client signatures, contracts, and supporting invoices.',
          'Meeting Minutes & Tasks: Attend video calls to record minutes and distribute action items.'
        ]
      },
      {
        title: '🔧 Database & Operational Upkeep',
        items: [
          'CRM System Updates: Input client data, track deal pipelines, and update contact files.',
          'Business Expense Tracking: Gather executive travel receipts, compile expenses, and log reports.',
          'Market Research Reports: Conduct basic online research and compile structured summaries.',
          'Department Administrative Support: Manage administrative backlog for HR, sales, or operations managers.'
        ]
      }
    ],
    whyPartner: [
      'English-Fluent Professionals: Onboard professional, English-fluent executive assistants with years of corporate experience.',
      'Up to 60% Sourcing Savings: Eliminate physical office leases, local payroll taxes, and health insurance overhead.',
      'Unmatched Administrative Scale: Delegate administrative bottlenecks and focus 100% on high-value business expansion.'
    ],
    steps: [
      { title: 'Step 1: Role Mapping', description: 'Define admin support needs, reporting lines, and platform access.' },
      { title: 'Step 2: Secure Provisioning', description: 'Configure system logins and setup multi-factor secure cloud workspaces.' },
      { title: 'Step 3: Daily Shadowing', description: 'Our assistant shadows your workflow, building clear SOP checklists.' },
      { title: 'Step 4: Full Support Launch', description: 'The assistant manages your inbox, calendar, and administrative backlog.' }
    ],
    didYouKnow: 'Delegating basic administrative tasks to an executive assistant saves busy managers up to 12 hours a week, freeing up time for high-value growth.',
    ctaText: 'Hire an Executive Assistant',
    faqs: [
      {
        question: "What business platforms are your Executive Assistants trained in?",
        answer: "They are highly proficient in Microsoft 365, Google Workspace, Slack, Zoom, Asana, ClickUp, HubSpot, and Salesforce."
      },
      {
        question: "How do they handle sensitive corporate data?",
        answer: "We enforce strict NDAs and operate within secure cloud environments with restricted local storage and thin clients."
      },
      {
        question: "Can they participate in customer phone outreach?",
        answer: "Yes, they can make professional outbound calls to coordinate schedules or follow up on document signatures."
      },
      {
        question: "What is their level of English proficiency?",
        answer: "All our assistants undergo rigorous testing and are highly fluent in English, both verbal and written."
      },
      {
        question: "Can they manage executive business travel?",
        answer: "Yes, they research flights, coordinate hotel stays, draft itineraries, and compile travel expense files."
      },
      {
        question: "Do you offer part-time assistant support?",
        answer: "Yes, we offer flexible engagement models, including part-time support and dedicated full-time arrangements."
      }
    ]
  }
];
