import { defineArrayMember, defineField, defineType } from "sanity";
import { RiCalendarCheckLine } from "react-icons/ri";

export const bookingSection = defineType({
  name: "bookingSection",
  title: "Booking Section",
  type: "object",
  icon: RiCalendarCheckLine,
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
