import { SanityImageAssetDocument } from "next-sanity";
import { RiImageAddFill } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const verticalScrollImages = defineType({
  name: "verticalScrollImages",
  title: "Three Vertical Scrolling Image Blocks",
  type: "object",
  icon: RiImageAddFill,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description:
        "A name for this component. This title doesn't show up on the site - it's just for convenience.",
    }),
    defineField({
      type: "imageArray",
      name: "selectionOfImages",
      title: "Selection of Images",
      validation: (rule) => {
        return rule.required().custom((val: SanityImageAssetDocument[]) => {
          console.log(val);
          if (!val || val?.length % 3 !== 0) {
            return {
              message:
                "These images are split into 3 blocks so you must have a multiple of 3 images, e.g. 3/6/9/12 images, etc.",
              level: "error",
            };
          }
          return true;
        });
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      // image: "selectionOfImages.0.asset",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Three Vertical Scrolling Image Blocks",
        // media: image,
      };
    },
  },
});
