import { defineType } from "sanity";

export const directionOfScroll = defineType({
  name: "directionOfScroll",
  title: "Scroll direction",
  description: "Choose a direction that images should scroll.",
  type: "string",
  options: {
    list: [
      { title: "Left", value: "left" },
      { title: "Right", value: "right" },
    ],
  },
});
