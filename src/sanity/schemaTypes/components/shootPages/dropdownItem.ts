import { defineArrayMember, defineField, defineType } from "sanity";

export const dropdownItem = defineType({
  name: "dropdownItem",
  title: "Dropdown Item",
  type: "object",
  fields: [
    defineField({
      title: "Dropdown Title",
      type: "string",
      name: "dropdownTitle",
      description: "This text will show while the dropdown is closed.",
    }),
    defineField({
      title: "Dropdown Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      name: "dropdownContent",
    }),
  ],
});
