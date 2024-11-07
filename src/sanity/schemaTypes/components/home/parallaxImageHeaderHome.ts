import { defineType, defineField } from "sanity";
import { RiImage2Fill } from "react-icons/ri";

export const parallaxImageHeaderHome = defineType({
  name: "parallaxImageHeaderHome",
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
      type: "centerText",
      name: "centerText",
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
      image: "selectionOfImages.0.asset",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Parallax Image Header",
        media: image,
      };
    },
  },
});
