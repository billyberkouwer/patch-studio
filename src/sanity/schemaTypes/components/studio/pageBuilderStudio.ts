import { defineArrayMember, defineType } from "sanity";

export const pageBuilderStudio = defineType({
  name: "pageBuilderStudio",
  type: "array",
  title: "Page Builder",
  description:
    "This section is used to add components to the Studio page. You can add a selection of component types in any order you would like.",
  of: [
    defineArrayMember({
      type: "creativeProjectsSelection",
    }),
    defineArrayMember({
      type: "teamMemberCards",
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
    defineArrayMember({
      type: "textColumns",
    }),
    defineArrayMember({
      type: "buttonWithLink",
    }),
    defineArrayMember({
      type: "sectionHeader",
    }),
  ],
});
