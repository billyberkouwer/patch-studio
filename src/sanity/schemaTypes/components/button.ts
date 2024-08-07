import { defineArrayMember, defineField, defineType } from "sanity";

export const button = defineType({
  name: "buttonWithLink",
  type: "object",
  title: "Button With Link",
  fields: [
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "array",
      of: [
        defineArrayMember({
          type: "internalLink",
          title: "Link to a page on your website",
        }),
        defineArrayMember({
          type: "externalLink",
          title: "Link to an external website",
        }),
      ],
      validation: Rule => Rule.length(1)
    }),
  ],
});
