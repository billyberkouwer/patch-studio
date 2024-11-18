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
import CreativeProjectSection from "../studio/creativeProject/CreativeProjectsSection";
import MemberCardsSection from "../studio/MemberCardsSection";
import ImageLandingSection from "../studio/ImageLandingSection";
import ButtonWrapper from "../global/ButtonWrapper";

export default function PageComposer({
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
        ? pageData.map((componentData, i) => {
          
            if (componentData._type === "horizontalScrollImages") {
              return (
                <div key={componentData._key + i}>
                  <ScrollingImages
                    scrollDirection={
                      componentData.directionOfHorizontalImageScroll
                    }
                    size={
                      componentData?.sizeOfHorizontalScrollImages
                        ? componentData.sizeOfHorizontalScrollImages
                        : "medium"
                    }
                    images={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "creativeProjectsSelection") {
              return (
                <div key={componentData._key + i}>
                  <CreativeProjectSection
                    creativeProjects={componentData.creativeProjects}
                  />
                </div>
              );
            }
            if (componentData._type === "teamMemberCards") {
              return (
                <div key={componentData._key + i}>
                  <MemberCardsSection
                    memberCards={componentData.teamMemberCards}
                  />
                </div>
              );
            }
            if (componentData._type === "imageHeader") {
              return (
                <div key={componentData._key + i}>
                  <ImageLandingSection imageLandingData={componentData} />
                </div>
              );
            }
            if (componentData._type === "parallaxImageHeader") {
              return (
                <div key={componentData._key + i}>
                  <ParallaxImageHeader
                    images={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "verticalScrollImages") {
              return (
                <div key={componentData._key + i}>
                  <ThreeScrollingImages
                    imageSlides={componentData.selectionOfImages}
                  />
                </div>
              );
            }
            if (componentData._type === "tagline") {
              return (
                <div key={componentData._key + i}>
                  <Tagline marginBottom={componentData.marginBottom}>
                    {componentData.taglineText}
                  </Tagline>
                </div>
              );
            }
            if (componentData._type === "textColumns") {
              return (
                <div key={"text column" + i}>
                  <ColumnText
                    textSize={componentData?.textSize}
                    textArr={componentData.columnText}
                  ></ColumnText>
                </div>
              );
            }
            if (componentData._type === "infoSection") {
              return (
                <section key={componentData._key + i}>
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
                <div key={componentData._key + i}>
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
                  key={componentData._key + i}
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
                <Heading key={componentData._key + i}>
                  {componentData.header}
                </Heading>
              );
            }
            if (
              componentData._type === "contactLinks" &&
              componentData?.link &&
              componentData?.linkType &&
              componentData?.title
            ) {
              return (
                <ButtonWrapper key={componentData._key + i}>
                  <Button
                    isLarge
                    slug={formatContactLink(
                      componentData.link,
                      componentData.linkType
                    )}
                  >
                    {componentData.title}
                  </Button>
                </ButtonWrapper>
              );
            }
          })
        : null}
    </div>
  );
}
