"use client";

import { useEffect, useRef } from "react";
import "./mouse-track-gradient.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";

gsap.registerPlugin(useGSAP, Observer)

export default function MouseTrackGradient({
  zIndex = 0,
  disableAfterDelay = false,
}: {
  zIndex?: number;
  disableAfterDelay?: boolean;
}) {
  const gradient = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    function mouseMoveFunc(e: Observer) {
      const depth = 1;
      const moveX = e.x || 0 / depth;
      const moveY = e.y || 0 / depth;

      gsap.to(gradient.current, {
        x: moveX,
        y: moveY,
        opacity: 1,
        ease: "back",
        duration: 2,
      });
    }

    const observer = Observer.create({
      target: window,
      onChange: e => mouseMoveFunc(e),
      onMove: e => mouseMoveFunc(e),
      type: "pointer, touch"
    })

    return () => {
      observer.kill();
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
