"use client";

import Image from "next/image";
import "./booking-card.scss";
import ShootDetails from "../global/ShootDetails";

export default function BookingCard({
  shootType,
  name,
  image,
  shootDetails,
  isSelected,
  callback,
}: {
  shootType: "editorial" | "headshot";
  name: string;
  image: Image;
  shootDetails: { title: string; details: TextArray }[];
  isSelected: boolean;
  callback: (currentValue: string) => void;
}) {
  return (
    <label className={`booking-card__wrapper ${isSelected ? "selected" : ""}`}>
      <input
        type="radio"
        name={shootType}
        value={name}
        onClick={() => callback(name)}
      />
      <div className="booking-card__container">
        <h4>{name}</h4>
        <div className="booking-card-image__wrapper">
          <Image src={image.src} alt={image.alt} fill />
        </div>
        {shootDetails.map((shootDetail, i) => {
          if (i < shootDetails.length - 1) {
            return (
              <div
                key={shootDetail.title}
                className="shoot-details__wrapper--underline"
              >
                <ShootDetails
                  title={shootDetail.title}
                  details={shootDetail.details}
                  centerText
                />
              </div>
            );
          } else {
            return (
              <ShootDetails
                title={shootDetail.title}
                details={shootDetail.details}
                key={shootDetail.title}
                centerText
              />
            );
          }
        })}
      </div>
    </label>
  );
}
