import { Rule } from "sanity";

export const siteMeta =  {
  type: "document",
  name: "siteMeta",
  title: "Site Configuration",
  fields: [
    {
      type: "string",
      name: "site_name",
      title: "Site Name",
      // fieldset: "optional"
    },
    {
      type: "text",
      name: "ogDescription",
      title: "Social Share Description",
    },
    {
      type: "string",
      title: "Page Title",
      name: "ogTitle",
      description:
        "Set the title Open Graph should use. In most situations, this should be different from the value of the title prop",
      validation: (Rule: Rule) => Rule.required(),
      // fieldset: "basic"
    },
    {
      type: "image",
      title: "Image",
      name: "ogImage",
      description:
        "URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.",
      validation: (Rule: Rule) => Rule.required(),
      // fieldset: "basic"
    },
    {
      type: "text",
      name: "description",
      title: "Describe This Site",
    },
    {
      type: "boolean",
      name: "isGoogleAnalyticsEnabled",
      title: "Enable Google Analytics?",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
    {
      type: "string",
      name: "googleanalyticsId",
      title: "Google Analytics ID",
    },
    {
      type: "string",
      name: "googleSiteVerificationId",
      title: "Google site Verification ID",
    },
  ],
  initialValue: {
    isPwa: false,
    isGoogleAnalyticsEnabled: false,
  },
};
