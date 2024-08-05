"use client";

import Link from "next/link";
import "./button.scss";
import { ReactNode } from "react";

const stateStyle = {
  inactive: "inactive",
  bold: "bold",
  invert: "invert",
};

export default function Button({
  state,
  isLarge,
  children,
  slug,
  callback,
}: {
  children: ReactNode,
  state?: "inactive" | "bold" | "invert";
  isLarge?: boolean;
  slug?: string;
  callback?: () => void;
}) {
  
  if (slug) {
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
      onClick={() => (callback ? callback() : null)}
    >
      {children}
    </button>
  );
}
