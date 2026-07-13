# Saima Kapoor — Portfolio

A premium, animated personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Soft pink + warm white palette, glassmorphism, a custom interactive "neural constellation" hero graphic, dark mode, scroll-triggered animations, project filtering, and a confetti-triggering contact form.

## 1. Run it locally

You need Node.js 18.18+ installed (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site hot-reloads as you edit.

To produce a production build:

```bash
npm run build
npm start
```

## 2. Edit your content (the only file you usually need)

Almost everything on the page — your name, tagline, bio, skills, projects, timeline, education, contact links, resume path — lives in ONE file:

```
lib/data.ts
```

Open it and edit the plain objects/arrays. A few specifics:

- Add a new project -> add another object to the `projects` array. Each project needs a `slug` (unique id), `title`, `description`, `tech` array, `features` array, a `category` ("AI/ML" | "Web/Backend" | "Research" | "Systems" — used by the filter buttons), and optional `github` / `demo` links.
- Update Education -> edit the `education` object (degree, focus, institution, year, highlights).
- Add a timeline/achievement entry -> add an object to the `timeline` array with a `date`, `title`, `description`, and a `type` (project | workshop | hackathon | research | milestone, which controls the dot color).
- Change your photo -> drop an image into `/public` (e.g. `public/photo.jpg`) and set `photoUrl: "/photo.jpg"` in the `profile` object. Leave it as `""` to keep the monogram placeholder.
- Add your resume -> put your PDF in `/public/resume.pdf` (replacing the placeholder text file) — the `resumeUrl` field already points there.
- Social links / email -> edit `linkedin`, `github`, `email` in the `profile` object.

You will not need to touch any component file for routine updates — `lib/data.ts` is the single source of truth.

### Deeper edits

- Colors — defined as CSS variables at the top of `app/globals.css` (`--rose`, `--rose-soft`, `--rose-deep`, `--bg`, etc.), with a separate `.dark` block for dark mode.
- Fonts — set in `app/layout.tsx` (Fraunces for display, Plus Jakarta Sans for body, JetBrains Mono for labels), all loaded from Google Fonts via `next/font`.
- Section order — `app/page.tsx` simply lists the section components; reorder/remove by editing that file.
- The hero "constellation" graphic — `components/Constellation.tsx`, a canvas animation with no external dependencies.

## 3. Hosting it (Vercel — recommended, free, made by the Next.js team)

This is the easiest path since the project is already a standard Next.js app.

1. Push the project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to vercel.com and sign in with your GitHub account.
3. Click "Add New… -> Project", select your repository, and click Import.
4. Vercel auto-detects Next.js — leave the default build settings as-is and click Deploy.
5. After about a minute you'll get a live URL like `https://your-portfolio.vercel.app`.
6. Custom domain (optional): in your Vercel project -> Settings -> Domains, add your domain (e.g. from Namecheap/GoDaddy) and follow the DNS instructions Vercel shows you.

Every time you push to `main` on GitHub, Vercel automatically redeploys — so updating `lib/data.ts` and pushing is all you need to do to update the live site.

### Alternative: Netlify

1. Push to GitHub as above.
2. On netlify.com, click "Add new site -> Import an existing project", pick your repo.
3. Build command: `npm run build` — Publish directory: `.next` (Netlify's Next.js runtime handles the rest automatically).
4. Deploy.

### Quick local preview without GitHub

```bash
npm run build
npm start
```
then open http://localhost:3000.

## 4. Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react (icons)
- canvas-confetti (contact form celebration)

## 5. Notes

- The contact form currently opens the visitor's email client pre-filled with their message (no backend needed). To make it submit silently instead, wire it up to a service like Formspree or Resend — swap the `handleSubmit` function in `components/Contact.tsx`.
- Dark mode preference is remembered per-visitor via localStorage.
- All animations respect `prefers-reduced-motion`.
