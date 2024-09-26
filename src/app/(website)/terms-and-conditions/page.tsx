import Heading from "@/components/global/Heading";
import { sanityFetch } from "@/sanity/config/client";
import { fetchTermsAndConditionsData } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import "./page.scss"
import { TermsAndConditionsData } from "@/types";

export default async function TermsAndConditions() {
  const data = await sanityFetch<TermsAndConditionsData>({
    query: fetchTermsAndConditionsData,
    tags: ["page"],
  });

  return (
    <div className="page__wrapper">
      <Heading>Terms and Conditions</Heading>
      <div className="terms-and-conditions__wrapper">
        {data?.termsAndConditionsBlock ? (
          <PortableText value={data.termsAndConditionsBlock} />
        ) : null}
      </div>

      {/* <PortableText /> */}
    </div>
  );
}
