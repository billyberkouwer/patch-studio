import { defineField } from "sanity";

const internalLink = defineField({
  title: "Internal Link",
  name: "internalLink",
  type: "object",
  fields: [
    {
      name: "link",
      title: "Link",
      type: "reference",
      to: [
        {
          type: "page",
        },
        {
          type: "contact",
        },
        {
          type: "termsAndConditions",
        },
        {
          type: "bookings",
        },
      ],
    },
  ],
});

export default internalLink;
