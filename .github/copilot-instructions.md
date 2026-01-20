# IdealSpeaking Copilot Instructions

## Project Overview

IdealSpeaking is a React + Vite marketing website for an English coaching business. It's a single-page application deployed to GitHub Pages with a modern, luxury design targeting high-end language learners.

## Tech Stack & Build

- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS (inferred from class usage)
- **Deployment**: GitHub Pages via `gh-pages` package
- **Dev Server**: Vite runs on `localhost:3000` (configured in `vite.config.ts`)
- **Build Command**: `npm run build` (outputs to `dist/` for `gh-pages`)
- **Deploy Command**: `npm run deploy` (runs build then deploys to GitHub Pages)

## Architecture & Component Structure

### Page Composition (App.tsx)

The app is a single-page with scroll-linked sections, each wrapped in semantic `<section>` elements with IDs:

- `#home` → Hero (value proposition)
- `#classes` → Classes (service offerings)
- `#features` → WhyChooseUs (differentiators)
- `#about` → AboutUs (credibility)
- `#testimonials` → Testimonials (social proof)
- `#contact` → ContactUs (lead capture)
- Footer (always visible)

**Key Pattern**: Navbar uses scroll position state (`isScrolled`) passed from App via `useEffect` listener to apply conditional styling (background color changes at 50px scroll).

### Component Patterns

1. **Stateless presentation components**: Hero, Classes, Testimonials, Footer (no state management)
2. **Stateful form components**: Navbar (mobile menu), ContactUs (form inputs)
3. **Props pattern**: Only Navbar receives props (`isScrolled`); all others are self-contained

### Design System

- **Color Palette** (inline styles throughout):
  - Primary dark: `#2c2416` (charcoal brown)
  - Accent gold: `#c9a961` (luxury accent)
  - Light background: `#fdfcfa` (off-white)
  - Text: `#6b6555` (muted brown)
- **Typography**: Playfair Display serif for headings (luxury brand aesthetic)
- **Spacing**: Tailwind utilities (py-20 for section padding, max-w-7xl for container)

## Critical Implementation Details

### ContactUs Form

- **No backend API integration**: Uses `mailto:` links to open user's email client
- **Form data flow**: Captures inputs → builds URL-encoded `mailto` with subject and body → redirects
- **Email address**: `aliaaaqh135@gmail.com` (hardcoded; update if needed)
- **Pattern**: URL encoding via `encodeURIComponent()` for special characters

### Vite Configuration

- **Base path**: Set to `"ideal-speaking"` (matches GitHub Pages repo name in homepage field)
- **Path alias**: `@/*` maps to workspace root for imports
- **Environment variables**: Defines `process.env.GEMINI_API_KEY` (legacy, not currently used but kept for compatibility)

### TypeScript Configuration

- **Target**: ES2022 with JSX as `react-jsx`
- **Module path aliases**: `@/*` points to root (e.g., `import Navbar from '@/components/Navbar'` works)
- **No strict mode flags**: Project uses looser settings for flexibility

## Development Workflows

### Local Development

```bash
npm install              # First-time setup
npm run dev             # Start Vite dev server (localhost:3000, auto-reload)
npm run build           # Production build (outputs to dist/)
npm run preview         # Preview built site locally
npm run deploy          # Build and deploy to GitHub Pages
```

### Debugging Tips

- Scroll listener fires frequently; use React DevTools Profiler if navbar causes performance issues
- Inline style props (e.g., `style={{ color: '#c9a961' }}`) appear throughout; consider centralizing to CSS modules if refactoring
- Mobile menu state is local to Navbar; no global state management in use (no Redux/Context)

## Conventions & Patterns to Preserve

1. **Inline styling for dynamic/themed colors**: All components use inline `style={}` props for brand colors. Don't move to Tailwind unless color values become dynamic.
2. **Responsive utilities**: Mix of Tailwind (sm:, md:, lg: prefixes) and inline media queries; keep consistent.
3. **Section IDs for anchor navigation**: All major sections have `id` attributes for smooth scrolling. Preserve when adding new sections.
4. **React.FC typed components**: All components use `React.FC` generic with explicit types; maintain this pattern.
5. **No external state management**: Props flow one-way (parent → child). Introduce Context/Redux only if needed.

## Common Tasks

### Adding a New Section

1. Create component in `components/NewSection.tsx` with `React.FC` type
2. Add `<section id="new-id">` wrapper in `App.tsx` main
3. Add navigation link in `Navbar.tsx` navLinks array
4. Add section styling (padding `py-20`, alternating bg colors)

### Modifying Brand Colors

Search inline `style={}` declarations for color hex values (`#2c2416`, `#c9a961`, etc.). Update consistently across components.

### Deploying Changes

```bash
npm run deploy  # Single command to build and push to GitHub Pages
```

## Known Limitations & Future Considerations

- No real form submission backend; currently uses `mailto:` as workaround
- No analytics or tracking integration
- No server-side rendering; purely client-side React SPA
