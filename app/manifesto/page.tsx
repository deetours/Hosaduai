'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Nav } from '@/components/Nav'
import Link from 'next/link'

export default function ManifestoPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Act-specific transforms
  // Backdrop color & filter - optimized for mobile
  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [1, 1, 1, 1])
  const bgFilter = useTransform(
    scrollYProgress, 
    [0.2, 0.3, 0.5, 0.7], 
    ['blur(0px)', 'blur(10px)', 'blur(5px)', 'blur(0px)']
  )
  
  // Villain Glitch Intensity (Act II: 0.2 - 0.4)
  const glitchOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 0.4, 0.4, 0])
  
  // Hero Pulse (Act I: 0 - 0.2)
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0.15, 0.2], [1, 0])

  return (
    <>
      <Nav />
      <main ref={containerRef} className="relative bg-bg-deep selection:bg-gold-primary/30">
        
        {/* GLOBAL BACKGROUND ATMOSPHERE */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
           {/* Serene Core - becomes dominant in Act IV/V */}
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.5, 0.8], [0.05, 0.15]),
               scale: useTransform(scrollYProgress, [0.5, 1], [0.8, 1.2]) 
             }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[80vw] h-[90vw] md:h-[80vw] rounded-full blur-[100px] md:blur-[180px] bg-gold-primary/10 gpu-accelerate"
           />
           
           {/* Villain Red - active in Act II */}
           <motion.div 
             style={{ opacity: glitchOpacity }}
             className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,72,56,0.1)_0%,transparent_70%)]"
           />
        </div>

        {/* ACT I: THE HERO — 0.0 - 0.2 */}
        <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6 z-10 overflow-hidden">
           <motion.div 
             style={{ scale: heroScale, opacity: heroOpacity }}
             className="max-w-4xl w-full text-center space-y-8 flex-1 flex flex-col justify-center gpu-accelerate"
           >
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="font-mono text-[10px] text-gold-primary tracking-[0.5em] uppercase"
                >
                  Act I · The Perspective
                </motion.div>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-light text-text-bright leading-tight">
                  You didn’t start a company to build <span className="italic text-teal-light">toys.</span>
                </h1>
                <p className="max-w-xl mx-auto text-text-secondary text-lg font-light leading-relaxed">
                  Brilliant, driven, and ambitious. But the AI hype has created a trap. You are stuck building demos instead of scalable products.
                </p>
              </div>
           </motion.div>
           
           <motion.div 
             style={{ opacity: heroOpacity }}
             className="h-24 flex flex-col items-center gap-4 opacity-50"
           >
              <span className="font-mono text-[9px] tracking-widest text-text-tertiary">SCROLL TO UNRAVEL</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-12 bg-gradient-to-b from-gold-primary/40 to-transparent" />
           </motion.div>
        </section>

        {/* ACT II: THE VILLAIN — 0.2 - 0.4 */}
        <section className="sticky top-0 h-screen w-full flex items-center justify-center p-6 z-20 overflow-hidden pointer-events-none">
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]),
               x: useTransform(scrollYProgress, [0.2, 0.4], [20, -20])
             }}
             className="max-w-4xl w-full text-center space-y-8 gpu-accelerate"
           >
              <div className="font-mono text-[10px] text-[#C04838] tracking-[0.5em] uppercase">Act II · The Friction</div>
              <h2 className="text-4xl md:text-6xl font-display font-normal text-text-bright">
                The enemy isn't <span className="line-through opacity-40">the model.</span> <br />
                It is <span className="text-[#C04838]">Infrastructure.</span>
              </h2>
              <div className="space-y-4 max-w-lg mx-auto text-text-secondary text-base italic font-light">
                 <p>A fine-tuned model that drifts. An agent that breaks on edge cases. A prompt wrapper disguised as a product.</p>
                 <p className="text-text-bright font-normal not-italic">AI without engineering is just a weekend project.</p>
              </div>
           </motion.div>
           
           {/* Glitch overlays */}
           <motion.div 
             style={{ opacity: glitchOpacity }}
             className="absolute inset-0 z-0 select-none pointer-events-none font-mono text-[10vw] font-bold text-white/5 whitespace-nowrap overflow-hidden flex items-center justify-center"
           >
             FRAGMENTATION · NOISE · FRICTION
           </motion.div>
        </section>

        {/* ACT III: THE STAKES — 0.4 - 0.6 */}
        <section className="sticky top-0 h-screen w-full flex items-center justify-center p-6 z-30 overflow-hidden">
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.4, 0.45, 0.55, 0.6], [0, 1, 1, 0]),
               scale: useTransform(scrollYProgress, [0.4, 0.6], [1.1, 1])
             }}
             className="max-w-5xl w-full flex flex-col md:flex-row gap-16 items-center gpu-accelerate"
           >
              <div className="flex-1 space-y-12">
                 <div className="font-mono text-[10px] text-teal-primary tracking-[0.5em] uppercase">Act III · The Territory</div>
                 <h2 className="text-4xl md:text-6xl font-display text-text-bright leading-[0.9]">
                   Founders are shipping <br />
                   <span className="italic text-teal-light">at the speed of light.</span>
                 </h2>
                 <p className="text-text-secondary text-lg font-light leading-relaxed">
                   But to build generational, world-beating AI products, prompt engineering is no longer enough. You need absolute engineering superiority.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-8">
                    <div className="space-y-1">
                       <div className="text-3xl font-display text-text-bright">2030</div>
                       <div className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase">The Zenith Year</div>
                    </div>
                    <div className="space-y-1">
                       <div className="text-3xl font-display text-text-bright">Zero</div>
                       <div className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase">Tolerance for Friction</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full aspect-square relative flex items-center justify-center">
                 <div className="absolute inset-0 border border-teal-primary/10 rounded-full" />
                 <div className="absolute inset-20 border border-teal-primary/5 rounded-full" />
                 <motion.div 
                   animate={{ rotate: 360 }} 
                   transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                   className="w-full h-full border-t border-teal-primary/20 rounded-full" 
                 />
                 <div className="text-5xl font-display italic text-teal-primary opacity-20">Scale</div>
              </div>
           </motion.div>
        </section>

        {/* ACT IV: THE GENESIS — 0.6 - 0.8 */}
        <section className="sticky top-0 h-screen w-full flex items-center justify-center p-6 z-40 overflow-hidden">
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]),
               y: useTransform(scrollYProgress, [0.6, 0.8], [30, -30])
             }}
             className="max-w-4xl w-full text-center space-y-12 gpu-accelerate"
           >
              <div className="font-mono text-[10px] text-gold-primary tracking-[0.5em] uppercase">Act IV · The Spark</div>
              <div className="space-y-8">
                 <h2 className="text-3xl md:text-5xl font-display font-light text-text-secondary leading-relaxed">
                   We realized <span className="text-text-bright font-normal">APIs aren't enough.</span> <br />
                   You don't need another wrapper.
                 </h2>
                 <div className="w-16 h-px bg-gold-primary/30 mx-auto" />
                 <h3 className="text-4xl md:text-7xl font-display text-text-bright">
                   You need <span className="italic text-gold-light">Engineering.</span>
                 </h3>
              </div>
              <p className="max-w-xl mx-auto text-text-tertiary text-base font-light leading-relaxed">
                HosaduAI was born from watching brilliant product teams struggle with machine learning infrastructure. We build the intelligence layer so you can focus on the product.
              </p>
           </motion.div>
        </section>

        {/* ACT V: THE RESOLUTION — 0.8 - 1.0 */}
        <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6 md:p-12 z-40 overflow-hidden bg-bg-deep">
           <motion.div 
             style={{ 
               opacity: useTransform(scrollYProgress, [0.8, 0.85, 0.95], [0, 1, 1]),
               scale: useTransform(scrollYProgress, [0.8, 0.95], [0.95, 1])
             }}
             className="max-w-4xl w-full text-center space-y-10 md:space-y-16 mb-32 md:mb-0 gpu-accelerate"
           >
              <div className="space-y-4">
                 <motion.div 
                   animate={{ opacity: [0.4, 1, 0.4] }} 
                   transition={{ duration: 3, repeat: Infinity }}
                   className="font-mono text-[10px] text-gold-primary tracking-[1em] uppercase"
                 >
                   The Paradigm Shift
                 </motion.div>
                 <h2 className="text-5xl md:text-7xl font-display text-text-bright leading-tight">
                   From Prototype <br />
                   <span className="italic text-teal-light">to Production.</span>
                 </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left border-t border-b border-white/5 py-8 md:py-12">
                 <div className="space-y-2">
                    <div className="font-mono text-[10px] text-gold-light tracking-widest uppercase">The Hero</div>
                    <p className="text-sm text-text-secondary font-light">The product team, visionary and focused.</p>
                 </div>
                 <div className="space-y-2">
                    <div className="font-mono text-[10px] text-teal-primary tracking-widest uppercase">The Technology</div>
                    <p className="text-sm text-text-secondary font-light">Scalable, accurate, and production-ready.</p>
                 </div>
                 <div className="space-y-2">
                    <div className="font-mono text-[10px] text-[#C04838] tracking-widest uppercase">The Enemy</div>
                    <p className="text-sm text-text-secondary font-light">Permanently defeated through engineering.</p>
                 </div>
              </div>

              <div className="flex flex-col items-center gap-8 md:gap-10">
                 <p className="text-[11px] md:text-[12px] font-mono text-text-tertiary tracking-[0.3em] uppercase max-w-[280px]">
                   Ready to stop experimenting and start shipping?
                 </p>
                 <Link 
                   href="/contact"
                   className="group relative px-12 md:px-16 py-6 md:py-8 bg-gold-primary text-bg-deep font-body font-bold text-[13px] md:text-[14px] tracking-[0.4em] uppercase rounded-sm overflow-hidden flex items-center justify-center transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_80px_rgba(200,160,74,0.4)]"
                 >
                   <span className="relative z-10">Start a Project →</span>
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                 </Link>
              </div>
           </motion.div>
           
           {/* Fixed Footer at the very bottom of the viewport */}
           <div className="absolute bottom-4 md:bottom-10 left-0 right-0 font-mono text-[7px] md:text-[8px] text-text-tertiary/10 tracking-[0.5em] md:tracking-[1em] uppercase text-center pointer-events-none px-6">
             HosaduAI · Born in Bangalore · Built for the Future
           </div>
        </section>

      </main>
    </>
  )
}
