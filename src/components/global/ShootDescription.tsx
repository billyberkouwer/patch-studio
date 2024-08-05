import { ReactNode } from "react";
import "./shoot-description.scss";

export default function ShootDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="shoot-description__container">
      <p>{children}</p>
    </div>
  );
}
