import {
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    page: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/${doc?.slug}`,
          },
        ],
      }),
    }),
    home: defineLocations({
      select: {
        title: "title",
        slug: "/",
      },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Home", href: "/" }],
      }),
    }),
    contact: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [{ title: doc?.title || "Contact", href: "/" + doc?.slug }],
      }),
    }),
  },
};
