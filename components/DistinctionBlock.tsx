'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export function DistinctionBlock() {
  return (
    <section className="py-section-y-mobile md:py-section-y px-4 bg-bg-base relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10">
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-display font-normal mb-12 md:mb-16"
        >
          There is a difference between a{' '}
          <span className="italic text-teal-light">tool</span> and a{' '}
          <span className="italic text-teal-light">system.</span>
        </motion.h2>

        {/* Two-Column Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
          
          {/* Tool Card (Hollow, Disconnected) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-bg-deep border border-white/5 rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col"
          >
            {/* Faint static background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            
            {/* Disconnected visual */}
            <div className="h-32 w-full mb-8 relative flex items-center justify-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
               <div className="flex gap-4">
                 <div className="w-12 h-12 border border-white/10 rounded-md" />
                 <div className="w-12 h-12 border border-white/10 rounded-md" />
                 <div className="w-12 h-12 border border-white/10 rounded-md" />
               </div>
               {/* Broken connection line */}
               <div className="absolute top-1/2 left-1/4 right-1/4 h-px border-t border-dashed border-white/10" />
            </div>

            <div className="font-mono text-xs tracking-widest text-text-tertiary mb-6 uppercase">
              The Old Way: A Tool
            </div>
            <ul className="space-y-4 relative z-10 flex-1">
              <li className="text-body-lg text-text-secondary flex gap-4">
                <span className="text-red-900/50 mt-1">✕</span> Is something you open when you remember to.
              </li>
              <li className="text-body-lg text-text-secondary flex gap-4">
                <span className="text-red-900/50 mt-1">✕</span> Requires your attention to function.
              </li>
              <li className="text-body-lg text-text-secondary flex gap-4">
                <span className="text-red-900/50 mt-1">✕</span> Lives in a separate tab, away from your work.
              </li>
              <li className="text-body-lg text-text-secondary flex gap-4">
                <span className="text-red-900/50 mt-1">✕</span> Works only when you prompt it.
              </li>
            </ul>
          </motion.div>

          {/* System Card (Glowing, Connected) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-bg-raised border border-teal-primary/30 rounded-2xl p-8 md:p-12 overflow-hidden shadow-premium-inner flex flex-col"
          >
            {/* Dynamic glowing background */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-br from-teal-primary/10 via-transparent to-gold-primary/5 pointer-events-none" 
            />
            
            {/* Connected visual matrix */}
            <div className="h-32 w-full mb-8 relative flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                 className="absolute w-48 h-48 border border-teal-primary/20 rounded-full"
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                 className="absolute w-32 h-32 border border-dashed border-gold-primary/30 rounded-full"
               />
               <div className="absolute w-16 h-16 bg-teal-primary/20 backdrop-blur-md border border-teal-primary/40 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(61,144,128,0.3)]">
                 <div className="w-2 h-2 bg-text-bright rounded-full animate-pulse" />
               </div>
            </div>

            <div className="font-mono text-xs tracking-widest text-teal-primary mb-6 uppercase relative z-10">
              The Evolution: A System
            </div>
            <ul className="space-y-4 relative z-10 flex-1">
              <li className="text-body-lg text-text-primary flex gap-4">
                <span className="text-teal-primary mt-1">✓</span> Runs whether you think about it or not.
              </li>
              <li className="text-body-lg text-text-primary flex gap-4">
                <span className="text-teal-primary mt-1">✓</span> Works silently in the operational background.
              </li>
              <li className="text-body-lg text-text-primary flex gap-4">
                <span className="text-teal-primary mt-1">✓</span> Lives inside how your business actually runs.
              </li>
              <li className="text-body-lg text-text-primary flex gap-4">
                <span className="text-teal-primary mt-1">✓</span> Improves continuously on its own.
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-2 border-gold-primary pl-6 md:pl-8 py-4 mb-12 md:mb-16 max-w-4xl"
        >
          <p className="text-2xl md:text-3xl font-display font-light italic text-text-bright leading-relaxed">
            Electricity is not something you open. Running water is not a subscription. The best infrastructure disappears — because it simply works.
          </p>
        </motion.div>

        {/* Positioning Statement */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl font-body font-light text-text-secondary max-w-3xl leading-relaxed"
        >
          HosaduAI does not build tools. We design operational systems. We don't add AI to what you do — we redesign what you do, with intelligence built into every layer.
        </motion.p>
      </div>
    </section>
  )
}
