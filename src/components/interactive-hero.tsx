"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

type InteractiveHeroProps = {
  children: ReactNode;
};

export function InteractiveHero({ children }: InteractiveHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    const cursorX = event.clientX - rect.left;
    const cursorY = event.clientY - rect.top;

    node.style.setProperty("--parallax-x", relativeX.toFixed(4));
    node.style.setProperty("--parallax-y", relativeY.toFixed(4));
    node.style.setProperty("--cursor-x", `${cursorX.toFixed(1)}px`);
    node.style.setProperty("--cursor-y", `${cursorY.toFixed(1)}px`);
  };

  const handleMouseLeave = () => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    node.style.setProperty("--parallax-x", "0");
    node.style.setProperty("--parallax-y", "0");
    node.style.setProperty("--cursor-x", "50%");
    node.style.setProperty("--cursor-y", "50%");
  };

  return (
    <div ref={containerRef} className="interactive-hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
