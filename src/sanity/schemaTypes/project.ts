import { defineType, defineField } from "sanity";
import { image } from "./image";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "projectInfo",
      title: "Project Info",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
        name: "projectImages",
        title: "Project Images",
        type: "array",
        of: [{type: "imageWithAlt"}],
      }),
  ],
});
