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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Parallax Image Header',
      }
    },
  },
});
