import { defineArrayMember, defineField, defineType } from "sanity";
import { RiQuestionAnswerLine } from "react-icons/ri";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  icon: RiQuestionAnswerLine,
  fields: [
    defineField({
      type: "array",
      name: "faqItem",
      title: "FAQ Item",
      of: [defineArrayMember({ type: "dropdownItem" })],
    }),
  ],
  preview: {
    select: {
      dropdownItem1: "faqItem.0.dropdownTitle",
      dropdownItem2: "faqItem.1.dropdownTitle",
    },
    prepare({ dropdownItem1, dropdownItem2 }) {
      return {
        title: "FAQ Section",
        subtitle: dropdownItem1 && dropdownItem2 ? dropdownItem1 + " " + dropdownItem2 + " ..." : dropdownItem1
      };
    },
  },
});
