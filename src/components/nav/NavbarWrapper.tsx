import { allProjectSlugs } from "@/sanity/queries";
import Navbar from "./Navbar";
import { client } from "@/sanity/config/client";

async function getAllProjectSlugs() {
    const pageSlugs = (await client.fetch(
      allProjectSlugs,
      {},
      { perspective: "published", tag: "page" }
    ));
    
    return pageSlugs;
  }

export default async function NavbarWrapper() {
    const slugs = await getAllProjectSlugs();
    slugs.unshift({title: "Home", slug: "/"})
    slugs.push({title: "Contact", slug: "/contact"})
    
    return (
        <Navbar navItems={slugs} />
    )
}