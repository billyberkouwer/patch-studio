import { RiTeamLine } from "react-icons/ri";
import { defineArrayMember, defineField, defineType } from "sanity";

export const teamMemberCards = defineType({
  name: "teamMemberCards",
  title: "Team Member Cards",
  description: "Team members at Patch Studio",
  type: "object",
  icon: RiTeamLine,
  fields: [
    defineField({
      name: "teamMemberCardsInstance",
      type: "array",
      of: [
        defineArrayMember({
          type: "teamMemberCard",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      member0: "teamMemberCardsInstance.0.name",
      member1: "teamMemberCardsInstance.1.name",
      member2: "teamMemberCardsInstance.2.name",
    },
    prepare({ member0, member1, member2 }) {
      let title;
      member0 ? (title = member0) : null;
      member1 ? (title += " " + member1) : null;
      member2 ? (title += " " + member2) : null;

      return {
        title: "Team Members ",
        subtitle: title,
      };
    },
  },
});
