import { RiBrush2Fill, RiBrushLine } from "react-icons/ri";
import { defineArrayMember, defineField, defineType } from "sanity";

export const creativeProjects = defineType({
  name: "creativeProjectsSelection",
  title: "Creative Projects Selection",
  description: "A selection of your Creative Projects.",
  icon: RiBrushLine,
  type: "object",
  fields: [
    defineField({
      name: "creativeProjects",
      type: "array",
      title: "Creative Projects",
      description:
        "Add one your creative projects here to have it show up on the studio page. You can make new creative projects in the side panel and refer to them here, or create one here directly.",
      of: [
        defineArrayMember({
          name: "creativeProjectInstance",
          title: "Creative Project",
          type: "reference",
          to: [{ type: "creativeProject" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      project0: "creativeProjects.0.title",
      project1: "creativeProjects.1.title",
      project2: "creativeProjects.2.title",
    },
    prepare({ project0, project1, project2 }) {
      let title;
      project0 ? (title = project0) : null;
      project1 ? (title += " " + project1) : null;
      project2 ? (title += " " + project2) : null;

      return {
        title: "Creative Projects Section",
        subtitle: title
      };
    },
  },
});
