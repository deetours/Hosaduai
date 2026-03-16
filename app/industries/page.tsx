'use client'

import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

const INDUSTRY_LABELS = [
  { name: 'Interior Designers', accent: 'text-gold-light', bg: 'rgba(200,160,74,0.06)' },
  { name: 'Architects', accent: 'text-teal-light', bg: 'rgba(61,144,128,0.06)' },
  { name: 'Management Consultants', accent: 'text-indigo-300', bg: 'rgba(129,140,248,0.06)' },
]

function CyclingHero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % INDUSTRY_LABELS.length), 2800)
    return () => clearInterval(id)
  }, [])

  const current = INDUSTRY_LABELS[active]
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Three ambient vertical bars — one per industry */}
      <div className="absolute inset-0 pointer-events-none flex">
        {INDUSTRY_LABELS.map((ind, i) => (
          <motion.div key={i}
            animate={{ opacity: active === i ? 1 : 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex-1 h-full"
            style={{ background: `linear-gradient(to bottom, transparent, ${ind.bg}, transparent)` }}
          />
        ))}
      </div>

      {/* Pulsing center radial that shifts color per industry */}
      <motion.div
        animate={{ backgroundColor: current.bg }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
      />

      {/* Industry counter — top center */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 flex items-center gap-4"
      >
        {INDUSTRY_LABELS.map((_, i) => (
          <motion.div key={i}
            animate={{ scaleX: active === i ? 1 : 0.3, opacity: active === i ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
            className="h-px w-10 bg-gold-primary origin-left"
          />
        ))}
      </motion.div>

      {/* Main text */}
      <div className="relative z-10 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-mono text-[11px] text-gold-primary tracking-[0.35em] mb-8 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-gold-primary/40" />
          WHO WE BUILD FOR
          <span className="w-8 h-px bg-gold-primary/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-light text-text-secondary mb-2 leading-tight"
        >
          Built for
        </motion.p>

        {/* Cycling industry name */}
        <div className="min-h-[1.5em] flex items-center justify-center overflow-hidden mb-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ y: 40, opacity: 0, filter: 'blur(12px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -40, opacity: 0, filter: 'blur(12px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`text-4xl md:text-6xl font-display font-normal italic leading-tight ${current.accent}`}
            >
              {current.name}.
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-normal text-text-bright leading-tight mb-10"
        >
          who build things.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-base text-text-secondary font-light max-w-md mx-auto leading-relaxed mb-8"
        >
          The work is different. The operational problem is identical.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-2 font-mono text-[10px] text-text-tertiary tracking-[0.25em]"
        >
          <span>Scroll to see your industry</span>
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Industry Data ────────────────────────────────────────────────────────────

const industries = [
  {
    id: 'interior-design',
    eyebrow: 'INTERIOR DESIGNERS',
    number: '01',
    headline: 'She runs the design.',
    headlineAccent: 'The system runs everything else.',
    scene: [
      { text: "12 active projects. A studio of 3." },
      { text: "Every client has a different WhatsApp thread." },
      { text: "Every project has a different mood board version." },
      { text: "Every vendor has a different follow-up status." },
      { text: "She tracks it all. In her head.", highlight: "In her head." },
    ],
    resolution: "With HosaduAI: one surface. 12 projects. Every thread, revision, and vendor — tracked and actioned automatically.",
    accentColor: 'rgba(200,160,74,0.1)',
    accentBorder: 'border-gold-primary/20',
    accentText: 'text-gold-light',
    visual: <DesignerVisual />,
  },
  {
    id: 'architecture',
    eyebrow: 'ARCHITECTS',
    number: '02',
    headline: 'His firm wins on design.',
    headlineAccent: 'Loses weeks on coordination.',
    scene: [
      { text: "A structural engineer waiting on revised drawings." },
      { text: "A contractor asking about a spec from three weeks ago." },
      { text: "An invoice tied to a milestone no one has tracked." },
      { text: "The client approved revision 4. Someone is still working on revision 3.", highlight: "Someone is still working on revision 3." },
    ],
    resolution: "With HosaduAI: every consultant, drawing revision, and billing milestone — tracked without a single manual log.",
    accentColor: 'rgba(61,144,128,0.1)',
    accentBorder: 'border-teal-primary/20',
    accentText: 'text-teal-light',
    visual: <ArchVisual />,
  },
  {
    id: 'consulting',
    eyebrow: 'MANAGEMENT CONSULTANTS',
    number: '03',
    headline: 'Three retainers.',
    headlineAccent: 'One person tracking all twelve deliverables.',
    scene: [
      { text: "Report due Friday. Draft sits in email." },
      { text: "Client asked for an update three days ago.", highlight: "three days ago." },
      { text: "A billing stage passed last month. Invoice not raised." },
      { text: "She knows all of this. She is waiting for time to act on it.", highlight: "waiting for time" },
    ],
    resolution: "With HosaduAI: every deliverable, follow-up, and billing trigger — surfaced before it becomes a problem.",
    accentColor: 'rgba(129,140,248,0.1)',
    accentBorder: 'border-indigo-500/20',
    accentText: 'text-indigo-300',
    visual: <ConsultVisual />,
  },
]

// ─── Visualizations ───────────────────────────────────────────────────────────

function DesignerVisual() {
  const projects = [
    { name: 'Mehta Residence', status: 'In Progress', color: 'text-gold-primary' },
    { name: 'Kapoor Office', status: 'Revision', color: 'text-yellow-400' },
    { name: 'Sharma Villa', status: 'On Track', color: 'text-emerald-400' },
    { name: 'Whitefield Project', status: 'Vendor Pending', color: 'text-orange-400' },
    { name: 'JP Nagar Apt', status: 'On Track', color: 'text-emerald-400' },
    { name: 'Koramangala HQ', status: 'In Progress', color: 'text-gold-primary' },
  ]
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="font-mono text-[9px] text-text-tertiary tracking-[0.2em] mb-3">ACTIVE PROJECTS · 12</div>
      {projects.map((p, i) => (
        <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/4 border border-white/5 rounded-lg px-3 py-2 flex items-center justify-between">
          <span className="text-[11px] text-text-secondary">{p.name}</span>
          <span className={`text-[9px] font-mono ${p.color}`}>{p.status}</span>
        </motion.div>
      ))}
      <div className="text-[9px] text-text-tertiary font-mono text-center pt-1 opacity-50">+ 6 more projects</div>
    </div>
  )
}

function ArchVisual() {
  const nodes = [
    { label: 'Structural', x: 50, y: 20, color: '#3D9080' },
    { label: 'MEP', x: 20, y: 55, color: '#C8A04A' },
    { label: 'Contractor', x: 80, y: 55, color: '#C8A04A' },
    { label: 'Client', x: 50, y: 85, color: '#64CEB8' },
  ]
  return (
    <div className="w-full max-w-xs">
      <div className="font-mono text-[9px] text-text-tertiary tracking-[0.2em] mb-3">COORDINATION LAYER</div>
      <div className="relative h-48">
        {nodes.map((n, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="absolute flex items-center justify-center"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)' }}>
            <div className="w-16 h-8 rounded-full border flex items-center justify-center"
              style={{ borderColor: n.color, backgroundColor: `${n.color}15` }}>
              <span className="text-[9px] font-mono" style={{ color: n.color }}>{n.label}</span>
            </div>
          </motion.div>
        ))}
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {[[0,1],[0,2],[1,3],[2,3]].map(([a, b], i) => (
            <motion.line key={i}
              x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
              x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
              stroke="rgba(255,255,255,0.08)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }} />
          ))}
        </svg>
      </div>
      <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}
        className="text-center font-mono text-[9px] text-teal-light mt-2">
        All consultants in sync
      </motion.div>
    </div>
  )
}

function ConsultVisual() {
  const deliverables = [
    { name: 'Q1 Strategy Report', client: 'Aditya Corp', rag: 'G', due: 'On time' },
    { name: 'Process Audit', client: 'Infra Ltd', rag: 'A', due: 'Due Friday' },
    { name: 'Market Entry Brief', client: 'StartCo', rag: 'R', due: 'Overdue 2d' },
    { name: 'Leadership Review', client: 'Aditya Corp', rag: 'G', due: 'Next week' },
  ]
  const ragColors = { G: 'bg-emerald-400', A: 'bg-yellow-400', R: 'bg-red-400' }
  const ragText = { G: 'text-emerald-400', A: 'text-yellow-400', R: 'text-red-400' }
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="font-mono text-[9px] text-text-tertiary tracking-[0.2em] mb-3">DELIVERABLE TRACKER</div>
      {deliverables.map((d, i) => (
        <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          className="bg-white/4 border border-white/5 rounded-lg px-3 py-2.5 flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${ragColors[d.rag as keyof typeof ragColors]}`} />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] text-text-secondary truncate">{d.name}</div>
            <div className="text-[9px] text-text-tertiary">{d.client}</div>
          </div>
          <span className={`text-[9px] font-mono ${ragText[d.rag as keyof typeof ragText]}`}>{d.due}</span>
        </motion.div>
      ))}
    </div>
  )
}

// ─── Industry Panel ───────────────────────────────────────────────────────────

function IndustryPanel({ industry, index, total, scrollYProgress }: {
  industry: typeof industries[0], index: number, total: number,
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const seg = 1 / total
  const start = index * seg
  const end = start + seg

  const opacity = useTransform(scrollYProgress,
    [Math.max(0, start - 0.01), start + 0.07, end - 0.07, Math.min(1, end + 0.01)],
    [0, 1, 1, index === total - 1 ? 1 : 0])
  const y = useTransform(scrollYProgress, [start, start + 0.08], [50, 0])

  return (
    <motion.div className="absolute inset-0 flex items-center px-6 md:px-16" style={{ opacity, y }}>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — Story */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.35em] text-text-tertiary mb-4">
            {industry.number} / {String(total).padStart(2, '0')} · {industry.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-normal text-text-bright mb-1 leading-tight">
            {industry.headline}
          </h2>
          <h2 className={`text-3xl md:text-4xl font-display font-light italic mb-8 leading-tight ${industry.accentText}`}>
            {industry.headlineAccent}
          </h2>

          {/* Scene lines */}
          <div className="space-y-2 mb-8">
            {industry.scene.map((line, i) => (
              <p key={i} className="text-base text-text-tertiary leading-relaxed font-light">
                {line.highlight
                  ? line.text.replace(line.highlight, '')
                  : line.text}
                {line.highlight && <span className="text-text-bright">{line.highlight}</span>}
              </p>
            ))}
          </div>

          {/* Resolution */}
          <div className={`border-l-2 ${industry.accentBorder} pl-4`}>
            <p className={`text-sm leading-relaxed ${industry.accentText}`}>{industry.resolution}</p>
          </div>
        </div>

        {/* Right — Visual */}
        <div className="flex items-center justify-center">
          <div className={`w-full rounded-2xl border ${industry.accentBorder} p-6 md:p-8`}
            style={{ background: industry.accentColor }}>
            {industry.visual}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function IndustriesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <Nav />
      <main className="bg-bg-deep">

        {/* ── Hero ── */}
        <CyclingHero />

        <SectionDivider />

        {/* ── Industry Sticky Scroll ── */}
        <div ref={containerRef} style={{ height: `${industries.length * 130 + 20}vh` }} className="relative">
          <div className="sticky top-0 z-20 pointer-events-none" style={{ height: 0 }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-white/5">
              <motion.div className="h-full bg-gradient-to-r from-gold-primary via-teal-primary to-indigo-400"
                style={{ width: lineWidth }} />
            </div>
          </div>
          <div className="sticky top-0 h-screen bg-bg-deep overflow-hidden">
            {industries.map((ind, i) => (
              <IndustryPanel key={i} industry={ind} index={i} total={industries.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── Closing ── */}
        <section className="py-32 md:py-48 px-6 text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto">
            <p className="text-2xl md:text-3xl font-display font-light italic text-text-secondary mb-2">
              Your industry is specific.
            </p>
            <p className="text-3xl md:text-4xl font-display font-normal text-text-bright mb-12">
              Your operational architecture should be too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/what-we-build"
                className="px-8 py-3.5 border border-white/10 text-text-secondary font-body font-semibold text-[13px] tracking-widest uppercase rounded-sm hover:bg-white/5 hover:text-text-bright hover:border-gold-primary/30 transition-all duration-300">
                See What We Build
              </Link>
              <Link href="/request-audit"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gold-primary text-bg-deep font-body font-semibold text-[13px] tracking-widest uppercase rounded-sm hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(200,160,74,0.3)] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Request Audit</span>
                <span className="relative z-10 text-bg-deep/60 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  )
}
