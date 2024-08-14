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
  const threeImagesContainer = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageSlidesSub, setImageSlidesSub] = useState(
    imageSlides?.length ? splitArrayIntoSubArrays(imageSlides, 3) : null
  );

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
              invalidateOnRefresh: true,
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
                invalidateOnRefresh: true,
              },
              y: () =>
                -calculateScrollAmount(
                  imageContainers[i] as HTMLDivElement,
                  imageRef.current
                ),
              stagger: 0.03,
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`three-images__wrapper ${marginBottom ? marginBottom : ""}`}
      ref={imagesWrapperRef}
    >
      <div className="three-images__container" ref={threeImagesContainer}>
        {imageSlidesSub?.length
          ? imageSlidesSub.map((images, i) => (
              <div key={images[i]?._id} className="images__wrapper">
                <div className="images__container">
                  {images.map((image) => (
                    <div
                      className="image__wrapper"
                      key={image?._id + image?.url}
                      ref={imageRef}
                    >
                      <Image
                        fill
                        src={image?.url}
                        alt=""
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
