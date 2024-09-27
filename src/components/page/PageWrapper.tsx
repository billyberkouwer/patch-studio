"use client";

import { PageComponentTypes, PageDataType } from "@/types";
import Tagline from "../global/Tagline";
import ParallaxImageHeader from "../image/ParallaxImageHeader";
import ScrollingImages from "../image/ScrollingImages";
import ShootInfoSection from "../home/ShootInfoSection";
import Heading from "../global/Heading";
import ContainerBookingCards from "../booking/ContainerBookingCards";
import FAQAccordion from "../faq/FAQAccordion";
import ThreeScrollingImages from "../image/ThreeScrollingImages";
import { formatContactLink, splitArrayIntoSubArrays } from "@/helpers";
import ColumnText from "../global/ColumnText";
import Button from "../global/Button";
import FAQBackground from "../faq/FAQBackground";
import { useLayoutEffect } from "react";
import CreativeProjectSection from "../studio/creativeProject/CreativeProjectsSection";
import MemberCardsSection from "../studio/MemberCardsSection";
import ImageLandingSection from "../studio/ImageLandingSection";

export default function PageWrapper({
  title,
  pageData,
  noTopPadding,
}: {
  title: string;
  pageData: PageComponentTypes[];
  noTopPadding?: boolean;
}) {
  return (
    <div className={`page__wrapper ${noTopPadding ? "" : "--top-padding"}`}>
      {title ? <Heading>{title}</Heading> : null}
      {pageData?.length
        ? pageData.map((componentData) => {
            if (componentData._type === "horizontalScrollImages") {
              return (
                <div key={componentData._key}>
                  <ScrollingImages
                    scrollDirection={
                      componentData.directionOfHorizontalImageScroll
                    }
                    images={componentData.selectionOfImages}
                    title={componentData.title}
                  />
                </div>
              );
            }
            if (componentData._type === "creativeProjectsSelection") {
              return (
                <div key={componentData._key}>
                  <CreativeProjectSection
                    creativeProjects={componentData.creativeProjects}
                  />
                </div>
              );
            }
            if (componentData._type === "teamMemberCards") {
              return (
                <div key={componentData._key}>
                  <MemberCardsSection
                    memberCards={componentData.teamMemberCards}
                  />
                </div>
              );
            }
            if (componentData._type === "imageHeader") {
              return (
                <div key={componentData._key}>
                  <ImageLandingSection imageLandingData={componentData} />
                </div>
              );
            }
            if (componentData._type === "parallaxImageHeader") {
              return (
                <div key={componentData._key}>
                  <ParallaxImageHeader
                    images={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "verticalScrollImages") {
              return (
                <div key={componentData._key}>
                  <ThreeScrollingImages
                    imageSlides={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "tagline") {
              return (
                <div key={componentData._key}>
                  <Tagline marginBottom={componentData.marginBottom}>
                    {componentData.taglineText}
                  </Tagline>
                </div>
              );
            }
            if (componentData._type === "textColumns") {
              return (
                <div key={componentData._key}>
                  <ColumnText textSize={componentData?.textSize} textArr={componentData.columnText}></ColumnText>
                </div>
              );
            }
            if (componentData._type === "infoSection") {
              return (
                <section key={componentData._key}>
                  <ShootInfoSection
                    shootDetails={componentData.keyInfoBlocks}
                    description={componentData.sectionText}
                    button={componentData.button}
                  />
                </section>
              );
            }
            if (componentData._type === "bookingSection") {
              return (
                <div key={componentData._key}>
                  <Heading>{componentData.title}</Heading>
                  <ContainerBookingCards
                    shootType="editorial"
                    bookingOptions={componentData.bookingCards}
                  />
                </div>
              );
            }
            if (componentData._type === "faqSection") {
              return (
                <section
                  key={componentData._key}
                  style={{ overflow: "hidden" }}
                  id="faq-section"
                >
                  <FAQBackground />
                  <Heading>FAQs</Heading>
                  <FAQAccordion faqItems={componentData.faqItem} />
                </section>
              );
            }
            if (componentData._type === "sectionHeader") {
              return (
                <Heading key={componentData._key}>
                  {componentData.header}
                </Heading>
              );
            }
            if (componentData._type === "contactLinks") {
              return (
                <div
                  key={componentData._key}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "10rem",
                  }}
                >
                  <Button
                    isLarge
                    slug={formatContactLink(
                      componentData.link,
                      componentData.linkType
                    )}
                  >
                    {componentData.title}
                  </Button>
                </div>
              );
            }
          })
        : null}
    </div>
  );
}
