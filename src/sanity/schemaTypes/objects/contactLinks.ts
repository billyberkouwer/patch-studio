import { defineField, defineType } from "sanity";
import { IoShareSocial } from "react-icons/io5";


export const contactLinks = defineType({
    title: "Contact Links",
    name: "contactLinks",
    type: "object",
    icon: IoShareSocial,
    fields: [
        defineField({
            type: "string",
            name: "title",
            title: "Title",
        }),
        defineField({
            name: "linkType",
            title: "Link Type",
            type: "string",
            options: {
                list: [
                    { title: "Email address", value: "Email address" },
                    { title: "Website", value: "Website link" },
                    { title: "Telephone number", value: "Phone number" }
                ],
                layout: "radio",
                direction: "horizontal"
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "string",
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: {
          title: "title",
          subtitle: "link"
        },
        prepare({ title, subtitle }) {
          return {
            title: title || "Untitled",
            subtitle: subtitle,
          };
        },
      },
})