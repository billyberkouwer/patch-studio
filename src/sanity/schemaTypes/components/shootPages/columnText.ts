import { defineArrayMember, defineField, defineType } from "sanity";
import { ImParagraphJustify } from "react-icons/im";

export const columnText = defineType({
  name: "textColumns",
  type: "object",
  title: "Text Columns",
  icon: ImParagraphJustify,
  description:
    "The text blocks you add here will automatically be turned into columns. Two blocks will be split in two columns, three in three columns, etc.",
  fields: [
    defineField({
      name: "columnText",
      title: "Column Text",
      type: "array",
      of: [
        defineArrayMember({
          name: "textColumn",
          title: "Text Column",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "textSize",
      title: "Text Size",
      type: "string",
      options: {
        list: [
          { title: "Regular", value: "regular" },
          { title: "Large", value: "large" },
        ],
      },
      initialValue: "regular",
    }),
  ],
  preview: {
    select: {
      subtitle: "columnText",
    },
    prepare({ subtitle }) {
      return {
        title: "Text Columns",
        subtitle: subtitle?.[0],
      };
    },
  },
});
