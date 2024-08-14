import { KeyInfoBlockType } from "@/types";
import "./shoot-details.scss";

export default function ShootDetails({
  title,
  details,
  centerText,
}: {
  title: KeyInfoBlockType["title"] | null;
  details: KeyInfoBlockType["details"] | null;
  centerText?: boolean;
}) {
  return (
    <div className={`shoot-details__container ${centerText ? "centered" : ""}`}>
      <h6>{title}</h6>
      <ul>
        {details?.length
          ? details.map((detail) => <li key={detail}>{detail}</li>)
          : null}
      </ul>
    </div>
  );
}
