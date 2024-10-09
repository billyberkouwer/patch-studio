import { defineField, defineType } from "sanity";

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "object",
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      type: "boolean",
      name: "hasPortfolio",
      title: "Has Portfolio?",
    }),
    defineField({
      type: "imageArray",
      title: "Portfolio Images",
      name: "portfolioImages",
      hidden: ({parent}) => !parent?.hasPortfolio,
    }),
  ],
});
