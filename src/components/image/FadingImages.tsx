"use client";

import { SanityImageAssetDocument } from "next-sanity";
import SizedImage from "./SizedImage";
import "./fading-images.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function FadingImages({
  images,
}: {
  images: SanityImageAssetDocument[] | null | undefined;
}) {
  useGSAP(() => {
    const images = gsap.utils.toArray("img") as HTMLImageElement[];
    let count = 0;
    const interval = setInterval(() => {
      gsap.to(images, {
        opacity: 0,
      });
      gsap.to(images[count], {
        opacity: 1,
      });

      if (count < images.length - 1) {
        count++;
      } else {
        count = 0;
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="fading-images__wrapper">
      <div className="fading-images__container">
        {images?.length
          ? images.map((image, i) => (
              <Image
                key={image?._id}
                src={image?.url}
                alt={"Image of location " + (i + 1)}
                layout="fill"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={image?.metadata?.lqip}
              />
            ))
          : null}
      </div>
    </div>
  );
}
