"use client";

import { useRef, useState } from "react";
import SeePortfolioButton from "./SeePortfolioButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./portfolio.scss";
import { SanityImageAssetDocument } from "next-sanity";
import SizedImage from "../image/SizedImage";

gsap.registerPlugin(useGSAP);

export default function Portfolio({
  images,
}: {
  images: SanityImageAssetDocument[];
}) {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const portfolioWrapperRef = useRef<HTMLDivElement>(null);

  function handlePortfolioVisibility() {
    setIsPortfolioVisible(!isPortfolioVisible);
  }

  useGSAP(() => {
    if (isPortfolioVisible) {
      const portfolioImages = document.querySelectorAll(".portfolio-image");
      gsap.fromTo(
        portfolioImages,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.03,
          duration: 0.75,
        }
      );
      gsap.to(portfolioWrapperRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(portfolioWrapperRef.current, {
        y: "100%",
      });
    }
  }, [isPortfolioVisible]);

  console.log(images);

  return (
    <>
      <div ref={portfolioWrapperRef} className="portfolio__wrapper">
        <div className="portfolio__container">
          {images?.length
            ? images?.map((image, i) => (
                <SizedImage
                  className="portfolio-image"
                  image={image}
                  key={image._id}
                  alt={"Portfolio Image " + (i + 1)}
                />
              ))
            : null}
        </div>
      </div>
      <SeePortfolioButton isVisible={isPortfolioVisible} callback={handlePortfolioVisibility}>
        {isPortfolioVisible ? "Close" : "See"} Portfolio
      </SeePortfolioButton>
    </>
  );
}
