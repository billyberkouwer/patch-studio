import { PortableText, PortableTextBlock } from "next-sanity";
import Button from "../global/Button";
import ShootDescription from "../global/ShootDescription";
import ShootDetails from "../global/ShootDetails";
import "./shoot-info-section.scss";
import { KeyInfoBlockType } from "@/types";

export default function ShootInfoSection({
  shootDetails,
  description,
}: {
  shootDetails: KeyInfoBlockType[] | null;
  description: PortableTextBlock[] | null;
}) {
  return (
    <section className="shoot-info__wrapper">
      <div className="shoot-info__container">
        <div className="shoot-details__wrapper">
          {shootDetails?.length
            ? shootDetails.map((shootDetail, i) => (
                <ShootDetails
                  key={shootDetail?.details[0] + shootDetail?.title + i}
                  title={shootDetail?.title}
                  details={shootDetail?.details}
                />
              ))
            : null}
        </div>
        <div className="shoot-description__wrapper">
          <ShootDescription>
            {description?.length ? <PortableText value={description} /> : null}
          </ShootDescription>
        </div>
        <Button state="bold">Learn More</Button>
      </div>
    </section>
  );
}
