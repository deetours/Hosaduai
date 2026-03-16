'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  label?: string
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="relative flex items-center justify-center py-12 md:py-20 px-8 bg-bg-deep overflow-hidden">
      {/* Left line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-0 right-1/2 h-px bg-gradient-to-r from-transparent to-white/10 origin-left"
      />

      {/* Center Glyph */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-center gap-3"
      >
        <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
        {label && (
          <span className="font-mono text-[9px] text-text-tertiary tracking-[0.3em] uppercase">
            {label}
          </span>
        )}
        <div className="w-1 h-1 rounded-full bg-gold-primary/40" />
      </motion.div>

      {/* Right line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 right-0 h-px bg-gradient-to-l from-transparent to-white/10 origin-right"
      />
    </div>
  )
}
