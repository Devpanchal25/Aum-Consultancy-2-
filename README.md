# 🏢 AUM Consultancy — Strategic Offshore & Advisory Platform

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Proprietary-0f2942?style=for-the-badge)](#license)

A state-of-the-art, high-performance web platform built for **AUM Consultancy** — a premier global offshore accounting, taxation compliance, audit assurance, and financial BPO advisory firm catering to CPA practices and growing businesses across the United States, United Kingdom, Canada, and Australia.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Data Architecture](#-data-architecture)
- [Security & Performance](#-security--performance)
- [Deployment Guide](#-deployment-guide)
- [License](#-license)

---

## 🌟 Overview

The AUM Consultancy web platform is engineered to deliver a seamless, enterprise-grade digital experience for corporate clients, accounting firms, and partners. It features deep-linking service matrices, interactive booking calendars, whitelabel CPA workflow breakdowns, live security and compliance certifications, and mobile-optimized inquiry channels.

### Core Service Verticals:
- **Full-Cycle Accounting & Bookkeeping**: General ledger maintenance, accounts payable/receivable, multi-entity consolidations, and daily bank reconciliations.
- **Cross-Border Taxation**: US Federal & State filings (Forms 1040, 1065, 1120, 1041), UK HMRC self-assessments & corporation tax, Canada T1/T2/T3, and Australian tax structures.
- **Audit & Assurance Support**: Workpaper preparation, internal control assessments, analytical review procedures, and compliance testing.
- **Virtual CFO & Advisory**: Cash flow forecasting, financial modeling, KPI dashboarding, and multi-state economic nexus evaluations.
- **Dedicated Offshore Pods**: Scalable, dedicated Full-Time Equivalent (FTE) accounting teams supervised by senior Chartered Accountants.

---

## ✨ Key Features

- **⚡ Lightning-Fast Performance**: Built on Vite 6 and React 19 for instant compilation, sub-second HMR, and ultra-fast page transitions.
- **🎨 Bespoke Corporate Design System**: Tailored light-themed corporate aesthetic with fine-tuned micro-interactions, smooth gradients, and balanced typography (`Playfair Display`, `Libre Franklin`, and `Inter`).
- **📱 Fully Responsive**: Pixel-perfect layout across mobile devices, tablets, laptops, and ultra-wide desktop monitors.
- **📅 Interactive Consultation Booking Modal**: 3-step scheduling engine with timezone conversion, calendar picker, time-slot selection, and Web3Forms email delivery.
- **🛡️ Multi-Layer Security**: Strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), Anti-bot honeypot traps, and input character limits.
- **🚀 Bundle Splitting**: Optimized vendor chunk separation for React, Motion, Lucide icons, and core routing logic.
- **♿ Accessibility Compliant (WCAG 2.2 AA)**: Semantic HTML landmarks, aria-expanded mobile controls, high contrast ratios, and `prefers-reduced-motion` fallbacks.
- **🔍 SEO & Social Sharing**: Structured schema.org metadata, dynamic page titles, canonical URL normalization, sitemap XML, and robots directives.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Declarative, component-driven user interface |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Strict static typing and enhanced developer ergonomics |
| **Tooling & Bundler** | [Vite 6](https://vitejs.dev/) | Ultra-fast native ESM dev server and Rollup bundler |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling engine |
| **Routing** | [React Router v7](https://reactrouter.com/) | Client-side declarative routing and SPA navigation |
| **Animations** | [Motion (Framer)](https://motion.dev/) | Smooth layout transitions and interactive animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern, lightweight vector icon suite |
| **Form Delivery** | [Web3Forms API](https://web3forms.com/) | Secure, serverless form processing and email notifications |

---

## 📂 Project Architecture

```text
aum-consultancy/
├── public/                     # Static production assets
│   ├── images/                 # Optimized brand graphics, hero images & icons
│   ├── robots.txt              # Search engine crawling rules
│   └── sitemap.xml             # Canonical site routes for search indexers
├── src/
│   ├── components/             # Reusable modular UI components
│   │   ├── BackToTop.tsx       # Floating scroll-to-top button
│   │   ├── BookConsultationModal.tsx # Multi-step booking engine
│   │   ├── DataSecurityPolicyModal.tsx # Security & compliance modal
│   │   ├── Footer.tsx          # Comprehensive corporate footer
│   │   ├── Logo.tsx            # SVG & typography responsive logo
│   │   ├── Navbar.tsx          # Sticky navigation with dropdown menus & mobile drawer
│   │   ├── NewsletterModal.tsx # Quick subscription popup
│   │   ├── SafeImage.tsx       # Image wrapper with graceful fallbacks
│   │   ├── SoftwareRibbon.tsx  # Infinite scrolling software integration badges
│   │   └── WhatsAppButton.tsx  # Direct WhatsApp corporate inquiry widget
│   ├── views/                  # Primary page route components
│   │   ├── AboutView.tsx       # Firm background, leadership, and operational model
│   │   ├── BlogView.tsx        # Industry insights and publications
│   │   ├── ContactView.tsx     # Full contact page with inquiry form & bookkeeping FAQs
│   │   ├── FaqView.tsx         # Comprehensive searchable/categorized FAQ hub
│   │   ├── HomeView.tsx        # Main landing page with interactive value props
│   │   ├── IndustriesView.tsx  # Specialized industry sector solutions
│   │   ├── NewslettersView.tsx # Technical taxation digest archives
│   │   ├── NotFoundView.tsx    # Branded 404 error page
│   │   ├── PrivacyPolicyView.tsx # Corporate privacy standards & GDPR notice
│   │   ├── ResourcesView.tsx   # Whitepapers, compliance guides & calculators
│   │   ├── SecurityView.tsx    # SOC2, ISO 27001, biometric & network protocol details
│   │   ├── ServicesView.tsx    # Deep interactive service explorer (19+ sub-services)
│   │   └── TermsConditionsView.tsx # Terms of service & service agreements
│   ├── data.ts                 # Navigation schema, company metrics & general content
│   ├── offshoreServicesData.ts # Dedicated offshore staffing pods & pricing models
│   ├── servicesData.ts         # Comprehensive 19+ sub-services content catalog
│   ├── types.ts                # TypeScript interface declarations
│   ├── App.tsx                 # Route coordinator & layout scaffold
│   ├── index.css               # Global theme tokens, typography & CSS variables
│   ├── main.tsx                # Application root mounting entry point
│   └── vite-env.d.ts           # Vite client environment type definitions
├── .env.example                # Template for required environment variables
├── package.json                # Dependencies, project metadata & scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vercel.json                 # Vercel deployment routes, cache policies & security headers
└── vite.config.ts              # Vite plugins, path aliases & code-splitting configuration
```

---

## 🔐 Environment Variables

The application relies on environment variables for form submissions and base domain configuration.

Create a `.env` file in the root directory (based on `.env.example`):

```bash
cp .env.example .env
```

| Variable | Required | Description |
| :--- | :--- | :--- |
| `VITE_WEB3FORMS_ACCESS_KEY` | **Yes** | Web3Forms Public Access Key to deliver contact inquiries and strategy bookings to your corporate email. |
| `APP_URL` | No | Public production domain URL (defaults to `https://www.aumstrategist.com/`). |

> **Note:** `.env` files are ignored by git to protect private keys. When deploying to production (such as on Vercel), add `VITE_WEB3FORMS_ACCESS_KEY` in your hosting dashboard's Environment Variables panel.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Devpanchal25/aum-consultancy.git
   cd aum-consultancy
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Ensure your `.env` file exists with your `VITE_WEB3FORMS_ACCESS_KEY`.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local development server at `http://localhost:3000` with instant HMR. |
| `npm run build` | Validates TypeScript and compiles an optimized production bundle into `dist/`. |
| `npm run preview` | Locally serves the compiled production build from `dist/` for pre-release testing. |
| `npm run lint` | Runs strict TypeScript type-checking without emitting files (`tsc --noEmit`). |
| `npm run clean` | Removes compiled `dist/` directory and temporary build caches. |

---

## 📊 Data Architecture

All business-critical content is cleanly separated from UI rendering components and managed through strongly typed configuration files:

- **`src/servicesData.ts`**: The master catalog for all 19+ sub-services across Accounting, Tax, Audit, and Advisory. Includes client deliverables, country-specific compliance checklists (US, UK, Canada, Australia), and software pairings.
- **`src/offshoreServicesData.ts`**: Dedicated staffing models, pod structures, seniority breakdowns (Staff Accountant vs. Senior CA), and workflow diagrams.
- **`src/data.ts`**: Brand metadata, software ribbon entries (QuickBooks, Xero, Sage, NetSuite, etc.), customer FAQs, and primary navigation hierarchies.

---

## 🛡️ Security & Performance

### Security Hardening:
- **Zero Hardcoded Secrets**: Access keys are injected via environment configurations.
- **Bot Mitigation**: Contact and booking forms utilize hidden honeypot fields (`_gotcha`) that silently drop automated submissions.
- **Vercel Security Headers (`vercel.json`)**:
  - `Strict-Transport-Security`: Enforces 2-year HSTS with subdomains and preload.
  - `Content-Security-Policy`: Tightly restricted script, frame, and connect origins.
  - `X-Frame-Options: DENY`: Prevents clickjacking attacks.
  - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing.
  - `Cross-Origin-Opener-Policy: same-origin`: Protects against cross-origin data leaks.

### Performance Optimizations:
- **Vendor Code-Splitting**: Separate chunks for `vendor-react`, `vendor-motion`, and `vendor-icons` to maximize browser caching.
- **Static Asset Caching**: 1-year immutable caching for `/assets/*` and 30-day caching for `/images/*`.
- **Accessibility & Motion**: Automatic reduction of motion animations when `prefers-reduced-motion` is active.

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)

1. Import your GitHub repository into **[Vercel](https://vercel.com/)**.
2. Framework Preset: **Vite** (detected automatically).
3. Build & Output Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables**:
   - Add `VITE_WEB3FORMS_ACCESS_KEY` under **Project Settings → Environment Variables** (set for Production, Preview, and Development).
5. Click **Deploy**.

All routing redirects and security headers will automatically be picked up from [vercel.json](file:///c:/Users/Dev/OneDrive/Documents/GitHub/aum-consultancy/vercel.json).

---

## 📄 License

This codebase and brand assets are **Proprietary & Confidential**.  
© 2026 **AUM Consultancy**. All rights reserved. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.
