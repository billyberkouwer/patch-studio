import { allProjectSlugs } from "@/sanity/queries";
import Navbar from "./Navbar";
import { client, sanityFetch } from "@/sanity/config/client";
import { draftMode } from "next/headers";
import { Slug } from "sanity";

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

  return <Navbar navItems={slugs} />;
}
