"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";

export default function ScrollingImages({
  images,
  height,
  isContained,
}: {
  images: {
    src: string;
    alt: string;
  }[];
  height?: number;
  isContained?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="parallax-images__container"
      ref={containerRef}
      style={{ height: height ? height + "px" : undefined }}
    >
      {images.map((image) => (
        <div
          className="image__wrapper"
          key={image.src}
          style={{ width: height ? height / 1.2 + "px" : undefined }}
        >
          <Image
            fill
            src={image.src}
            style={{ objectFit: isContained ? "contain" : "cover" }}
            alt={image.alt}
          />
        </div>
      ))}
    </section>
  );
}
