// Framer Motion animation variants for consistent animations across the site

// Container variants for staggered children
export const staggerContainer = {
          hidden: { opacity: 0 },
          show: {
                    opacity: 1,
                    transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.1,
                    },
          },
};

export const staggerContainerFast = {
          hidden: { opacity: 0 },
          show: {
                    opacity: 1,
                    transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.05,
                    },
          },
};

export const staggerContainerSlow = {
          hidden: { opacity: 0 },
          show: {
                    opacity: 1,
                    transition: {
                              staggerChildren: 0.15,
                              delayChildren: 0.2,
                    },
          },
};

// Fade animations
export const fadeIn = {
          hidden: { opacity: 0 },
          show: {
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const fadeUp = {
          hidden: { opacity: 0, y: 40 },
          show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const fadeDown = {
          hidden: { opacity: 0, y: -40 },
          show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const fadeLeft = {
          hidden: { opacity: 0, x: 60 },
          show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const fadeRight = {
          hidden: { opacity: 0, x: -60 },
          show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
};

// Scale animations
export const scaleIn = {
          hidden: { opacity: 0, scale: 0.9 },
          show: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const scaleUp = {
          hidden: { opacity: 0, scale: 0.8, y: 20 },
          show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
};

// Slide animations
export const slideInLeft = {
          hidden: { opacity: 0, x: -100 },
          show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const slideInRight = {
          hidden: { opacity: 0, x: 100 },
          show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
          },
};

// Hero text animations
export const heroTextContainer = {
          hidden: { opacity: 0 },
          show: {
                    opacity: 1,
                    transition: {
                              staggerChildren: 0.08,
                              delayChildren: 0.3,
                    },
          },
};

export const heroTextChild = {
          hidden: { opacity: 0, y: 100, skewY: 7 },
          show: {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    transition: {
                              duration: 0.8,
                              ease: [0.25, 0.1, 0.25, 1],
                    },
          },
};

// Character reveal for hero
export const charReveal = {
          hidden: { opacity: 0, y: 50 },
          show: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                              duration: 0.5,
                              delay: i * 0.03,
                              ease: [0.25, 0.1, 0.25, 1],
                    },
          }),
};

// Word reveal
export const wordReveal = {
          hidden: { opacity: 0, y: 20 },
          show: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                              duration: 0.5,
                              delay: i * 0.1,
                              ease: [0.25, 0.1, 0.25, 1],
                    },
          }),
};

// Hover animations
export const hoverScale = {
          rest: { scale: 1 },
          hover: {
                    scale: 1.05,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          },
};

export const hoverLift = {
          rest: { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' },
          hover: {
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          },
};

// Button animations
export const buttonHover = {
          rest: { scale: 1 },
          hover: {
                    scale: 1.02,
                    transition: { duration: 0.2 },
          },
          tap: {
                    scale: 0.98,
                    transition: { duration: 0.1 },
          },
};

// Nav item animations
export const navItemHover = {
          rest: { y: 0 },
          hover: {
                    y: -2,
                    transition: { duration: 0.2 },
          },
};

// Page transitions
export const pageTransition = {
          initial: { opacity: 0, y: 20 },
          animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
          },
          exit: {
                    opacity: 0,
                    y: -20,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          },
};

// Floating animation for decorative elements
export const float = {
          initial: { y: 0 },
          animate: {
                    y: [-10, 10, -10],
                    transition: {
                              duration: 6,
                              repeat: Infinity,
                              ease: 'easeInOut',
                    },
          },
};

// Pulse glow for CTAs
export const pulseGlow = {
          initial: { boxShadow: '0 0 0 0 rgba(1, 115, 200, 0.4)' },
          animate: {
                    boxShadow: [
                              '0 0 0 0 rgba(1, 115, 200, 0.4)',
                              '0 0 0 20px rgba(1, 115, 200, 0)',
                              '0 0 0 0 rgba(1, 115, 200, 0)',
                    ],
                    transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeOut',
                    },
          },
};

// Draw line animation for icons/decorations
export const drawLine = {
          hidden: { pathLength: 0, opacity: 0 },
          show: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                              pathLength: { duration: 1.5, ease: 'easeInOut' },
                              opacity: { duration: 0.3 },
                    },
          },
};

// Viewport settings for scroll animations
export const viewportSettings = {
          once: true,
          margin: '-100px',
          amount: 0.2,
};

export const viewportSettingsEager = {
          once: true,
          margin: '-50px',
          amount: 0.1,
};
