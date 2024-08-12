"use client";

import Image from "next/image";
import "./three-scrolling-images.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ThreeScrollingImages({
  imageSlides,
  marginBottom,
}: {
  imageSlides: { src: string; alt: string }[][];
  marginBottom?: "small" | "medium" | "large";
}) {
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const threeImagesContainer = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageContainers = document.querySelectorAll(".images__container");

    function calculateScrollAmount(
      container: HTMLDivElement | null,
      imageEl: HTMLDivElement | null
    ): number {
      return (
        parseInt(`${container?.getBoundingClientRect().height}`) -
        parseInt(`${imageEl?.getBoundingClientRect().height}`)
      );
    }

    let ctx = gsap.context(() => {
      if (imageContainers.length) {
        gsap.fromTo(
          threeImagesContainer.current,
          { y: 0 },
          {
            scrollTrigger: {
              trigger: imagesWrapperRef.current,
              start: "50% 50%",
              pin: true,
              end: "+=1000",
              scrub: 0.4,
              invalidateOnRefresh: true
            },
          }
        );

        for (let i = 0; i < imageContainers.length; i++) {
          console.log(
            calculateScrollAmount(
              imageContainers[i] as HTMLDivElement,
              imageRef.current
            )
          );

          console.log(imageContainers[i]);

          gsap.fromTo(
            imageContainers,
            { y: 0 },
            {
              scrollTrigger: {
                trigger: imagesWrapperRef.current,
                start: "50% 50%",
                end: "+=1000",
                scrub: 0.4,
                invalidateOnRefresh: true
              },
              y: () => -calculateScrollAmount(
                imageContainers[i] as HTMLDivElement,
                imageRef.current
              ),
              stagger: 0.03
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  useGSAP(() => {});

  return (
    <div
      className={`three-images__wrapper ${marginBottom ? marginBottom : ""}`}
      ref={imagesWrapperRef}
    >
      <div className="three-images__container" ref={threeImagesContainer}>
        {imageSlides.map((images, i) => (
          <div key={images[i].src} className="images__wrapper">
            <div className="images__container">
              {images.map((image) => (
                <div className="image__wrapper" key={image.src} ref={imageRef}>
                  <Image fill src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
