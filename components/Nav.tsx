'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 hidden md:flex items-center justify-between px-7 border-b gpu-accelerate ${
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

      {/* Mobile Nav Bar */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-[110] px-4 py-3 flex items-center justify-between transition-all duration-300 ${
        mobileMenuOpen || scrolled ? 'bg-bg-base/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-transparent'
      }`}>
        <Link href="/" className="flex flex-col gap-0.5" onClick={() => setMobileMenuOpen(false)}>
          <div className="font-display text-base font-normal text-text-primary">
            Hosadu<span className="text-gold-primary">AI</span>
          </div>
          <div className="font-mono text-[9px] tracking-widest text-text-tertiary">ಹೊಸದು</div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-1 relative z-[120]"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 bg-gold-primary block"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 bg-gold-primary block"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 bg-gold-primary block"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[105] bg-bg-deep flex flex-col px-6 pt-32"
          >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
               <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-primary/5 blur-[100px] rounded-full" />
               <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold-primary/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="font-mono text-[10px] text-gold-primary/40 tracking-[0.2em]">0{i+1}</span>
                    <span className="font-display text-3xl font-light text-text-primary group-hover:text-gold-primary transition-colors duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="pt-8"
              >
                <Link
                  href="/request-audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-8 py-5 bg-gold-primary text-bg-deep font-body text-[13px] font-bold tracking-[0.2em] uppercase rounded-sm text-center shadow-[0_20px_40px_rgba(200,160,74,0.15)] flex items-center justify-center gap-3"
                >
                  Request Audit <span className="text-lg">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Footer markers inside menu */}
            <div className="mt-auto pb-12 relative z-10 border-t border-white/5 pt-8">
               <div className="font-mono text-[8px] text-text-tertiary tracking-[0.3em] uppercase opacity-40">
                 HosaduAI © 2026 <br />
                 Designed for Immersion
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
