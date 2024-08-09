import { DropdownItemType, FAQSectionType } from "@/types";
import CustomAccordion from "./CustomAccordion";
import "./faq-accordion-container.scss";

export default function FAQAccordion({
  faqItems,
}: {
  faqItems: DropdownItemType[];
}) {
  console.log(faqItems);
  return (
    <div className="accordion__wrapper">
      <div className="accordion__container">
        {faqItems.map((faqItem) => (
          <CustomAccordion faqItem={faqItem} key={faqItem._key} />
        ))}
      </div>
    </div>
  );
}
