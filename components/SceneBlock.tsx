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

// Each line has text + optional highlighted spans
const sceneLines: { text: string; highlights?: string[] }[] = [
  { text: "He has an idea that could change everything." },
  { text: "Three AI prototypes. None of them production-ready.", highlights: ["None of them production-ready."] },
  { text: "A fine-tuned model that hallucinates on edge cases.", highlights: ["hallucinates"] },
  { text: "An agent framework that breaks every second deploy.", highlights: ["breaks"] },
  { text: "A demo that impressed investors but can't handle real users.", highlights: ["can't handle real users."] },
  { text: "His dev team is brilliant at product — not at AI infrastructure.", highlights: ["not at AI infrastructure."] },
  { text: "He's tried off-the-shelf. Too generic.", highlights: ["Too generic."] },
  { text: "He's tried hiring ML engineers. Too slow. Too expensive.", highlights: ["Too slow. Too expensive."] },
  { text: "The gap between AI demo and AI product keeps growing.", highlights: ["keeps growing."] },
  { text: "He is not behind.", highlights: ["not behind."] },
  { text: "He is ambitious, resourceful, and building something real.", highlights: ["ambitious, resourceful, and building something real."] },
  { text: "He just needs a partner who's done this before.", highlights: ["partner who's done this before."] },
]

function renderHighlighted(line: typeof sceneLines[0]) {
  if (!line.highlights || line.highlights.length === 0) return line.text

  let result = line.text
  line.highlights.forEach(h => {
    result = result.replace(h, `__HIGHLIGHT__${h}__END__`)
  })

  return result.split('__HIGHLIGHT__').map((part, i) => {
    if (part.startsWith('') && i === 0) return <span key={i}>{part}</span>
    const [highlighted, ...rest] = part.split('__END__')
    return (
      <span key={i}>
        <span className="text-text-bright">{highlighted}</span>
        {rest.join('')}
      </span>
    )
  })
}

export function SceneBlock() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<(HTMLDivElement | null)[]>([])
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const setup = async () => {
      const gsap = await gsapPromise
      if (!gsap) return
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (!(gsap.plugins as any).ScrollTrigger) gsap.registerPlugin(ScrollTrigger)

      const lines = linesRef.current.filter(Boolean) as HTMLDivElement[]

      // Set all lines invisible initially
      gsap.set(lines, { opacity: 0, y: 30, filter: 'blur(8px)' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${sceneLines.length * 120}%`,
          scrub: 1, // Reduced for tighter response
          pin: true,
          anticipatePin: 1,
        }
      })

      // Background transitions red → teal as story progresses
      if (bgRef.current) {
        tl.to(bgRef.current, {
          backgroundColor: 'rgba(61,144,128,0.12)',
          duration: lines.length,
          ease: 'none',
        }, 0)
      }

      // Progress bar grows
      if (progressRef.current) {
        tl.to(progressRef.current, {
          scaleX: 1,
          duration: lines.length,
          ease: 'none',
        }, 0)
      }

      // Each line: fade in, hold, fade out
      lines.forEach((line, i) => {
        const start = i * 1.2
        // Fade in
        tl.to(line, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power2.out',
        }, start)

        // Hold
        tl.to(line, { duration: 0.4 }, start + 0.6)

        // Fade out — unless last line
        if (i < lines.length - 1) {
          tl.to(line, {
            opacity: 0,
            y: -20,
            filter: 'blur(6px)',
            duration: 0.4,
            ease: 'power2.in',
          }, start + 1.0)
        }
      })
    }

    setup()

    return () => {
      import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(t => t.kill())
      })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      id="act-2"
      className="relative bg-bg-base overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Ambient background — starts red, turns teal */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none transition-none"
        style={{ backgroundColor: 'rgba(192,72,56,0.10)' }}
      />

      {/* Progress bar — bottom of screen */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5 z-20">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-red-500/60 via-gold-primary to-teal-primary origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Line counter top-right */}
      <div className="absolute top-8 right-8 font-mono text-[9px] text-text-tertiary tracking-[0.25em] uppercase z-20 hidden md:block">
        Act II · The Problem
      </div>

      {/* Centered stage — all lines stack here */}
      <div className="h-screen flex flex-col items-center justify-center px-6 md:px-16 relative z-10 gpu-accelerate">
        <div className="relative w-full max-w-3xl mx-auto text-center">
          {sceneLines.map((line, i) => (
            <div
              key={i}
              ref={el => { linesRef.current[i] = el }}
              className="absolute inset-0 flex flex-col items-center justify-center"
              aria-hidden={i > 0}
            >
              <p className={`font-display font-light leading-snug text-text-secondary ${
                i >= 9 // "She is not failing" onwards — bigger
                  ? 'text-3xl md:text-6xl'
                  : 'text-2xl md:text-4xl'
              }`}>
                {renderHighlighted(line)}
              </p>
              {/* Line number to aid rhythm */}
              <span className="mt-6 font-mono text-[9px] text-text-tertiary/40 tracking-[0.3em]">
                {String(i + 1).padStart(2, '0')} / {String(sceneLines.length).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
