import Homepage from "@/components/home/Homepage";
import { client, sanityFetch } from "@/sanity/config/client";
import "./page.scss";
import { HomepageDataType } from "@/types";
import { fetchHomepageData, fetchSiteMetadata } from "@/sanity/queries";
import NavbarWrapper from "@/components/nav/NavbarWrapper";

export async function generateMetadata() {
  const metadata = await sanityFetch({
    query: fetchSiteMetadata,
    tags: ["home"],
  });
}

export default async function Home() {
  const data = await sanityFetch<HomepageDataType>({
    query: fetchHomepageData,
    tags: ["home"],
  });
  return <Homepage pageData={data?.pageBuilderHome} />;
}
