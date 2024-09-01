import { PortableTextBlock } from "next-sanity";
import "./tagline.scss";
import { ReactNode } from "react";

export default function Tagline({
  marginBottom,
  children,
}: {
  marginBottom: "normal" | "small";
  children: ReactNode;
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
