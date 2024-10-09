import { RiPagesLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const page = defineType({
  type: "document",
  name: "page",
  title: "Page",
  icon: RiPagesLine,
  orderings: [orderRankOrdering],
  fieldsets: [{ name: "content", title: "Page Content" }],
  groups: [
    { name: "content", title: "Page Content", default: true },
    { name: "pageMeta", title: "Page Meta" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
      group: "content",
      fieldset: "content",
      description:
        "(You can set the order pages appear in the navigation bar by dragging the pages in the panel to the left)",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: "content",
      fieldset: "content",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      description: `A slug is required to display the page on the website. It is used in the URL. E.g. if the slug is "editorial", the page link will be www.patchstudio.uk/editorial`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
      fieldset: "content",
      group: "content",
    }),
    defineField({
      type: "portfolio",
      name: "portfolio",
      fieldset: "content",
      group: "content",
    }),
    orderRankField({ type: "project", newItemPosition: "before" }),
    defineField({
      name: "pageMeta",
      title: "Page Meta",
      type: "pageMeta",
      group: "pageMeta",
    }),
  ],
});
