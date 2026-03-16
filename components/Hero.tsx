'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'

export function Hero() {
  const line1 = 'One AI system.'
  const line2 = 'Built around your firm.'

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax the core away as we scroll
  const coreY = useTransform(scrollYProgress, [0, 1], [0, 300])
  const coreOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Mouse parallax — the core drifts like a planet in space
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 60, damping: 25, mass: 0.5 }
  const coreMouseX = useSpring(mouseX, springConfig)
  const coreMouseY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Map cursor position to -15px...+15px range
      mouseX.set(((e.clientX / innerWidth) - 0.5) * 30)
      mouseY.set(((e.clientY / innerHeight) - 0.5) * 30)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: 'spring',
        damping: 20,
        stiffness: 100,
        mass: 0.5 
      }
    },
  }

  const rings = Array.from({ length: 5 })

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center lg:justify-start pt-24 pb-16 md:pt-0 overflow-hidden px-4 md:px-12 lg:px-24 xl:px-32">
      {/* Abstract Intelligence Core Background */}
      <motion.div 
        style={{ y: coreY, opacity: coreOpacity, x: coreMouseX, translateY: coreMouseY }}
        className="absolute top-1/2 left-1/2 lg:left-[75%] -translate-x-1/2 -translate-y-[45%] lg:-translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none opacity-60 z-0"
      >
        {rings.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              scale: [1, 1.02 + i * 0.02, 1],
            }}
            transition={{
              rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 rounded-full border border-teal-primary/20 backdrop-blur-[2px]"
            style={{
              width: `${100 - i * 15}%`,
              height: `${100 - i * 15}%`,
              margin: 'auto',
              background: i === 4 ? 'radial-gradient(circle, rgba(61,144,128,0.1) 0%, transparent 60%)' : 'transparent',
              boxShadow: i === 0 ? '0 0 120px rgba(200,160,74,0.05)' : 'none',
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
            }}
          />
        ))}
        {/* Core center intense glow */}
        <motion.div 
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold-primary/10 rounded-full blur-[60px]"
        />
      </motion.div>

      <div className="relative z-10 max-w-2xl text-center lg:text-left mt-16 md:mt-0">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-eyebrow text-gold-primary mb-8 md:mb-12 flex items-center justify-center lg:justify-start gap-4"
        >
          <span className="w-8 h-px bg-gold-primary/50" />
          AI OPERATING SYSTEM · INDIAN SERVICE BUSINESSES
        </motion.div>

        {/* Main Headline */}
        <motion.div 
          className="mb-6 md:mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="text-4xl md:text-6xl font-display font-light leading-tight md:leading-[1.1] mb-2 perspective-1000">
            {line1.split('').map((char, i) => (
              <motion.span
                key={`line1-${i}`}
                variants={item}
                className="inline-block transform-style-3d text-text-bright"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          <div className="text-4xl md:text-6xl font-display font-light italic text-teal-light leading-tight md:leading-[1.1] perspective-1000">
            {line2.split('').map((char, i) => (
              <motion.span
                key={`line2-${i}`}
                variants={item}
                className="inline-block transform-style-3d"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subheadline - Trimmed for impact */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-10 md:mb-12 font-body font-light leading-relaxed"
        >
          We replace your disconnected tools with one AI system that runs your operations — built for interior designers, architects, and consultants.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12"
        >
          <Link
            href="/request-audit"
            className="group relative overflow-hidden px-8 py-3.5 bg-gold-primary text-bg-deep font-body font-semibold text-[13px] tracking-widest uppercase rounded-sm hover:scale-[1.02] transition-all duration-300 ease-soft-spring shadow-premium-glow flex items-center justify-center"
          >
            <span className="relative z-10">Get a Free Systems Audit</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </Link>
          <Link
            href="#what-we-build"
            className="group px-8 py-3.5 border border-white/10 text-text-secondary font-body font-semibold text-[13px] tracking-widest uppercase rounded-sm hover:bg-white/5 hover:text-text-primary hover:border-gold-primary/30 transition-all duration-300 ease-soft-spring flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            See What We Build <span className="text-gold-primary group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Trust Micro-copy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center justify-center lg:justify-start gap-4"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-teal-primary/20 border border-teal-primary/40 backdrop-blur-md" />
            <div className="w-6 h-6 rounded-full bg-gold-primary/20 border border-gold-primary/40 backdrop-blur-md" />
          </div>
          <span className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase">
            Designed for scaling service firms
          </span>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
