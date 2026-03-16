'use client'

import { useRef, useState, useEffect, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export function SolutionBlock() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return
    const rect = gridRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section id="what-we-build" className="py-section-y-mobile md:py-section-y px-4 bg-bg-deep relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10">
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-display font-normal mb-4 md:mb-6"
        >
          Six systems. <span className="italic text-teal-light">One operating layer.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-text-secondary max-w-2xl mb-12 md:mb-16 leading-relaxed"
        >
          Not separate subscriptions. One coordinated AI architecture built into your firm.
        </motion.p>

        {/* Bento Grid with Proximity Effect */}
        <div 
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 group"
        >
          <div 
            className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-xl"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(200, 160, 74, 0.1), transparent 40%)`,
            }}
          />

          {/* CARD 1: Workflow Intelligence */}
          <CardWrapper index={0} className="md:col-span-2 md:row-span-1" mousePosition={mousePosition}>
            <div className="flex flex-col md:flex-row h-full gap-6 items-center">
              <div className="flex-1 space-y-4 z-10">
                <h3 className="text-2xl font-body font-semibold text-text-bright tracking-tight">Workflow intelligence</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">Your operations mapped, automated, and made structurally smart.</p>
              </div>
              <div className="w-full md:w-1/2 h-32 relative flex items-center justify-center">
                {/* Abstract Node Graph */}
                <div className="absolute inset-0 flex items-center flex-col justify-center gap-4 opacity-70">
                  <div className="flex gap-4">
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} className="w-8 h-8 rounded-lg border border-teal-primary/40 bg-teal-primary/10" />
                    <div className="w-16 h-px bg-gradient-to-r from-teal-primary/40 to-transparent self-center" />
                    <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5" />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5" />
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-primary/40 self-center" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} className="w-8 h-8 rounded-lg border border-gold-primary/40 bg-gold-primary/10" />
                  </div>
                </div>
              </div>
            </div>
          </CardWrapper>

          {/* CARD 2: Decision support */}
          <CardWrapper index={1} className="md:col-span-1 md:row-span-2 flex flex-col" mousePosition={mousePosition}>
             <div className="flex-1 relative w-full h-48 mb-6 overflow-hidden flex items-end justify-between px-4 opacity-70">
               {/* Abstract Bar Chart */}
               {[40, 70, 45, 90, 60].map((height, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   whileInView={{ height: `${height}%` }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                   className={clsx("w-8 rounded-t-sm", i === 3 ? "bg-gold-primary/40 shadow-[0_0_15px_rgba(200,160,74,0.3)]" : "bg-white/5 border-t border-white/10")}
                 />
               ))}
             </div>
             <div className="space-y-4 z-10">
                <h3 className="text-xl font-body font-semibold text-text-bright tracking-tight">Decision support</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">Right information surfaces exactly at the right moment.</p>
             </div>
          </CardWrapper>

          {/* CARD 3: Client coordination */}
          <CardWrapper index={2} className="md:col-span-1 md:row-span-1" mousePosition={mousePosition}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-primary/10 to-transparent rounded-tr-xl pointer-events-none" />
             <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className="space-y-2 opacity-70">
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="h-2 max-w-[60%] bg-teal-primary/20 rounded-full" />
                  <div className="h-2 max-w-[40%] bg-white/10 rounded-full" />
                  <div className="h-2 max-w-[80%] bg-white/5 rounded-full" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-body font-semibold text-text-bright tracking-tight">Client coordination</h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed">Communications organized without any manual effort.</p>
                </div>
             </div>
          </CardWrapper>

          {/* CARD 4: Vendor automation */}
          <CardWrapper index={3} className="md:col-span-1 md:row-span-1" mousePosition={mousePosition}>
             <div className="relative z-10 flex flex-col h-full justify-between gap-6">
               <div className="relative w-16 h-16 opacity-70">
                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border border-dashed border-white/20" />
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute inset-2 rounded-full border border-teal-primary/30" />
                 <div className="absolute inset-6 rounded-full bg-gold-primary/20 blur-sm" />
               </div>
               <div className="space-y-4">
                  <h3 className="text-xl font-body font-semibold text-text-bright tracking-tight">Vendor automation</h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed">Follow-ups and procurement flows run themselves quietly.</p>
               </div>
             </div>
          </CardWrapper>

          {/* CARD 5: Operational memory */}
          <CardWrapper index={4} className="md:col-span-2 md:row-span-1" mousePosition={mousePosition}>
             <div className="flex flex-col md:flex-row h-full gap-6 items-center">
                <div className="w-full md:w-1/2 grid grid-cols-6 gap-2 opacity-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-bg-raised/50 to-transparent z-10 pointer-events-none" />
                  {isMounted && Array.from({ length: 24 }).map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                      className={clsx("w-full aspect-square rounded-[2px]", Math.random() > 0.8 ? "bg-gold-primary/40" : "bg-white/10")}
                    />
                  ))}
                </div>
                <div className="flex-1 space-y-4 z-10">
                  <h3 className="text-2xl font-body font-semibold text-text-bright tracking-tight">Operational memory</h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed">Your business stops forgetting; every action becomes a repeatable learning pattern.</p>
                </div>
             </div>
          </CardWrapper>

          {/* CARD 6: Continuous improvement */}
          <CardWrapper index={5} className="md:col-span-1 md:row-span-1 border-gold-primary/30 bg-gold-primary/5" mousePosition={mousePosition}>
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-gold-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-body font-semibold text-text-bright tracking-tight">Continuous improvement</h3>
                <p className="text-body-sm text-text-secondary leading-relaxed">The system gets more intelligent every month, autonomously.</p>
              </div>
              <div className="w-full h-12 relative overflow-hidden rounded-md opacity-70">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent skew-x-12"
                />
                <div className="absolute bottom-0 w-full h-px bg-gold-primary/30" />
              </div>
            </div>
          </CardWrapper>

        </div>

        {/* Commitment Statement — Manifesto Rows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Top label */}
          <div className="font-mono text-[10px] text-text-tertiary tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-text-tertiary/30" />
            How we work
          </div>

          <div className="space-y-0 border-t border-white/5">
            {[
              {
                num: '01',
                verb: 'Design',
                body: 'A system built around how your firm actually works — not a template. We map every workflow before we write a line.',
                accent: 'text-teal-light',
                glow: 'from-teal-primary/5',
              },
              {
                num: '02',
                verb: 'Deploy',
                body: 'Installed inside your operations, not beside them. No IT overhead. No prompts to write. No tools to manage.',
                accent: 'text-gold-light',
                glow: 'from-gold-primary/5',
              },
              {
                num: '03',
                verb: 'Stay accountable',
                body: 'We measure on outcomes. Monthly reviews. If the system underperforms, we fix it — not update a roadmap.',
                accent: 'text-indigo-300',
                glow: 'from-indigo-500/5',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border-b border-white/5 cursor-default overflow-hidden"
              >
                {/* Sweep bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 py-7 md:py-9 flex items-center gap-6 md:gap-10">
                  {/* Number */}
                  <span className="font-mono text-[10px] tracking-[0.3em] text-text-tertiary/40 w-8 flex-shrink-0">{item.num}</span>

                  {/* Verb */}
                  <h4 className={`font-display text-3xl md:text-5xl font-normal w-36 md:w-56 flex-shrink-0 leading-none transition-all duration-400 ${item.accent} group-hover:opacity-100 opacity-70`}>
                    {item.verb}
                  </h4>

                  {/* Body — slides in on hover */}
                  <p className="text-sm text-text-tertiary leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-2 group-hover:translate-x-0">
                    {item.body}
                  </p>

                  {/* Arrow */}
                  <div className="ml-auto text-text-tertiary/20 group-hover:text-text-tertiary/60 group-hover:translate-x-1 transition-all duration-300 text-lg flex-shrink-0">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CardWrapper({ children, className, index, mousePosition }: { children: React.ReactNode, className?: string, index: number, mousePosition: { x: number, y: number } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        'relative flex flex-col p-6 md:p-8 rounded-xl border border-white/5 bg-bg-raised/50 backdrop-blur-md overflow-hidden transition-colors hover:border-white/10 group/card',
        className
      )}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  )
}
