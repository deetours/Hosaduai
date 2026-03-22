import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { SceneBlock } from '@/components/SceneBlock'
import { BeforeAfterBlock } from '@/components/BeforeAfterBlock'
import { SolutionBlock } from '@/components/SolutionBlock'
import { ClosingCTABlock } from '@/components/ClosingCTABlock'
import { Footer } from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

export const metadata = {
  title: 'HosaduAI — AI Development Agency',
  description:
    'From intelligent agents to production-ready apps — we design, fine-tune, and deploy AI systems that actually work. Built for founders and teams who refuse to wait.',
  keywords:
    'AI development agency, AI app development, custom AI models, agentic AI systems, machine learning engineering, start up AI development',
  openGraph: {
    title: 'HosaduAI — AI Development Agency',
    description:
      'We build the AI your business runs on.',
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
        <div id="act-1">
          <Hero />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 2: THE PROBLEM — Recognition & Empathy */}
        <div id="act-2">
          <SceneBlock />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 3: THE PIVOT — Hope & Relief */}
        <div id="act-3">
          <BeforeAfterBlock />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 4: THE SYSTEM — Conviction & Confidence */}
        <div id="act-4">
          <SolutionBlock />
        </div>

        {/* Scene cut */}
        <SectionDivider />

        {/* ACT 5: THE DECISION — Clarity & Action */}
        <div id="act-5">
          <ClosingCTABlock />
        </div>
      </main>
      <Footer />
    </>
  )
}
