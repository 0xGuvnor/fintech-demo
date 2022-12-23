import { Variants } from "framer-motion";

export const navVariant: Variants = {
  hidden: { y: -50 },
  show: { y: 0, transition: { type: "spring", bounce: 0.4, duration: 1 } },
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

export const heroTextVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 2.5, ease: "easeInOut" },
  },
};

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export const container2: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.5 } },
};

export const statItem: Variants = {
  hidden: { x: 300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 100 },
  },
};

export const benefitItem: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 80 },
  },
};

export const billingImgVariant: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 250, damping: 80 },
  },
};

export const cardImgVariant: Variants = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 80 },
  },
};

export const testimonialItem: Variants = {
  hidden: { y: 300, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.5 } },
};
