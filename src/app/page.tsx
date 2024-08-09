import Homepage from "@/components/home/Homepage";
import { client, sanityFetch } from "@/sanity/config/client";
import "./page.scss";
import { HomepageDataType } from "@/types";

const fetchPageBuilder = `
*[_type == "home"][0] {
  ...,
  pageBuilderHome[]{
    ...,
    _type == "parallaxImageHeaderHome" => 
        @{"selectionOfImages": selectionOfImages[].asset->},
    _type == "horizontalScrollImagesHome" => 
        @{"selectionOfImages": selectionOfImages[].asset->},
          },
}
`;

export default async function Home() {
  const data = await sanityFetch<HomepageDataType>({
    query: fetchPageBuilder,
    revalidate: false,
  });
  return <Homepage pageData={data.pageBuilderHome} />;
}
