import Homepage from "@/components/home/Homepage";
import { client, sanityFetch } from "@/sanity/config/client";
import "./page.scss";
import { HomepageDataType, SiteMeta } from "@/types";
import { fetchHomepageData, fetchSiteMetadata } from "@/sanity/queries";

export async function generateMetadata() {
  const metadata: SiteMeta = await sanityFetch({
    query: fetchSiteMetadata,
    tags: ["siteMeta"],
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
    keywords: metadata?.keywords ?? undefined,
    title: "Home | " + metadata?.title,
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata?.description ?? "",
    alternates: {
      canonical: "/",
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

export default async function Home() {
  const data = await sanityFetch<HomepageDataType>({
    query: fetchHomepageData,
    tags: ["home"],
  });
  return <Homepage pageData={data?.pageBuilderHome} />;
}
