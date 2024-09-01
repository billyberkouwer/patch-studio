import { defineField, defineType } from "sanity";

export const bookingCard = defineType({
  type: "object",
  name: "bookingCard",
  title: "Booking Card",
  fields: [
    defineField({
      type: "string",
      name: "bookingTypeTitle",
      title: "Booking Type Title",
      description: "The name of this booking type, e.g. Editorial Style Shoot.",
    }),
    defineField({
      type: "image",
      name: "bookingImage",
      title: "Booking Image",
    }),
    defineField({
      type: "array",
      name: "bookingInfoBlock",
      title: "Booking Info Block",
      of: [{ type: "keyInfoBlock" }],
    }),
    defineField({
      type: "string",
      name: "appointmentType",
      title: "Acuity Appointment Type ID",
      description: `The ID for this appointment can be found on the Acuity dashboard. To find it, go to your appointment types in Acuity, then click "Direct Scheduling Link" for the appropriate appointment. In the link that appears, you will see at the end of it "appointmentType=<some-number>". Copy and paste that number here.`,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
