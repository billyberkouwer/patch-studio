import ContainerBookingCards from "@/components/booking/ContainerBookingCards";
import ColumnText from "@/components/global/ColumnText";
import Heading from "@/components/global/Heading";
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
        <ColumnText textArr={columnText} />
        <ColumnText textArr={columnText.slice(1)} />
        <ScrollingImages isContained images={logos} height={100} />
      </section>
      <section>
        <Heading>Bookings</Heading>
        <ContainerBookingCards
          shootType="editorial"
          bookingOptions={bookingOptionsEditorial}
        />
      </section>
    </div>
  );
}
