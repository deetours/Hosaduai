import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['20px', { lineHeight: '1.3', letterSpacing: '0' }],
        'body-lg': ['18px', { lineHeight: '1.8', letterSpacing: '0' }],
        'body': ['16px', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-sm': ['14px', { lineHeight: '1.7', letterSpacing: '0' }],
        'mono': ['12px', { lineHeight: '1.6', letterSpacing: '0.08em' }],
        'eyebrow': ['11px', { lineHeight: '1.5', letterSpacing: '0.18em' }],
      },
      colors: {
        'bg-deep': 'var(--bg-deep)',
        'bg-base': 'var(--bg-base)',
        'bg-raised': 'var(--bg-raised)',
        'surface': 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-bright': 'var(--text-bright)',
        'gold-primary': 'var(--gold-primary)',
        'gold-light': 'var(--gold-light)',
        'gold-dim': 'var(--gold-dim)',
        'teal-primary': 'var(--teal-primary)',
        'teal-light': 'var(--teal-light)',
        'teal-dim': 'var(--teal-dim)',
      },
      borderColor: {
        'border-subtle': 'var(--border-subtle)',
        'border-default': 'var(--border-default)',
        'border-strong': 'var(--border-strong)',
        'border-accent': 'var(--border-accent)',
      },
      borderRadius: {
        'button': '4px',
        'card': '8px',
      },
      spacing: {
        'section-y': '120px',
        'section-y-mobile': '60px',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '520px',
        'form': '480px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        'apple-bezier': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'soft-spring': 'linear(0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 18.9%, 0.721 25.3%, 0.849 31.5%, 0.937 38.1%, 0.968 41.8%, 0.991 45.7%, 1.006 50.1%, 1.015 55%, 1.017 63.9%, 1.001)',
      },
      boxShadow: {
        'premium-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(200, 160, 74, 0.05)',
        'premium-glow': '0 0 40px -10px rgba(200, 160, 74, 0.2)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(to bottom, rgba(24, 22, 17, 0.8), rgba(24, 22, 17, 1))',
      }
    },
  },
  plugins: [],
}

export default config
