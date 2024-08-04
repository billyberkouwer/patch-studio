import { PortableTextBlock } from "next-sanity";
import './tagline.scss'
import { ReactNode } from "react";

export default function Tagline({ children }: { children: ReactNode }) {
  return (
    <div className="tagline__wrapper">
      <div className="tagline__container">
        <h2>{children}</h2>
      </div>
    </div>
  );
}
