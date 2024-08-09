import { defineField, defineType } from "sanity";

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
    // defineField({
    //   name: "slug",
    //   type: "slug",
    //   title: "Slug",
    //   options: {
    //     source: "title",
    //     maxLength: 200, // will be ignored if slugify is set
    //     slugify: (input) =>
    //       input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
    //   },
    // }),
    defineField({
      name: "pageBuilderHome",
      type: "pageBuilderHome",
      title: "Page Builder",
    }),
  ],
});
