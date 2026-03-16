import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-0 min-h-screen bg-bg-deep flex items-center justify-center px-4 py-section-y-mobile md:py-section-y">
        <div className="max-w-form w-full text-center">
          {/* Headline */}
          <h1 className="text-7xl md:text-8xl font-display font-light text-gold-primary mb-4">
            404
          </h1>

          {/* Subheading */}
          <h2 className="text-3xl md:text-4xl font-display font-normal text-text-bright mb-6">
            Page not found.
          </h2>

          {/* Body */}
          <p className="text-body-lg text-text-secondary mb-12 md:mb-16 leading-relaxed max-w-lg mx-auto">
            We couldn't find what you're looking for. Let's get you back on track.
          </p>

          {/* CTA */}
          <Link
            href="/"
            className="inline-block px-7 py-3 bg-gold-primary text-bg-deep font-body font-semibold text-[13px] tracking-wide rounded-button hover:scale-105 hover:brightness-110 transition-all duration-180"
          >
            Return to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
