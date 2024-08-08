import { defineField, defineType } from "sanity";

export const infoSection = defineType({
  name: "infoSection",
  title: "Info Section",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
    }),
    defineField({
      type: "array",
      of: [{ type: "block" }],
      name: "sectionText",
      title: "Info section text",
    }),
    defineField({
      name: "keyInfoBlocks",
      title: "Key info blocks",
      type: "array",
      of: [
        defineField({
          type: "keyInfoBlock",
          name: "keyInfoBlock",
          title: "Key info block",
        }),
      ],
    }),
    defineField({
      type: "buttonWithLink",
      name: "button",
      title: "Button",
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
      subtitle: "sectionText",
    },
    prepare({ title, subtitle }) {
      const block = subtitle?.find((block: any) => block._type === "block");

      return {
        title: title + " Info Section" || "Untitled Info Section",
        subtitle: block
          ? block.children
              .filter((child: any) => child._type === "span")
              .map((span: any) => span.text)
              .join("")
          : "No additional info to show",
      };
    },
  },
});
