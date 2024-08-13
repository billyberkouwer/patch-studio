"use client"

import { PageComponentTypes, PageDataType } from "@/types";
import Tagline from "../global/Tagline";
import ParallaxImageHeader from "../image/ParallaxImageHeader";
import ScrollingImages from "../image/ScrollingImages";
import ShootInfoSection from "../home/ShootInfoSection";
import Heading from "../global/Heading";
import ContainerBookingCards from "../booking/ContainerBookingCards";
import FAQAccordion from "../faq/FAQAccordion";
import ThreeScrollingImages from "../image/ThreeScrollingImages";
import { splitArrayIntoSubArrays } from "@/helpers";

export default function PageWrapper({
  title,
  pageData,
}: {
  title: string;
  pageData: PageComponentTypes[];
}) {

  return (
    <div className="page__wrapper top-padding">
      <Heading>{title}</Heading>
      {pageData.map((componentData) => {
        if (componentData._type === "horizontalScrollImages") {
          return (
            <div key={componentData._key}>
              <ScrollingImages
                scrollDirection={componentData.directionOfHorizontalImageScroll}
                images={componentData.selectionOfImages}
                title={componentData.title}
              />
            </div>
          );
        }
        if (componentData._type === "parallaxImageHeader") {
          return (
            <div key={componentData._key}>
              <ParallaxImageHeader images={componentData.selectionOfImages} />
            </div>
          );
        }
        if (componentData._type === "verticalScrollImages") {
          const imgArray = splitArrayIntoSubArrays(componentData.selectionOfImages, 3)
          return (
            <div key={componentData._key}>
              <ThreeScrollingImages imageSlides={imgArray} />
            </div>
          );
        }
        if (componentData._type === "tagline") {
          return (
            <div key={componentData._key}>
              <Tagline>{componentData.taglineText}</Tagline>
            </div>
          );
        }
        if (componentData._type === "infoSection") {
          return (
            <section key={componentData._key}>
              <ShootInfoSection
                shootDetails={componentData.keyInfoBlocks}
                description={componentData.sectionText}
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
              <section key={componentData._key}>
                <Heading>FAQs</Heading>
                <FAQAccordion faqItems={componentData.faqItem} />
              </section>
            )
        }
        // if (pageComponent._type === "horizontalScrollImages") {
        //     return ()
        // }
        // if (pageComponent._type === "horizontalScrollImages") {
        //     return ()
        // }
        // if (pageComponent._type === "horizontalScrollImages") {
        //     return ()
        // }
      })}
      {/* <section>
        <Heading headingType="h1">Headshots</Heading>
        <Tagline>
          Lorem ipsum dolor sit amet consectetur est cupiditate labore
          voluptatibus dicta aspernatur.
        </Tagline>
        <ThreeScrollingImages
          imageSlides={[
            [images[0], images[1], images[2]],
            [images[3], images[4], images[5]],
            [images[6], images[7], images[0]],
          ]}
          marginBottom="medium"
        />
        <ColumnText textArr={columnText.slice(2)} />

      </section>
      
      <SeePortfolioButton /> */}
    </div>
  );
}
