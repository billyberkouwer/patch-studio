"use client";

import Image from "next/image";
import "./image-landing-section.scss";
import Heading from "../global/Heading";
import Tagline from "../global/Tagline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SanityImageAssetDocument } from "next-sanity";
import { useState } from "react";

export default function ImageLandingSection({
  imageLandingData,
}: {
  imageLandingData: {
    backgroundImage: SanityImageAssetDocument | null;
    header: { header: string; _type: "sectionHeader" } | null;
    tagline: {
      taglineText: string | undefined | null;
      _type: "tagline";
      marginBottom: "normal";
    } | null;
  };
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  // useGSAP(() => {
  //   const children = document.querySelector(
  //     ".image-landing-text__wrapper"
  //   )?.children;
  //   if (children) {
  //     gsap.fromTo(
  //       children,
  //       {
  //         opacity: 0,
  //         autoAlpha: 1,
  //         y: 100,
  //       },
  //       {
  //         opacity: 1,
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 1,
  //         stagger: 0.2
  //       }
  //     );
  //   }
  // }, []);
  return (
    <div className="image-landing-section__wrapper">
      <div className="image-landing-section__container">
        {imageLandingData.backgroundImage ? (
          <div className="image__wrapper" style={{opacity: isLoaded ? 1 : 0, transition: "opacity 0.75s"}}>
            <Image
              unoptimized
              src={imageLandingData.backgroundImage.url}
              onLoadingComplete={() => setIsLoaded(true)}
              fill
              sizes="100vw"
              alt={imageLandingData?.backgroundImage?.altText ? imageLandingData?.backgroundImage?.altText : "Header Image"}
            />
          </div>
        ) : null}
        <div className="image-landing-text__wrapper">
          {imageLandingData.header ? (
            <Heading>{imageLandingData.header.header}</Heading>
          ) : null}
          {imageLandingData.tagline?.taglineText ? (
            <Tagline>{imageLandingData.tagline?.taglineText}</Tagline>
          ) : null}
        </div>
      </div>
    </div>
  );
}
