import { defineArrayMember, defineType } from "sanity";

export const pageBuilder = defineType({
  name: "pageBuilder",
  type: "array",
  title: "Page Builder",
  of: [
    defineArrayMember({
      type: "parallaxImageHeader",
    }),
    defineArrayMember({
      type: "horizontalScrollImages",
    }),
    defineArrayMember({
      type: "infoSection",
    }),
    defineArrayMember({
      type: "tagline",
    }),
  ],
});
