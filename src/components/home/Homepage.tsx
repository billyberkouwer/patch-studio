"use client";

import Button from "@/components/global/Button";
import CenterLogo from "@/components/global/CenterLogo";
import Tagline from "@/components/global/Tagline";
import ShootInfoSection from "@/components/home/ShootInfoSection";
import ParallaxImageHeader from "@/components/image/ParallaxImageHeader";
import ScrollingImages from "@/components/image/ScrollingImages";
import { headshotShootDetails, images } from "@/utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function getEndPositionFromClasslist(classList: DOMTokenList) {
  if (classList.contains("scales")) {
    const scaleAmount = classList[classList.length - 1];
    return `bottom ${scaleAmount}`;
  }
  return "bottom 50%";
}

function getCenterTextFromClasslist(classList: DOMTokenList) {
  const formatTitle = classList[classList.length - 1].replace(/-/g, " ");
  return formatTitle;
}

export default function Homepage() {
  const [isLogoBlue, setIsLogoBlue] = useState(false);
  const [centerTextContent, setCenterTextContent] = useState("Patch Studio");

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
            console.log("enter back");
          },
          onEnter: () => {
            setIsLogoBlue(false);
            console.log("enter");
          },
          onLeaveBack: () => {
            setIsLogoBlue(true);
            console.log("leave back");
          },
          onLeave: () => {
            setIsLogoBlue(true);
            console.log("leave");
          },
        },
      });
    }

    const gsapSections = document.querySelectorAll(".gsap-section");

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
            console.log("enter back");
          },
          onEnter: () => {
            const centerTextContent = getCenterTextFromClasslist(
              gsapSections[i].classList
            );
            setCenterTextContent(centerTextContent);
            console.log("enter");
          },
        },
      });
    }

    const footer = document.getElementById("footer");
    const hideButton = document.getElementsByClassName("hide-button");
    const hideButtonTriggers = [footer, ...hideButton];

    for (let i = 0; i < hideButtonTriggers.length; i++) {
      gsap.to("#book-button", {
        scrollTrigger: {
          trigger: hideButtonTriggers[i],
          start: "top bottom",
          toggleActions: "reverse play reverse play",
        },
        opacity: 1,
        duration: 0.2,
        autoAlpha: 1
      });
    }
  }, []);

  return (
    <div className="page__wrapper" id="page-wrapper">
      <CenterLogo isLogoBlue={isLogoBlue} text={centerTextContent} />
      <section className="hide-button gsap-section patch-studio">
        <div className={`is-colorful scales 65%`}>
          <ParallaxImageHeader images={images} />
        </div>
        <div>
          <Tagline>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            quaerat iste non delectus iusto molestias, sed suscipit aliquid
            ullam iure expedita sapiente aperiam quam quis cupiditate asperiores
            eveniet rerum a. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </Tagline>
        </div>
      </section>
      <section className="gsap-section editorial">
        <div className="is-colorful">
          <ScrollingImages scrollDirection="right" images={images} />
        </div>
        <ShootInfoSection
          shootDetails={headshotShootDetails}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Iste odit nesciunt enim doloremque repudiandae, unde omnis ipsam rerum reprehenderit nobis ullam aspernatur tenetur culpa dolore quam pariatur deserunt dolorum! 
          Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo molestias odit assumenda ullam modi suscipit necessitatibus repellendus, facere, labore animi beatae culpa nisi ipsam exercitationem minus, totam non nesciunt. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis soluta officiis incidunt eveniet veniam in necessitatibus error blanditiis ipsum distinctio, perferendis, ea, laudantium sequi magni rerum nihil sint? Aliquid!`}
        />
      </section>
      <section className="gsap-section headshots">
        <div className="is-colorful">
          <ScrollingImages images={images} />
        </div>
        <ShootInfoSection
          shootDetails={headshotShootDetails}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Iste odit nesciunt enim doloremque repudiandae, unde omnis ipsam rerum reprehenderit nobis ullam aspernatur tenetur culpa dolore quam pariatur deserunt dolorum! 
        Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo molestias odit assumenda ullam modi suscipit necessitatibus repellendus, facere, labore animi beatae culpa nisi ipsam exercitationem minus, totam non nesciunt. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis soluta officiis incidunt eveniet veniam in necessitatibus error blanditiis ipsum distinctio, perferendis, ea, laudantium sequi magni rerum nihil sint? Aliquid!`}
        />
      </section>
      <div
        id="book-button"
        className="fixed-book-button__wrapper"
      >
        <Button state="invert" slug="/">
          Book {centerTextContent}
        </Button>
      </div>
    </div>
  );
}
