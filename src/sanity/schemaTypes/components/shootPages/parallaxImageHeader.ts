import { RiImage2Fill } from "react-icons/ri";
import { defineType, defineField } from "sanity";

export const parallaxImageHeader = defineType({
  name: "parallaxImageHeader",
  title: "Parallax Image Header",
  type: "object",
  icon: RiImage2Fill,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description:
        "A name for this component. This title doesn't show up on the site - it's just for convenience.",
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
