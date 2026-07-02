"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  as?: "div" | "section" | "li";
}

/** Fades and slides content up when it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
