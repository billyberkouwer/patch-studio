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
    }),
    defineField({
      type: "centerTextContent",
      name: "centerTextContent",
      title: "Center Text Content Overlay",
    }),
    defineField({
      name: "selectionOfImages",
      title: "Selection of images",
      type: "imageArray",
    }),
    defineField({
      name: "sizeOfHorizontalScrollImages",
      title: "Size of horizontal scroll images",
      type: "sizeOfObject",
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
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Horizontally Scrolling Images",
      };
    },
  },
});
