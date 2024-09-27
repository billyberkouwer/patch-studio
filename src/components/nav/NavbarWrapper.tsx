import { allProjectSlugs } from "@/sanity/queries";
import Navbar from "./Navbar";
import { sanityFetch } from "@/sanity/config/client";

async function getAllProjectSlugs() {
  const pageSlugs = await sanityFetch<{ title: string; slug: string }[]>({
    query: allProjectSlugs,
    tags: ["page"],
  });

  return pageSlugs;
}

export default async function NavbarWrapper() {
  const slugs = await getAllProjectSlugs();
  slugs.unshift({ title: "Home", slug: "/" });
  slugs.push({ title: "Contact", slug: "/contact" });
  slugs.push({ title: "Studio", slug: "/studio" });
  slugs.push({ title: "House Rules", slug: "/terms-and-conditions" });

  return <Navbar navItems={slugs} />;
}
