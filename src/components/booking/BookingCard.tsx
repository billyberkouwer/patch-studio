"use client";

import Image from "next/image";
import "./booking-card.scss";
import ShootDetails from "../global/ShootDetails";
import { SanityImageAssetDocument } from "next-sanity";
import { BookingOption } from "@/types";

export default function BookingCard({
  shootType,
  bookingTypeTitle,
  bookingImage,
  bookingInfoBlock,
  bookingType,
  isSelected,
  callback,
}: {
  shootType: "editorial" | "headshot";
  bookingTypeTitle: string;
  bookingImage: SanityImageAssetDocument;
  bookingInfoBlock: BookingOption["bookingInfoBlock"];
  bookingType: string;
  isSelected: boolean;
  callback: (currentValue: { value: string; at: string }) => void;
}) {
  return (
    <label className={`booking-card__wrapper ${isSelected ? "selected" : ""}`}>
      <input
        type="radio"
        name={shootType}
        value={bookingTypeTitle}
        onClick={() => callback({ value: bookingTypeTitle, at: bookingType })}
      />
      <div className="booking-card__container">
        <h4>{bookingTypeTitle}</h4>
        <div className="booking-card-image__wrapper">
          {bookingImage?.url ? (
            <Image
              src={bookingImage?.url}
              alt={shootType + " picture"}
              placeholder="blur"
              blurDataURL={bookingImage?.metadata?.lqip || ""}
              sizes="(max-width: 768px) 200px, 400px"
              fill
              onDragStart={(e) => {
                e.preventDefault();
                return false;
              }}
            />
          ) : null}
        </div>
        {bookingInfoBlock?.length
          ? bookingInfoBlock.map((bookingBlock, i) => {
              if (i < bookingInfoBlock.length - 1) {
                return (
                  <div
                    key={bookingTypeTitle + i}
                    className="shoot-details__wrapper--underline"
                  >
                    <ShootDetails
                      title={bookingBlock?.title}
                      details={bookingBlock?.details}
                      centerText
                    />
                  </div>
                );
              } else {
                return (
                  <ShootDetails
                    title={bookingBlock?.title}
                    details={bookingBlock?.details}
                    centerText
                    key={bookingBlock?._key}
                  />
                );
              }
            })
          : null}
      </div>
    </label>
  );
}
