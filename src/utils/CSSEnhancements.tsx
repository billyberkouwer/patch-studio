"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export default function CSSEnhancements() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    function setViewportHeightVariable() {
      const root = document.documentElement;
      root.style.setProperty(
        "--real-viewport-height",
        window.innerHeight + "px"
      );
    }

    function setNavHeightVariable() {
      const root = document.documentElement;
      const nav = document.getElementById("navbar");
      if (nav) {
        const height = nav.getBoundingClientRect().height + "px";
        root.style.setProperty("--nav-height", height);
      }
    }

    function setVariables() {
      setViewportHeightVariable();
      setNavHeightVariable();
    }

    setVariables();

    window.addEventListener("resize", setVariables);
    document.addEventListener("scroll", setVariables);

    return () => {
      window.removeEventListener("resize", setVariables);
      document.removeEventListener("scroll", setVariables);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (pathname.includes("admin")) {
      root.style.setProperty("--rem-size", 16 + "px");
    } else {
      root.style.setProperty("--rem-size", 10 + "px");
    }
  }, [pathname]);

  return null;
}
