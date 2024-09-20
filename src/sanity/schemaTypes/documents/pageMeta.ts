import { Rule } from "sanity";
import openGraph from "../objects/opengraph";
import basic from "../objects/opengraph/basic";

export const pageMeta = {
  type: "document",
  name: "pageMeta",
  title: "Site Configuration",
  groups: [
    {
      name: "meta",
      title: "Site Info",
      default: true,
    },
    {
      name: "og",
      title: "Social Share Info",
    },
  ],
  fields: [
    ...basic.fields,
    {
      type: "text",
      name: "description",
      title: "Describe This Page",
    },
  ],
};
