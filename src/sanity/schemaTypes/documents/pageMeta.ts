import { Rule } from "sanity";

export const pageMeta = {
  type: "document",
  name: "pageMeta",
  title: "Site Configuration",
  fields: [
    {
      type: "string",
      title: "Open Graph Title",
      name: "ogTitle",
      description: "Set the title Open Graph should use. Defaults to Page Title if no title is specified.",
      // fieldset: "basic"
    },
    {
      type: "text",
      name: "ogDescription",
      title: "Social Share Description",
    },
    {
      type: "image",
      title: "Image",
      name: "ogImage",
      description:
        "The image that should be used in social media previews. The ideal size for this image is 1200x630px. If you define this, you must define two other OG basic properties as well: title and type.",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      type: "text",
      name: "description",
      title: "Describe This Page",
    },
  ],
};
