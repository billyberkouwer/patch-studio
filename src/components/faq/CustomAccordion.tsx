"use client";

import { useState } from "react";
import "./custom-accordion.scss";
import Button from "../global/Button";
import { DropdownItemType } from "@/types";
import { PortableText } from "next-sanity";

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
            {isExpanded ? "-" : "+"}
          </Button>
        </div>
        <div
          className={`custom-accordion__body ${isExpanded ? "expanded" : ""}`}
        >
          <PortableText value={faqItem.dropdownContent} />
        </div>
      </div>
    </div>
  );
}
