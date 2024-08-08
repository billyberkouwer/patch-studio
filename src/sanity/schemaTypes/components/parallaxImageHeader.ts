import { defineType, defineField } from "sanity";

export const parallaxImageHeader = defineType({
  name: "parallaxImageHeader",
  title: "Parallax Image Header",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "selectionOfImages",
      title: "Selection of Images",
      type: "imageArray",
    }),
    defineField({
      type: "centerTextContent",
      name: "centerTextContent",
      title: "Center Text Content Overlay",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Parallax Image Header",
      };
    },
  },
});
