"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollingImages({
  images,
  scrollDirection = "left",
  height,
  isContained,
}: {
  images: Images;
  scrollDirection?: undefined | null | "left" | "right";
  height?: number;
  isContained?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imagesRef.current,
      {
        x: scrollDirection === "right" ? -1000 : 0,
      },
      {
        scrollTrigger: {
          trigger: wrapperRef.current,
          end: "+=3000",
          scrub: 1,
        },
        x: scrollDirection === "right" ? 0 : -1000,
      }
    );
  }, []);

  return (
    <section
      className="scrolling-images__wrapper"
      ref={wrapperRef}
      style={{ height: height ? height + "px" : undefined }}
    >
      <div className="scrolling-images__container" ref={imagesRef}>
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
      </div>
    </section>
  );
}
