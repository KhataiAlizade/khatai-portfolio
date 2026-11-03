# Copilot instructions — Khatai Alizade portfolio

## Product goal
Build a polished, recruiter-first personal portfolio for Khatai Alizade, a Java Backend / Full-Stack Developer based in Warsaw, Poland. The site should make it easy to understand his experience, inspect real projects, download a CV, and contact him.

## Stack
- React + TypeScript + Vite
- Tailwind CSS v4 through `@tailwindcss/vite`
- `lucide-react` for icons
- CSS design tokens and custom CSS for the visual identity
- Static-first deployment to Vercel or Netlify

## Design direction
- Dark, premium, restrained and technical; avoid neon overload and generic template styling.
- Background near #080b12, elevated surfaces near #111824, muted borders, off-white text, muted slate copy, restrained mint accent.
- Strong typography, generous spacing, subtle grid/noise texture, clean project cards, responsive navigation.
- Motion should be subtle and respect `prefers-reduced-motion`.
- Prioritise readability, keyboard navigation, visible focus states, semantic HTML and accessible contrast.

## Content accuracy rules
- Do not invent employers, dates, job titles, metrics, users, revenue, performance improvements, technologies, certifications or production scale.
- EVERY ON internship: August 2025–February 2026, 792 hours; service-management platform; documented work includes relational database design, REST APIs, client booking, admin dashboard, SQL optimization, authentication/security, integrations, tests, cloud deployment support, documentation, sprint planning and peer code reviews. Only list Java/Spring Boot in this internship if Khatai confirms he personally used them there.
- Onfuture internship: February 2023–June 2023; assisted with React-based e-commerce platforms, REST API integration, responsive UI and frontend bug fixing.
- Electronic Trading Engine: Java/Spring Boot, price-time priority matching, order-book aggregation, Hibernate optimistic locking, PostgreSQL, 10 tests (6 unit, 4 integration).
- HRMS: Java/Spring Boot, React/TypeScript, JWT authentication, role-based access, leave workflows, payroll calculation, 50 backend tests; live demo is https://human-resources-pye8.vercel.app/.
- Warehouse Management System: Java/Spring Boot and PostgreSQL desktop application for inventory and transactions, role-based dashboards, stock tracking, low-stock alerts and printable bills.
- Education: Bachelor of Computer Engineering, Vistula University, Feb 2023–Sep 2026; Master of Computer Engineering, Vistula University, Oct 2026–Sep 2028 (in progress).
- Languages: Azerbaijani (native), Turkish (C1), English (full professional proficiency), Polish (B1). Keep languages optional or in a compact section; the primary target is software development.
- Contact: xataializade01@gmail.com. GitHub: https://github.com/KhataiAlizade. LinkedIn: https://www.linkedin.com/in/khatai-alizade-857235242/.

## Engineering standards
- Keep content data in `src/data/portfolio.ts`; use typed interfaces.
- Prefer small reusable components and clear props.
- Avoid adding a backend, database, authentication or admin panel unless there is a concrete user need.
- No secrets in the repository. Use mailto or a reputable form service only if requested.
- Run `npm run typecheck` and `npm run build` before deployment.
- Ensure external links use safe attributes where opening new tabs.
