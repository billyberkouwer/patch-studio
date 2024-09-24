import { MemberCardType } from "@/types";
import MemberCard from "./MemberCard";
import "./member-cards-section.scss";
import Heading from "../global/Heading";

export default function MemberCardsSection({
  memberCards,
  title,
}: {
  memberCards: MemberCardType[];
  title?: string | null;
}) {
  return (
    <div className="member-cards-section__wrapper">
      {title ? <Heading>{title}</Heading> : <Heading>Team</Heading>}
      <div className="member-cards-section__container">
        {memberCards?.length
          ? memberCards.map((memberCard, i) => {
              if (memberCard.memberName) {
                return (
                  <MemberCard
                    memberCardData={memberCard}
                    key={memberCard.memberName + i}
                  />
                );
              }
            })
          : null}
      </div>
    </div>
  );
}
