"use client";

import Link from "next/link";
import "./button.scss";

const stateStyle = {
  inactive: "inactive",
  bold: "bold",
  invert: "invert",
};

export default function Button({
  state,
  isLarge,
  text,
  slug,
  callback,
}: {
  text: string;
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
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`button ${state ? stateStyle[state] : ""} ${isLarge ? "large" : ""}`}
      onClick={() => (callback ? callback() : null)}
    >
      {text}
    </button>
  );
}
