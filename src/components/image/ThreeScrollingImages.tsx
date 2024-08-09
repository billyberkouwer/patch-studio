import Image from "next/image";
import "./three-scrolling-images.scss";

export default function ThreeScrollingImages({
  imageSlides,
  marginBottom,
}: {
  imageSlides: {src: string, alt: string}[][];
  marginBottom?: "small" | "medium" | "large";
}) {
  return (
    <div
      className={`three-images__wrapper ${marginBottom ? marginBottom : ""}`}
    >
      <div className="three-images__container">
        {imageSlides.map((images, i) => (
          <div key={images[i].src} className="images__wrapper">
            {images.map((image) => (
              <div className="image__wrapper" key={image.src}>
                <Image fill src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
