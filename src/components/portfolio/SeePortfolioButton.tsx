"use client";

import gsap from "gsap";
import Button from "../global/Button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "./see-portfolio-button.scss";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SeePortfolioButton({
  callback,
  children,
}: {
  callback: () => void;
  children: ReactNode | ReactNode[];
}) {
  useGSAP(() => {
    const footer = document.getElementById("footer");
    if (footer) {
      gsap.to("#see-portfolio-button", {
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          toggleActions: "play play reverse reverse",
        },
        opacity: 0,
        autoAlpha: 1,
      });
    }
  }, []);
  return (
    <div id="see-portfolio-button" className="see-portfolio-button__wrapper">
      <Button callback={callback} state="bold">
        {children}
      </Button>
    </div>
  );
}
