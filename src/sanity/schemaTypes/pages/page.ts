import { RiPagesLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: RiPagesLine,
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
      },
      description: `A slug is required to display the page on the website. It is used in the URL. For example, if the slug is "editorial", it will be linked under patchstudio.uk/editorial`
    }),
    defineField({
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
    })
  ],
});
