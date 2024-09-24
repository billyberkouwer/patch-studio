import { defineField, defineType } from "sanity";

export const teamMemberCard = defineType({
  name: "teamMemberCard",
  title: "Team Member Card",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      description: "The name of the team member.",
    }),
    defineField({
      type: "image",
      name: "headshot",
      title: "Headshot",
      description: "A headshot of this team member.",
    }),
    defineField({
      type: "array",
      name: "role",
      title: "Role",
      description: "The roles of the team member.",
      of: [{ type: "string" }],
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Description",
      description: "Describe this team member here.",
    }),
  ],
});
