'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
    { label: 'Our Process', href: '/our-approach' },
    { label: 'Industries', href: '/industries' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 flex items-center justify-between px-4 md:px-7 border-b gpu-accelerate ${
        scrolled
          ? 'bg-bg-deep/80 backdrop-blur-2xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] h-14 md:h-14'
          : 'bg-transparent border-transparent h-16 md:h-20'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex flex-col gap-0.5 group shrink-0">
        <div className="font-display text-base md:text-lg font-normal text-text-primary group-hover:text-gold-light transition-colors duration-300">
          Hosadu<span className="text-gold-primary">AI</span>
        </div>
        <div className="font-mono text-[8px] md:text-[10px] tracking-widest text-text-tertiary hidden sm:block">ಹೊಸದು</div>
      </Link>

      {/* Center Nav Links - horizontally scrollable on mobile */}
      <div className="flex-1 overflow-x-auto mx-3 md:mx-6 flex justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-4 md:gap-8 items-center bg-bg-raised/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/5 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body text-[11px] md:text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-gold-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/contact"
        className="relative px-3 md:px-7 py-1.5 md:py-2 border border-gold-primary/50 text-gold-primary font-body text-[11px] md:text-[13px] font-semibold rounded-button hover:bg-gold-primary hover:text-bg-deep transition-all duration-300 overflow-hidden group shadow-premium-inner shrink-0"
      >
        <span className="relative z-10 hidden sm:inline">Start a Project →</span>
        <span className="relative z-10 sm:hidden">Start →</span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      </Link>
    </nav>
  )
}
