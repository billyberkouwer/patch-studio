import { RiLink } from "react-icons/ri";
import { defineArrayMember, defineField, defineType } from "sanity";

export const button = defineType({
  name: "buttonWithLink",
  type: "object",
  title: "Button With Link",
  icon: RiLink,
  fields: [
    defineField({
      name: "text",
      title: "Button Text",
      type: "string",
    }),
    defineField({
      name: "isExternalLink",
      title: "Is this a link to an external website?",
      type: "boolean",
    }),
    defineField({
      name: "internalLink",
      title: "Internal Link",
      type: "internalLink",
      options: {
        collapsed: false
      },
      hidden: ({ parent }) => parent.isExternalLink,
    }),
    defineField({
      name: "externalLink",
      title: "External Link",
      type: "externalLink",
      options: {
        collapsed: false
      },
      hidden: ({ parent }) => !parent.isExternalLink,
    }),
  ],
});
