'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border-default py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span className="text-9xl md:text-[200px] font-display font-light text-text-bright">
          ಹೊಸದು
        </span>
      </div>

      <div className="max-w-content mx-auto relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-12 md:mb-8">
          {/* Brand */}
          <Link href="/" className="flex flex-col gap-0.5">
            <div className="font-display text-lg font-normal text-text-primary">
              Hosadu<span className="text-gold-primary">AI</span>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-text-tertiary">
              ಹೊಸದು
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#what-we-build"
              className="font-body text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              What We Build
            </a>
            <a
              href="#industries"
              className="font-body text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Industries
            </a>
            <a
              href="#our-approach"
              className="font-body text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Our Approach
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-border-subtle rounded-button hover:border-gold-primary hover:text-gold-primary transition-colors"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-border-subtle rounded-button hover:border-gold-primary hover:text-gold-primary transition-colors font-body text-[10px] font-bold"
              aria-label="Twitter"
            >
              X
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 md:pt-4 border-t border-border-default flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          {/* Copyright */}
          <p className="font-mono text-[10px] text-text-tertiary">
            © 2026 HosaduAI. All rights reserved.
          </p>

          {/* Tagline */}
          <p className="font-mono text-[10px] tracking-widest text-text-tertiary uppercase">
            Operational Intelligence for Real Businesses
          </p>

          {/* Legal */}
          <div className="flex gap-6 text-[10px] text-text-tertiary">
            <a
              href="/privacy"
              className="hover:text-text-secondary transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-text-secondary transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
