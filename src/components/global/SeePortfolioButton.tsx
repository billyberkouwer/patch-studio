"use client";

import gsap from "gsap";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SeePortfolioButton() {
  useGSAP(() => {
    const footer = document.getElementById("footer");
    if (footer) {
      gsap.to("#see-portfolio-button", {
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          toggleActions: "play play reverse reverse"
        },
        opacity: 0,
        autoAlpha: 1,
      });
    }
  });
  return (
    <div id="see-portfolio-button" className="see-portfolio__wrapper">
      <Button state="bold">See Portfolio</Button>
    </div>
  );
}
