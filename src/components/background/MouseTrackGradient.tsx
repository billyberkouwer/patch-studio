"use client";

import { useEffect, useRef } from "react";
import "./mouse-track-gradient.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, Observer);

export default function MouseTrackGradient({
  zIndex = 0,
  disableAfterDelay = false,
}: {
  zIndex?: number;
  disableAfterDelay?: boolean;
}) {
  const gradient = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useGSAP(() => {
    let isDisplayed = false;

    function mouseMoveFunc(e: Observer) {
      const depth = 1;
      const moveX = e.x || 0 / depth;
      const moveY = e.y || 0 / depth;
      if (!isDisplayed) {
        gsap.to(gradient.current, {
          opacity: 1,
          duration: 2,
        });
        isDisplayed = true;
      }
      gsap.to(gradient.current, {
        x: moveX,
        y: moveY,
        ease: "back",
        duration: 2,
      });
    }

    const observer = Observer.create({
      target: document,
      onChange: (e) => mouseMoveFunc(e),
      onMove: (e) => mouseMoveFunc(e),
      type: "pointer, touch",
    });

    return () => {
      observer.kill();
    };
  }, [disableAfterDelay, pathname]);

  return (
    <div
      aria-hidden
      ref={gradient}
      className="mouse-track-gradient"
      style={{ zIndex: zIndex }}
    ></div>
  );
}
