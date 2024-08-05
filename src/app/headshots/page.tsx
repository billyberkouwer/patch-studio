import ContainerBookingCards from "@/components/booking/ContainerBookingCards";
import Button from "@/components/global/Button";
import ColumnText from "@/components/global/ColumnText";
import Heading from "@/components/global/Heading";
import Tagline from "@/components/global/Tagline";
import ThreeScrollingImages from "@/components/image/ThreeScrollingImages";
import { bookingOptionsEditorial, columnText, images } from "@/utils/constants";

export default function Page() {
  return (
    <div className="page__wrapper">
      <section>
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
        />
        <ColumnText textArr={columnText.slice(2)} />
        <Heading>Bookings</Heading>
        <ContainerBookingCards
          shootType="editorial"
          bookingOptions={bookingOptionsEditorial}
        />
      </section>
      <section>
        <Heading>FAQs</Heading>
      </section>
      <div className="see-portfolio__wrapper">
        <Button state="bold">See Portfolio</Button>
      </div>
    </div>
  );
}
