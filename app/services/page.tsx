'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Nav } from '@/components/Nav'
import Link from 'next/link'

const services = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Systems',
    description: 'High-performance applications built with architectural precision. React, Next.js, and Native Mobile solutions that feel instantaneous.',
    capabilities: ['Full-stack Architecture', 'Real-time Engines', 'Native Performance'],
    accent: 'teal'
  },
  {
    id: 'ui-ux',
    title: 'Interface & UX Architecture',
    description: 'World-class digital experiences. We design interfaces that disappear so the task remains. Exactly like the experience you are in right now.',
    capabilities: ['Cinematic Motion Design', 'Design Systems', 'User Psychology'],
    accent: 'gold'
  },
  {
    id: 'agents',
    title: 'Autonomous AI Agents',
    description: 'Custom agents built for your specific niche. They don’t just chat—they execute, decide, and integrate with your existing software stack.',
    capabilities: ['Workflow Orchestration', 'Multi-agent Systems', 'Tools Integration'],
    accent: 'warm-white'
  },
  {
    id: 'fine-tuning',
    title: 'Model Fine-Tuning',
    description: 'Training intelligence on your proprietary data. We tune models to your brand voice, industry terminology, and private knowledge base.',
    capabilities: ['Private LLMs', 'RAG Optimizations', 'Niche Intelligence'],
    accent: 'blue-grey'
  },
  {
    id: 'automation',
    title: 'Deep Automations',
    description: 'Connecting disparate tools into single, invisible workflows. High-stakes automations that eliminate manual loops and human error.',
    capabilities: ['Infrastructure Design', 'API Orchestration', 'Error-proof Pipelines'],
    accent: 'teal'
  }
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Hero animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  return (
    <>
      <Nav />
      <main ref={containerRef} className="bg-bg-deep selection:bg-gold-primary/30">
        
        {/* HERO SECTION */}
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-20 gpu-accelerate">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="text-center space-y-8 px-6"
          >
            <motion.div 
               initial={{ opacity: 0, tracking: '0.1em' }}
               animate={{ opacity: 1, tracking: '0.4em' }}
               transition={{ duration: 1.5, ease: 'easeOut' }}
               className="font-mono text-[10px] text-gold-primary uppercase"
            >
              Capabilities · The Build Layer
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-normal text-text-bright leading-[0.9] tracking-tighter">
              We don't just <span className="italic text-teal-light">advise.</span> <br />
              We <span className="font-bold">build.</span>
            </h1>
            <p className="max-w-xl mx-auto text-text-secondary text-base md:text-lg font-light leading-relaxed">
              Engineering capability across every layer. From world-class interfaces to private local intelligence.
            </p>
          </motion.div>

          {/* Ambient background glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(200,160,74,0.05)_0%,transparent_70%)]" />
        </section>

        {/* SERVICES CATALOG (Sticky Scroll) */}
        <section className="relative h-[500vh]">
          {services.map((service, index) => (
            <ServiceRow 
              key={service.id} 
              service={service} 
              index={index} 
              progress={scrollYProgress} 
            />
          ))}
        </section>

        {/* ANTI-TIER PRICING SECTION */}
        <section className="relative min-h-[120vh] flex flex-col items-center justify-center bg-bg-deep px-6 py-24 z-30 gpu-accelerate">
          
          <div className="max-w-4xl w-full text-center space-y-16">
            
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display text-text-bright"
              >
                Pricing.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-mono text-[10px] text-text-tertiary italic tracking-widest"
              >
                (The part you actually scrolled down for.)
              </motion.p>
            </div>

            <motion.div 
               initial={{ opacity: 0, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, filter: 'blur(0px)' }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="space-y-10"
            >
              <p className="text-xl md:text-3xl font-display font-light text-text-secondary leading-relaxed">
                We don't do <span className="text-gold-light/60">"Basic"</span>, <span className="text-gold-light/80">"Pro"</span>, or <span className="text-gold-light">"Enterprise"</span> tiers. 
                Your business isn't a template, and our pricing isn't either. 
              </p>
              
              <div className="w-12 h-px bg-gold-primary/30 mx-auto" />

              <p className="text-lg md:text-xl text-text-tertiary max-w-2xl mx-auto font-light leading-relaxed">
                We build custom operational architectures. Send us your reality, and we will tell you exactly what it takes to transform it. No sales traps. Just engineering.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
            >
              <Link 
                href="/request-audit"
                className="group relative inline-flex items-center gap-6 px-12 py-6 bg-transparent border border-gold-primary text-gold-primary rounded-full overflow-hidden transition-all duration-500 hover:bg-gold-primary hover:text-bg-deep shadow-[0_0_40px_rgba(200,160,74,0.1)] hover:shadow-[0_0_60px_rgba(200,160,74,0.3)]"
              >
                <span className="relative z-10 font-body font-bold text-[13px] tracking-[0.3em] uppercase">Detail Your Requirements →</span>
                <div className="absolute inset-0 bg-gold-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </motion.div>

          </div>

          <div className="absolute bottom-12 font-mono text-[9px] text-text-tertiary/20 tracking-[0.5em] uppercase">
            HosaduAI · Engineering Accountability
          </div>
        </section>

      </main>
    </>
  )
}

function ServiceRow({ service, index, progress }: { service: any, index: number, progress: any }) {
  const rowRef = useRef<HTMLDivElement>(null)
  
  // Each service occupies a roughly 0.2 slice of the 1.0 scroll progress (0.1 to 0.9 range)
  const start = 0.1 + (index * 0.15)
  const end = start + 0.15
  
  const opacity = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0])
  const y = useTransform(progress, [start - 0.05, start, end, end + 0.05], [50, 0, 0, -50])
  
  return (
    <motion.div 
      style={{ opacity, y }}
      className="sticky top-0 h-screen w-full flex items-center justify-center px-6 gpu-accelerate"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-gold-primary/50 tracking-[0.4em] uppercase">Service 0{index + 1}</span>
            <h2 className="text-4xl md:text-6xl font-display text-text-bright leading-tight">
              {service.title}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-md">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {service.capabilities.map((cap: string, i: number) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[11px] font-mono text-text-tertiary uppercase tracking-wider">
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Visual Anchor */}
        <div className="hidden md:flex flex-col items-center justify-center relative aspect-square group">
          <div className={`absolute inset-0 bg-gradient-to-br from-${service.accent}-primary/10 to-transparent blur-[100px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000`} />
          
          {/* Abstract Visualization Mock-up (CSS based) */}
          <div className="relative z-10 w-64 h-64 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
             {index === 0 && <WebVisual />}
             {index === 1 && <UXVisual />}
             {index === 2 && <AgentsVisual />}
             {index === 4 && <AutomationVisual />}
             {index === 3 && <ModelVisual />}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

// Visual placeholders
const WebVisual = () => (
   <div className="w-full h-full flex items-center justify-center gap-2 p-8">
      {[40, 70, 50, 90, 30].map((h, i) => (
         <motion.div 
            key={i} 
            animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            className="flex-1 bg-teal-primary/20 border-t border-teal-primary/40 rounded-t-sm" 
         />
      ))}
   </div>
)

const UXVisual = () => (
   <div className="relative w-32 h-32">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 border border-dashed border-gold-primary/30 rounded-full" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute inset-4 border border-gold-primary/10 rounded-full" />
      <motion.div className="absolute inset-[40%] bg-gold-primary/20 blur-md rounded-full" />
   </div>
)

const AgentsVisual = () => (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.div 
          key={i} 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
          className="w-4 h-4 rounded-full bg-teal-primary/30" 
        />
      ))}
    </div>
)

const ModelVisual = () => (
   <div className="flex flex-col gap-1 w-full p-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div 
          key={i}
          initial={{ width: '20%' }}
          whileInView={{ width: ['20%', `${40 + Math.random() * 60}%`] }}
          className="h-1 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div 
            animate={{ x: ['-100%', '100%'] }} 
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-1/2 h-full bg-gold-primary/40" 
          />
        </motion.div>
      ))}
   </div>
)

const AutomationVisual = () => (
   <div className="w-40 h-40 relative flex items-center justify-center">
      <svg className="w-full h-full opacity-30">
        <motion.circle 
          cx="80" cy="80" r="60" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeDasharray="4 4"
          className="text-teal-primary"
          animate={{ rotate: 360 }}
          style={{ originX: '80px', originY: '80px' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/5" />
   </div>
)
