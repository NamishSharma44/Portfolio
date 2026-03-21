"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useMemo } from "react";

let revealOrder = 0;

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
};

export function AnimatedSection({ children, delay = 0, className, id }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const sequenceOrder = useMemo(() => {
    const current = revealOrder;
    revealOrder = (revealOrder + 1) % 20;
    return current;
  }, []);

  const transitionDelay = delay > 0 ? delay : sequenceOrder * 0.03;

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.985, filter: "blur(6px)" }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: reduceMotion ? 0.25 : 0.62, ease: [0.22, 1, 0.36, 1], delay: transitionDelay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
