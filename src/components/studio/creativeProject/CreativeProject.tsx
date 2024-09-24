"use client";

import { useState } from "react";
import "./creative-project-accordion.scss";
import Button from "@/components/global/Button";
import CreativeProjectImages from "./CreativeProjectImages";

export default function CreativeProject({
  creativeProject,
}: {
  creativeProject: {
    title: string;
    content: {
      images: { url: string }[];
      textContent: string;
      link: string;
    };
  };
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="creative-project-accordion__wrapper">
      <div className={`creative-project-accordion__container`}>
        <div
          className="creative-project-accordion__header"
          aria-controls="open-panel"
          onClick={handleExpansion}
        >
          {creativeProject?.title ? <h4>{creativeProject.title}</h4> : null}
          <Button callback={handleExpansion}>{isExpanded ? "-" : "+"}</Button>
        </div>
        <div
          className={`creative-project-accordion-content__wrapper ${isExpanded ? "expanded" : ""}`}
        >
          <div
            className={`creative-project-accordion-content__container ${isExpanded ? "expanded" : ""}`}
          >
            {creativeProject?.content.images ? (
              <CreativeProjectImages images={creativeProject.content.images} />
            ) : null}
            <div className="text__content">
              {creativeProject?.content.textContent ? (
                <div className="info-text__container">
                  <p>{creativeProject.content.textContent}</p>
                </div>
              ) : null}
              {creativeProject?.content.link ? (
                <Button isLarge slug={creativeProject.content.link}>
                  View
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
