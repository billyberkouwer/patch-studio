import { groq } from "next-sanity";

export const allProjectSlugs = groq`
    *[_type == 'page'][] {
        "slug": slug.current,
    } 
`;

export const fetchHomepageData = groq`
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

export const fetchPageData = groq`
    *[_type == "page" && slug.current == $slug][0] {
        ...,
        pageBuilder[]{
            ...,
            _type == "parallaxImageHeader" => 
                @{"selectionOfImages": selectionOfImages[].asset->},
            _type == "horizontalScrollImages" => 
                @{"selectionOfImages": selectionOfImages[].asset->},
            _type == "bookingSection" => {
                ...,
                bookingCards[] {
                ...,
                    "bookingImage": bookingImage.asset->
                }
            }
        },
    }
`;
