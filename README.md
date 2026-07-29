# AUM Consultancy Website

A modern corporate services website built with React, Vite, TypeScript, and Tailwind CSS. This project delivers a polished consulting services site for AUM Consultancy, including accounting, tax, audit, payroll, and advisory service sections.

## Key Features

- React + TypeScript frontend
- Vite-powered development and build system
- Tailwind CSS utility styling
- Lucide icon library for UI visuals
- Responsive service pages and modular view components

## Installation

**Prerequisites:** Node.js 18+ recommended

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (default is `http://localhost:3000`).

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/`
  - `App.tsx` - root application layout and routing
  - `main.tsx` - app entry point
  - `views/` - page views for services, home, about, contact, privacy, and more
  - `components/` - reusable UI components such as navbar, footer, modals, and buttons
  - `servicesData.ts` - service content and structured page data
  - `types.ts` - shared TypeScript data models
  - `index.css` - global styles and Tailwind imports

- `public/` - static assets and metadata
- `package.json` - scripts and dependencies
- `vite.config.ts` - Vite configuration

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build the site for production
- `npm run preview` — preview the production build
- `npm run lint` — run TypeScript type checking

## Notes

- This project does not require special environment variables for local development unless additional integrations are added.
- Content is driven from `src/servicesData.ts` and rendered by `src/views/ServicesView.tsx`.

## Deployment

This site can be deployed to any static hosting provider that supports Vite builds, such as Vercel, Netlify, or GitHub Pages.
