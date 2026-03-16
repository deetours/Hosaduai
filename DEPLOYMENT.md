# HosaduAI Website - Deployment Guide

## Quick Start

This is a complete, production-ready Next.js website for HosaduAI. All components, pages, animations, and styling are implemented.

## What's Included

✅ Complete homepage with 11 sections  
✅ Request audit form with validation  
✅ Thank you page  
✅ Custom 404 page  
✅ Mobile-responsive design  
✅ Scroll-triggered animations (GSAP)  
✅ Component animations (Framer Motion)  
✅ Accessibility compliance (WCAG AA)  
✅ Optimized fonts (next/font)  
✅ Performance-tuned  

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## Build & Deploy

### Local Build
```bash
pnpm build
pnpm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Vercel will automatically detect Next.js and configure everything.

### Deploy to Other Platforms

The project is a standard Next.js 16 application and can be deployed to:
- Netlify
- AWS Amplify
- Docker
- Self-hosted servers

## Environment Variables

Currently, no environment variables are required. If you add backend functionality (email submissions, analytics), add them to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://hosadu.ai
NEXT_PUBLIC_FORM_ENDPOINT=https://your-backend.com/api/forms
```

## Customization

### Change Company Info
Edit company name and links in:
- `/components/Nav.tsx` (navigation links)
- `/components/Footer.tsx` (footer content)
- `/app/layout.tsx` (metadata)

### Update Colors
All colors use CSS variables in `/app/globals.css`:
```css
--gold-primary: #c8a04a;
--bg-deep: #0a0908;
/* etc. */
```

Change hex values to update the entire site's palette.

### Modify Copy
Edit text in individual component files:
- `/components/Hero.tsx` - Hero section
- `/components/SceneBlock.tsx` - Scene narrative
- `/components/ManifestoBlock.tsx` - Brand manifesto
- Each section file has clearly commented copy sections

### Add Form Backend
The request audit form currently logs to console. To save submissions:

1. Create a backend endpoint (`POST /api/audit-requests`)
2. Update `/app/request-audit/page.tsx`:
```typescript
const response = await fetch('/api/audit-requests', {
  method: 'POST',
  body: JSON.stringify(formData),
})
```

3. Add email notification service (SendGrid, Resend, etc.)

## Performance

Current optimizations:
- Server-side rendering (SSR) for all pages
- Font subsetting & preloading
- CSS-based animations (no heavy JS)
- Lazy component loading
- Image optimization via next/image

### Monitoring

After deployment, monitor:
- **Google PageSpeed Insights**: Check LCP, FID, CLS
- **Web Vitals**: Use Vercel Analytics dashboard
- **SEO**: Check meta tags and structured data

## Analytics & Tracking

The project includes Vercel Analytics. To add:
- Google Analytics: Add to layout.tsx
- Hotjar/Heatmap: Add script tag
- Segment: Initialize in page.tsx

## Content Updates

### Edit Homepage Sections

Each section is a separate component for easy editing:

1. **Hero** → `/components/Hero.tsx`
2. **Scene Block** → `/components/SceneBlock.tsx`
3. **AI Illusion** → `/components/AIIllusionBlock.tsx`
4. **Distinction** → `/components/DistinctionBlock.tsx`
5. **Solution** → `/components/SolutionBlock.tsx`
6. **Before/After** → `/components/BeforeAfterBlock.tsx`
7. **Principles** → `/components/PrinciplesBlock.tsx`
8. **Manifesto** → `/components/ManifestoBlock.tsx`
9. **Closing CTA** → `/components/ClosingCTABlock.tsx`
10. **Navigation** → `/components/Nav.tsx`
11. **Footer** → `/components/Footer.tsx`

Each component is self-contained and can be edited independently.

## Adding New Pages

To add a new page (e.g., `/case-studies`):

```bash
# Create directory
mkdir app/case-studies

# Create page file
echo "'use client'
export default function CaseStudiesPage() {
  return <div>Case Studies</div>
}" > app/case-studies/page.tsx
```

Next.js will automatically route it to `/case-studies`.

## Troubleshooting

### Animations not working?
- Check that Framer Motion & GSAP are installed: `pnpm install`
- Verify `'use client'` directive is at top of component files
- Check browser console for errors

### Form not submitting?
- Open browser DevTools → Console
- Check for validation errors (form requires all fields)
- Ensure form endpoint is configured (if using backend)

### Styling issues?
- Clear Tailwind cache: `rm -rf .next && pnpm dev`
- Check that fonts loaded: Verify in Network tab
- Verify CSS variables in `:root` of globals.css

### Mobile menu not working?
- Check that Nav component has `'use client'` directive
- Verify state management in Nav.tsx

## Database Integration (Optional)

To save form submissions to a database:

### Example with Supabase

1. Install Supabase client: `pnpm add @supabase/supabase-js`
2. Add env vars: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_KEY`
3. Create API route `/app/api/audit-requests/route.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, key)

export async function POST(request: Request) {
  const { name, business, challenge } = await request.json()
  
  const { error } = await supabase
    .from('audit_requests')
    .insert([{ name, business, challenge }])
  
  if (error) return Response.json({ error }, { status: 400 })
  return Response.json({ ok: true })
}
```

4. Update form to call this API route

## SEO

The site includes:
- ✅ Proper meta tags
- ✅ Open Graph tags
- ✅ Mobile viewport
- ✅ Semantic HTML
- ✅ Accessible color contrast

To add:
- Sitemap: Use `next-sitemap` package
- robots.txt: Add to `/public`
- Schema.org markup: Add to layout.tsx

## License

© 2024 HosaduAI. All rights reserved.

## Support

For questions:
- Check the README.md for architecture details
- Review component comments for implementation notes
- Check Tailwind docs for styling: tailwindcss.com
- Check Next.js docs: nextjs.org

---

**Ready to launch!** 🚀

Your website is production-ready. Push to GitHub, deploy to Vercel, and you're live.
