import { defineArrayMember, defineField, defineType } from "sanity";

export const columnText = defineType({
  name: "textColumns",
  type: "object",
  title: "Text Columns",
  description:
    "The text blocks you add here will automatically be turned into columns. Two blocks will be split in two columns, three in three, etc.",
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "columnText.0"
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Text Columns",
        subtitle: subtitle,
      };
    },
  },
});
