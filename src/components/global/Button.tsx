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
  className,
  inlineStyle,
  isExternalLink,
  children,
  slug,
  callback,
}: {
  children: ReactNode;
  className?: string;
  inlineStyle?: any;
  state?: "inactive" | "bold" | "invert";
  isExternalLink?: boolean;
  isLarge?: boolean;
  slug?: string | null;
  callback?: (e: MouseEvent) => void;
}) {
  if (slug) {
    if (isExternalLink) {
      return (
        <a
          href={slug}
          className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""} ${className ? className : ""}`}
          style={inlineStyle ? inlineStyle : null}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          href={slug}
          className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""} ${className ? className : ""}`}
          style={inlineStyle ? inlineStyle : null}
        >
          {children}
        </Link>
      );
    }
  }

  return (
    <button
      className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""} ${className ? className : ""}`}
      onClick={(e) => (callback ? callback(e) : null)}
      style={inlineStyle ? inlineStyle : null}
    >
      {children}
    </button>
  );
}
