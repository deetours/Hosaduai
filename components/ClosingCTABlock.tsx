'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function ClosingCTABlock() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-deep px-6 py-24">

      {/* Background — layered atmospheric glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep gold pulse center */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.30, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(circle, rgba(200,160,74,0.18) 0%, rgba(61,144,128,0.08) 50%, transparent 80%)' }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        {/* Corner vignettes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[10px] text-gold-primary/60 tracking-[0.4em] uppercase mb-12 flex items-center justify-center gap-4"
        >
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
            className="block w-10 h-px bg-gold-primary/30 origin-right"
          />
          ACT V · THE DECISION
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
            className="block w-10 h-px bg-gold-primary/30 origin-left"
          />
        </motion.div>

        {/* The manifesto line */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl font-display font-light italic text-text-secondary leading-relaxed mb-3"
        >
          AI should not be a slide in your pitch deck.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-normal text-text-bright leading-tight mb-16 md:mb-20"
        >
          It should be the engine{' '}
          <span className="italic text-teal-light">your product runs on.</span>
        </motion.p>

        {/* Thin divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center justify-center gap-6 mb-16 md:mb-20"
        >
          <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-transparent to-white/10" />
          <span className="font-mono text-[9px] text-text-tertiary/40 tracking-[0.3em] uppercase">The next step</span>
          <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-display font-normal mb-12 md:mb-14 leading-tight"
        >
          Let's build the intelligence layer your{' '}
          <span className="italic text-teal-light">business deserves.</span>
        </motion.h2>

        {/* CTA + trust stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <Link
            href="/contact"
            className="group relative px-12 py-5 bg-gold-primary text-bg-deep font-body font-semibold text-sm tracking-[0.2em] uppercase rounded-sm overflow-hidden flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(200,160,74,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Start Your Project</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 text-bg-deep/60"
            >→</motion.span>
          </Link>

          <div className="flex items-center gap-6 text-text-tertiary/30">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase">Free consultation</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary/20" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase">No commitment</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary/20" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase">45 minutes</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom signature */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-display text-[11px] italic text-text-tertiary/20 tracking-wider"
      >
        Hosadu<span className="not-italic text-gold-primary/30">AI</span> · ಹೊಸದು
      </motion.div>

    </section>
  )
}
