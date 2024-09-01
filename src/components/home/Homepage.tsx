"use client";

import Button from "@/components/global/Button";
import CenterLogo from "@/components/global/CenterLogo";
import Tagline from "@/components/global/Tagline";
import ShootInfoSection from "@/components/home/ShootInfoSection";
import ParallaxImageHeader from "@/components/image/ParallaxImageHeader";
import ScrollingImages from "@/components/image/ScrollingImages";
import {
  assignClasses,
  getCenterTextFromClasslist,
  getEndPositionFromClasslist,
} from "@/helpers";
import { HomepageComponentTypes } from "@/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Homepage({
  pageData,
}: {
  pageData: HomepageComponentTypes[] | null;
}) {
  const [isLogoBlue, setIsLogoBlue] = useState(false);
  const [centerTextContent, setCenterTextContent] = useState("patch studio");

  useEffect(() => {
    const scrollEvent = () => {
      const pxToScrollBottom =
        parseInt(`${document.scrollingElement?.scrollHeight}`) -
        window.scrollY -
        window.innerHeight;
      if (pxToScrollBottom < 50) {
        gsap.to("#book-button", {
          opacity: 0,
          duration: 0.2,
        });
      }
    };

    document.addEventListener("scroll", scrollEvent);

    const ctx = gsap.context(() => {
      if (centerTextContent == "patch studio") {
        gsap.to("#book-button", {
          opacity: 0,
          duration: 0.2,
        });
      } else {
        gsap.to("#book-button", {
          opacity: 1,
          duration: 0.2,
        });
      }
    });

    return () => {
      ctx.clear();
      document.removeEventListener("scroll", scrollEvent);
    };
  }, [centerTextContent]);

  useGSAP(() => {
    const colourfulElements = document.querySelectorAll(".is-colorful");

    for (let i = 0; i < colourfulElements.length; i++) {
      gsap.to("#page-wrapper", {
        scrollTrigger: {
          trigger: colourfulElements[i],
          start: "top 50%",
          end: getEndPositionFromClasslist(colourfulElements[i].classList),
          onEnterBack: () => {
            setIsLogoBlue(false);
          },
          onEnter: () => {
            setIsLogoBlue(false);
          },
          onLeaveBack: () => {
            setIsLogoBlue(true);
          },
          onLeave: () => {
            setIsLogoBlue(true);
          },
        },
      });
    }

    const gsapSections = document.querySelectorAll(".animation-trigger");

    for (let i = 0; i < gsapSections.length; i++) {
      gsap.to("#page-wrapper", {
        scrollTrigger: {
          trigger: gsapSections[i],
          start: "top 50%",
          end: "bottom 50%",
          onEnterBack: () => {
            const centerTextContent = getCenterTextFromClasslist(
              gsapSections[i].classList
            );
            setCenterTextContent(centerTextContent);
          },
          onEnter: () => {
            const centerTextContent = getCenterTextFromClasslist(
              gsapSections[i].classList
            );
            setCenterTextContent(centerTextContent);
          },
        },
      });
    }
  }, []);

  return (
    <div className="page__wrapper" id="page-wrapper">
      <CenterLogo isLogoBlue={isLogoBlue} text={centerTextContent} />
      {pageData?.length
        ? pageData.map((componentData) => {
            if (componentData._type === "horizontalScrollImagesHome") {
              return (
                <div
                  key={componentData._key}
                  className={`animation-trigger is-colorful ${assignClasses(componentData)}`}
                >
                  <ScrollingImages
                    scrollDirection={
                      componentData.directionOfHorizontalImageScroll
                    }
                    images={componentData.selectionOfImages}
                    title={componentData.title}
                    isFixed
                  />
                </div>
              );
            }
            if (componentData._type === "parallaxImageHeaderHome") {
              return (
                <div
                  key={componentData._key}
                  className={`animation-trigger is-colorful scales-65 ${assignClasses(componentData)}`}
                >
                  <ParallaxImageHeader
                    images={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "taglineHome") {
              console.log(componentData)
              return (
                <div
                  key={componentData._key}
                  className={`animation-trigger ${assignClasses(componentData)}`}
                >
                  <Tagline marginBottom={componentData.marginBottom}>{componentData.taglineText}</Tagline>
                </div>
              );
            }
            if (componentData._type === "infoSectionHome") {
              return (
                <section
                  key={componentData._key}
                  className={`animation-trigger ${assignClasses(componentData)}`}
                >
                  <ShootInfoSection
                    shootDetails={componentData.keyInfoBlocks}
                    description={componentData.sectionText}
                  />
                </section>
              );
            }
          })
        : null}
      <div id="book-button" className="fixed-book-button__wrapper">
        <Button state="invert" slug="/">
          Book {centerTextContent}
        </Button>
      </div>
    </div>
  );
}
