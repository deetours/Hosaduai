import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Syne, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HosaduAI - Operational Intelligence for Real Businesses',
  description: 'AI-powered operating systems for Indian service businesses. Not tools. Not dashboards. Real operational intelligence built into how your business actually runs.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-premium.png',
        sizes: 'any',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon-premium.png',
  },
  keywords: 'AI, operational intelligence, Indian SMB, business automation, systems design',
  openGraph: {
    title: 'HosaduAI - Operational Intelligence for Real Businesses',
    description: 'AI-powered operating systems designed for real Indian businesses',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EDE8DC' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0908' },
  ],
}

import { SmoothScroll } from '@/components/SmoothScroll'
import { MouseSpotlight } from '@/components/MouseSpotlight'
import { ChapterIndicator } from '@/components/ChapterIndicator'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-bg-deep text-text-primary antialiased relative">
        <ScrollProgressBar />
        <MouseSpotlight />
        <ChapterIndicator />
        {/* Cinematic film grain overlay */}
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
        />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
