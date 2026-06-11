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
- The professional portrait is stored at
  `public/joseph-etim-headshot.jpeg` and rendered in `components/about.tsx`.
- Replace `public/Joseph-Etim-Resume.pdf` whenever the resume changes.

## Theme and color

Theme tokens are CSS variables in `app/globals.css`. The default accent is
indigo. Update `--accent` and `--accent-soft` in both light and dark token
groups to change the brand color consistently.

The first-visit preference is stored in `localStorage` under `joseph-theme`.
Theme behavior is implemented in `components/theme-provider.tsx`.

## Contact form

The contact form validates submissions with React Hook Form and Zod, then sends
mail directly from the browser with EmailJS. Copy `.env.example` to `.env.local`
and configure it as follows:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_CONTACT_TO_EMAIL=josephetim211@gmail.com
```

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Add and connect an email service.
3. Create an email template.
4. Add these template variables:

- `from_name`
- `from_email`
- `reply_to`
- `message`
- `collaboration_type`
- `to_email`

The `message` parameter already contains the sender's name, email,
collaboration type, and original message. At minimum, include `{{message}}` in
the EmailJS template body:

```text
New Portfolio Contact

{{message}}

Reply to: {{reply_to}}
```

The template can also show the individual fields:

```text
From: {{from_name}}
Reply-To: {{reply_to}}
Sender Email: {{from_email}}
Collaboration Type: {{collaboration_type}}

{{message}}
```

Set the EmailJS template reply-to field to `{{reply_to}}` and the recipient
field to `{{to_email}}`. A received message will contain:

```text
New portfolio contact message

Name: John Doe
Email: john@example.com
Collaboration Type: Frontend Engineering

Message:
Hi Joseph, I would like to discuss a project with you.
```

5. Copy the Service ID, Template ID, and Public Key into `.env.local`.
6. Restart the Next.js development server after changing `.env.local`.

All `NEXT_PUBLIC_*` values are included in the browser bundle. The EmailJS
public key is designed for browser use, but requests should still be restricted
to your production domain in the EmailJS dashboard.

### Troubleshooting

If the Next.js development server returns an HTML 500 page containing:

```text
ENOENT: no such file or directory, open '.next/server/vendor-chunks/next.js'
```

Stop the development server, then rebuild the local installation:

```powershell
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run dev
```

This clears stale generated server chunks and reinstalls the dependency tree.

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
