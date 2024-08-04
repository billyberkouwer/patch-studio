import "./shoot-details.scss";

export default function ShootDetails({
  title,
  details,
}: {
  title: string;
  details: string[];
}) {
  return (
    <div className="shoot-details__container">
      <h6>{title}</h6>
      <ul>
        {details.map((detail) => (
            <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
