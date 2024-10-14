"use client";

import { useLayoutEffect, useRef } from "react";
import "./scrolling-images.scss";
import Image from "next/image";
import gsap, { Observer, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { SanityImageAssetDocument } from "next-sanity";
import SizedImage from "./SizedImage";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollingImages({
  images,
  scrollDirection,
  isFixed,
  size = "medium",
}: {
  images: SanityImageAssetDocument[] | null;
  isFixed?: boolean;
  scrollDirection?: undefined | null | "left" | "right";
  size?: "extra-small" | "small" | "medium" | "large";
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
        // onDragEnd: (e) => {
        //   console.log(e)
        //   const scrollEl = document.scrollingElement;
        //   const scrollTop = scrollEl?.scrollTop;
        //   if (scrollTop && Math.abs(scrollAmount) > 10) {
        //     gsap.to(scrollEl, {
        //       scrollTop: "+=" + scrollAmount * 4,
        //       duration: 0.25,
        //     });
        //   }
        // },
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
          start: isFixed ? "50% 50%" : "top 100%",
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
    <section className={`scrolling-images__wrapper --${size}`} ref={wrapperRef}>
      <div className={`scrolling-images__container --${size}`} ref={imagesRef}>
        {images?.length
          ? images.map((image, i) => {
              return (
                <SizedImage
                  key={image?._id + i}
                  image={image}
                  alt={
                    image?.altText
                      ? image.altText
                      : "Scrolling selection of images " + (i + 1)
                  }
                />
              );
            })
          : null}
      </div>
    </section>
  );
}
