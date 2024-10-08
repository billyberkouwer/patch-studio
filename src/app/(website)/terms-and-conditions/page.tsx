import Heading from "@/components/global/Heading";
import { sanityFetch } from "@/sanity/config/client";
import { fetchTermsAndConditionsData } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import "./page.scss"
import { TermsAndConditionsData } from "@/types";

export default async function TermsAndConditions() {
  const data = await sanityFetch<TermsAndConditionsData>({
    query: fetchTermsAndConditionsData,
    tags: ["termsAndConditions"],
  });

  return (
    <div className="page__wrapper --top-padding">
      <Heading>Terms and Conditions</Heading>
      <div className="terms-and-conditions__wrapper">
        {data?.termsAndConditionsBlock ? (
          <PortableText value={data.termsAndConditionsBlock} />
        ) : null}
      </div>
    </div>
  );
}
