# 🏢 Aum Consultancy — Official Web Platform

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-navy?style=for-the-badge)](#license)

A state-of-the-art, high-performance web platform for **Aum Consultancy**, a premier global offshore accounting, taxation, audit assurance, and financial BPO firm catering to clients across the United States, United Kingdom, Canada, and Australia.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Architecture](#-project-architecture)
- [Data Management](#-data-management)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🌟 Overview

The Aum Consultancy platform is designed to showcase enterprise-grade financial services, offshore staffing models, and multi-jurisdictional compliance solutions. Built with standard-setting web practices, the application features an interactive service explorer, dedicated staffing calculators, whitelabel CPA workflows, and seamless booking modals.

### Core Service Offerings Covered:
- **Accounting & Bookkeeping**: Full-cycle GL, payroll management, multi-entity consolidation, and real-time ledger reconciliation.
- **Tax Compliance & Filing**: US IRS Form 1041/1040/1120/1065, UK HMRC Trust & Estate Tax, Canada T3/T1/T2 returns, and Australia Section 99/99A fiduciary structures.
- **Audit & Assurance Support**: Independent audit preparation, workpaper assembly, internal control auditing, and fraud risk mitigation.
- **Virtual CFO & Advisory**: Strategic cash flow modeling, budgeting, multi-state economic nexus mapping, and corporate advisory.
- **Build Your Offshore Team**: On-demand FTE staffing for CPA firms, accounting practices, and growing mid-market enterprises.

---

## ✨ Key Features

- **⚡ Lightning-Fast Performance**: Powered by Vite 6 and React 19 for instant page loads and seamless view transitions.
- **🎨 Modern Aesthetic Design System**: Tailored light-themed corporate aesthetic with sleek micro-interactions, responsive flex/grid layouts, and clean typography.
- **📱 Fully Responsive**: Flawless user experience across mobile, tablet, desktop, and ultra-wide displays.
- **🔍 Deep Interactive Service Views**: Dynamic routing and deep-linking into 19+ specialized sub-services with automated smooth scrolling.
- **💬 Conversion-Focused Modals**: Integrated interactive modals for booking consultations, requesting custom quotes, and downloading security policies.
- **🛡️ Security & Compliance Hub**: Comprehensive data security showcase detailing SOC2 compliance, 256-bit encryption, dedicated VPNs, and ISO protocols.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library for component-based rendering |
| **[TypeScript 5.8](https://www.typescriptlang.org/)** | Type safety, enhanced IntelliSense, and maintainability |
| **[Vite 6](https://vitejs.dev/)** | Next-generation frontend build tool and dev server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first CSS framework with custom design tokens |
| **[React Router v7](https://reactrouter.com/)** | Client-side declarative navigation and route management |
| **[Motion (Framer)](https://motion.dev/)** | Production-ready motion and layout animations |
| **[Lucide React](https://lucide.dev/)** | Clean, modern vector icon suite |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jay112212/aum-consultancy.git
   cd aum-consultancy
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local dev server on port `3000` with hot module replacement (HMR). |
| `npm run build` | Compiles and optimizes the project for production inside the `dist/` directory. |
| `npm run preview` | Locally previews the production build output from `dist/`. |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) to ensure zero type errors. |
| `npm run clean` | Cleans temporary build artifacts and output directories. |

---

## 📂 Project Architecture

```
aum-consultancy/
├── public/                  # Static web assets (logos, favicon, media)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── BookConsultationModal.tsx
│   │   ├── CustomQuoteModal.tsx
│   │   ├── DataSecurityPolicyModal.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── SafeImage.tsx
│   │   └── SoftwareRibbon.tsx
│   ├── views/               # Main page view components
│   │   ├── AboutView.tsx
│   │   ├── BlogView.tsx
│   │   ├── ContactView.tsx
│   │   ├── FaqView.tsx
│   │   ├── HomeView.tsx
│   │   ├── IndustriesView.tsx
│   │   ├── NewslettersView.tsx
│   │   ├── NotFoundView.tsx
│   │   ├── ResourcesView.tsx
│   │   ├── SecurityView.tsx
│   │   └── ServicesView.tsx
│   ├── data.ts              # Primary categories & global data schemas
│   ├── servicesData.ts      # Comprehensive sub-services content matrix
│   ├── types.ts             # TypeScript interfaces and data models
│   ├── App.tsx              # App layout, header/footer shell & router
│   ├── index.css            # Global CSS, font imports & Tailwind theme
│   └── main.tsx             # React DOM root entry point
├── index.html               # Main HTML document template
├── package.json             # NPM dependencies and script definitions
├── tsconfig.json            # TypeScript compiler configuration
└── vite.config.ts           # Vite server & bundler configuration
```

---

## 📊 Data Management

All content rendered across the service pages, sub-services, checklists, and advisory sections is centrally managed via structured TypeScript models:

- **`src/servicesData.ts`**: Contains structured information for all 19+ specialized services (catchphrases, structured checklists, forms mapping, and why-partner highlights).
- **`src/data.ts`**: Manages primary service categories, navigation items, software ribbon integrations, and company metadata.

To add or modify service offerings, simply update the records in `src/servicesData.ts`.

---

## 🌐 Deployment

This application produces a static SPA bundle upon running `npm run build`. It can be instantly deployed to any modern cloud hosting platform:

### Deploying to Vercel / Netlify

1. Connect your GitHub repository to **Vercel** or **Netlify**.
2. Set the build parameters:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Ensure single-page app (SPA) rewrite rules are active (redirect all paths to `index.html`).

---

## 📄 License

This repository and its contents are **Proprietary and Confidential**. All rights reserved by **Aum Consultancy**. Unauthorized copying, distribution, or commercial use is strictly prohibited.
