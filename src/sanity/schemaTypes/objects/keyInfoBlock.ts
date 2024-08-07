import { defineType } from "sanity";

export const keyInfoBlock = defineType({
  name: "keyInfoBlock",
  title: "Key Info Block",
  type: "object",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
});
