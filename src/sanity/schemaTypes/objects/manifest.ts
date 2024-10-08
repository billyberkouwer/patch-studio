import { defineType } from "sanity";

import { DISPLAYMODES } from "../../utils/constants";

const WebManifest = defineType({
  name: "manifest",
  type: "object",
  title: "Progressive Web App Configuration",
  fields: [
    {
      type: "string",
      name: "short_name",
      title: "Short Name",
    },
    {
      type: "string",
      name: "start_url",
      title: "App Start URL",
      initialValue: "/",
    },

    {
      type: "string",
      name: "theme_color",
      title: "Theme Color",
    },
    { type: "string", name: "background_color", title: "Background Color" },

    {
      name: "display",
      type: "string",
      title: "display",
      options: {
        list: DISPLAYMODES,
      },
    },
  ],
  initialValue: {
    display: DISPLAYMODES[0],
    // eslint-disable-next-line camelcase
    start_url: "/",
  },
});
export default WebManifest;
