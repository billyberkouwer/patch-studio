"use client";

import { useEffect, useRef } from "react";
import "./mouse-track-gradient.scss";
import gsap from "gsap";

export default function MouseTrackGradient({
  zIndex = 0,
  disableAfterDelay = false,
}: {
  zIndex?: number;
  disableAfterDelay?: boolean;
}) {
  const gradient = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveFunc);

    function mouseMoveFunc(e: MouseEvent) {
      const depth = 1;
      const moveX = e.clientX / depth;
      const moveY = e.clientY / depth;

      gsap.to(gradient.current, {
        x: moveX,
        y: moveY,
        opacity: 1,
        ease: "back",
        duration: 2,
      });
    }

    if (disableAfterDelay) {
      const timeout = setTimeout(() => {
        document.removeEventListener("mousemove", mouseMoveFunc);
      }, 2000);

      return () => {
        clearTimeout(timeout);
        document.removeEventListener("mousemove", mouseMoveFunc);
      };
    }

    return () => {
      document.removeEventListener("mousemove", mouseMoveFunc);
    };
  }, [disableAfterDelay]);

  return (
    <div
      ref={gradient}
      className="mouse-track-gradient"
      style={{ zIndex: zIndex }}
    ></div>
  );
}
