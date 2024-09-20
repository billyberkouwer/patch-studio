"use client";
import "./landing-page.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MouseTrackGradient from "../background/MouseTrackGradient";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP);

export default function LandingPage() {
  const wrapper = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useGSAP(() => {
    gsap.fromTo(
      wrapper.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 2,
        delay: pathname === "/" ? 3 : 0,
        autoAlpha: 1,
      }
    );
  });

  useLayoutEffect(() => {
    if (isFirstLoad) {
      const centerText = document.querySelector(".center-logo__wrapper");
      const pageWrapper = document.querySelector(
        ".page__wrapper"
      ) as HTMLDivElement;

      centerText?.classList.remove("invert");

      if (pageWrapper) {
        pageWrapper.classList.add("--no-height");
      }

      setTimeout(
        () => {
          const pageWrapper = document.querySelector(
            ".page__wrapper"
          ) as HTMLDivElement;
          centerText?.classList.add("invert");
          if (pageWrapper) {
            pageWrapper.classList.remove("--no-height");          }
        },
        pathname === "/" ? 3000 : 10
      );
    }
  }, [pathname, isFirstLoad]);

  useLayoutEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <>
      <div ref={wrapper} className="landing-page__wrapper">
        <MouseTrackGradient
          key="landing-mouse-gradient"
          zIndex={9999}
          disableAfterDelay
        />
      </div>
    </>
  );
}
