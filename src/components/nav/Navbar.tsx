"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../global/Button";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import "./navbar.scss";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Navbar({
  navItems,
}: {
  navItems: { title: string; slug: string }[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.querySelector(".mob-nav");

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // add a media query. When it matches, the associated function will run
      mm.add("(max-width: 768px)", () => {
        if (isMenuOpen) {
          gsap.fromTo(
            nav,
            { y: "-100%" },
            {
              y: "0%",
            }
          );
        } else {
          gsap.to(
            nav,
            {
              y: "-100%",
            }
          );
        }
      });

      mm.add("min-width: 768px", () => {
        gsap.to(nav, {
          y: "0%",
        });
      });
    });

    return () => {
      ctx.kill();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  if (pathname.includes("admin")) {
    return null;
  }

  function handleSetIsMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div id="navbar" className="navbar">
      <div
        className={`nav-logo__wrapper ${isMenuOpen ? "mob-nav--visible" : ""}`}
      >
        <NavLogo />
      </div>
      <div className={isMenuOpen ? "mob-nav --visible" : "mob-nav"}>
        <Nav navItems={navItems} />
      </div>
      <div className="mobile-menu-button__wrapper">
        <Button state="bold" callback={handleSetIsMenuOpen}>
          Menu +
        </Button>
      </div>
      <div className="bookings-button__wrapper">
        <Button state="bold" slug="/bookings">
          Bookings
        </Button>
      </div>
    </div>
  );
}
