import { defineType, defineField } from "sanity";

export const parallaxImageHeaderHome = defineType({
  name: "parallaxImageHeaderHome",
  title: "Parallax Image Header",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description:
        "A name for this component. This title doesn't show up on the site - it's just for convenience.",
    }),
    defineField({
      type: "centerTextContent",
      name: "centerTextContent",
      title: "Center Text Content Overlay",
    }),
    defineField({
      name: "selectionOfImages",
      title: "Selection of Images",
      type: "imageArray",
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
