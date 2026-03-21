"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useMemo } from "react";

export function UiEnhancements() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.2,
  });

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 29) % 100}%`,
        delay: `${(index * 0.35).toFixed(2)}s`,
        duration: `${9 + (index % 6)}s`,
      })),
    []
  );

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let frame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      // Smoothly interpolate to make the aura feel fluid instead of tightly locked to cursor movement.
      currentX += (targetX - currentX) * 0.13;
      currentY += (targetY - currentY) * 0.13;

      document.documentElement.style.setProperty("--mx", `${currentX}px`);
      document.documentElement.style.setProperty("--my", `${currentY}px`);
      frame = requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    frame = requestAnimationFrame(render);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const tiltSelectors =
      ".section-card > article, .section-card > div > article, .section-card > ul > section, .section-card > div > section, .home-nav-card";
    const tiltNodes = Array.from(document.querySelectorAll<HTMLElement>(tiltSelectors));

    const maxTilt = 8;

    const onPointerMove = (event: PointerEvent) => {
      const node = event.currentTarget as HTMLElement;
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * maxTilt * 2;
      const rotateX = (0.5 - py) * maxTilt * 1.5;

      node.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
      node.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
      node.style.setProperty("--tilt-glare-x", `${(px * 100).toFixed(1)}%`);
      node.style.setProperty("--tilt-glare-y", `${(py * 100).toFixed(1)}%`);
      node.style.setProperty("--tilt-scale", "1.018");
    };

    const onPointerLeave = (event: PointerEvent) => {
      const node = event.currentTarget as HTMLElement;
      node.style.setProperty("--tilt-rotate-x", "0deg");
      node.style.setProperty("--tilt-rotate-y", "0deg");
      node.style.setProperty("--tilt-scale", "1");
    };

    tiltNodes.forEach((node) => {
      node.classList.add("tilt-card");
      node.addEventListener("pointermove", onPointerMove, { passive: true });
      node.addEventListener("pointerleave", onPointerLeave, { passive: true });
      node.addEventListener("pointercancel", onPointerLeave, { passive: true });
    });

    return () => {
      tiltNodes.forEach((node) => {
        node.classList.remove("tilt-card");
        node.removeEventListener("pointermove", onPointerMove);
        node.removeEventListener("pointerleave", onPointerLeave);
        node.removeEventListener("pointercancel", onPointerLeave);
      });
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden className="ui-fx-layer">
      <div className="scroll-progress-track">
        <motion.span className="scroll-progress-bar" style={{ scaleX: smoothProgress }} />
      </div>
      <span className="cursor-aura" />
      {!reduceMotion && (
        <div className="particle-field">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="particle-dot"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
