import Button from "../global/Button";
import ShootDescription from "./ShootDescription";
import ShootDetails from "./ShootDetails";
import "./shoot-info-section.scss";

export default function ShootInfoSection() {
  return (
    <section className="shoot-info__wrapper">
      <div className="shoot-info__container">
        <div className="shoot-details__wrapper">
          <ShootDetails title="Type" details={["Commercial", "Actor"]} />
          <ShootDetails title="Type" details={["Commercial", "Actor"]} />
          <ShootDetails title="Type" details={["Commercial", "Actor"]} />
        </div>
        <div className="shoot-description__wrapper">
            <ShootDescription />
        </div>
        <Button text="Learn More" state="bold" />
      </div>
    </section>
  );
}
