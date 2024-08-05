"use client";

import { useState } from "react";
import BookingCard from "./BookingCard";
import "./container-booking-cards.scss";
import "@/components/global/button.scss";

export default function ContainerBookingCards({
  shootType,
  bookingOptions,
}: {
  shootType: "editorial" | "headshot";
  bookingOptions: BookingOption[];
}) {
  const [currentSelectionValue, setCurrentSelectionValue] = useState<
    string | undefined
  >(undefined);

  function handleChangeSelection(currentValue: string) {
    setCurrentSelectionValue(currentValue);
  }

  return (
    <div className="booking-cards__wrapper">
      <form className="booking-cards__form">
        <div className="booking-cards__container">
          {bookingOptions.map((bookingOption) => (
            <BookingCard
              shootType={shootType}
              key={bookingOption.name}
              name={bookingOption.name}
              image={bookingOption.image}
              shootDetails={bookingOption.shootDetails}
              isSelected={currentSelectionValue === bookingOption.name}
              callback={handleChangeSelection}
            />
          ))}
        </div>
        <div className="submit__wrapper">
          <input
            type="submit"
            className={`button ${currentSelectionValue ? "bold" : "inactive"}`}
            value={
              currentSelectionValue
                ? `Book ${currentSelectionValue}`
                : `Select Session to Book`
            }
            disabled={currentSelectionValue ? false : true}
          />
        </div>
      </form>
    </div>
  );
}
