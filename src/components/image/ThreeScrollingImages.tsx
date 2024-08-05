import Image from "next/image";
import "./three-scrolling-images.scss";

export default function ThreeScrollingImages({
  imageSlides,
}: {
  imageSlides: [Images, Images, Images];
}) {
  return (
    <div className="three-images__wrapper">
      <div className="three-images__container">
        {imageSlides.map((images) => (
          <div key={images[0].src} className="images__wrapper">
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
