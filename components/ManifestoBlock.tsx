'use client'

import { useEffect, useRef } from 'react'

const gsapPromise = typeof window !== 'undefined' 
  ? import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
      })
      return gsap
    })
  : Promise.resolve(null)

export function ManifestoBlock() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([])
  const finalContainerRef = useRef<HTMLDivElement>(null)

  const manifestoLines = [
    { text: 'We believe AI has been wasted on novelty.', bright: false },
    { text: 'We believe its purpose is permanence.', bright: true },
    { text: 'We believe businesses are not broken.', bright: false },
    { text: 'Their systems are. And systems can be redesigned.', bright: true },
    { text: 'We believe the best AI is the kind you stop noticing.', bright: false },
    { text: 'Because it simply works.', bright: true },
    { text: "We believe India's businesses deserve operational intelligence.", bright: false },
    { text: 'Not someday. Today.', bright: true, gold: true },
    { text: 'We believe the future of AI is not a smarter chatbot.', bright: false },
    { text: 'It is a smarter business.', bright: true },
  ]

  const closingLines = [
    { text: 'We are building that future.', bright: true },
    { text: 'One operational system at a time.', bright: true },
    { text: 'Starting now.', bright: true, gold: true, italic: true },
  ]

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const setupAnimation = async () => {
      const gsap = await gsapPromise
      if (!gsap) return
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (!(gsap.plugins as any).ScrollTrigger) gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=400%', // Make the scroll sequence luxuriously long
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      })

      // Hide all lines initially
      const lines = linesRef.current.filter(Boolean)
      gsap.set(lines, { opacity: 0, y: 50, scale: 0.9 })
      gsap.set(finalContainerRef.current, { opacity: 0, scale: 0.9 })

      // Reveal and hide each line
      lines.forEach((line, i) => {
        // Fade In
        tl.to(line, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out'
        })
        
        // Hold
        tl.to(line, { duration: 0.5 })
        
        // Fade Out (unless it's the very last line before the closing statement)
        if (i < lines.length - 1) {
          tl.to(line, {
            opacity: 0,
            y: -50,
            scale: 1.1,
            duration: 1,
            ease: 'power2.in'
          })
        } else {
           tl.to(line, { opacity: 0, duration: 0.5 }) // Quick fade out for the last line
        }
      })

      // Finally, bring in the massive closing block
      tl.to(finalContainerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out'
      })
      
      tl.to({}, { duration: 1 }) // Buffer at the end
    }

    setupAnimation()
    
    return () => {
      const ScrollTrigger = (window as any).ScrollTrigger
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="h-screen px-4 bg-bg-deep relative overflow-hidden flex items-center justify-center">
      {/* Dynamic grain overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* Ambient center glow */}
      <div className="absolute w-[800px] h-[800px] bg-teal-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 w-full" ref={textContainerRef}>
        
        {/* The Scrub Sequence */}
        <div className="absolute inset-0 flex items-center justify-center">
          {manifestoLines.map((line, index) => (
            <p
              key={index}
              ref={(el) => {
                linesRef.current[index] = el
              }}
              className={`absolute text-center text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-tight w-full opacity-0 ${
                line.bright ? 'text-text-bright' : 'text-text-secondary'
              } ${line.gold ? 'text-gold-light' : ''}`}
            >
              {line.text}
            </p>
          ))}
        </div>

        {/* The Grand Finale */}
        <div 
          ref={finalContainerRef} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 space-y-4 md:space-y-8"
        >
          {closingLines.map((line, index) => (
            <p
              key={index}
              className={`text-4xl md:text-6xl lg:text-7xl font-display font-normal leading-none tracking-tight ${
                line.bright ? 'text-text-bright' : 'text-text-secondary'
              } ${line.gold ? 'text-gold-light' : ''} ${
                line.italic ? 'italic' : ''
              }`}
            >
              {line.text}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
