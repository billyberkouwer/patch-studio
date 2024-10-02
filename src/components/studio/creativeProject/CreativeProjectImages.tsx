"use client";

import Image from "next/image";
import "./creative-project-images.scss";
import { SanityImageAssetDocument } from "next-sanity";
import SizedImage from "@/components/image/SizedImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CreativeProjectImages({
  images,
  title,
}: {
  images: SanityImageAssetDocument[] | null;
  title: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const children = container.current?.children;
    if (children?.length) {
      const arr = gsap.utils.toArray(children);
      gsap.to(arr, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        opacity: 1,
        duration: 1,
        stagger: function (index: number) {
          // your custom logic here. Return the delay from the start (not between each)
          return index * 0.12;
        },
      });
    }
  }, []);
  return (
    <div className="creative-project-images__wrapper">
      <div ref={container} className="creative-project-images__container">
        {images?.length
          ? images.map((image, i) => (
              <div key={image._id + i} className="image__wrapper">
                <Image
                  src={image.url}
                  alt={image?.altText ? image.altText : title + " " + i}
                  placeholder="blur"
                  blurDataURL={image.metadata.lqip}
                  fill
                  sizes={
                    images.length === 1
                      ? "100vw"
                      : images.length === 2
                        ? "50vw"
                        : "25vw"
                  }
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
