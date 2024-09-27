import { groq } from "next-sanity";

export const allProjectSlugs = groq`
    *[_type == 'page'] | order(orderRank)[]{
        title,
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
            "button": {
                "text": button.text,
                "_type": button._type,
                "isExternalLink": button.isExternalLink,
                "externalLink": button.externalLink.url,
                "internalLink": button.internalLink.link->slug.current,
            },
        },
    }
`;

export const fetchTermsAndConditionsData = groq`
    *[_type == "termsAndConditions"][0] {
        ...,
    }
`;

export const fetchSiteMetadata = groq`
    *[_type == "siteMeta"][0] {
        ...,
        keywords,
        _updatedAt,
        siteName,
        title,
        description,
        isGoogleAnalyticsEnabled,
        ogType,
        ogTitle,
        ogDescription,
        "ogImage": image.asset->
    }
`;

export const fetchContactData = groq`
    *[_type == "contact"][0] {
    ...,
    "locationImages": locationImages[].asset->,
    }
`;

export const fetchContactMetadata = groq`
    *[_type == "contact"][0] {
        "keywords": pageMeta.keywords,
        _updatedAt,
        "ogImage": pageMeta.image.asset->,
        "ogTitle": pageMeta.ogTitle,
        "ogType": pageMeta.ogType,
        "description": pageMeta.description,
        title,
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
                                    _type == "verticalScrollImages" => 
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

export const fetchStudioData = groq`
    *[_type == "studio"][0] {
        ...,
        pageBuilder[]{
            ...,
            _type == "parallaxImageHeader" => 
                @{"selectionOfImages": selectionOfImages[].asset->},
            _type == "horizontalScrollImages" => 
                @{"selectionOfImages": selectionOfImages[].asset->},
            _type == "verticalScrollImages" => 
                @{"selectionOfImages": selectionOfImages[].asset->},
            _type == "bookingSection" => {
                ...,
                bookingCards[] {
                    ...,
                    "bookingImage": bookingImage.asset->
                }
            },
            _type == "teamMemberCards" => {
                ...,
                "teamMemberCards": teamMemberCardsInstance[]{
                    ...,
                    "headshot": headshot.asset->
                }
            },
            _type == "imageHeader" => {
                ...,
                "backgroundImage": backgroundImage.asset->
            },
            _type == "creativeProjectsSelection" => {
                "creativeProjects": creativeProjects[]->{
                    ...,
                    "backgroundColor": backgroundColor.rgb,
                    "images": images[].asset->,
                },
                _type,
            }
        },
    }
`;

export const fetchPageMetadata = groq`
    *[_type == "page" && slug.current == $slug][0] {
        "keywords": pageMeta.keywords,
        _updatedAt,
        "ogImage": pageMeta.image.asset->,
        "ogTitle": pageMeta.ogTitle,
        "ogType": pageMeta.ogType,
        "description": pageMeta.description,
        title,
        "slug": slug.current
    }
`;

export const fetchBookingsMetadata = groq`
    *[_type == "bookings"][0] {
        "keywords": pageMeta.keywords,
        _updatedAt,
        "ogImage": pageMeta.image.asset->,
        "ogTitle": pageMeta.ogTitle,
        "ogType": pageMeta.ogType,
        "description": pageMeta.description,
    }
`;
