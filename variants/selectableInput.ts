export const selctableItemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export const selectableContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}
