import Homepage from "@/components/home/Homepage";
import { client } from "@/sanity/config/client";
import "./page.scss";
import { HomepageDataType } from "@/types";

const fetchPageBuilder = `
*[_type == "home"][0] {
  ...,
  pageBuilder[]{
    ...,
    _type == "parallaxImageHeader" => 
        @{"selectionOfImages": selectionOfImages[].asset->},
    _type == "horizontalScrollImages" => 
        @{"selectionOfImages": selectionOfImages[].asset->},
          },
}
`

export default async function Home() {
  const data = await client.fetch<HomepageDataType>(fetchPageBuilder);
  return <Homepage pageData={data.pageBuilder} />;
}
