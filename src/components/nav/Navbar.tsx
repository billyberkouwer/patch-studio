"use client";

import { useState } from "react";
import Button from "../global/Button";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import "./navbar.scss";

export default function Navbar({
  navItems,
}: {
  navItems: { title: string; slug: string }[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleSetIsMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div id="navbar" className="navbar">
      <div className="nav-logo__wrapper">
        <NavLogo />
      </div>
      <div className={isMenuOpen ? "mob-nav--visible" : ""}>
        <Nav navItems={navItems} />
      </div>
      <div className="mobile-menu-button__wrapper">
        <Button state="bold" text="Menu +" callback={handleSetIsMenuOpen} />
      </div>
      <div className="bookings-button__wrapper">
        <Button state="bold" text="Bookings" slug="/" />
      </div>
    </div>
  );
}
