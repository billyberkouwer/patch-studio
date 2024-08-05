import "./shoot-details.scss";

export default function ShootDetails({
  title,
  details,
  centerText,
}: {
  title: ShootDetails["title"];
  details: ShootDetails["details"];
  centerText?: boolean;
}) {
  return (
    <div className={`shoot-details__container ${centerText ? "centered" : ""}`}>
      <h6>{title}</h6>
      <ul>
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
