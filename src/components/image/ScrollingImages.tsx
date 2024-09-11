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
  images: SanityImageAssetDocument[] | null;
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

    const tl = gsap.timeline();
    
    tl.fromTo(
      imagesRef.current,
      {
        x:
          scrollDirection === "right"
            ? () => -calculateScrollAmount(imagesRef.current)
            : "0px",
      },
      {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: isFixed ? "50% 50%" : "top 50%",
          pin: isFixed,
          end: () =>
            "+=" + 2000 * (window.innerHeight / window.innerWidth / 3 + 0.5),
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
        x:
          scrollDirection === "right"
            ? "0px"
            : () => -calculateScrollAmount(imagesRef.current),
      }
    );

    window.addEventListener("resize", () => tl.invalidate());
  }, [scrollDirection]);

  return (
    <section className="scrolling-images__wrapper" ref={wrapperRef}>
      <div className={`scrolling-images__container --${size}`} ref={imagesRef}>
        {images?.length && !isFixed
          ? images.map((image, i) => {
              const length = images.length;
              const displayedImages = [];
              const iterations = 10 - length;
              for (let ii = 0; ii < iterations; ii++) {
                displayedImages.push(images[(ii % length) - 1]);
              }
              if (displayedImages.length < 1) {
                return <SizedImage key={image?._id + i} image={image} alt="" />;
              }
              return displayedImages.map((displayedImage, i) => (
                <SizedImage
                  key={displayedImage?._id + i}
                  image={displayedImage}
                  alt=""
                />
              ));
            })
          : images?.length && isFixed
            ? images.map((image, i) => (
                <SizedImage key={image?._id + i} image={image} alt="" />
              ))
            : null}
      </div>
    </section>
  );
}
