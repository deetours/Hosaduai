import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Thank You - HosaduAI',
  description: 'Your project request has been received. We\'ll be in touch soon.',
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main className="pt-16 md:pt-0 min-h-screen bg-bg-deep flex items-center justify-center px-4 py-section-y-mobile md:py-section-y">
        <div className="max-w-form w-full text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-display font-light text-text-bright mb-6 md:mb-8 text-balance">
            We've received your request.
          </h1>

          {/* Body */}
          <p className="text-body-lg text-text-secondary mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto">
            We read every submission personally. You will hear from a human within 48 hours — not from an automated sequence, from a person who has read what you wrote.
          </p>

          {/* Closing Statement */}
          <div className="mb-12 md:mb-16 py-8 md:py-12 border-t border-b border-border-default">
            <p className="text-2xl md:text-3xl font-display font-normal italic text-text-bright">
              AI should not be a trend.
            </p>
            <p className="text-2xl md:text-3xl font-display font-normal italic text-text-bright">
              It should be your competitive advantage.
            </p>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="inline-block px-7 py-3 border border-gold-primary text-gold-primary font-body font-semibold text-[13px] tracking-wide rounded-button hover:bg-gold-primary hover:text-bg-deep transition-all duration-180"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
