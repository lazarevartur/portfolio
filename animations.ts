import { Variants } from "framer-motion";

export const barAnimate = (barLvl: string): Variants => ({
  initial: {
    width: 0,
  },
  animate: {
    width: barLvl,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 100,
    },
  },
});

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const stagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const routeAnimate: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
