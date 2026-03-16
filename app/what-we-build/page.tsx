'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

// Hex orbital positions (degrees around a circle, starting top)
const ORBIT_NODES = [
  { angle: -90, label: 'Communication\nIntelligence', short: 'COMM', color: '#C8A04A' },
  { angle: -30, label: 'Document\nEngine',          short: 'DOCS', color: '#3D9080' },
  { angle:  30, label: 'Vendor\nCoordination',      short: 'VEND', color: '#FB923C' },
  { angle:  90, label: 'Project\nIntelligence',     short: 'PROJ', color: '#818CF8' },
  { angle: 150, label: 'Financial\nIntelligence',   short: 'FIN',  color: '#4ADE80' },
  { angle: -150, label: 'Client\nExperience',       short: 'CX',   color: '#C8A04A' },
]

// ─── Data ────────────────────────────────────────────────────────────────────

const systems = [
  {
    number: '01',
    name: 'Communication Intelligence',
    tagline: 'Every client conversation. Tracked, summarised, actioned.',
    accent: 'rgba(200,160,74,0.8)',
    accentClass: 'text-gold-light',
    borderClass: 'border-gold-primary/20',
    capabilities: [
      'WhatsApp, email and call threads unified in one AI layer',
      'Next action extracted automatically from every conversation',
      'Client sentiment tracked without manual logging',
    ],
    visual: <CommVisual />,
  },
  {
    number: '02',
    name: 'Document & Knowledge Engine',
    tagline: 'Every spec, contract, mood board — searchable and AI-aware.',
    accent: 'rgba(61,144,128,0.8)',
    accentClass: 'text-teal-light',
    borderClass: 'border-teal-primary/20',
    capabilities: [
      'All project documents indexed and version-controlled automatically',
      'Ask questions across your entire document history in plain language',
      'Smart tagging by project, client, and document type',
    ],
    visual: <DocVisual />,
  },
  {
    number: '03',
    name: 'Vendor Coordination System',
    tagline: 'No vendor slips through the cracks. Ever.',
    accent: 'rgba(251,146,60,0.7)',
    accentClass: 'text-orange-300',
    borderClass: 'border-orange-500/20',
    capabilities: [
      'Automated follow-ups sent when vendors go silent',
      'Commitment tracking — what was promised and when',
      'Escalation triggers when deadlines are at risk',
    ],
    visual: <VendorVisual />,
  },
  {
    number: '04',
    name: 'Project Intelligence',
    tagline: 'Timelines that stay current without anyone maintaining them.',
    accent: 'rgba(129,140,248,0.8)',
    accentClass: 'text-indigo-300',
    borderClass: 'border-indigo-500/20',
    capabilities: [
      'Milestones updated from communications — not manual entry',
      'Cross-project dependency mapping across your entire portfolio',
      'Automatic delay detection with suggested recovery actions',
    ],
    visual: <ProjectVisual />,
  },
  {
    number: '05',
    name: 'Financial Intelligence',
    tagline: 'Quotations, invoices, payments — no errors, no chasing.',
    accent: 'rgba(74,222,128,0.7)',
    accentClass: 'text-emerald-300',
    borderClass: 'border-emerald-500/20',
    capabilities: [
      'Quotation errors caught before they leave your desk',
      'Payment follow-ups triggered automatically at due dates',
      'Revenue per project tracked without a separate tool',
    ],
    visual: <FinanceVisual />,
  },
  {
    number: '06',
    name: 'Client Experience Layer',
    tagline: 'Your clients feel the system working, even when they don\'t see it.',
    accent: 'rgba(200,160,74,0.6)',
    accentClass: 'text-gold-light',
    borderClass: 'border-gold-primary/20',
    capabilities: [
      'Proposals and mood boards assembled and distributed automatically',
      'Approval workflows built into the client experience',
      'Progress updates sent on a schedule — no manual effort',
    ],
    visual: <ClientVisual />,
  },
]

// ─── System Visualizations ────────────────────────────────────────────────────

function CommVisual() {
  const threads = [
    { name: 'Priya Mehta • Living Room', status: 'AWAITING RESPONSE', color: 'text-yellow-400' },
    { name: 'Rahul Kapoor • Office Fit-out', status: 'VENDOR NOTIFIED', color: 'text-teal-400' },
    { name: 'Sharma Residence', status: 'REVISION RECEIVED', color: 'text-gold-primary' },
    { name: 'The Whitefield Project', status: 'ON TRACK', color: 'text-emerald-400' },
  ]
  return (
    <div className="w-full max-w-sm space-y-2">
      {threads.map((t, i) => (
        <motion.div key={i} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className="bg-white/4 rounded-lg p-3 border border-white/5 flex items-center justify-between">
          <span className="text-[11px] text-text-secondary truncate max-w-[160px]">{t.name}</span>
          <span className={`text-[9px] font-mono tracking-wide ${t.color}`}>{t.status}</span>
        </motion.div>
      ))}
      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }}
        className="bg-gold-primary/8 border border-gold-primary/20 rounded-lg p-3 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse" />
        <span className="text-[11px] text-gold-light italic">AI drafting follow-up for Priya Mehta...</span>
      </motion.div>
    </div>
  )
}

function DocVisual() {
  const docs = ['Sharma Residence — Spec v3.pdf', 'Kapoor Office — BOQ Final.xlsx', 'Whitefield — Contract.pdf', 'Mehta Living — Moodboard.pptx']
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="bg-white/4 rounded-lg p-2 flex items-center gap-2 border border-white/5 mb-3">
        <span className="text-text-tertiary text-xs">🔍</span>
        <motion.span animate={{ opacity: [0, 1] }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[11px] text-teal-light font-mono">"Show all quotation errors across projects"</motion.span>
      </div>
      {docs.map((d, i) => (
        <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.15 }}
          className="bg-white/4 rounded-lg px-3 py-2 border border-white/5 flex items-center gap-3">
          <div className="w-6 h-7 rounded bg-teal-primary/20 border border-teal-primary/30 flex items-center justify-center">
            <span className="text-[8px] text-teal-light font-mono">{d.split('.').pop()?.toUpperCase()}</span>
          </div>
          <span className="text-[11px] text-text-secondary truncate">{d}</span>
        </motion.div>
      ))}
    </div>
  )
}

function VendorVisual() {
  const vendors = [
    { name: 'Bangalore Stone Works', days: '3 days silent', resolved: true },
    { name: 'Modern Fabrics Co.', days: '1 day silent', resolved: false },
    { name: 'Rajesh Electricals', days: '5 days silent', resolved: true },
  ]
  return (
    <div className="w-full max-w-sm space-y-3">
      {vendors.map((v, i) => (
        <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.25 }}
          className="bg-white/4 rounded-lg p-4 border border-white/5">
          <div className="flex items-start justify-between mb-2">
            <span className="text-[12px] text-text-primary font-medium">{v.name}</span>
            {v.resolved
              ? <span className="text-[9px] font-mono text-emerald-400">AUTO FOLLOWED UP</span>
              : <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[9px] font-mono text-yellow-400">FOLLOWING UP...</motion.span>}
          </div>
          <span className="text-[10px] text-text-tertiary">{v.days}</span>
        </motion.div>
      ))}
    </div>
  )
}

function ProjectVisual() {
  const tasks = [
    { name: 'Site Survey', pct: 100, color: 'bg-emerald-400' },
    { name: 'Concept Design', pct: 80, color: 'bg-gold-primary' },
    { name: 'BOQ Submission', pct: 60, color: 'bg-gold-primary' },
    { name: 'Vendor Shortlisting', pct: 40, color: 'bg-indigo-400' },
    { name: 'Execution Phase', pct: 15, color: 'bg-indigo-300/50' },
  ]
  return (
    <div className="w-full max-w-sm space-y-3">
      {tasks.map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
          <div className="flex justify-between mb-1">
            <span className="text-[11px] text-text-secondary">{t.name}</span>
            <span className="text-[10px] font-mono text-text-tertiary">{t.pct}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${t.pct}%` }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
              className={`h-full rounded-full ${t.color}`} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function FinanceVisual() {
  const invoices = [
    { id: 'INV-2024-041', amount: '₹4,20,000', status: 'PAID', color: 'text-emerald-400' },
    { id: 'INV-2024-042', amount: '₹1,85,000', status: 'DUE TODAY', color: 'text-yellow-400' },
    { id: 'INV-2024-043', amount: '₹2,60,000', status: 'DRAFT', color: 'text-text-tertiary' },
  ]
  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="bg-white/4 rounded-lg p-4 border border-white/5 mb-3">
        <div className="text-[10px] text-text-tertiary font-mono mb-1">TOTAL RECEIVABLE</div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="text-2xl font-display text-emerald-300">₹8,65,000</motion.div>
      </div>
      {invoices.map((inv, i) => (
        <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.2 }}
          className="bg-white/4 rounded-lg px-4 py-3 border border-white/5 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-text-secondary">{inv.id}</div>
            <div className="text-[13px] text-text-primary font-medium mt-0.5">{inv.amount}</div>
          </div>
          <span className={`text-[9px] font-mono ${inv.color}`}>{inv.status}</span>
        </motion.div>
      ))}
    </div>
  )
}

function ClientVisual() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="w-full max-w-sm bg-white/4 border border-gold-primary/20 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-gold-primary/10 to-teal-primary/10 px-6 py-4 border-b border-white/5">
        <div className="font-mono text-[9px] text-gold-primary tracking-widest mb-1">PROPOSAL · PRIYA MEHTA RESIDENCE</div>
        <div className="font-display text-lg text-text-bright">Living Room Redesign 2024</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-24 bg-teal-primary/8 rounded-lg border border-teal-primary/10 flex items-center justify-center">
          <span className="text-[10px] text-teal-light/50 italic">Curated mood board</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Timeline', 'Budget', 'Materials'].map((l, i) => (
            <div key={i} className="bg-white/4 rounded p-2 text-center">
              <div className="text-[9px] text-text-tertiary">{l}</div>
            </div>
          ))}
        </div>
        <motion.button animate={{ boxShadow: ['0 0 0 rgba(200,160,74,0)', '0 0 20px rgba(200,160,74,0.2)', '0 0 0 rgba(200,160,74,0)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-full py-2 bg-gold-primary text-bg-deep text-[11px] font-body font-semibold rounded-lg tracking-widest uppercase">
          Approve Proposal
        </motion.button>
      </div>
    </motion.div>
  )
}

// ─── Panel Component ───────────────────────────────────────────────────────────

function SystemPanel({ system, index, total, scrollYProgress }: {
  system: typeof systems[0], index: number, total: number,
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const segSize = 1 / total
  const start = index * segSize
  const end = start + segSize

  const opacity = useTransform(scrollYProgress,
    [Math.max(0, start - 0.01), start + 0.06, end - 0.06, Math.min(1, end + 0.01)],
    [0, 1, 1, index === total - 1 ? 1 : 0])
  const y = useTransform(scrollYProgress, [start, start + 0.08], [40, 0])

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center px-6 md:px-16"
      style={{ opacity, y }}>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left — Text */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.3em] text-text-tertiary mb-6">
            {system.number} / {String(total).padStart(2, '0')}
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-normal mb-3 ${system.accentClass}`}>
            {system.name}
          </h2>
          <p className="text-xl md:text-2xl font-display font-light italic text-text-secondary mb-8 leading-relaxed">
            {system.tagline}
          </p>
          <ul className="space-y-3">
            {system.capabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-tertiary leading-relaxed">
                <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-gold-primary/50" />
                {cap}
              </li>
            ))}
          </ul>
        </div>
        {/* Right — Visual */}
        <div className="flex items-center justify-center">
          <div className={`w-full rounded-2xl border ${system.borderClass} bg-bg-raised/40 backdrop-blur-sm p-6 md:p-8`}
            style={{ boxShadow: `0 0 60px ${system.accent.replace('0.8', '0.05')}` }}>
            {system.visual}
          </div>
        </div>
      </div>
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-[80px] pointer-events-none"
        style={{ backgroundColor: system.accent.replace('0.8', '0.06') }} />
    </motion.div>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function WhatWeBuildPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })

  // Progress indicator
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <Nav />
      <main className="bg-bg-deep">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

          {/* Animated ambient background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'conic-gradient(from 0deg at 50% 50%, rgba(61,144,128,0.04) 0deg, transparent 120deg, rgba(200,160,74,0.04) 240deg, transparent 360deg)' }}
          />

          {/* Orbital system — desktop only */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Orbit ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/4"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-dashed border-white/[0.03]"
            />

            {/* SVG connecting lines from center */}
            <svg className="absolute inset-0 w-full h-full">
              {ORBIT_NODES.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180
                const r = 260
                const cx = 50, cy = 50 // percent
                const nx = cx + (r / 5.2) * Math.cos(rad) // approx % for 520px in full-width
                const ny = cy + (r / 3.8) * Math.sin(rad)
                return (
                  <motion.line key={i}
                    x1={`${cx}%`} y1={`${cy}%`}
                    x2={`${nx}%`} y2={`${ny}%`}
                    stroke={node.color} strokeWidth="0.5" strokeOpacity="0.15"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.8 }}
                  />
                )
              })}
            </svg>

            {/* Center core */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-16 h-16 rounded-full bg-teal-primary/10 border border-teal-primary/20 flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-teal-primary" />
              </motion.div>
            </motion.div>

            {/* Orbital nodes */}
            {ORBIT_NODES.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180
              const r = 260
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${r * Math.cos(rad)}px)`,
                    top: `calc(50% + ${r * Math.sin(rad)}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                    className="w-20 h-20 rounded-full border flex flex-col items-center justify-center gap-0.5"
                    style={{ borderColor: `${node.color}30`, backgroundColor: `${node.color}08` }}
                  >
                    <span className="font-mono text-[8px] tracking-widest" style={{ color: `${node.color}90` }}>
                      {node.short}
                    </span>
                    <div className="w-3 h-px" style={{ backgroundColor: `${node.color}50` }} />
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: node.color }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Foreground text — centered, z-above orbital */}
          <div className="relative z-10 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[11px] text-gold-primary tracking-[0.35em] mb-8 flex items-center justify-center gap-3">
              <motion.span animate={{ scaleX: [0, 1] }} transition={{ duration: 0.6, delay: 0.2 }}
                className="block w-8 h-px bg-gold-primary/40 origin-left" />
              THE SYSTEM · SIX LAYERS
              <motion.span animate={{ scaleX: [0, 1] }} transition={{ duration: 0.6, delay: 0.2 }}
                className="block w-8 h-px bg-gold-primary/40 origin-right" />
            </motion.div>

            {'Everything your firm does —'.split(' ').map((word, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-5xl md:text-7xl font-display font-normal text-text-bright leading-tight mr-[0.3em]"
              >{word}</motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block text-5xl md:text-7xl font-display font-light italic text-teal-light leading-tight mt-1"
            >
              finally connected.
            </motion.span>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-8 text-base text-text-secondary font-light tracking-wide"
            >
              One AI operating layer. Six interconnected capabilities.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] text-text-tertiary tracking-[0.25em]">
              <span>Scroll to explore each system</span>
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* ── System Sticky Scroll ── */}
        <div ref={containerRef} style={{ height: `${systems.length * 120 + 20}vh` }} className="relative">
          {/* Scene progress — bottom bar */}
          <div className="sticky top-0 z-20 pointer-events-none" style={{ height: 0 }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-white/5">
              <motion.div className="h-full bg-gradient-to-r from-gold-primary via-teal-primary to-gold-primary"
                style={{ width: lineWidth }} />
            </div>
          </div>

          <div className="sticky top-0 h-screen bg-bg-deep overflow-hidden">
            {systems.map((system, i) => (
              <SystemPanel key={i} system={system} index={i} total={systems.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* ── Closing ── */}
        <section className="py-32 md:py-48 px-6 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,160,74,0.04)_0%,transparent_70%)] pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto">
            <p className="text-3xl md:text-4xl font-display font-light italic text-text-secondary mb-2">
              Six systems.
            </p>
            <p className="text-4xl md:text-5xl font-display font-normal text-text-bright mb-12">
              One architecture.
            </p>
            <Link href="/request-audit"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gold-primary text-bg-deep font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(200,160,74,0.3)] transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Begin Your Systems Audit</span>
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
