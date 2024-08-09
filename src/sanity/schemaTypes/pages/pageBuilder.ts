import { defineArrayMember, defineType } from "sanity";

export const pageBuilder = defineType({
  name: "pageBuilder",
  type: "array",
  title: "Page Builder",
  description:
    "This section is used to add components to the homepage. You can add a selection of four component types in any order you would like.",
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
    defineArrayMember({
      type: "bookingSection",
    }),
    defineArrayMember({
      type: "textColumns",
    }),
    defineArrayMember({
      type: "faqSection",
    }),
  ],
});
