'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'The Manifesto', href: '/manifesto' },
    { label: 'What We Build', href: '/what-we-build' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Our Approach', href: '/our-approach' },
  ]

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 hidden md:flex items-center justify-between px-7 border-b ${
          scrolled
            ? 'bg-bg-deep/70 backdrop-blur-2xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] h-14'
            : 'bg-transparent border-transparent h-20'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0.5 group">
          <div className="font-display text-lg font-normal text-text-primary group-hover:text-gold-light transition-colors duration-300">
            Hosadu<span className="text-gold-primary">AI</span>
          </div>
          <div className="font-mono text-[10px] tracking-widest text-text-tertiary">ಹೊಸದು</div>
        </Link>

        {/* Center Nav Links */}
        <div className="flex gap-8 items-center bg-bg-raised/30 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-gold-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/request-audit"
          className="relative px-7 py-2 border border-gold-primary/50 text-gold-primary font-body text-[13px] font-semibold rounded-button hover:bg-gold-primary hover:text-bg-deep transition-all duration-300 overflow-hidden group shadow-premium-inner"
        >
          <span className="relative z-10">Request Audit →</span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </Link>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-bg-base border-b border-border-default px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5">
          <div className="font-display text-base font-normal text-text-primary">
            Hosadu<span className="text-gold-primary">AI</span>
          </div>
          <div className="font-mono text-[9px] tracking-widest text-text-tertiary">ಹೊಸದು</div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-6 h-6 flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-gold-primary transition-all ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gold-primary transition-all ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gold-primary transition-all ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-bg-deep bg-opacity-95 mt-12 pt-8 px-4">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-lg font-medium text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/request-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full px-4 py-3 bg-gold-primary text-bg-deep font-body text-base font-semibold rounded-button text-center transition-all"
            >
              Request Audit
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
