export const shakeAnimationVariants = {
  x: [0, -2, 2, -2, 2, 0], // Define the x-axis shake animation
  y: [0, -2, 2, -2, 2, 0], // Define the y-axis shake animation
  transition: {
    type: 'spring', // Use spring easing
    stiffness: 100, // Adjust the stiffness for smoother animation
    damping: 10, // Adjust the damping for smoother animation
  },
}
