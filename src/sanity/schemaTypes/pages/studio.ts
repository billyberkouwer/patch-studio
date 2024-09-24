import { defineArrayMember, defineField, defineType } from "sanity";

export const studioPage = defineType({
  type: "document",
  title: "Studio",
  name: "studio",
  fieldsets: [{ name: "content", title: "Page Content" }],
  groups: [
    { name: "content", title: "Page Content", default: true },
    { name: "pageMeta", title: "Page Meta" },
  ],
  fields: [
    defineField({
      title: "Page Title",
      name: "pageTitle",
      description: "The title of the page",
      type: "string",
    }),
    defineField({
      type: "pageBuilderStudio",
      name: "pageBuilder",
      title: "Studio Page Builder",
    }),
  ],
});
