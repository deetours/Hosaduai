'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const chapters = [
  { id: 'act-1', number: '01', label: 'RECOGNITION' },
  { id: 'act-2', number: '02', label: 'THE PROBLEM' },
  { id: 'act-3', number: '03', label: 'THE PIVOT' },
  { id: 'act-4', number: '04', label: 'THE SYSTEM' },
  { id: 'act-5', number: '05', label: 'BEGIN' },
]

export function ChapterIndicator() {
  const [activeChapter, setActiveChapter] = useState<typeof chapters[0] | null>(null)
  const [visible, setVisible] = useState(false)
  const lastChapterRef = useRef<typeof chapters[0] | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            lastChapterRef.current = chapter
            setActiveChapter(chapter)
          }
        },
        { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!visible || !activeChapter) return null

  return (
    <div className="fixed bottom-8 left-6 z-40 pointer-events-none hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChapter.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          {/* Chapter number */}
          <div className="font-mono text-[10px] text-gold-primary tracking-[0.3em]">
            {activeChapter.number}
          </div>
          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-8 h-px bg-gold-primary/30 origin-left"
          />
          {/* Label */}
          <div className="font-mono text-[9px] text-text-tertiary tracking-[0.25em] uppercase">
            {activeChapter.label}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
