"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SanityImageAssetDocument } from "next-sanity";
import SizedImage from "./SizedImage";
import { getSizeFromString } from "@/helpers";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollingImages({
  images,
  scrollDirection = "left",
  isFixed,
  title,
  size = "medium",
  isContained,
}: {
  images: SanityImageAssetDocument[];
  title: string;
  isFixed?: boolean;
  scrollDirection?: undefined | null | "left" | "right";
  size?: "small" | "medium" | "large";
  isContained?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    function calculateScrollAmount(container: HTMLDivElement | null) {
      return (
        parseInt(`${container?.getBoundingClientRect().width}`) -
        window.innerWidth
      );
    }

    gsap.fromTo(
      imagesRef.current,
      {
        x:
          scrollDirection === "right"
            ? () => -calculateScrollAmount(imagesRef.current)
            : 0,
      },
      {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: isFixed ? "50% 50%" : "top 50%",
          pin: isFixed,
          end: () => "+=" + 2000 * ((window.innerHeight / window.innerWidth / 3) + 0.5),
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
        x:
          scrollDirection === "right"
            ? 0
            : () => -calculateScrollAmount(imagesRef.current),
      }
    );
  }, []);

  return (
    <section
      className="scrolling-images__wrapper"
      ref={wrapperRef}
    >
      <div className={`scrolling-images__container --${size}`} ref={imagesRef}>
        {images.map((image, i) => (
          <SizedImage key={image._id} image={image} alt="" />
        ))}
      </div>
    </section>
  );
}
