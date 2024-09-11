import { defineField, defineType } from "sanity";
import { RiImageAddLine } from "react-icons/ri";

export const horizontalScrollImages = defineType({
  name: "horizontalScrollImages",
  type: "object",
  title: "Horizontally Scrolling Images",
  icon: RiImageAddLine,
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
      description: "Choose a size for these images on the page. Larger images will automatically convert to higher resolution."
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
        subtitle: "Horizontally scrolling images",
        media: image
      };
    },
  },
});
