import { ReactNode } from "react";
import "./heading.scss";

export default function PageTitle({
  children,
  headingType,
}: {
  children: ReactNode;
  headingType?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="heading__wrapper">
      <div className="heading__container">
        {headingType === "h2" ? (
          <h2>{children}</h2>
        ) : headingType === "h3" ? (
          <h3>{children}</h3>
        ) : (
          <h1>{children}</h1>
        )}
      </div>
    </div>
  );
}
