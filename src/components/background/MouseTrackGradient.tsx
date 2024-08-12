"use client";

import { useEffect } from "react";
import "./mouse-track-gradient.scss"
import gsap from "gsap";

export default function MouseTrackGradient() {
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveFunc);

    let gradient = document.querySelector(".mouse-track-gradient");

    function mouseMoveFunc(e: MouseEvent) {
      const depth = 1;
      const moveX = (e.clientX) / depth;
      const moveY = (e.clientY) / depth;

      gsap.to(gradient, {
        x: moveX,
        y: moveY,
        opacity: 1,
        ease: "back",
        duration: 2
      });
    }

    return () => document.removeEventListener("mousemove", mouseMoveFunc);
  });

  return <div className="mouse-track-gradient"></div>;
}
