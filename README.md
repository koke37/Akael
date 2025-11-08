
# Next.js One-Page (Smooth Scroll + Hero Slider)

Single-page site with sections: **Home (image slider)**, **About Us**, **Our Services**, **Gallery**, **Testimonials**, **Projects**. Built with Next.js App Router and Tailwind CSS. Data layer can be **local JSON** (default) or **MongoDB** via native collection access.

## Quick Start

```bash
npm i
npm run dev
```

Open http://localhost:3000

## Tailwind
Already configured in `app/globals.css`, `tailwind.config.js`, `postcss.config.js`.

## Data Source Options

### JSON (default)
Data is loaded from `/data/*.json` directly in the page and via API routes as fallback.

### MongoDB
1. Install mongoose: `npm i mongoose`
2. Copy `.env.example` to `.env.local` and set:
   ```env
   DATA_SOURCE=mongodb
   MONGODB_URI=mongodb+srv://user:pass@cluster/db
   ```
3. Seed collections (`services`, `testimonials`, `projects`, `gallery`) with documents matching the sample JSON shapes.
4. Update the page to fetch from `/api/*` if you prefer API-based rendering, or keep JSON imports.

## Smooth Scroll & Active Link
- `html { scroll-behavior: smooth; }`
- IntersectionObserver sets the active nav link based on the section in view.

## Image Slider
- Lightweight custom slider in `components/HeroSlider.tsx` (auto-rotate, dots, prev/next)
- External images allowed via `next.config.mjs` remotePatterns.

## Production Build
```bash
npm run build
npm start
```

## Notes
- Replace placeholder images and copy with your brand assets.
- Consider swapping the slider for a library (e.g., Embla) if you want touch momentum & more features.
