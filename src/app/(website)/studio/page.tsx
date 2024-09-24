import CreativeProject from "@/components/studio/creativeProject/CreativeProject";
import CreativeProjectSection from "@/components/studio/creativeProject/CreativeProjectsSection";
import ImageLandingSection from "@/components/studio/ImageLandingSection";
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

const imageLandingSection = {
  image: "/images/patch-gif-vid.gif",
  title: "Studio",
  text: "Some text",
};

const creativeProject = {
  title: "The Project Title",
  content: {
    images: [
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
      { url: "/images/member-image-placeholder.jpg" },
    ],
    textContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque. Velit magni officiis maxime asperiores quam veniam, eaque in ipsa vero quod tempora non expedita totam dolore minima beatae assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque. Velit magni officiis maxime asperiores quam veniam, eaque in ipsa vero quod tempora non expedita totam dolore minima beatae assumenda.",
    link: "https://www.patchstudio.uk",
  },
};

const creativeProjects = [
    creativeProject,
    creativeProject,
    creativeProject,
]

export default async function Studio() {
  return (
    <div className="page__wrapper">
      <ImageLandingSection imageLandingData={imageLandingSection} />
      <CreativeProjectSection creativeProjects={creativeProjects} />
      <MemberCardsSection memberCards={testMemberCards} />
    </div>
  );
}
