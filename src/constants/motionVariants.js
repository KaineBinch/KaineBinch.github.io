export const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show:   { y: 0,  opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
}

export const staggerContainer = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } }
}

export const pageTransition = {
  initial:    { opacity: 0, y: 12 },
  animate:    { opacity: 1, y: 0  },
  exit:       { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: 'easeInOut' }
}
