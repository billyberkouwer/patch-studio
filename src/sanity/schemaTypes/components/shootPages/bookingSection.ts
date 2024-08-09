import { defineArrayMember, defineField, defineType } from "sanity";

export const bookingSection = defineType({
  name: "bookingSection",
  title: "Booking Section",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Section Title",
      initialValue: "Booking",
      description:
        "The title of the section displayed above the booking cards.",
    }),
    defineField({
      type: "array",
      title: "Booking Cards",
      name: "bookingCards",
      of: [defineArrayMember({ type: "bookingCard" })],
    }),
  ],
});
