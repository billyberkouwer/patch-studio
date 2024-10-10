"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";
import gsap, { Observer, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SanityImageAssetDocument } from "next-sanity";
import SizedImage from "./SizedImage";
import { getSizeFromString } from "@/helpers";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollingImages({
  images,
  scrollDirection,
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
    let mm = gsap.matchMedia();

    if (isFixed) {
      let scrollAmount = 0;
      Observer.create({
        target: imagesRef.current,
        type: "touch",
        onChangeX: (e) => {
          const scrollEl = document.scrollingElement;
          function calculateScrollAmount() {
            if (scrollDirection === "left") {
              return -e.deltaX * 2;
            } else {
              return e.deltaX * 2;
            }
          }
          scrollAmount = calculateScrollAmount();

          if (scrollEl && Math.abs(scrollAmount) > 10) {
            scrollEl.scrollTop += scrollAmount;
          }
        },
        onDragEnd: (e) => {
          console.log(e)
          const scrollEl = document.scrollingElement;
          const scrollTop = scrollEl?.scrollTop;
          if (scrollTop && Math.abs(scrollAmount) > 10) {
            gsap.to(scrollEl, {
              scrollTop: "+=" + scrollAmount * 4,
              duration: 0.25,
            });
          }
        },
      });
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
          scrub: true,
          invalidateOnRefresh: true,
        },
        ease: "none",
        x:
          scrollDirection === "right"
            ? "0px"
            : () => -calculateScrollAmount(imagesRef.current),
      }
    );
  }, [scrollDirection]);

  return (
    <section className="scrolling-images__wrapper" ref={wrapperRef}>
      <div className={`scrolling-images__container --${size}`} ref={imagesRef}>
        {images?.length && !isFixed
          ? images.map((image, i) => {
              const length = images.length;
              const displayedImages = [];
              const iterations = 7 - length;
              if (iterations !== 1) {
                for (let ii = 0; ii < iterations; ii++) {
                  displayedImages.push(images[(ii % length) - 1]);
                }
              }
              if (displayedImages.length === 0) {
                return (
                  <SizedImage
                    key={image?._id + i}
                    image={image}
                    alt={image.altText ? image.altText : ""}
                  />
                );
              }
              return displayedImages.map((displayedImage, i) => (
                <SizedImage
                  key={displayedImage?._id + i}
                  image={displayedImage}
                  alt={
                    image.altText ? image.altText : "Scrolling Image " + (i + 1)
                  }
                />
              ));
            })
          : images?.length && isFixed
            ? images.map((image, i) => (
                <SizedImage
                  key={image?._id + i}
                  image={image}
                  alt={
                    image?.altText
                      ? image.altText
                      : "Scrolling selection of images " + (i + 1)
                  }
                />
              ))
            : null}
      </div>
    </section>
  );
}
