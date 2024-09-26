import { defineArrayMember, defineField, defineType } from "sanity";

export const bookingsPage = defineType({
  type: "document",
  title: "Bookings",
  name: "bookings",
  initialValue: {
    slug: {_type: "slug", current: "bookings"}
  },
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      readOnly: true,
      options: {
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      description: `The slug of this page is fixed to /bookings`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
    }),
  ],
});
