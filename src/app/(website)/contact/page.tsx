import GoogleMap from "@/components/contact/GoogleMap";
import "./page.scss";
import ContactForm from "@/components/contact/ContactFrom";
import { sanityFetch } from "@/sanity/config/client";
import { fetchContactData, fetchContactMetadata } from "@/sanity/queries";
import { formatContactLink } from "@/helpers";
import Link from "next/link";
import FadingImages from "@/components/image/FadingImages";
import { ContactPageData, PageMeta } from "@/types";

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
    title: "Contact",
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata.description,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      images: metadata.ogImage.url,
      title: metadata.ogTitle,
      type: metadata.ogType,
      description: metadata.description,
      publishedTime: metadata._updatedAt,
      authors: ["Patch Studio"],
    },
  };
}

export default async function Page() {
  const contactData = await sanityFetch<ContactPageData>({
    query: fetchContactData,
    tags: ["page"]
  });

  return (
    <div className="page__wrapper --fixed-height">
      <section className="contact__wrapper">
        <div className="contact__container">
          <div className="block-1__wrapper">
            <FadingImages images={contactData?.locationImages} />
          </div>
          <div className="block-2__wrapper">
            <div>
              {contactData?.location
                ? outputTextWithNewLine(contactData.location)
                : null}
            </div>
            <div className="social-links__wrapper">
              {contactData?.socialLinks?.map((link, i) => (
                <Link key={link.link + i} href={formatContactLink(link.link, link.linkType)}>
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
