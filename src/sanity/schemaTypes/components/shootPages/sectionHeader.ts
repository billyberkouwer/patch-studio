import { RiH1, RiH2, RiTextBlock } from "react-icons/ri";
import { defineType, defineField } from "sanity";

export const sectionHeader = defineType({
  name: "sectionHeader",
  title: "Section Header",
  icon: RiH2,
  type: "object",
  fields: [
    defineField({
      name: "header",
      title: "Header Text",
      type: "string",
    }),
  ],
  preview: {
    select: {
      text: "header",
    },
    prepare({ text }) {
      return {
        title: text,
        subtitle: "Section Header",
      };
    },
  },
});
