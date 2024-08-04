"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";

export default function ScrollingImages({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="parallax-images__container" ref={containerRef}>
      {images.map((image) => (
        <div className="image__wrapper" key={image.src}>
          <Image fill src={image.src} style={{objectFit: "cover"}} alt={image.alt} />
        </div>
      ))}
    </section>
  );
}
