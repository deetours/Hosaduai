import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { SceneBlock } from '@/components/SceneBlock'
import { BeforeAfterBlock } from '@/components/BeforeAfterBlock'
import { SolutionBlock } from '@/components/SolutionBlock'
import { ClosingCTABlock } from '@/components/ClosingCTABlock'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata = {
  title: 'HosaduAI — AI Operating Systems for Indian Service Businesses',
  description:
    'We replace fragmented tools with a single AI system built around how your firm actually works. Built for interior designers, architects, and consultants.',
  keywords:
    'AI operating system, Indian SMB, service business automation, interior design AI, architect AI, operational intelligence',
  openGraph: {
    title: 'HosaduAI — AI Operating Systems for Indian Service Businesses',
    description:
      'One AI system. Built around your firm. Not another tool.',
    type: 'website',
    url: 'https://hosadu.ai',
  },
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-bg-deep">
        {/* ACT 1: THE HOOK — Intrigue & Curiosity */}
        <div id="act-1" className="gpu-accelerate">
          <Hero />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 2: THE PROBLEM — Recognition & Empathy */}
        <div id="act-2" className="gpu-accelerate">
          <SceneBlock />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 3: THE PIVOT — Hope & Relief */}
        <div id="act-3" className="gpu-accelerate">
          <BeforeAfterBlock />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 4: THE SYSTEM — Conviction & Confidence */}
        <div id="act-4" className="gpu-accelerate">
          <SolutionBlock />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 5: THE DECISION — Clarity & Action */}
        <div id="act-5" className="gpu-accelerate">
          <ClosingCTABlock />
        </div>
      </main>
      <Footer />
    </>
  )
}
