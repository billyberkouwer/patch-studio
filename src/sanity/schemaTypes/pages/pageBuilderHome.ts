import { defineArrayMember, defineType } from "sanity";

export const pageBuilderHome = defineType({
  name: "pageBuilderHome",
  type: "array",
  title: "Page Builder",
  description: "This section is used to add components to the homepage. You can add a selection of four component types in any order you would like.",
  of: [
    defineArrayMember({
      type: "parallaxImageHeaderHome",
    }),
    defineArrayMember({
      type: "horizontalScrollImagesHome",
    }),
    defineArrayMember({
      type: "infoSectionHome",
    }),
    defineArrayMember({
      type: "taglineHome",
    }),
  ],
});
