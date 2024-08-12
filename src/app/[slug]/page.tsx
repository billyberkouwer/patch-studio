import PageWrapper from "@/components/page/PageWrapper";
import { sanityFetch } from "@/sanity/config/client";
import { allProjectSlugs, fetchPageData } from "@/sanity/queries";
import { PageDataType } from "@/types";

async function getAllProjectSlugs() {
  const projectSlugs = await sanityFetch({
    query: allProjectSlugs,
    revalidate: false,
  }) as {slug: string}[];
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
    revalidate: 60,
  });


  return <PageWrapper title={pageData.title} pageData={pageData.pageBuilder} />;
}
