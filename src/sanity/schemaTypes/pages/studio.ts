import { defineArrayMember, defineField, defineType } from "sanity";

export const studioPage = defineType({
  type: "document",
  title: "Studio",
  name: "studio",
  fieldsets: [
    { name: "content", title: "Page Content" },
    { name: "pageMeta", title: "Page Meta" },
  ],
  groups: [
    { name: "content", title: "Page Content", default: true },
    { name: "pageMeta", title: "Page Meta" },
  ],
  fields: [
    defineField({
      title: "Page Title",
      name: "pageTitle",
      group: "content",
      description: "The title of the page",
      type: "string",
    }),
    defineField({
      type: "pageBuilderStudio",
      name: "pageBuilder",
      group: "content",
      title: "Studio Page Builder",
    }),
    defineField({
      type: "pageMeta",
      name: "pageMeta",
      group: "pageMeta",
      title: "Page Meta",
    }),
  ],
});
