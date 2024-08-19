"use client";

import { useEffect, useState } from "react";
import Button from "../global/Button";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import "./navbar.scss";
import { usePathname } from "next/navigation";

export default function Navbar({
  navItems,
}: {
  navItems: { title: string; slug: string }[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <Button state="bold" slug="/">
          Bookings
        </Button>
      </div>
    </div>
  );
}
