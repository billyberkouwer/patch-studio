import { defineArrayMember, defineField, defineType } from "sanity";

export const termsAndConditions = defineType({
  name: "termsAndConditions",
  type: "document",
  title: "Terms and Conditions",
  fields: [
    defineField({
      type: "array",
      name: "termsAndConditionsBlock",
      title: "Terms and Conditions content",
      description: "You can write and format your terms and conditions here.",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
});
