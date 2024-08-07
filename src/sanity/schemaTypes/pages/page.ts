import { defineField, defineType } from "sanity";

export const page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }),
    defineField({
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
    })
  ],
});
