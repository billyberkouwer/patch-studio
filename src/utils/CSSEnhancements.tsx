"use client";

import { useEffect, useLayoutEffect } from "react";

export default function CSSEnhancements() {
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
      console.log(nav);
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

  return null;
}
