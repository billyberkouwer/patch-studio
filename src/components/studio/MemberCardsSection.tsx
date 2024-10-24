import { MemberCardType } from "@/types";
import MemberCard from "./MemberCard";
import "./member-cards-section.scss";
import Heading from "../global/Heading";

export default function MemberCardsSection({
  memberCards,
}: {
  memberCards: MemberCardType[];
}) {
  return (
    <div className="member-cards-section__wrapper">
      <div className="member-cards-section__container">
        {memberCards?.length
          ? memberCards.map((memberCard, i) => {
              if (memberCard?.name) {
                return (
                  <MemberCard
                    memberCardData={memberCard}
                    key={memberCard.name + i}
                  />
                );
              }
            })
          : null}
      </div>
    </div>
  );
}
