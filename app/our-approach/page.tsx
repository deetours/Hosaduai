'use client'

import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

const PHASE_LIST = [
  { num: '01', name: 'Discovery', color: '#E08070' },
  { num: '02', name: 'Architecture', color: '#C8A04A' },
  { num: '03', name: 'Build', color: '#818CF8' },
  { num: '04', name: 'Deployment', color: '#3D9080' },
  { num: '05', name: 'Evolution', color: '#4ADE80' },
]

function PhasePulseHero() {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActivePhase(p => (p + 1) % PHASE_LIST.length), 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Ambient rotating background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'conic-gradient(from 180deg at 50% 60%, rgba(61,144,128,0.04) 0deg, transparent 90deg, rgba(200,160,74,0.04) 200deg, transparent 360deg)' }}
      />

      {/* Radial glow that shifts with active phase */}
      <motion.div
        animate={{ backgroundColor: `${PHASE_LIST[activePhase].color}10` }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="font-mono text-[11px] text-gold-primary tracking-[0.35em] mb-10 flex items-center justify-center gap-3">
          <motion.span animate={{ scaleX: [0,1] }} transition={{ delay: 0.3, duration: 0.5 }}
            className="block w-8 h-px bg-gold-primary/40 origin-left" />
          THE PROCESS · FIVE PHASES
          <motion.span animate={{ scaleX: [0,1] }} transition={{ delay: 0.3, duration: 0.5 }}
            className="block w-8 h-px bg-gold-primary/40 origin-right" />
        </motion.div>

        {/* Phase pulse timeline */}
        <div className="flex items-center justify-center gap-0 mb-14">
          {PHASE_LIST.map((phase, i) => (
            <div key={i} className="flex items-center">
              {/* Connector line */}
              {i > 0 && (
                <motion.div
                  animate={{
                    backgroundColor: i <= activePhase ? phase.color : 'rgba(255,255,255,0.05)',
                    opacity: i <= activePhase ? 0.5 : 0.15,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-12 md:w-20 h-px"
                />
              )}
              {/* Phase dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{
                    scale: activePhase === i ? [1, 1.4, 1] : 1,
                    boxShadow: activePhase === i
                      ? [`0 0 0 0 ${phase.color}40`, `0 0 0 8px transparent`]
                      : '0 0 0 0 transparent',
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-3 h-3 rounded-full border"
                  style={{
                    borderColor: i <= activePhase ? phase.color : 'rgba(255,255,255,0.15)',
                    backgroundColor: activePhase === i ? phase.color : i < activePhase ? `${phase.color}40` : 'transparent',
                  }}
                />
                <motion.div
                  animate={{ opacity: activePhase === i ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-mono text-[8px] tracking-[0.2em] text-text-tertiary">{phase.num}</div>
                  <AnimatePresence mode="wait">
                    {activePhase === i && (
                      <motion.div key={phase.name}
                        initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}
                        className="text-[10px] font-body font-medium"
                        style={{ color: phase.color }}
                      >
                        {phase.name}
                      </motion.div>
                    )}
                    {activePhase !== i && (
                      <motion.div key={`${phase.name}-dim`}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[10px] font-body text-text-tertiary/40"
                      >
                        {phase.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Headline — word-by-word */}
        <div className="mb-4">
          {'The way we work is'.split(' ').map((word, i) => (
            <motion.span key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-4xl md:text-6xl font-display font-light text-text-secondary mr-[0.25em] leading-tight"
            >{word}</motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-display font-normal italic text-teal-light leading-tight mb-10"
        >
          part of what we build.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          className="text-base text-text-secondary font-light max-w-sm mx-auto mb-8"
        >
          Five phases. One system. Accountable to outcomes.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-2 font-mono text-[10px] text-text-tertiary tracking-[0.25em]">
          <span>Scroll through each phase</span>
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const phases = [
  {
    number: '01',
    name: 'Discovery',
    duration: 'Week 1',
    tagline: 'We map the product before we write a line of code.',
    description: 'A deep examination of your business goals and technical constraints. We leave with a complete picture of your product reality — not just a feature list.',
    details: ['Technical feasibility and constraint mapping', 'Core user journey definition', 'Data architecture and model selection', 'MVP scope prioritisation matrix'],
    accentColor: 'rgba(192,72,56,0.08)',
    accentBorder: 'border-[#C04838]/20',
    accentText: 'text-[#E08070]',
    visual: <AuditVisual />,
  },
  {
    number: '02',
    name: 'Architecture Design',
    duration: 'Weeks 2–3',
    tagline: 'Your AI product, engineered from the ground up.',
    description: 'We design your intelligence layer. Not from a wrapper — from your core requirements. Every component, API, and model interaction is specified. You review and approve the blueprint before we build.',
    details: ['Custom system architecture blueprint', 'Database and API specifications', 'AI model and agent design', 'Security and data flow mapping'],
    accentColor: 'rgba(200,160,74,0.08)',
    accentBorder: 'border-gold-primary/20',
    accentText: 'text-gold-light',
    visual: <DesignVisual />,
  },
  {
    number: '03',
    name: 'Build & Integration',
    duration: 'Weeks 4–6',
    tagline: 'We build it. You don\'t write a single line.',
    description: 'Our engineering team builds and connects every system. You have no technical overhead. We handle the full development lifecycle — you see working prototypes, not Jira tickets.',
    details: ['Full system build by our team', 'Integration with your existing tools', 'Automated testing and quality assurance', 'Staged rollout with zero disruption'],
    accentColor: 'rgba(129,140,248,0.08)',
    accentBorder: 'border-indigo-500/20',
    accentText: 'text-indigo-300',
    visual: <BuildVisual />,
  },
  {
    number: '04',
    name: 'Deployment',
    duration: 'Week 7',
    tagline: 'Production-ready code deployed to your environment.',
    description: 'We deploy the application into your cloud securely. We monitor the launch — with our team actively preventing drift. We do not just hand over a repo and leave. We stay until the system is stable.',
    details: ['Secure deployment to your infrastructure', 'Codebase and architecture documentation', 'First-week monitoring and bug fixes', 'System adjustment based on live data'],
    accentColor: 'rgba(61,144,128,0.08)',
    accentBorder: 'border-teal-primary/20',
    accentText: 'text-teal-light',
    visual: <DeployVisual />,
  },
  {
    number: '05',
    name: 'Evolution',
    duration: 'Ongoing',
    tagline: 'We measure outcomes. We refactor what underperforms.',
    description: 'Continuous monitoring of model latency and accuracy. If the system degrades, we fine-tune it. As your userbase grows, the system scales with it. Your AI product is never static.',
    details: ['Monthly accuracy and latency review', 'Continuous model fine-tuning', 'System evolution as your product changes', 'Priority engineering support'],
    accentColor: 'rgba(74,222,128,0.08)',
    accentBorder: 'border-emerald-500/20',
    accentText: 'text-emerald-300',
    visual: <EvolveVisual />,
  },
]

// ─── Visualizations ───────────────────────────────────────────────────────────

function AuditVisual() {
  const nodes = ['Client Communication', 'Vendor Flow', 'Project Tracking', 'Financial Ops', 'Document System', 'Team Coordination']
  return (
    <div className="w-full max-w-xs">
      <div className="font-mono text-[9px] text-[#E08070] tracking-[0.2em] mb-3">DISCOVERY IN PROGRESS</div>
      <div className="space-y-2">
        {nodes.map((n, i) => (
          <motion.div key={i} initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }} transition={{ delay: i * 0.2, duration: 0.5 }}
            className="flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-[#C04838]/40 to-transparent" />
            <span className="text-[10px] text-text-tertiary whitespace-nowrap">{n}</span>
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ delay: 0.5 + i * 0.2, duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#C04838]" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DesignVisual() {
  return (
    <div className="w-full max-w-xs">
      <div className="font-mono text-[9px] text-gold-primary tracking-[0.2em] mb-3">ARCHITECTURE BLUEPRINT</div>
      <div className="relative h-36 border border-gold-primary/10 rounded-lg bg-gold-primary/3">
        {/* Grid lines */}
        {[0, 1, 2, 3].map(i => (
          <div key={i} className="absolute left-0 right-0 border-t border-gold-primary/5" style={{ top: `${(i + 1) * 25}%` }} />
        ))}
        {[0, 1, 2].map(i => (
          <div key={i} className="absolute top-0 bottom-0 border-l border-gold-primary/5" style={{ left: `${(i + 1) * 25}%` }} />
        ))}
        {/* Blueprint boxes */}
        {[
          { x: 5, y: 8, w: 35, h: 35, label: 'Comm Layer' },
          { x: 55, y: 8, w: 40, h: 35, label: 'Doc Engine' },
          { x: 5, y: 55, w: 90, h: 30, label: 'Intelligence Core' },
        ].map((box, i) => (
          <motion.div key={i}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.2 }}
            className="absolute border border-gold-primary/30 bg-gold-primary/5 flex items-center justify-center"
            style={{ left: `${box.x}%`, top: `${box.y}%`, width: `${box.w}%`, height: `${box.h}%` }}>
            <span className="text-[8px] text-gold-primary/60 font-mono">{box.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BuildVisual() {
  const steps = ['Auth & permissions', 'Data pipeline', 'AI integrations', 'Automations', 'Testing complete']
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="font-mono text-[9px] text-indigo-300 tracking-[0.2em] mb-3">BUILD STATUS</div>
      {steps.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="flex items-center gap-3 bg-white/4 border border-white/5 rounded-lg px-3 py-2">
          <div className="w-3.5 h-3.5 rounded-full border border-indigo-400/40 flex items-center justify-center flex-shrink-0">
            <motion.div animate={{ scale: [0.5, 1, 0.5] }} transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          </div>
          <span className="text-[11px] text-text-secondary">{s}</span>
          <motion.span animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: i * 0.3, duration: 1.5, repeat: Infinity }}
            className="ml-auto text-[9px] text-indigo-300 font-mono">✓</motion.span>
        </motion.div>
      ))}
    </div>
  )
}

function DeployVisual() {
  return (
    <div className="w-full max-w-xs">
      <div className="font-mono text-[9px] text-teal-primary tracking-[0.2em] mb-3">PRODUCTION LIVE</div>
      <div className="space-y-2.5">
        {[
          { label: 'Cloud Infrastructure', active: true },
          { label: 'Database Sharding', active: true },
          { label: 'AI Inference APIs', active: true },
          { label: 'Vector Stores', active: true },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}
            className="flex items-center justify-between bg-white/4 border border-white/5 rounded-lg px-3 py-2">
            <span className="text-[11px] text-text-secondary">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
              <span className="text-[9px] font-mono text-teal-light">LIVE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function EvolveVisual() {
  const metrics = [
    { label: 'Vendor response time', before: '4.2d', after: '6h', up: true },
    { label: 'Invoice cycle', before: '12d', after: '3d', up: true },
    { label: 'Project overruns', before: '38%', after: '8%', up: false },
  ]
  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="font-mono text-[9px] text-emerald-400 tracking-[0.2em] mb-3">MONTHLY REVIEW · MARCH</div>
      {metrics.map((m, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white/4 border border-white/5 rounded-lg px-4 py-3">
          <div className="text-[10px] text-text-tertiary mb-2">{m.label}</div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-text-secondary line-through opacity-50">{m.before}</span>
            <span className="text-[10px] text-emerald-400">→</span>
            <span className={`text-sm font-medium ${m.up ? 'text-emerald-300' : 'text-emerald-300'}`}>{m.after}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Phase Panel ──────────────────────────────────────────────────────────────

function PhasePanel({ phase, index, total, scrollYProgress }: {
  phase: typeof phases[0], index: number, total: number,
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const seg = 1 / total
  const start = index * seg
  const end = start + seg

  const opacity = useTransform(scrollYProgress,
    [Math.max(0, start - 0.01), start + 0.07, end - 0.07, Math.min(1, end + 0.01)],
    [0, 1, 1, index === total - 1 ? 1 : 0])
  const y = useTransform(scrollYProgress, [start, start + 0.08], [40, 0])

  return (
    <motion.div className="absolute inset-0 flex items-center px-6 md:px-16" style={{ opacity, y }}>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — Phase info */}
        <div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className={`text-5xl font-display font-light ${phase.accentText} opacity-30`}>{phase.number}</span>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-text-tertiary">{phase.duration}</div>
              <h2 className={`text-3xl md:text-4xl font-display font-normal ${phase.accentText}`}>{phase.name}</h2>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-display font-light italic text-text-secondary mb-6 leading-relaxed">
            {phase.tagline}
          </p>
          <p className="text-sm text-text-tertiary leading-relaxed mb-8 max-w-sm">
            {phase.description}
          </p>
          <ul className="space-y-2.5">
            {phase.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-tertiary">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-primary/40 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Visual */}
        <div className="flex items-center justify-center">
          <div className={`w-full rounded-2xl border ${phase.accentBorder} p-6 md:p-8`}
            style={{ background: phase.accentColor }}>
            {phase.visual}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OurApproachPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <Nav />
      <main className="bg-bg-deep">

        {/* ── Hero ── */}
        <PhasePulseHero />

        <SectionDivider />

        {/* ── Phase Sticky Scroll ── */}
        <div ref={containerRef} style={{ height: `${phases.length * 130 + 20}vh` }} className="relative">
          <div className="sticky top-0 z-20 pointer-events-none" style={{ height: 0 }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-white/5">
              <motion.div className="h-full bg-gradient-to-r from-[#C04838]/60 via-gold-primary via-indigo-400 via-teal-primary to-emerald-400"
                style={{ width: lineWidth }} />
            </div>
          </div>
          <div className="sticky top-0 h-screen bg-bg-deep overflow-hidden">
            {phases.map((phase, i) => (
              <PhasePanel key={i} phase={phase} index={i} total={phases.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── What You Never Do ── */}
        <section className="py-24 md:py-32 px-6 bg-bg-base">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="text-center mb-16">
              <p className="text-2xl md:text-3xl font-display font-light italic text-text-secondary">
                What you never have to do.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { never: 'Manage infrastructure', explanation: 'We handle the deployment. You focus on the product.' },
                { never: 'Write prompt chains', explanation: 'Our deterministic execution layer handles the reliability.' },
                { never: 'Debug model drift', explanation: 'If accuracy drops, we know and fix it before you do.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                  className="group p-8 border border-white/5 rounded-xl bg-bg-raised/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold-primary/0 group-hover:bg-gold-primary/[0.03] transition-colors duration-500" />
                  <div className="relative z-10">
                    <div className="font-mono text-[9px] text-text-tertiary tracking-[0.25em] mb-3 uppercase">You don't</div>
                    <h3 className="text-xl font-display font-normal text-text-bright mb-3 group-hover:text-gold-light transition-colors duration-300">
                      {item.never}
                    </h3>
                    <p className="text-sm text-text-tertiary leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-primary/30 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── Closing ── */}
        <section className="py-32 md:py-48 px-6 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(61,144,128,0.05)_0%,transparent_70%)] pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto">
            <p className="text-2xl md:text-3xl font-display font-light italic text-text-secondary mb-2">
              Ready to see what an engineering partner looks like?
            </p>
            <p className="text-xl font-display font-normal text-text-bright mb-12">
              It starts with a conversation.
            </p>
            <Link href="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gold-primary text-bg-deep font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(200,160,74,0.3)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Start Your Project</span>
              <span className="relative z-10 text-bg-deep/60 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <p className="mt-6 font-mono text-[10px] text-text-tertiary tracking-[0.3em] opacity-40 uppercase">
              Free · No commitment · 45 minutes
            </p>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  )
}
