import PageWrapper from "@/components/page/PageWrapper";
import { sanityFetch } from "@/sanity/config/client";
import { allProjectSlugs, fetchPageData } from "@/sanity/queries";
import { NavItem, PageComponentTypes, PageDataType } from "@/types";
import { groq } from "next-sanity";

export async function getAllProjectSlugs() {
  const projectSlugs = await sanityFetch({
    query: allProjectSlugs,
    revalidate: false,
  });
  return projectSlugs;
}

export async function generateStaticParams() {
  const projects = (await getAllProjectSlugs()) as NavItem[];
  const slugs = projects.map((project) => project.slug);
  return slugs;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pageData = await sanityFetch<PageDataType>({
    query: fetchPageData,
    params: {
      slug: params.slug,
    },
    revalidate: 1,
  });


  return <PageWrapper title={pageData.title} pageData={pageData.pageBuilder} />;
}
