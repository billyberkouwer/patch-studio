import Homepage from "@/components/home/Homepage";
import { client, sanityFetch } from "@/sanity/config/client";
import "./page.scss";
import { HomepageDataType } from "@/types";
import { fetchHomepageData } from "@/sanity/queries";



export default async function Home() {
  const data = await sanityFetch<HomepageDataType>({
    query: fetchHomepageData,
    tags: ["page"]
  });
  return <Homepage pageData={data.pageBuilderHome} />;
}
