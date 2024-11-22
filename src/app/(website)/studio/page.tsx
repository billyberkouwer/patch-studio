import PageComposer from "@/components/page/PageComposer";
import CreativeProject from "@/components/studio/creativeProject/CreativeProject";
import CreativeProjectSection from "@/components/studio/creativeProject/CreativeProjectsSection";
import ImageLandingSection from "@/components/studio/ImageLandingSection";
import MemberCardsSection from "@/components/studio/MemberCardsSection";
import { sanityFetch } from "@/sanity/config/client";
import { fetchPageData, fetchStudioData, fetchStudioMetadata } from "@/sanity/queries";
import { CreativeProjectType, MemberCardType, PageDataType, PageMeta } from "@/types";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const metadata = await sanityFetch<PageMeta>({
    query: fetchStudioMetadata,
    tags: ["studio"],
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
    title: metadata?.title ?? "Studio",
    keywords: metadata?.keywords ?? undefined,
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata?.description ?? undefined,
    alternates: {
      canonical: "/studio",
    },
    openGraph: {
      images: metadata.ogImage?.url ?? null,
      title: metadata?.ogTitle ?? null,
      ogType: metadata?.ogTitle ?? "wesite",
      description: metadata?.description ?? null,
      publishedTime: metadata?._updatedAt ?? null,
      authors: ["Patch Studio"],
    },
  };
}

export default async function Studio() {
  const pageData = await sanityFetch<PageDataType>({
    query: fetchStudioData,
    tags: ["page"],
  });

  if (!pageData) {
    return notFound();
  }

  return (
    <PageComposer noTopPadding title={pageData.title} pageData={pageData.pageBuilder} />
  );
}
