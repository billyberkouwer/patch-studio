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
            className={`nav-item ${pathname === "/" + navItem.slug ? "active" : ""}`}
          >
            <Link href={navItem.slug}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
