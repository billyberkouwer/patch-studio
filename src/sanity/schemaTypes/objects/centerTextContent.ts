import { defineField, defineType } from "sanity";

export const centerTextContent = defineType({
    name: "centerTextContent",
    title: "Center Text Content",
    type: "string",
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
    }
})