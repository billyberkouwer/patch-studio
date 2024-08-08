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
  height,
  isContained,
}: {
  images: SanityImageAssetDocument[];
  scrollDirection?: undefined | null | "left" | "right";
  height?: number;
  isContained?: boolean;
}) {
  console.log(images)
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imagesRef.current,
      {
        x: scrollDirection === "right" ? -500 : 0,
      },
      {
        scrollTrigger: {
          trigger: wrapperRef.current,
          end: "+=3000",
          scrub: 0.2,
        },
        x: scrollDirection === "right" ? 0 : -500,
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
        {images.map((image) => (
          <div
            className="image__wrapper"
            key={image.url}
            style={{ width: height ? height / 1.2 + "px" : undefined }}
          >
            <Image
              fill
              src={image.url}
              style={{ objectFit: isContained ? "contain" : "cover" }}
              alt={image.alt}
              sizes="350px"
              quality={60}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
