import PageWrapper from "@/components/page/PageWrapper";
import { client, sanityFetch } from "@/sanity/config/client";
import { allProjectSlugs, fetchPageData } from "@/sanity/queries";
import { PageDataType } from "@/types";
import { notFound } from "next/navigation";

async function getAllProjectSlugs() {
  const projectSlugs = (await client.fetch(
    allProjectSlugs,
    {},
    { perspective: "published" }
  ));
  
  return projectSlugs;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pageData = await sanityFetch<PageDataType>({
    query: fetchPageData,
    params: {
      slug: params.slug,
    },
    tags: ["page"]
  });

  if (!pageData) {
    return notFound();
  }

  return <PageWrapper title={pageData.title} pageData={pageData.pageBuilder} />;
}
