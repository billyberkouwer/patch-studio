import { getNextImageSizes, ImageSizing } from "@/helpers";
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function SizedImage({
  image,
  sizeDimension,
  priority = false,
  alt,
  className,
  size = "medium",
  quality = 80,
}: {
  image: SanityImageAssetDocument | null;
  sizeDimension?: "width" | "height";
  priority?: boolean;
  className?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  quality?: number;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const nextImage = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    function handleResize() {
      ImageSizing(image, wrapper.current, size, sizeDimension);
    }

    ImageSizing(image, wrapper.current, size, sizeDimension);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [image, size, sizeDimension]);

  if (image?.metadata?.lqip && image?.url) {
    return (
      <div
        ref={wrapper}
        className={`image__wrapper sized-image ${className ? className : ""}`}
      >
        <Image
          style={{objectFit: "cover"}}
          fill
          ref={nextImage}
          alt={image?.altText ? image.altText : alt}
          src={image?.url}
          priority={priority}
          placeholder="blur"
          blurDataURL={image?.metadata?.lqip}
          quality={quality}
          sizes={getNextImageSizes(size)}
        />
      </div>
    );
  }

  return null;
}
