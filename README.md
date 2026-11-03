# Khatai Alizade — Portfolio Starter

A dark, recruiter-first portfolio for a Java Backend / Full-Stack Developer. Built with React, TypeScript, Vite and Tailwind CSS v4.

## 1. Run locally

Requirements: Node.js 20.19+ (or 22.12+) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## 2. Before publishing

1. Check every date, technology and project description in `src/data/portfolio.ts`.
2. Confirm that Java and Spring Boot are accurately attributed to the EVERY ON internship before keeping them in that entry.
3. Replace `public/files/Khatai-Alizade-CV.pdf` with the latest software-development CV when you update it.
4. Add project screenshots only if they show your actual applications and do not expose private/company information.
5. Update the LinkedIn URL if your public profile URL changes.
6. Do not publish confidential internship source code or credentials.

## 3. Build and preview

```bash
npm run typecheck
npm run build
npm run preview
```

The production site is generated in `dist/`.

## 4. Deployment

### Vercel
- Import the GitHub repository into Vercel.
- Framework preset: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- No environment variables are required for the starter.

### Netlify
- Import the GitHub repository into Netlify.
- Build command: `npm run build`.
- Publish directory: `dist`.
- No environment variables are required for the starter.

## 5. Implementation roadmap

### Phase 1 — Foundation (current starter)
- Responsive dark visual system and navigation.
- Hero, About, Experience, Projects, Skills, Education, Contact and Footer sections.
- Content-driven project and experience cards.
- CV download, GitHub, LinkedIn and email links.
- Basic SEO metadata, reduced-motion handling and mobile navigation.

### Phase 2 — Proof of engineering
- Add real screenshots to each public project.
- Create a dedicated case-study page or modal for each project.
- Explain architecture, trade-offs, testing, edge cases and what you personally implemented.
- Add architecture diagrams where they clarify the work.

### Phase 3 — Polish
- Test at mobile, tablet and desktop widths.
- Check keyboard navigation, focus states, contrast and link destinations.
- Add a custom domain and a social preview image.
- Run typecheck and production build; fix all warnings and errors.

### Phase 4 — Recruiter conversion
- Put the portfolio URL on both software CV and LinkedIn.
- Keep the homepage focused on Java/backend roles.
- Add a concise, visible contact path and downloadable CV.
- Review analytics only if needed; do not add invasive tracking.

## 6. Suggested timebox

Build Phase 1 first, then publish. Add screenshots and case studies incrementally while continuing to apply for jobs. Do not delay applications for optional animations, a blog, a database or an admin dashboard.
