import { defineType, defineField } from "sanity";
import { RiTextBlock } from "react-icons/ri";


export const taglineHome = defineType({
  name: "taglineHome",
  title: "Tagline",
  type: "object",
  icon: RiTextBlock,
  fields: [
    defineField({
      name: "taglineText",
      title: "Tagline text",
      type: "text",
    }),
    defineField({
      type: "centerTextContent",
      name: "centerTextContent",
      title: "Center Text Content Overlay",
    }),
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      return {
        title: "Tagline",
        subtitle: text,
      };
    },
  },
});
