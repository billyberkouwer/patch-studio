import { MemberCardType } from "@/types";
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";

export default function MemberCard({
  memberCardData,
}: {
  memberCardData: MemberCardType;
}) {
  return (
    <div className="member-card__wrapper">
      <div className="member-card__container">
        {memberCardData.memberImage ? (
          <div className="member-image__wrapper">
            <Image src={memberCardData.memberImage.url} alt="member" />
          </div>
        ) : null}
        {memberCardData.memberName ? (
          <div className="member-name">
            <h5>{memberCardData.memberName}</h5>
          </div>
        ) : null}
        {memberCardData.memberInfo ? (
          <div className="member-info">
            <p>{memberCardData.memberInfo}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
