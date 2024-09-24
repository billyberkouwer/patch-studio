"use client";

import Image from "next/image";
import "./image-landing-section.scss";
import Heading from "../global/Heading";
import Tagline from "../global/Tagline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ImageLandingSection({
  imageLandingData,
}: {
  imageLandingData: {
    image: string | null;
    title: string | null;
    text: string | null;
  };
}) {
  useGSAP(() => {
    const children = document.querySelector(
      ".image-landing-text__wrapper"
    )?.children;
    if (children) {
      gsap.fromTo(
        children,
        {
          opacity: 0,
          autoAlpha: 1,
          y: 100,
        },
        {
          opacity: 1,
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.2
        }
      );
    }
  }, []);
  return (
    <div className="image-landing-section__wrapper">
      <div className="image-landing-section__container">
        {imageLandingData.image ? (
          <div className="image__wrapper">
            <Image src={imageLandingData.image} fill sizes="100vw" alt="" />
          </div>
        ) : null}
        <div className="image-landing-text__wrapper">
          {imageLandingData.title ? (
            <Heading>{imageLandingData.title}</Heading>
          ) : null}
          {imageLandingData.text ? (
            <Tagline>{imageLandingData.text}</Tagline>
          ) : null}
        </div>
      </div>
    </div>
  );
}
