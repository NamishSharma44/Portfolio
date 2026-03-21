"use client";

import Image from "next/image";
import { useState } from "react";

type HeroPortraitProps = {
  alt: string;
};

export function HeroPortrait({ alt }: HeroPortraitProps) {
  const [src, setSrc] = useState("/profile-photo-cutout-v3.png");

  return (
    <Image
      src={src}
      alt={alt}
      width={780}
      height={1200}
      className="hero-portrait"
      onError={() => setSrc("/profile-placeholder.svg")}
      priority
    />
  );
}
