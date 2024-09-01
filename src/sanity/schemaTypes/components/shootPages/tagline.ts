import { RiTextBlock } from "react-icons/ri";
import { defineType, defineField } from "sanity";

export const tagline = defineType({
  name: "tagline",
  title: "Tagline",
  icon: RiTextBlock,
  type: "object",
  fields: [
    defineField({
      name: "taglineText",
      title: "Tagline text",
      type: "text",
    }),
    defineField({
      name: "marginBottom",
      title: "Bottom Margin",
      type: "string",
      options: {
        list: [
          { title: "Normal", value: "normal" },
          { title: "Small", value: "small" },
        ],
      },
      initialValue: "normal",
    }),
  ],
  preview: {
    select: {
      text: "taglineText",
    },
    prepare({ text }) {
      return {
        title: "Tagline",
        subtitle: text,
      };
    },
  },
});
