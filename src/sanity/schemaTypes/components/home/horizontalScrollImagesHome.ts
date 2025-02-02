import { defineField, defineType } from "sanity";
import { RiImage2Line } from "react-icons/ri";

export const horizontalScrollImagesHome = defineType({
  name: "horizontalScrollImagesHome",
  type: "object",
  title: "Horizontally Scrolling Images",
  icon: RiImage2Line,
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
      title: "Selection of images",
      type: "imageArray",
    }),
    defineField({
      name: "isFixed",
      title: "Are the horizontal images fixed in place?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "sizeOfHorizontalScrollImages",
      title: "Size of horizontal scroll images",
      type: "sizeOfObject",
      description:
        "Choose a size for these images on the page. Larger images will automatically convert to higher resolution.",
    }),
    defineField({
      name: "directionOfHorizontalImageScroll",
      title: "Direction of hotizontally scrolling images",
      type: "directionOfScroll",
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
        subtitle: "Horizontally Scrolling Images",
        media: image,
      };
    },
  },
});
