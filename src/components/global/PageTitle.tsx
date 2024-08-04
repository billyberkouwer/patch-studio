import { ReactNode } from "react";
import "./page-title.scss"

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <div className="page-title__wrapper">
      <div className="page-title__container">
        <h1>{children}</h1>
      </div>
    </div>
  );
}
