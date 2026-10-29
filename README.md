# Kavinila M — Java Full Stack Developer Portfolio

React + Vite + Tailwind CSS 4 + Framer Motion + Lucide. Requires Node.js 20+.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

## Starting from scratch instead of the zip
```bash
npm create vite@latest kavinila-portfolio -- --template react
cd kavinila-portfolio
npm install framer-motion lucide-react@0.468 
npm install -D tailwindcss @tailwindcss/vite
```
Then copy `src/`, `public/`, `index.html` and `vite.config.js` from this project over the generated ones.

## What to fill in
| What | Where |
|---|---|
| HireFlow GitHub + live URLs, BuildWise GitHub URL | `src/data/links.js` (still placeholders) |
| Resume | already at `public/resume.pdf`; replace the file to update it |
| Internships, education, certifications | `src/data/experience.js` |
| Skills, about text, tagline | `src/data/site.js` |
| Project text and screenshots | `src/data/projects.js`; images go in `public/projects/` |

Any link still set to a placeholder renders as a disabled button, so nothing points to a fake URL.
The contact form has no backend: on submit it opens the visitor's email app with a pre-filled draft to your email.

## Deploy free on Vercel (GitHub → Vercel)
1. Create an empty repo at github.com/new named `kavinila-portfolio` (no README/.gitignore).
2. In the project folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/kavinila-portfolio.git
git push -u origin main
```
3. Go to vercel.com → sign up with GitHub → **Add New… → Project** → import `kavinila-portfolio`.
4. Vercel detects Vite: build command `npm run build`, output directory `dist`. Click **Deploy**.
5. You get a free `*.vercel.app` URL.

## Update after changes
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel rebuilds and redeploys automatically on every push to `main`.

## After deploying
Add `og:url` and an `og:image` (e.g. `public/og.png`) meta tag in `index.html` once you know your live URL.
