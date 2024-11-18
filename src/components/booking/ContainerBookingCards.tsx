"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import BookingCard from "./BookingCard";
import "./container-booking-cards.scss";
import "@/components/global/button.scss";
import { BookingOption } from "@/types";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRouter, useSearchParams } from "next/navigation";

gsap.registerPlugin(Observer, useGSAP);

export default function ContainerBookingCards({
  shootType,
  bookingOptions,
}: {
  shootType: "editorial" | "headshot";
  bookingOptions: BookingOption[] | null;
}) {
  const [currentSelectionValue, setCurrentSelectionValue] = useState<
    { value: string; at: string } | undefined
  >(undefined);
  const bookingContainer = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const bookingEl = document.querySelector(".booking-card__wrapper");
    const swipeAmount = bookingEl?.getBoundingClientRect().width;
    const numBookingEls = document.querySelectorAll(
      ".booking-card__wrapper"
    ).length;
    let swipePosition = Math.floor(numBookingEls / 2);
    const tl = gsap.timeline();

    const ctx = gsap.context(() => {
      let isSwiped = false;

      function swipe(direction: string | undefined) {
        if (direction === "right" && swipePosition > 0 && !isSwiped) {
          swipePosition = swipePosition - 1;
          tl.to(bookingContainer.current, {
            x: "+=" + (parseInt(`${swipeAmount}`) + 8),
          });
          isSwiped = true;
        }

        if (
          direction === "left" &&
          swipePosition < numBookingEls - 1 &&
          !isSwiped
        ) {
          swipePosition = swipePosition + 1;
          tl.to(bookingContainer.current, {
            x: "-=" + (parseInt(`${swipeAmount}`) + 8),
          });
          isSwiped = true;
        }
      }
      const observer = Observer.create({
        target: bookingContainer.current, // can be any element (selector text is fine)
        type: "pointer,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
        tolerance: 40,
        onRight: (el) => {
          document.body.style.overflowY = "hidden";
          swipe("right");
        },
        onLeft: (el) => {
          document.body.style.overflowY = "hidden";
          swipe("left");
        },
        onStop: () => {
          document.body.style.overflowY = "visible";
          isSwiped = false;
        },
      });
    });

    document.addEventListener("resize", () => tl.invalidate());

    return () => {
      ctx.kill();
    };
  }, []);

  function handleChangeSelection(currentValue: { value: string; at: string }) {
    if (currentValue.at == currentSelectionValue?.at) {
      let link = "/bookings";
      if (currentSelectionValue?.at) {
        link = link + "?at=" + currentSelectionValue.at;
      }
      router.push(link);
    }
    setCurrentSelectionValue(currentValue);
  }

  return (
    <div className="booking-cards__wrapper" id="booking">
      <form className="booking-cards__form">
        <div className="booking-cards__container" ref={bookingContainer}>
          {bookingOptions?.length
            ? bookingOptions.map((bookingCard) => (
                <BookingCard
                  shootType={shootType}
                  key={bookingCard._key}
                  bookingTypeTitle={bookingCard.bookingTypeTitle}
                  bookingImage={bookingCard.bookingImage}
                  bookingInfoBlock={bookingCard.bookingInfoBlock}
                  bookingType={bookingCard.appointmentType}
                  isSelected={
                    currentSelectionValue?.value ===
                    bookingCard.bookingTypeTitle
                  }
                  callback={handleChangeSelection}
                />
              ))
            : null}
        </div>
        <div className="submit__wrapper">
          <input
            type="submit"
            className={`button ${currentSelectionValue ? "bold" : "inactive"}`}
            value={
              currentSelectionValue
                ? `Book ${currentSelectionValue.value}`
                : `Select Session to Book`
            }
            disabled={currentSelectionValue ? false : true}
            onClick={(e) => {
              e.preventDefault();
              let link = "/bookings";
              if (currentSelectionValue?.at) {
                link = link + "?at=" + currentSelectionValue.at;
              }
              router.push(link);
            }}
          />
        </div>
      </form>
    </div>
  );
}
