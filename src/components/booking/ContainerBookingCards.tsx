"use client";

import { useEffect, useRef, useState } from "react";
import BookingCard from "./BookingCard";
import "./container-booking-cards.scss";
import "@/components/global/button.scss";
import { BookingOption } from "@/types";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer, useGSAP);

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
  const bookingContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numBookingEls = document.querySelectorAll(
      ".booking-card__wrapper"
    ).length;
  }, []);

  useEffect(() => {
    const bookingEl = document.querySelector(".booking-card__wrapper");
    const swipeAmount = bookingEl?.getBoundingClientRect().width;
    const numBookingEls = document.querySelectorAll(
      ".booking-card__wrapper"
    ).length;
    let swipePosition = Math.floor(numBookingEls / 2);

    const ctx = gsap.context(() => {
      let isSwiped = false;

      function swipe(direction: string | undefined) {
        console.log(swipePosition);
        if (direction === "right" && swipePosition > 0 && !isSwiped) {
          swipePosition = swipePosition - 1;
          gsap.to(bookingContainer.current, {
            x: "+=" + parseInt(`${swipeAmount}`),
          });
          isSwiped = true;
        }

        if (direction === "left" && swipePosition < numBookingEls - 1 && !isSwiped) {
          swipePosition = swipePosition + 1;
          gsap.to(bookingContainer.current, {
            x: "-=" + parseInt(`${swipeAmount}`),
          });
          isSwiped = true;
        }
      }
      const observer = Observer.create({
        target: window, // can be any element (selector text is fine)
        type: "pointer,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
        onRight: (el) => {
          swipe("right");
        },
        onLeft: (el) => {
          swipe("left");
        },
        onStop: () => {
          isSwiped = false;
        },
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  function handleChangeSelection(currentValue: string) {
    setCurrentSelectionValue(currentValue);
  }

  return (
    <div className="booking-cards__wrapper">
      <form className="booking-cards__form">
        <div className="booking-cards__container" ref={bookingContainer}>
          {bookingOptions.map((bookingCard) => (
            <BookingCard
              shootType={shootType}
              key={bookingCard._key}
              bookingTypeTitle={bookingCard.bookingTypeTitle}
              bookingImage={bookingCard.bookingImage}
              bookingInfoBlock={bookingCard.bookingInfoBlock}
              isSelected={
                currentSelectionValue === bookingCard.bookingTypeTitle
              }
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
