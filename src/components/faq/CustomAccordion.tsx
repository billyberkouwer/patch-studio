"use client";

import { useState } from "react";
import "./custom-accordion.scss";
import Button from "../global/Button";

export default function CustomAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="custom-accordion__wrapper">
      <div className={`custom-accordion__container`}>
        <div className="custom-accordion__header" aria-controls="open-panel" onClick={handleExpansion}>
          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit?</h6>
          <Button state="invert" callback={handleExpansion}>{isExpanded ? "-" : "+"}</Button>
        </div>
        <div className={`custom-accordion__body ${isExpanded ? "expanded" : ""}`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            adipisci exercitationem quae quod possimus, impedit iure nobis
            reiciendis modi vel dolore, consectetur delectus. Consectetur, vel
            alias nemo accusamus exercitationem odit!
          </p>
        </div>
      </div>
    </div>
  );
}
