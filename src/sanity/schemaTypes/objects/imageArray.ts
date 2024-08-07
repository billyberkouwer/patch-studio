import { defineType, defineField, defineArrayMember } from "sanity";

export const imageArray = defineType({
  name: "imageArray",
  title: "Image Array",
  type: "array",
  of: [defineArrayMember({ type: "image" })],
  options: {
    layout: "grid",
  },
});
