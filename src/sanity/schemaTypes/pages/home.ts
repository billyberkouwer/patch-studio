import { defineField, defineType } from "sanity";
import { RiHome2Fill } from "react-icons/ri";


export const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      description: "This page title displays in the navigation bar on the site."
    }),
    defineField({
      name: "pageBuilderHome",
      type: "pageBuilderHome",
      title: "Page Builder",
    }),
  ],
});
