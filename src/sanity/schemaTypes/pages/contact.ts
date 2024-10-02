import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
  type: "document",
  title: "Contact",
  name: "contact",
  fieldsets: [{ name: "content", title: "Page Content" }],
  initialValue: {
    slug: { _type: "slug", current: "contact" },
  },
  groups: [
    { name: "content", title: "Page Content", default: true },
    { name: "pageMeta", title: "Page Meta" },
  ],
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "content",
      fieldset: "content",
      readOnly: true,
      options: {
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      description: `The slug of this page is fixed to /contact`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location Info",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      fieldset: "content",
      group: "content",
    }),
    defineField({
      name: "locationImages",
      title: "Location Images",
      type: "imageArray",
      fieldset: "content",
      group: "content",
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      fieldset: "content",
      group: "content",
      of: [
        defineArrayMember({
          type: "contactLinks",
          name: "contactLink",
          title: "Contact Link",
        }),
      ],
    }),
    defineField({
      name: "googleEmbedMap",
      type: "text",
      title: "Google Embed Map",
      fieldset: "content",
      group: "content",
      description:
        "To update the map, go to the location on Google Maps, click Share, Embed a map, then Copy HTML and paste the contents here. The code in your site will extract the required values and format them appropriately for you site.",
    }),
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
      group: "pageMeta",
    }),
  ],
});
