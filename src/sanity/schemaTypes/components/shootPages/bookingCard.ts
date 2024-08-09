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
            of: [{type: "keyInfoBlock"}]
        })
    ]
})