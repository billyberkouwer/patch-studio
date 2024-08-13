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
  image: SanityImageAssetDocument;
  alt: string;
  size?: "small" | "medium" | "large";
  quality?: number
}) {
  const [src, setSrc] = useState(image.metadata.lqip || "");

  const wrapper = useRef<HTMLDivElement>(null);
  const nextImage = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    ImageSizing(image, wrapper.current, size);

    function handleResize() {
      ImageSizing(image, wrapper.current, size);
      console.log("resize-image")
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [image, size]);

  useLayoutEffect(() => {
    if (src === image.url && nextImage.current) {
      nextImage.current.classList.add("--unblur")
    }
  }, [src, image]);

  return (
    <div ref={wrapper} className="image__wrapper">
      <Image
        fill
        ref={nextImage}
        alt={alt}
        src={src}
        quality={quality}
        onLoad={() => setSrc(image.url)}
        sizes={getNextImageSizes(size)}
      />
    </div>
  );
}
