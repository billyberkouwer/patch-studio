"use client";

import Link from "next/link";
import "./button.scss";
import { MouseEvent, ReactNode } from "react";

const stateStyle = {
  inactive: "inactive",
  bold: "bold",
  invert: "invert",
};

export default function Button({
  state,
  isLarge,
  isExternalLink,
  children,
  slug,
  callback,
}: {
  children: ReactNode;
  state?: "inactive" | "bold" | "invert";
  isExternalLink?: boolean;
  isLarge?: boolean;
  slug?: string;
  callback?: (e: MouseEvent) => void;
}) {
  console.log(slug);
  if (slug) {
    if (isExternalLink) {
      return (
        <a
          href={slug}
          className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={slug}
        className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""}`}
      onClick={(e) => (callback ? callback(e) : null)}
    >
      {children}
    </button>
  );
}
