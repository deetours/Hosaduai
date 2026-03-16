'use client'

import { motion } from 'framer-motion'

export function AIIllusionBlock() {
  const failures = [
    "A chatbot that wrote beautiful emails — but knew nothing about your client relationships",
    "An automation platform that connected apps — but couldn't understand a real workflow",
    "An AI assistant that answered questions — but forgot everything by the next session",
    "A dozen subscriptions. None of them speaking to each other.",
  ]

  return (
    <section className="py-section-y-mobile md:py-section-y px-4 bg-bg-deep relative overflow-hidden">
      <div className="max-w-content mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: The Narrative */}
        <div>
          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-display font-normal mb-6 md:mb-8"
          >
            The AI boom arrived.{' '}
            <span className="italic text-teal-light">And changed nothing.</span>
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-text-secondary mb-10 md:mb-12 leading-relaxed"
          >
            In 2023, the world was told AI had arrived. Thousands of products launched. Productivity would soar. Work would transform. Instead, businesses got tool chaos.
          </motion.p>

          {/* Failure List */}
          <div className="space-y-6 mb-12">
            {failures.map((failure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 items-start"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2.5 shrink-0" />
                <p className="text-body text-text-secondary leading-relaxed">
                  {failure}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pivotal Insight */}
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 md:mt-16 border-l-2 border-gold-primary pl-6"
          >
            <p className="text-2xl md:text-3xl font-display font-normal italic leading-tight">
              The industry confused{' '}
              <span className="text-gold-light">activity</span> for{' '}
              <span className="text-text-bright">transformation.</span>
            </p>
          </motion.div>
        </div>

        {/* Right Side: The Visual Illusion (Glitching Broken UI) */}
        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center opacity-80">
           {/* Broken ambient blur */}
           <motion.div 
             animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
             className="absolute w-[300px] h-[300px] bg-red-900/10 rounded-full blur-[80px]" 
           />

           {/* Central Fractured Glass Panel */}
           <motion.div 
             initial={{ rotateX: 10, rotateY: -10 }}
             animate={{ rotateX: [10, 15, 10], rotateY: [-10, -5, -10] }}
             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
             className="relative w-full max-w-sm aspect-[3/4] border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-xl shadow-2xl flex flex-col p-6 overflow-hidden"
           >
              {/* Fake UI Header */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-gold-primary/30" />
                <div className="w-3 h-3 rounded-full bg-teal-primary/30" />
              </div>

              {/* Fragmented UI Lines */}
              <div className="flex-1 flex flex-col gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-8 bg-white/5 rounded-sm relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ 
                        duration: 1.5 + Math.random(), 
                        repeat: Infinity, 
                        delay: Math.random() * 2,
                        ease: 'linear'
                      }}
                      className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-red-500/20 to-transparent skew-x-12"
                    />
                  </div>
                ))}
              </div>

              {/* Error State Overlays */}
              <motion.div 
                animate={{ opacity: [0, 1, 0, 0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 0.9, 1] }}
                className="absolute inset-x-0 top-1/3 h-20 bg-red-500/5 backdrop-blur-[2px] border-y border-red-500/20 flex items-center justify-center"
              >
                <div className="font-mono text-xs text-red-400/70 tracking-[0.2em] uppercase">Connection Lost</div>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
