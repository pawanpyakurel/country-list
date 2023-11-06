const easing = [0.6, -0.05, 0.01, 0.99]

export const MainLayoutVarient = {
  hidden: {
    y: '30px',
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
}

export const SliderVarient = {
  hidden: {
    opacity: 0,
    x: 2560,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', mass: 0.2, damping: 8 },
  },
  exit: {
    x: -2560,
    transition: { ease: easing },
  },
}

export const ImageSliderVariant = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', mass: 0.2, damping: 6 },
  },
  exit: {
    x: '-100%',
    transition: { ease: easing },
  },
}
