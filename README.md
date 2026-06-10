# Joseph Etim Portfolio

A production-ready single-page portfolio built with Next.js 15, strict
TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, Lucide, and
Sonner.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Content

All portfolio copy, roles, projects, categories, skills, education, and
certifications live in `content/portfolio.ts`.

- Add or edit projects in the `projects` array.
- Mark a project with `featured: true` to show it in Selected Work.
- Keep client work at the outcome and architecture level when source code is
  private.
- Project art lives in `public/projects/` and is rendered with `next/image`.
- Replace `public/portrait-placeholder.svg` with a professional portrait and
  update the filename in `components/about.tsx`.
- Replace `public/Joseph-Etim-Resume.pdf` whenever the resume changes.

## Theme and color

Theme tokens are CSS variables in `app/globals.css`. The default accent is
indigo. Update `--accent` and `--accent-soft` in both light and dark token
groups to change the brand color consistently.

The first-visit preference is stored in `localStorage` under `joseph-theme`.
Theme behavior is implemented in `components/theme-provider.tsx`.

## Contact form

The contact endpoint validates submissions with Zod and sends mail through the
Resend REST API. Copy `.env.example` to `.env.local` and configure:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=Joseph Etim Portfolio <portfolio@yourdomain.com>
CONTACT_TO_EMAIL=josephetim211@gmail.com
```

In development, submissions are logged when no API key is present. In
production, the endpoint returns an honest configuration error instead of
pretending delivery succeeded.

## Deployment

Deploy on Vercel or any Node.js platform that supports Next.js 15. Configure the
environment variables above and update the canonical site URL in:

- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

## Accessibility and motion

- All motion respects `prefers-reduced-motion`.
- Modals close with Escape, outside click, close button, or downward drag.
- Interactive controls include visible focus states and accessible labels.
- Navigation tracks the current section with `IntersectionObserver`.
# joseph-etim
