"use client";

import { useState } from "react";
import BookingCard from "./BookingCard";
import "./container-booking-cards.scss";
import "@/components/global/button.scss";
import { BookingOption } from "@/types";

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
          {bookingOptions.map((bookingCard) => (
            <BookingCard
              shootType={shootType}
              key={bookingCard._key}
              bookingTypeTitle={bookingCard.bookingTypeTitle}
              bookingImage={bookingCard.bookingImage}
              bookingInfoBlock={bookingCard.bookingInfoBlock}
              isSelected={currentSelectionValue === bookingCard.bookingTypeTitle}
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
