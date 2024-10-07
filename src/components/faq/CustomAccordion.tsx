"use client";

import { useState } from "react";
import "./custom-accordion.scss";
import Button from "../global/Button";
import { DropdownItemType } from "@/types";
import { PortableText } from "next-sanity";
import ReactLottie from "@/components/Lottie/LottieSvg";

export default function CustomAccordion({
  faqItem,
}: {
  faqItem: DropdownItemType;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="custom-accordion__wrapper">
      <div className={`custom-accordion__container`}>
        <div
          className="custom-accordion__header"
          aria-controls="open-panel"
          onClick={handleExpansion}
        >
          <h6>{faqItem.dropdownTitle}</h6>
          <Button state="invert" callback={handleExpansion}>
            <ReactLottie
              direction={isExpanded ? 1 : -1}
              isExpanded={isExpanded}
              src={"/lottie/patch-close-button.json"}
            />
          </Button>
        </div>
        <div
          className={`custom-accordion__body ${isExpanded ? "expanded" : ""}`}
        >
          <div className="accordion-content__container">
            <PortableText value={faqItem.dropdownContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
