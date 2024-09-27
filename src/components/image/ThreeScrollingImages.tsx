"use client";

import Image from "next/image";
import "./three-scrolling-images.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { SanityImageAssetDocument } from "next-sanity";
import { splitArrayIntoSubArrays } from "@/helpers";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ThreeScrollingImages({
  imageSlides,
  marginBottom,
}: {
  imageSlides: SanityImageAssetDocument[] | null;
  marginBottom?: "small" | "medium" | "large";
}) {
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const threeImagesContainer = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageSlidesSub, setImageSlidesSub] = useState(
    imageSlides?.length ? splitArrayIntoSubArrays(imageSlides, 3) : null
  );

  useGSAP(() => {
    const imageContainers = document.querySelectorAll(".images__container");
    const imageWrappers = document.querySelectorAll(".images__wrapper");
    const tl = gsap.timeline();

    function calculateScrollAmount(
      container: HTMLDivElement | null,
      imageEl: HTMLDivElement | null
    ): number {
      if (container) {
        return (
          parseInt(`${imageEl?.getBoundingClientRect().height}`) *
          (container.children.length - 1)
        );
      }
      return 0;
    }

    if (imageContainers.length && imageSlides && imageSlides?.length >= 6) {
      tl.fromTo(
        threeImagesContainer.current,
        { y: 0 },
        {
          scrollTrigger: {
            trigger: imagesWrapperRef.current,
            start: "50% 50%",
            pin: true,
            end: "+=1500",
            scrub: 0.2,
            invalidateOnRefresh: true,
          },
        }
      );

      tl.fromTo(
        imageContainers,
        { y: 0, top: "0%" },
        {
          scrollTrigger: {
            trigger: imagesWrapperRef.current,
            start: "50% 50%",
            end: "+=1500",
            scrub: 0.2,
            invalidateOnRefresh: true,
          },
          y: (index) =>
            -imageContainers[index].clientHeight +
            imageWrappers[index].clientHeight,
          stagger: 0.03,
        }
      );
    }
    window.addEventListener("resize", () => tl.invalidate());
  }, [imageSlidesSub, imageSlides]);

  return (
    <div
      className={`three-images__wrapper ${marginBottom ? marginBottom : ""}`}
      ref={imagesWrapperRef}
    >
      <div className="three-images__container" ref={threeImagesContainer}>
        {imageSlidesSub?.length
          ? imageSlidesSub.map((images, i) => (
              <div key={images[i]?._id} className="images__wrapper">
                <div className="images__container" id={"images-container-" + i}>
                  {images.map((image) => (
                    <div
                      className="image__wrapper"
                      key={image?._id + image?.url}
                      ref={imageRef}
                    >
                      <Image
                        fill
                        src={image?.url}
                        alt={
                          image?.altText ? image.altText : "Headshot " + (i + 1)
                        }
                        placeholder={image?.metadata?.lqip ? "blur" : undefined}
                        blurDataURL={image?.metadata?.lqip}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
