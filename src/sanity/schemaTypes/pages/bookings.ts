import { defineArrayMember, defineField, defineType } from "sanity";

export const bookingsPage = defineType({
  type: "document",
  title: "Bookings",
  name: "bookings",
  fields: [
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
    }),
  ],
});
