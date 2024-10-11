"use client";

import Link from "next/link";
import "./nav.scss";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Nav({
  navItems,
}: {
  navItems: {
    title: string;
    slug: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav-list">
        {navItems.map((navItem) => (
          <li
            key={navItem.title + navItem.slug}
            className={`nav-item ${navItem.slug === "/" && pathname === "/" ? "active" : pathname === "/" + navItem.slug ? "active" : pathname === "/contact" && navItem.title === "Contact" ? "active" : pathname === "/terms-and-conditions" && navItem.title == "House Rules" ? "active" : pathname === "/studio" && navItem.title == "Studio" ? "active" : ""}`}
          >
            <Link href={navItem.slug}>{navItem.title}</Link>
          </li>
        ))}
        <li
          key={"bookings nav item"}
          className={`nav-item ${pathname === "/bookings" ? "active" : ""} bookings-nav-item`}
        >
          <Link href={"/bookings"}>Bookings</Link>
        </li>
      </ul>
    </nav>
  );
}
