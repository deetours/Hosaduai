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

export function PrinciplesBlock() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const principles = [
    {
      number: '01',
      title: 'Process intelligence over generative output.',
      description:
        'We design systems that understand your actual workflow, not systems that generate novelty.',
    },
    {
      number: '02',
      title: 'Embedded in the workflow — not beside it.',
      description:
        'The system runs inside how you work, not in a separate tool you have to remember to use.',
    },
    {
      number: '03',
      title: 'Measured in outcomes, not features.',
      description:
        'We succeed when your business runs better, measurably. Not by how many buttons we added.',
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return

    const setupAnimation = async () => {
      const gsap = await gsapPromise
      if (!gsap) return
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      if (!(gsap.plugins as any).ScrollTrigger) gsap.registerPlugin(ScrollTrigger)

      const cards = cardsRef.current.filter(Boolean)
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top+=100', // Pin slightly below the top
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        })
      })
    }

    setupAnimation()
    
    return () => {
      const ScrollTrigger = (window as any).ScrollTrigger
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="py-24 px-4 bg-bg-deep relative">
      <div className="max-w-content mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-normal mb-24 md:mb-32 text-center">
          Three beliefs that define<br />
          <span className="italic text-gold-light">everything we build.</span>
        </h2>

        <div className="relative pb-32">
          {principles.map((principle, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              // Add a slight top margin based on index so they stack with offsets
              className={`w-full max-w-4xl mx-auto bg-bg-base border border-border-strong rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden`}
              style={{ marginTop: index > 0 ? '10vh' : '0' }}
            >
              {/* Massive background number */}
              <div className="absolute -right-10 -bottom-20 text-[200px] md:text-[300px] font-display font-bold text-white/[0.02] leading-none pointer-events-none">
                {principle.number}
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                 <div className="font-mono text-2xl md:text-4xl text-gold-primary">
                   {principle.number}
                 </div>
                 <div className="flex-1">
                   <h3 className="text-2xl md:text-4xl font-display font-normal text-text-bright mb-6 leading-tight">
                     {principle.title}
                   </h3>
                   <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-2xl">
                     {principle.description}
                   </p>
                 </div>
              </div>

              {/* Top highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
