import ContainerBookingCards from "@/components/booking/ContainerBookingCards";
import FAQAccordion from "@/components/faq/FAQAccordion";
import Button from "@/components/global/Button";
import ColumnText from "@/components/global/ColumnText";
import Heading from "@/components/global/Heading";
import SeePortfolioButton from "@/components/global/SeePortfolioButton";
import Tagline from "@/components/global/Tagline";
import ScrollingImages from "@/components/image/ScrollingImages";
import {
  bookingOptionsEditorial,
  columnText,
  images,
  logos,
} from "@/utils/constants";

export default function EditorialPage() {
  return (
    <div className="page__wrapper">
      <section>
        <Heading>Editorial</Heading>
        <Tagline>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          aspernatur consequatur perferendis saepe unde itaque quam aliquid.
        </Tagline>
        <ScrollingImages images={images} />
        <ColumnText textArr={columnText.slice(1,3)} />
        <ColumnText textArr={columnText.slice(2)} />
        <ScrollingImages isContained images={[...logos, ...logos]} height={100} scrollDirection={"right"} />
      </section>
      <section>
        <Heading>Bookings</Heading>
        <ContainerBookingCards
          shootType="editorial"
          bookingOptions={bookingOptionsEditorial}
        />
      </section>
      <section>
        <Heading>FAQs</Heading>
      </section>
      <section>
        <FAQAccordion />
      </section>
      <SeePortfolioButton />
    </div>
  );
}
