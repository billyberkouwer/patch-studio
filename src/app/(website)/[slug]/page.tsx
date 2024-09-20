import PageWrapper from "@/components/page/PageWrapper";
import { client, sanityFetch } from "@/sanity/config/client";
import {
  allProjectSlugs,
  fetchPageData,
  fetchPageMetadata,
} from "@/sanity/queries";
import { PageDataType, PageMeta } from "@/types";
import { notFound } from "next/navigation";

async function getAllProjectSlugs() {
  const projectSlugs = await client.fetch(
    allProjectSlugs,
    {},
    { perspective: "published", tag: "page" }
  );

  return projectSlugs;
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = await sanityFetch<PageMeta>({
    query: fetchPageMetadata,
    params: {
      slug: params.slug,
    },
    tags: ["page"],
  });

  return {
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    title: metadata?.title ?? "",
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata?.description ?? "",
    alternates: {
      canonical: "/" + metadata?.slug,
    },
    openGraph: {
      images: metadata?.ogImage?.url ?? "",
      title: metadata?.ogTitle ?? "",
      type: metadata?.ogType ?? "website",
      description: metadata?.description ?? "",
      publishedTime: metadata?._updatedAt ?? "",
      authors: ["Patch Studio"],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pageData = await sanityFetch<PageDataType>({
    query: fetchPageData,
    params: {
      slug: params.slug,
    },
    tags: ["page"],
  });

  if (!pageData) {
    return notFound();
  }

  return <PageWrapper title={pageData.title} pageData={pageData.pageBuilder} />;
}
