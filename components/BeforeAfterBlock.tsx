'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function BeforeAfterBlock() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Bridge header — fades out in the first 15% of scroll
  const bridgeOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  // BEFORE layer: fully visible 0→0.3, then blurs and fades 0.3→0.55
  const beforeOpacity = useTransform(scrollYProgress, [0, 0.3, 0.55], [1, 1, 0])
  const beforeScale  = useTransform(scrollYProgress, [0.3, 0.55], [1, 1.06])
  const beforeFilter = useTransform(scrollYProgress, [0.3, 0.55], ['blur(0px)', 'blur(24px)'])

  // AFTER layer: appears 0.5→0.75, holds fully visible 0.75→0.82, then fades 0.82→0.95
  const afterOpacity = useTransform(scrollYProgress, [0.5, 0.72, 0.82, 0.95], [0, 1, 1, 0])
  const afterScale   = useTransform(scrollYProgress, [0.5, 0.72], [0.94, 1])
  const afterFilter  = useTransform(scrollYProgress, [0.5, 0.72], ['blur(20px)', 'blur(0px)'])

  // CLOSING STATEMENT: appears only after After card has faded (0.88 → 1)
  const textOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 1])
  const textY       = useTransform(scrollYProgress, [0.88, 1], [40, 0])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-bg-deep">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Bridge Header (top of section — fades out first) */}
        <motion.h2 
          className="absolute top-20 md:top-28 left-0 right-0 text-center text-3xl md:text-4xl font-display font-normal italic text-text-bright z-40 px-4 pointer-events-none"
          style={{ opacity: bridgeOpacity }}
        >
          That startup has two possible futures.
        </motion.h2>

        {/* ─── BEFORE layer ─────────────────────────────────── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 px-4 overflow-hidden"
          style={{
            opacity: beforeOpacity,
            scale: beforeScale,
            filter: beforeFilter,
            background: 'radial-gradient(circle at center, rgba(192,72,56,0.06) 0%, transparent 70%)',
          }}
        >
          {/* Chaos lines */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
            {isMounted && Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ rotate: Math.random() * 360, x: (Math.random()-0.5)*1000, y: (Math.random()-0.5)*1000 }}
                animate={{ rotate: Math.random()*360, x: (Math.random()-0.5)*1000, y: (Math.random()-0.5)*1000 }}
                transition={{ duration: 10+Math.random()*10, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 w-72 h-px bg-gradient-to-r from-transparent via-[#C04838] to-transparent"
              />
            ))}
          </div>

          <div className="max-w-xl w-full relative z-10 bg-bg-raised/80 backdrop-blur-xl border border-red-950/30 rounded-card p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.3em] mb-8 text-[#C04838] uppercase">
              Without HosaduAI
            </div>
            <div className="space-y-3 font-display font-light italic text-xl md:text-2xl text-text-secondary leading-relaxed">
              <p>A fine-tuned model that drifts after two weeks.</p>
              <p>An AI agent that can't handle real-world edge cases.</p>
              <p>A chatbot demo that falls apart in production.</p>
              <p>A team stretched thin between product and ML ops.</p>
              <p>Three months burned. Back to square one.</p>
              <p className="pt-6 text-text-bright font-normal not-italic text-xl md:text-2xl text-[#C04838]/80">
                The project stalls.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── AFTER layer ──────────────────────────────────── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 px-4 overflow-hidden"
          style={{
            opacity: afterOpacity,
            scale: afterScale,
            filter: afterFilter,
            background: 'radial-gradient(circle at center, rgba(61,144,128,0.06) 0%, transparent 70%)',
          }}
        >
          {/* Calm concentric ring */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 flex items-center justify-center">
            <div className="w-[700px] h-[700px] border border-teal-primary/10 rounded-full flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} 
                className="w-[500px] h-[500px] border border-dashed border-teal-primary/20 rounded-full" 
              />
            </div>
          </div>

          <div className="max-w-xl w-full relative z-10 bg-bg-raised/80 backdrop-blur-xl border border-teal-primary/20 rounded-card p-8 md:p-12">
            <div className="font-mono text-[10px] tracking-[0.3em] mb-8 text-teal-primary uppercase">
              With HosaduAI
            </div>
            <div className="space-y-3 font-display font-light italic text-xl md:text-2xl text-text-secondary leading-relaxed">
              <p>The model is fine-tuned on your data — and stays accurate.</p>
              <p>The agent handles edge cases because it was built for your domain.</p>
              <p>The app is live, fast, and users don't know AI is behind it.</p>
              <p>Your team focuses on product. We handle the intelligence layer.</p>
              <p>You shipped in weeks, not quarters.</p>
              <p className="pt-6">
                He opens his dashboard to real users, real data, real traction.
              </p>
              <p className="pt-2 text-teal-light font-normal not-italic text-xl md:text-2xl">
                The product launches.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── CLOSING STATEMENT — rendered AFTER both cards have faded ─── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4 pointer-events-none"
          style={{ opacity: textOpacity, y: textY }}
        >
          <p className="text-xl md:text-3xl font-display font-light italic text-text-secondary max-w-2xl text-center leading-relaxed mb-4">
            That is not AI experimentation.
          </p>
          <p className="text-2xl md:text-4xl font-display font-normal text-text-bright max-w-2xl text-center leading-tight">
            That is{' '}
            <span className="italic text-gold-light">AI engineering.</span>
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            style={{ opacity: textOpacity }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-12 h-px bg-gold-primary/40 mx-auto mt-6"
          />
          <p className="mt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-text-tertiary">
            The difference is architectural.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
