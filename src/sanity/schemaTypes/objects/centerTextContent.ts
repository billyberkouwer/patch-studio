import { defineField, defineType } from "sanity";

export const centerTextContent = defineType({
    name: "centerTextContent",
    title: "Center Text Content",
    type: "string",
    description: "This element is displayed on the homepage so you must choose what center text to display when the user is scrolling over this element.",
    options: {
        list: [{
            title: "Patch Studio",
            value: "patch-studio"
        }, {
            title: "Editorial",
            value: "editorial"
        },{
            title: "Headshots",
            value: "headshots"
        },]
    },
    initialValue: "patch-studio"
})