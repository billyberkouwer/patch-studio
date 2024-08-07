import { defineType } from "sanity";

export const sizeOfObject = defineType({
  name: "sizeOfObject",
  title: "Size of Object",
  description: "Choose a size of this object or selection of objects.",
  type: "string",
  options: {
    list: [
      { title: "Large", value: "large" },
      { title: "Medium", value: "medium" },
      { title: "Small", value: "small" },
    ],
  },
});
