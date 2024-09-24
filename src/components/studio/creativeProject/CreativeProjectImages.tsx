"use client"

import Image from "next/image";
import "./creative-project-images.scss";

export default function CreativeProjectImages({
  images,
}: {
  images: {url: string}[] | null;
}) {
  return (
    <div className="creative-project-images__wrapper">
      <div className="creative-project-images__container">
        {images?.length
          ? images.map((image) => (
              <div key={image.url} className="image__wrapper">
                <Image src={image.url} alt="" fill sizes="300px" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
