import { easeIn, easeOut } from '@popmotion/popcorn'

export const buttonHoverVariants = {
  visible: {
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
}

export const buttonHoverChildVarient = {
  hidden: {
    opacity: 0,
    display: 'hidden',
  },
  visible: {
    opacity: 1,
    display: 'block',
  },
}

export const slideAnimVarient = {
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    display: 'hidden',
    maxHeight: '0rem',
    transition: { duration: 0.2, ease: easeOut },
  },
  visible: {
    opacity: 1,
    display: 'block',
    overflow: 'hidden',
    maxHeight: '20rem',
    transition: { duration: 0.26, ease: easeIn },
  },
}
export const easeAnimVarient = {
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    display: 'hidden',
    transition: { duration: 0.3, ease: easeOut },
  },
  visible: {
    opacity: 1,
    display: 'flex',
    overflow: 'visible',
    transition: { duration: 0.3, ease: easeIn },
  },
}

export const slideDocketFormAnimVarient = {
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    display: 'hidden',
    maxHeight: '0rem',
    transition: { duration: 0.2, ease: easeOut },
  },
  visible: {
    opacity: 1,
    display: 'block',
    overflow: 'hidden',
    maxHeight: '46rem',
    transition: { duration: 0.26, ease: easeIn },
  },
}

export const swipeDownVariant = {
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    display: 'hidden',
    transform: 'translateY(-30px)',
    maxHeight: '0rem',
    transition: { duration: 0.2, ease: easeOut },
  },
  visible: {
    opacity: 1,
    display: 'block',
    overflow: 'hidden',
    transform: 'translateY(0)',
    maxHeight: '5rem',

    transition: { duration: 0.26, ease: easeIn },
  },
}
export const swipeDownItemVariant = {
  hidden: {
    opacity: 0,
    overflow: 'hidden',
    display: 'hidden',
    transform: 'translateY(-30px)',
    height: '0rem',
    transition: { duration: 0.2, ease: easeOut },
  },
  visible: {
    opacity: 1,
    display: 'block',
    overflow: 'hidden',
    transform: 'translateY(0)',
    minHeight: '3.8rem',
    paddingTop: '1rem',
    transition: { duration: 0.26, ease: easeIn },
  },
}
