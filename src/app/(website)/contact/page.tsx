import GoogleMap from "@/components/contact/GoogleMap";
import "./page.scss";
import ContactForm from "@/components/contact/ContactFrom";
import { sanityFetch } from "@/sanity/config/client";
import { fetchContactData, fetchContactMetadata } from "@/sanity/queries";
import { formatContactLink } from "@/helpers";
import Link from "next/link";
import FadingImages from "@/components/image/FadingImages";
import { ContactPageData, PageMeta } from "@/types";
import { PortableText } from "next-sanity";

function outputTextWithNewLine(text: string) {
  const split = text.split("\n");
  return split.map((line) => (
    <span key={line}>
      {line} <br />
    </span>
  ));
}

export async function generateMetadata() {
  const metadata = await sanityFetch<PageMeta>({
    query: fetchContactMetadata,
    tags: ["contact"],
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
    title: metadata?.title ?? "Contact",
    keywords: metadata?.keywords ?? undefined,
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata?.description ?? undefined,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      images: metadata.ogImage?.url ?? undefined,
      title: metadata?.ogTitle ?? undefined,
      type: metadata?.ogType ?? "website",
      description: metadata?.description ?? undefined,
      publishedTime: metadata?._updatedAt ?? undefined,
      authors: ["Patch Studio"],
    },
  };
}

export default async function Page() {
  const contactData = await sanityFetch<ContactPageData>({
    query: fetchContactData,
    tags: ["contact"],
  });

  return (
    <div className="page__wrapper --fixed-height">
      <section className="contact__wrapper">
        <div className="contact__container">
          <div className="block-1__wrapper">
            <FadingImages images={contactData?.locationImages} />
          </div>
          <div className="block-2__wrapper">
            <div className="text-content">
              {contactData?.location ? (
                <PortableText value={contactData.location} />
              ) : null}
            </div>
            <div className="social-links__wrapper">
              {contactData?.socialLinks?.map((link, i) => (
                <Link
                  key={link.link + i}
                  href={formatContactLink(link.link, link.linkType)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="block-3__wrapper">
            <ContactForm />
          </div>
          <div className="block-4__wrapper">
            <GoogleMap iframe={contactData?.googleEmbedMap} />
          </div>
        </div>
      </section>
    </div>
  );
}
