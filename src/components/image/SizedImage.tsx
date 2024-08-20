import { getNextImageSizes, ImageSizing } from "@/helpers";
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function SizedImage({
  image,
  alt,
  size = "medium",
  quality = 80,
}: {
  image: SanityImageAssetDocument | null;
  alt: string;
  size?: "small" | "medium" | "large";
  quality?: number;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const nextImage = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    function handleResize() {
      ImageSizing(image, wrapper.current, size);
    }

    ImageSizing(image, wrapper.current, size);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [image, size]);

  if (image?.metadata?.lqip && image?.url) {
    return (
      <div ref={wrapper} className="image__wrapper">
        <Image
          fill
          ref={nextImage}
          alt={alt}
          src={image?.url}
          placeholder="blur"
          blurDataURL={image?.metadata?.lqip}
          quality={quality}
          onLoad={(e) => {
            (e.target as HTMLImageElement).classList.add("--unblur");
          }}
          sizes={getNextImageSizes(size)}
        />
      </div>
    );
  }

  return null;
}
