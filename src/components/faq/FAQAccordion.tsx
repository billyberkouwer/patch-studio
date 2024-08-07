import CustomAccordion from "./CustomAccordion";
import "./faq-accordion-container.scss";

export default function FAQAccordion() {
  return (
    <div className="accordion__wrapper">
        <div className="accordion__container">
            <CustomAccordion />
            <CustomAccordion />
            <CustomAccordion />
            <CustomAccordion />
            <CustomAccordion />
            <CustomAccordion />
        </div>
    </div>
  );
}
