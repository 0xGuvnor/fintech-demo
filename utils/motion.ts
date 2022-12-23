import { Variants } from "framer-motion";

export const navVariant: Variants = {
  hidden: { y: -50 },
  show: { y: 0, transition: { type: "spring", stiffness: 250, damping: 20 } },
};

export const themeVariant: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
  exit: { y: 50, opacity: 0, transition: { duration: 0.1 } },
  hover: { scale: 1.5 },
  tap: { scale: 30, y: 250, x: -250 },
};

export const navContainer: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.5 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.1 } },
};

export const navMenuContainer: Variants = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 10,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
  exit: { x: 50, opacity: 0, transition: { type: "spring", duration: 0.2 } },
};

export const navMenuItem: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.3 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.1 } },
};
