import { defineType, defineField } from "sanity";

export const tagline = defineType({
  name: "tagline",
  title: "Tagline",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Tagline text",
      type: "string",
    }),
    defineField({
      type: "centerTextContent",
      name: "centerTextContent",
      title: "Center Text Content Overlay",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Tagline",
      };
    },
  },
});
