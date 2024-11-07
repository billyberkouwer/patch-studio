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
  const [centerTextContent, setCenterTextContent] = useState("Patch Studio");
  const [centerTextLink, setCenterTextLink] = useState<string | null>(null);

  console.log(pageData)
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
      } else if (centerTextContent !== "Patch Studio") {
        gsap.to("#book-button", {
          opacity: 1,
          duration: 0.2,
        });
      }
    };

    document.addEventListener("scroll", scrollEvent);
    const tl = gsap.timeline();

    const ctx = gsap.context(() => {
      if (centerTextContent === "Patch Studio") {
        tl.to("#book-button", {
          opacity: 0,
          duration: 0.2,
        });
      } else {
        tl.to("#book-button", {
          opacity: 1,
          duration: 0.2,
        });
      }
    });

    document.addEventListener("resize", () => tl.invalidate());
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
            const currentComponentData = pageData?.filter((component) => component._key === gsapSections[i].id)[0];
            console.log(currentComponentData?.centerText)
            setCenterTextContent(currentComponentData?.centerText?.centerTextContent ? currentComponentData?.centerText?.centerTextContent : "Patch Studio");
            setCenterTextLink(currentComponentData?.centerText?.link ? currentComponentData?.centerText?.link : null);
          },
          onEnter: () => {
            const currentComponentData = pageData?.filter((component) => component._key === gsapSections[i].id)[0];
            console.log(currentComponentData?.centerText)
            setCenterTextContent(currentComponentData?.centerText?.centerTextContent ? currentComponentData?.centerText?.centerTextContent : "Patch Studio");
            setCenterTextLink(currentComponentData?.centerText?.link ? currentComponentData?.centerText?.link : null);
          },
        },
      });
    }
  }, []);

  return (
    <div className="page__wrapper" id="page-wrapper">
      <CenterLogo isLogoBlue={isLogoBlue} text={centerTextContent} link={centerTextLink} />
      {pageData?.length
        ? pageData.map((componentData) => {
            if (componentData._type === "horizontalScrollImagesHome") {
              return (
                <div
                  key={componentData._key}
                  className={`animation-trigger is-colorful ${assignClasses(componentData)}`}
                  id={componentData._key}
                >
                  <ScrollingImages
                    scrollDirection={
                      componentData.directionOfHorizontalImageScroll
                    }
                    images={componentData.selectionOfImages}
                    isFixed={componentData.isFixed}
                  />
                </div>
              );
            }
            if (componentData._type === "parallaxImageHeaderHome") {
              return (
                <div
                  key={componentData._key}
                  className={`animation-trigger is-colorful scales-65 ${assignClasses(componentData)}`}
                  id={componentData._key}
                >
                  <ParallaxImageHeader
                    images={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "taglineHome") {
              return (
                <div
                  key={componentData._key}
                  className={`animation-trigger ${assignClasses(componentData)}`}
                  id={componentData._key}
                >
                  <Tagline marginBottom={componentData.marginBottom}>
                    {componentData.taglineText}
                  </Tagline>
                </div>
              );
            }
            if (componentData._type === "infoSectionHome") {
              return (
                <section
                  key={componentData._key}
                  className={`animation-trigger ${assignClasses(componentData)}`}
                  id={componentData._key}
                >
                  <ShootInfoSection
                    shootDetails={componentData.keyInfoBlocks}
                    description={componentData.sectionText}
                    button={componentData.button}
                  />
                </section>
              );
            }
          })
        : null}
      <div id="book-button" className="fixed-book-button__wrapper">
        <Button
          state="bold"
          slug={
            centerTextContent === "editorial"
              ? "/editorial#booking"
              : centerTextContent === "headshots"
                ? "/headshots#booking"
                : ""
          }
        >
          Book {centerTextContent}
        </Button>
      </div>
    </div>
  );
}
