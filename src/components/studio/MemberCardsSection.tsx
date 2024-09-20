import { MemberCardType } from "@/types";
import MemberCard from "./MemberCard";

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
