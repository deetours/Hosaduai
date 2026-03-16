'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Nav } from '@/components/Nav'
import Link from 'next/link'

export default function RequestAuditPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    challenge: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push('/')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setError('')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      router.push('/thank-you')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-bg-deep relative selection:bg-gold-primary/30">
        
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[160px] bg-teal-primary/20"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[140px] bg-gold-primary/15"
          />
        </div>

        <div className="flex flex-col md:flex-row min-h-screen">
          
          {/* Left Column: Context (Sticky on Desktop) */}
          <div className="w-full md:w-5/12 lg:w-4/12 md:sticky md:top-0 md:h-screen flex flex-col justify-between p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/5 z-20 bg-bg-deep/50 backdrop-blur-sm">
            
            <div className="space-y-12">
              <Link href="/" className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-text-tertiary transition-colors hover:text-text-primary">
                <motion.span 
                  animate={{ x: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >←</motion.span>
                ESC TO HOME
              </Link>

              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-mono text-[10px] text-gold-primary tracking-[0.4em] uppercase"
                >
                  Act V · The Audit
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-display font-normal text-text-bright leading-tight"
                >
                  Before we build, <br />
                  <span className="italic text-teal-light">we understand.</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-sm lg:text-base text-text-secondary font-light leading-relaxed max-w-sm"
                >
                  A 45-minute deep dive into your firm's operational reality. No commitment. Just extreme clarity on how your business actually functions.
                </motion.p>
              </div>

              {/* Steps Timeline */}
              <div className="space-y-8">
                {[
                  { step: '01', title: 'We review', desc: 'Our team analyzes your submission within 48 hours.' },
                  { step: '02', title: 'We schedule', desc: "We'll invite you to a 1-on-1 operational audit session." },
                  { step: '03', title: 'We map', desc: 'You get a clear architectural blueprint of your potential AI layer.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <span className="font-mono text-[10px] text-gold-primary/40 mt-1">{item.step}</span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-body font-medium text-text-bright tracking-tight">{item.title}</h4>
                      <p className="text-[12px] text-text-tertiary font-light leading-snug">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <p className="font-mono text-[9px] text-text-tertiary/20 tracking-wider uppercase">
                HosaduAI · Private Application
              </p>
            </div>
          </div>

          {/* Right Column: The Form (Scrollable) */}
          <div className="w-full md:w-7/12 lg:w-8/12 p-8 md:p-16 lg:p-24 flex flex-col justify-center min-h-[50vh] md:min-h-screen z-10">
            <div className="max-w-xl w-full mx-auto">
              <form onSubmit={handleSubmit} className="space-y-16 lg:space-y-24">
                
                {/* Field 1: Name */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6"
                >
                  <label htmlFor="name" className="block space-y-2">
                    <span className="block text-2xl lg:text-3xl font-display font-normal text-text-bright">Who are we speaking with?</span>
                    <span className="block text-sm text-text-tertiary font-light">Your name — so we can address you properly.</span>
                  </label>
                  <input
                    required
                    autoFocus
                    autoComplete="name"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-transparent border-0 border-b-2 border-white/10 py-4 text-xl lg:text-2xl font-light text-text-primary placeholder:text-text-tertiary/20 focus:outline-none focus:border-gold-primary transition-colors duration-500"
                  />
                </motion.div>

                {/* Field 2: Business */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.5 }}
                   className="space-y-6"
                >
                  <label htmlFor="business" className="block space-y-2">
                    <span className="block text-2xl lg:text-3xl font-display font-normal text-text-bright">Tell us about your firm.</span>
                    <span className="block text-sm text-text-tertiary font-light">Type of practice, approximate size, active workload.</span>
                  </label>
                  <input
                    required
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="E.g., Architecture Studio, 8 people, 15 active projects"
                    className="w-full bg-transparent border-0 border-b-2 border-white/10 py-4 text-xl lg:text-2xl font-light text-text-primary placeholder:text-text-tertiary/20 focus:outline-none focus:border-gold-primary transition-colors duration-500"
                  />
                </motion.div>

                {/* Field 3: Challenge */}
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.6 }}
                   className="space-y-6"
                >
                  <label htmlFor="challenge" className="block space-y-2">
                    <span className="block text-2xl lg:text-3xl font-display font-normal text-text-bright">What is your operational reality?</span>
                    <span className="block text-sm text-text-tertiary font-light">Describe the friction, the manual loops, the breaking points.</span>
                  </label>
                  <textarea
                    required
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={1}
                    placeholder="The more detail, the better we can prepare..."
                    className="w-full bg-transparent border-0 border-b-2 border-white/10 py-4 text-xl lg:text-2xl font-light text-text-primary placeholder:text-text-tertiary/20 focus:outline-none focus:border-gold-primary transition-colors duration-500 resize-none overflow-hidden min-h-[4rem]"
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px';
                    }}
                  />
                </motion.div>

                <div className="flex flex-col gap-10">
                  {error && (
                    <p className="text-red-400 font-mono text-xs">{error}</p>
                  )}

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-8"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative px-12 py-5 bg-gold-primary text-bg-deep font-body font-semibold text-[13px] tracking-[0.2em] uppercase rounded-sm overflow-hidden flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(200,160,74,0.3)] disabled:opacity-50 w-full sm:w-auto text-center justify-center"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit Dossier'}</span>
                      <motion.span 
                        animate={{ x: isSubmitting ? 0 : [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative z-10"
                      >→</motion.span>
                    </button>

                    <p className="text-[10px] font-mono text-text-tertiary/40 tracking-[0.1em] uppercase text-center sm:text-left">
                      Strictly Confidential · We hear you within 48h
                    </p>
                  </motion.div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
