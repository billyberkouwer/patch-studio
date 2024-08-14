import { getNextImageSizes, ImageSizing } from "@/helpers";
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function SizedImage({
  image,
  alt,
  size = "medium",
  quality = 75,
}: {
  image: SanityImageAssetDocument | null;
  alt: string;
  size?: "small" | "medium" | "large";
  quality?: number;
}) {
  const [src, setSrc] = useState<string | null>(null);

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

  useLayoutEffect(() => {
    if (src === image?.url && nextImage.current) {
      nextImage.current.classList.add("--unblur");
    }
  }, [src, image]);

  if (src || image?.metadata?.lqip) {
    return (
      <div ref={wrapper} className="image__wrapper">
        <Image
          fill
          ref={nextImage}
          alt={alt}
          src={src || `${image?.metadata?.lqip}`}
          quality={quality}
          onLoad={() => setSrc(image.url)}
          sizes={getNextImageSizes(size)}
        />
      </div>
    );
  }

  return null;
}
