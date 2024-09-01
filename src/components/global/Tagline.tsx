import { PortableTextBlock } from "next-sanity";
import "./tagline.scss";
import { ReactNode } from "react";

export default function Tagline({
  children,
  marginBottom,
}: {
  children: ReactNode;
  marginBottom?: "normal" | "small";
}) {
  return (
    <div
      className={`tagline__wrapper ${marginBottom === "small" ? "small-bottom-margin" : ""}`}
    >
      <div className="tagline__container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}
