# Muneeb Faruqi — Portfolio

Production-ready developer portfolio built with React + Vite + TailwindCSS + Framer Motion.

## Tech Stack
- **React 18** + **Vite 6**
- **TailwindCSS v4** (via @tailwindcss/vite)
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Quick Start
```bash
npm install
npm run dev
```

## Build & Deploy
```bash
npm run build
# dist/ folder → deploy to GitHub Pages, Netlify, or Vercel
```

## GitHub Pages Deploy
1. Set `base` in `vite.config.js` to your repo name: `base: '/your-repo-name/'`
2. Run `npm run build`
3. Push `dist/` to `gh-pages` branch

## Project Structure
```
src/
  components/
    layout/     # Navbar, Footer
    sections/   # Hero, About, Expertise, Projects, Architecture, Timeline, Telephony, GitHub, Testimonials, Contact
    ui/         # Reusable: Button, Badge, Card, SectionHeader, GradientOrb
  data/         # portfolio.js — all content, projects, skills, experience
  hooks/        # useInView (scroll animations)
```

## Customization
- **Content**: Edit `src/data/portfolio.js` for all text, projects, skills, experience
- **Colors**: CSS vars in `src/index.css`
- **Email**: Replace `muneebfaruqi@email.com` throughout
- **GitHub/LinkedIn**: Update URLs in `src/data/portfolio.js`
