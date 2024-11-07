import { defineField, defineType } from "sanity";

export const centerText = defineType({
  type: "object",
  name: "centerText",
  title: "Center Text",
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      type: "centerTextContent",
      name: "centerTextContent",
      title: "Center Text Content",
    }),
    defineField({
      type: "internalLink",
      description: "A link that the text should direct you to on click",
      name: "link",
      title: "Link",
    }),
  ],
});
