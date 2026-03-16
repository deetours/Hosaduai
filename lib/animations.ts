import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const staggerSlow: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const characterReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.18 },
}

export const easing = {
  reveal: [0.16, 1, 0.3, 1],
  smooth: [0.4, 0, 0.2, 1],
  cinematic: [0.76, 0, 0.24, 1],
}
