import Homepage from "@/components/home/Homepage";
import { client } from "@/sanity/config/client";
import "./page.scss";

const fetchPageBuilder = `
  *[_type == "page"][0] {
    pageBuilder[]{
      _type == "parallaxImageHeader" => 
          @{"selectionOfImages": selectionOfImages[].asset->},
      _type == "horizontalScrollImages" => 
          @{"selectionOfImages": selectionOfImages[].asset->},
    },
  }
`

export default async function Home() {
  const data = await client.fetch(`*[_type == "home"][0] {
    ...,   
  }`);
  return <Homepage />;
}
