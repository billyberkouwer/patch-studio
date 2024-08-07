import { defineType, defineField } from "sanity";

export const image = defineType({
    name: "imageWithAlt",
    title: "Image With Alt Text",
    type: "object",
    fields: [
        defineField({
            name: "imageAltText",
            title: "Image alt text",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image"
        }),
    ]
})