import GifLandingSection from "@/components/studio/GifLandingSection";
import MemberCardsSection from "@/components/studio/MemberCardsSection";
import { MemberCardType } from "@/types";

const testMemberCards: MemberCardType[] = [
  {
    memberName: "Patch",
    memberImage: "/images/member-image-placeholder.jpg",
    memberInfo: "Some text",
    role: ["Director", "Photographer"],
  },
  {
    memberName: "Patch",
    memberImage: "/images/member-image-placeholder.jpg",
    memberInfo: "Some text",
    role: ["Director", "Photographer"],
  },
  {
    memberName: "Patch",
    memberImage: "/images/member-image-placeholder.jpg",
    memberInfo: "Some text",
    role: ["Director", "Photographer"],
  },
  {
    memberName: "Patch",
    memberImage: "/images/member-image-placeholder.jpg",
    memberInfo: "Some text",
    role: ["Director", "Photographer"],
  },
  {
    memberName: "Patch",
    memberImage: "/images/member-image-placeholder.jpg",
    memberInfo: "Some text",
    role: ["Director", "Photographer"],
  },
];

export default async function Studio() {
  return (
    <div className="page__wrapper --top-padding">
      <GifLandingSection />
      <MemberCardsSection memberCards={testMemberCards} />
    </div>
  );
}
