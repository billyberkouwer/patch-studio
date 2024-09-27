import { defineField, defineType } from "sanity";

export const creativeProject = defineType({
  name: "creativeProject",
  title: "Creative Project",
  type: "document",
  description:
    "Document a creative project the Patch Studio team has worked on.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "The title for the creative project",
      title: "Project Title",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
      description: "Images of the creative project",
      title: "Project Images",
    }),
    defineField(  {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
    defineField({
      name: "description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      description: "Information about the creative project",
      title: "Project Description",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "externalLink",
      description: "A link to the creative project, e.g. a YouTube or Vimeo video.",
    }),
  ],
});
