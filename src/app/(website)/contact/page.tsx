import GoogleMap from "@/components/contact/GoogleMap";
import "./page.scss";
import ContactForm from "@/components/contact/ContactFrom";
import { sanityFetch } from "@/sanity/config/client";
import { fetchContactData } from "@/sanity/queries";
import { formatContactLink } from "@/helpers";
import Link from "next/link";
import FadingImages from "@/components/image/FadingImages";
import { ContactPageData } from "@/types";

function outputTextWithNewLine(text: string) {
  const split = text.split("\n");
  console.log(split);
  return split.map((line) => (
    <span key={line}>
      {line} <br />
    </span>
  ));
}

export default async function Page() {
  const contactData = await sanityFetch<ContactPageData>({
    query: fetchContactData,
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
