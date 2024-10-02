"use client";

import { useState } from "react";
import "./creative-project-accordion.scss";
import Button from "@/components/global/Button";
import CreativeProjectImages from "./CreativeProjectImages";
import { CreativeProjectType } from "@/types";
import { lightOrDark } from "@/helpers";
import { PortableText } from "next-sanity";
import LottieSvg from "@/components/Lottie/LottieSvg";

export default function CreativeProject({
  creativeProject,
}: {
  creativeProject: CreativeProjectType;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(
    `rgb(${creativeProject.backgroundColor?.r},${creativeProject.backgroundColor?.g},${creativeProject.backgroundColor?.b})`
  );

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      className="creative-project-accordion__wrapper"
      style={{
        backgroundColor: creativeProject?.backgroundColor
          ? backgroundColor
          : undefined,
        color: lightOrDark(backgroundColor) === "dark" ? "#FAFAFA" : "#242145",
      }}
    >
      <div className={`creative-project-accordion__container`}>
        <div
          className="creative-project-accordion__header"
          aria-controls="open-panel"
          onClick={handleExpansion}
        >
          {creativeProject?.title ? <h4>{creativeProject.title}</h4> : null}
          <Button
            inlineStyle={{
              backgroundColor: creativeProject?.backgroundColor
                ? backgroundColor
                : undefined,
              color:
                lightOrDark(backgroundColor) === "dark" ? "#FAFAFA" : "#242145",
            }}
            callback={handleExpansion}
          >
            <LottieSvg
              direction={isExpanded ? 1 : -1}
              isExpanded={isExpanded}
              src={"/lottie/patch-close-button.json"}
            />
          </Button>
        </div>
        <div
          className={`creative-project-accordion-content__wrapper ${isExpanded ? "expanded" : ""}`}
        >
          <div
            className={`creative-project-accordion-content__container ${isExpanded ? "expanded" : ""}`}
          >
            {creativeProject?.images ? (
              <CreativeProjectImages
                title={creativeProject.title}
                images={creativeProject.images}
              />
            ) : null}
            <div className="text__content">
              {creativeProject?.description ? (
                <div className="info-text__container">
                  <PortableText value={creativeProject.description} />
                </div>
              ) : null}
              {creativeProject?.link ? (
                <Button
                  inlineStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color:
                      lightOrDark(backgroundColor) === "dark"
                        ? "#FAFAFA"
                        : "#242145",
                    borderColor:
                      lightOrDark(backgroundColor) === "dark"
                        ? "#FAFAFA"
                        : "#242145",
                  }}
                  isLarge
                  slug={
                    creativeProject.link.url.includes("http")
                      ? creativeProject.link.url
                      : "https://" + creativeProject.link.url
                  }
                >
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
