"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SanityImageAssetDocument } from "next-sanity";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollingImages({
  images,
  scrollDirection = "left",
  isFixed,
  title,
  height,
  isContained,
}: {
  images: SanityImageAssetDocument[];
  title: string;
  isFixed?: boolean;
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
        x: scrollDirection === "right" ? (isFixed ? "-85%" : "-500px") : 0,
      },
      {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: isFixed ? "50% 50%" : "top bottom",
          pin: isFixed,
          end: "+=3000",
          scrub: 0.1,
        },
        x: scrollDirection === "right" ? 0 : (isFixed ? "-100%" : "-500px"),
      }
    );
  }, []);

  return (
    <section
      className="scrolling-images__wrapper"
      ref={wrapperRef}
      style={{ height: height ? height + "px" : "500px" }}
    >
      <div className="scrolling-images__container" ref={imagesRef}>
        {images.map((image, i) => (
          <div
            className="image__wrapper"
            key={image.url}
            style={{ width: height ? height / 1.2 + "px" : undefined }}
          >
            <Image
              fill
              src={image.url}
              style={{ objectFit: isContained ? "contain" : "cover" }}
              alt={`Selected ${title} image ${i + 1}`}
              sizes="350px"
              quality={60}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
