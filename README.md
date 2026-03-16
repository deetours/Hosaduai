# HosaduAI - Operational Intelligence for Real Businesses

A premium, cinematic marketing website for HosaduAI, built with Next.js 16, Tailwind CSS, Framer Motion, and GSAP.

## Project Overview

HosaduAI is an AI-powered operational systems company targeting Indian SMBs (interior designers, architects, consultants, agencies, clinics). This website tells the brand story through a carefully crafted narrative, combining luxury design aesthetics with technical precision.

## Design System

### Colors
- **Primary Background**: `#0a0908` (Deep)
- **Base**: `#111009`
- **Raised**: `#181611`
- **Gold Accent**: `#c8a04a` (Primary), `#f0cc80` (Light), `#8a6820` (Dim)
- **Teal Accent**: `#3d9080` (Primary), `#7cc8b8` (Light), `#256858` (Dim)
- **Text**: Primary (`#ede8dc`), Secondary (`#a09880`), Tertiary (`#5a5448`), Bright (`#f9f4ea`)

### Typography
- **Display Font**: Cormorant Garamond (300, 400, 500 + italics)
- **Body Font**: Syne (400, 500, 600, 700)
- **Mono Font**: JetBrains Mono (300, 400)

## Project Structure

```
app/
├── layout.tsx                 # Root layout with font configuration
├── page.tsx                   # Homepage
├── globals.css               # Global styles and CSS variables
├── request-audit/            # Audit request form
│   └── page.tsx
├── thank-you/                # Thank you confirmation
│   └── page.tsx
└── not-found.tsx             # 404 page

components/
├── Nav.tsx                   # Navigation bar (desktop + mobile)
├── Hero.tsx                  # Hero section with animations
├── SceneBlock.tsx            # Opening scene narrative
├── AIIllusionBlock.tsx        # AI boom critique section
├── DistinctionBlock.tsx       # Tool vs System distinction
├── SolutionBlock.tsx          # 6 capability cards
├── BeforeAfterBlock.tsx       # Before/after comparison
├── PrinciplesBlock.tsx        # 3 core principles
├── ManifestoBlock.tsx         # Animated manifesto
├── ClosingCTABlock.tsx        # Final call-to-action
└── Footer.tsx                # Footer with links

lib/
└── animations.ts             # Framer Motion variants & easing functions

tailwind.config.ts            # Tailwind configuration with custom design tokens
package.json                  # Dependencies including Framer Motion & GSAP
```

## Features

### Animations
- **Character-by-character headline reveal** in Hero section (20ms stagger)
- **Scroll-triggered reveals** using GSAP ScrollTrigger
- **Staggered fade-ins** for lists and card grids
- **Manifesto animation** with progressive line reveals
- **Smooth transitions** on hover states

### Interactive Elements
- **Mobile hamburger menu** with smooth animations
- **Sticky navigation** that transforms on scroll
- **Hover effects** on all interactive elements
- **Focus-visible states** for keyboard navigation
- **Form validation** with error handling

### Accessibility
- WCAG AA color contrast compliance
- Keyboard navigation on all interactive elements
- Focus ring indicators
- Semantic HTML structure
- Reduced motion support for animations
- Proper ARIA labels

### Performance
- Server-side rendering with Next.js
- Optimized font loading with `next/font`
- CSS-based animations (faster than JS)
- Lazy-loaded images and components
- Minimal JavaScript runtime

## Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Pages

### Homepage (`/`)
Complete brand narrative with 11 sections:
1. Navigation & Hero
2. Scene Block (Problem narrative)
3. AI Illusion Block (Market critique)
4. Distinction Block (Tool vs System)
5. Solution Block (Capabilities)
6. Before/After Block (Impact visualization)
7. Principles Block (Core beliefs)
8. Manifesto Block (Brand manifesto)
9. Closing CTA Block (Final conversion)
10. Footer

### Request Audit (`/request-audit`)
Minimal, high-signal form with 3 fields:
- Name
- Business type
- Operational challenge description

Includes form validation and submission feedback.

### Thank You (`/thank-you`)
Post-submission confirmation page setting expectations for the 48-hour response.

### 404 (`/not-found`)
Custom error page matching brand aesthetic.

## Customization

### Colors
All colors are CSS variables in `globals.css`:
```css
:root {
  --bg-deep: #0a0908;
  --gold-primary: #c8a04a;
  /* ... etc */
}
```

### Typography
Font sizes and weights are configured in `tailwind.config.ts` and can be used via utility classes:
```html
<h1 class="text-h1">Heading</h1>
<p class="text-body-lg">Body text</p>
```

### Animations
Framer Motion variants are defined in `lib/animations.ts` and can be imported and used in components.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Performance Targets

- **LCP (Largest Contentful Paint)**: < 1.5s
- **TTI (Time to Interactive)**: < 3s
- **CLS (Cumulative Layout Shift)**: 0
- **Lighthouse Score**: 95+

## Dependencies

- **next**: 16.1.6 (React framework)
- **react**: 19.2.4 (UI library)
- **tailwindcss**: 4.2.0 (Styling)
- **framer-motion**: 11.0.3 (Component animations)
- **gsap**: 3.12.2 (Advanced scroll animations)
- **react-hook-form**: 7.54.1 (Form handling)

## License

© 2026 HosaduAI. All rights reserved.

## Contact

For questions about this website or HosaduAI services, visit [hosadu.ai](https://hosadu.ai)
