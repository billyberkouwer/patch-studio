import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPage = defineType({
  type: "document",
  title: "Contact",
  name: "contact",
  fields: [
    defineField({
      name: "location",
      title: "Location Info",
      type: "text",
    }),
    defineField({
      name: "locationImages",
      title: "Location Images",
      type: "imageArray",
    }),
    defineField({
      name: "socialLinks",
      type: "array",
      title: "Social Links",
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
      description:
        "To update the map, go to the location on Google Maps, click Share, Embed a map, then Copy HTML and paste the contents here. The code in your site will extract the required values and format them appropriately for you site.",
    }),
  ],
});
