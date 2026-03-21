"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type PageTransitionProps = {
  routeKey: string;
  children: ReactNode;
};

export function PageTransition({ routeKey, children }: PageTransitionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      key={routeKey}
      className="brand-route-transition"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, filter: "blur(7px)" }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: reduceMotion ? 0.24 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduceMotion && (
        <motion.span
          aria-hidden
          className="brand-route-sweep"
          initial={{ opacity: 0.62, x: "-26%", scaleX: 0.82 }}
          animate={{ opacity: 0, x: "38%", scaleX: 1.18 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      {children}
    </motion.div>
  );
}
