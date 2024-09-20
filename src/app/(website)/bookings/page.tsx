import { sanityFetch } from "@/sanity/config/client";
import BookingWrapper from "../../../components/booking/BookingWrapper";
import { Metadata } from "next";
import { fetchBookingsMetadata } from "@/sanity/queries";
import { PageMeta } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metadata = await sanityFetch<PageMeta>({
    query: fetchBookingsMetadata,
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
    title: metadata?.ogTitle ?? "Bookings",
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata?.description ?? "",
    alternates: {
      canonical: "/bookings",
    },
    openGraph: {
      images: metadata?.ogImage?.url ?? "",
      title: metadata?.ogTitle ?? "Bookings",
      type: metadata?.ogType ?? "website",
      description: metadata?.description ?? "",
      publishedTime: metadata?._updatedAt ?? "",
      authors: ["Patch Studio"],
    },
  };
}

export default function Bookings() {
  return (
    <>
      <BookingWrapper />
    </>
  );
}
