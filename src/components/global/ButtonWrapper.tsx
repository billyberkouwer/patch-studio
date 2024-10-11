import { ReactNode } from "react";
import "./button-wrapper.scss";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
  return <div className="solo-button__wrapper">{children}</div>;
}
