import { sanityFetch } from "@/sanity/config/client";
import { queryCustomPageSlugs } from "@/sanity/queries";

const fixedRoutes = [
  "",
  "bookings",
  "contact",
  "studio",
  "terms-and-conditions",
];

export default async function sitemap() {
  const customPageSlugs = (await sanityFetch({
    query: queryCustomPageSlugs,
  })) as string[];

  const allSlugs = [...fixedRoutes, ...customPageSlugs];

  const sitemapContent = allSlugs.map((slug) => {
    return {
      url: process.env.SITE_URL + "/" + slug,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: slug === "" ? 1 : slug === "terms-and-conditions" ? 0.2 : 0.8,
    };
  });

  return sitemapContent;
}
