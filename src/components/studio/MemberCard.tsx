"use client";
import "./member-card.scss";
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
            <Image
              src={memberCardData.memberImage}
              fill
              sizes="200px"
              alt="member"
            />
          </div>
        ) : null}
        {memberCardData.memberName ? (
          <div className="member-name">
            <h5>{memberCardData.memberName}</h5>
          </div>
        ) : null}
        {memberCardData.role ? (
          <div className="info__container">
            <h6 className="technical-info">Role: </h6>
            <ul>
              {memberCardData.role.map((role) => (
                <li key="">{role}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {memberCardData.memberInfo ? (
          <div className="info__container">
            <h6 className="technical-info">About: </h6>
            <div className="member-info">
              <p>{memberCardData.memberInfo}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
