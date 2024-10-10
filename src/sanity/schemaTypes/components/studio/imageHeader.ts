import { RiImage2Line } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const imageHeader = defineType({
  name: "imageHeader",
  title: "Image Header",
  type: "object",
  icon: RiImage2Line,
  description:
    "A section that contains an image background, with overlayed header and optional tagline text.",
  fields: [
    defineField({
      type: "image",
      name: "backgroundImage",
      title: "Background Image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "image",
      name: "loadingImagePlaceholder",
      title: "Loading Image Placeholder",
      description:
        "If the background image has a large file size, upload an image here to use as a placeholder while the image loads.",
    }),
    defineField({
      type: "sectionHeader",
      name: "header",
      title: "Header",
      description: "An optional header that overlays the image.",
    }),
    defineField({
      type: "tagline",
      name: "tagline",
      title: "Tagline",
      description: "An optional tagline that sits beneath the header text.",
    }),
  ],
  preview: {
    select: {
      title: "header.header",
      image: "backgroundImage.asset",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Image Header",
        media: image,
      };
    },
  },
});
