import { Variants, Easing } from "framer-motion";

export const fadeInMain: Variants = {
  initial: {
    opacity: 0,
    x: -28,
    scale: 0.97,
    filter: "blur(4px)", 
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 0.84, 0.44, 1] as Easing, 
    },
  },
};

export const fadeWords = {
  initial: {
    opacity: 0,
    x: -18,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1] as Easing,
      staggerChildren: 0.08, 
    },
  },
};

// Parent: controls stagger
export const waveContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

// Each letter animation
export const waveLetters = {
  initial: {
    opacity: 0,
    x: 18,
    rotate: 2,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      ease: [0.16, 0.84, 0.44, 1] as Easing,
    },
  },
};
