import { defineField, defineType } from "sanity";

export const horizontalScrollImages = defineType({
  name: "horizontalScrollImages",
  type: "object",
  title: "Horizontally Scrolling Images",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
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
        subtitle: "Horizontally Scrolling Images",
      };
    },
  },
});
