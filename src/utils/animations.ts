import { Variants, Easing } from "framer-motion";



/* LEFT IMAGE */
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.84, 0.44, 1] as Easing,
    },
  },
};

/* RIGHT IMAGE */
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 0.84, 0.44, 1] as Easing,
    },
  },
};



export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -28,
    scale: 0.97,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 0.84, 0.44, 1] as Easing,
    },
  },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.97,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 0.84, 0.44, 1] as Easing,
    },
  },
};


/* MAIN FADE */
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

/* WORDS */
export const fadeWords: Variants = {
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

/* WAVE */
export const waveContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
};

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

/* 👉 NEW: SIDE ENTRY (LEFT) */
export const slideFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* 👉 NEW: SIDE ENTRY (RIGHT) */
export const slideFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* CENTER LINE GLOW */
export const spineGlow: Variants = {
  inactive: {
    opacity: 0.3,
    boxShadow: "0 0 10px rgba(34,197,94,0.2)",
  },
  active: {
    opacity: 1,
    boxShadow: "0 0 40px rgba(34,197,94,0.8)",
    transition: { duration: 0.6 },
  },
};

/* MOVING SHINE */
export const spineShine: Variants = {
  inactive: { opacity: 0, y: "-60%" },
  active: {
    opacity: 1,
    y: ["-30%", "130%"],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};
