import { DropdownItemType, FAQSectionType } from "@/types";
import CustomAccordion from "./CustomAccordion";
import "./faq-accordion-container.scss";
import FAQBackground from "./FAQBackground";

export default function FAQAccordion({
  faqItems,
}: {
  faqItems: DropdownItemType[];
}) {
  return (
    <div className="accordion__wrapper">
      <div className="accordion__container">
        {faqItems?.length
          ? faqItems.map((faqItem) => (
              <CustomAccordion faqItem={faqItem} key={faqItem._key} />
            ))
          : null}
      </div>
    </div>
  );
}
