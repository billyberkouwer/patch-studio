import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";
import { Slug } from "sanity";

type TextArray = string[];

type Image = {
  src: string;
  alt: string;
};

type SiteMeta = {
  keywords: string | null | undefined;
  analyticsId: string | null | undefined;
  siteName: string | null | undefined;
  title: string | null | undefined;
  _updatedAt: string | null | undefined;
  description: string | null | undefined;
  isGoogleAnalyticsEnabled: string | null | undefined;
  ogType: string | null | undefined;
  ogTitle: string | null | undefined;
  ogDescription: string | null | undefined;
  ogImage: SanityImageAssetDocument | null | undefined;
};

type PageMeta = {
  keywords: string | null | undefined;
  title: string | null | undefined;
  _updatedAt: string | null | undefined;
  description: string | null | undefined;
  ogType: string | null | undefined;
  ogTitle: string | null | undefined;
  ogImage: SanityImageAssetDocument | null | undefined;
  slug: string | null | undefined;
};

type Images = Image[];

type KeyInfoBlockType = {
  title: string;
  details: string[];
  _key: string;
  _type: "keyInfoBlock";
};

type BookingOption = {
  bookingImage: SanityImageAssetDocument;
  bookingInfoBlock: KeyInfoBlockType[];
  appointmentType: string;
  _type: "bookingCard";
  bookingTypeTitle: string;
  _key: string;
};

type ParallaxImageHeaderHomeType = {
  selectionOfImages: SanityImageAssetDocument[];
  title: string;
  _type: "parallaxImageHeaderHome";
  _key: string;
  centerTextContent: string | undefined;
};

type HorizontalScrollImageHomeType = {
  directionOfHorizontalImageScroll: "left" | "right";
  sizeOfHorizontalScrollImages: "small" | "medium" | "large";
  selectionOfImages: SanityImageAssetDocument[];
  centerTextContent: string | undefined;
  title: string;
  _type: "horizontalScrollImagesHome";
  _key: string;
};

type InfoSectionHomeType = {
  _type: "infoSectionHome";
  _key: string;
  title: string;
  keyInfoBlocks: KeyInfoBlockType[];
  button: ButtonWithLinkType;
  sectionText: PortableTextBlock[];
  centerTextContent: string | undefined;
};

type TaglineHomeType = {
  taglineText: string;
  _key: string;
  _type: "taglineHome";
  centerTextContent: string | undefined;
  marginBottom: "normal" | "small" | undefined;
};

type ParallaxImageHeaderType = {
  selectionOfImages: SanityImageAssetDocument[];
  title: string;
  _type: "parallaxImageHeader";
  _key: string;
  centerTextContent: string | undefined;
};

type HorizontalScrollImageType = {
  directionOfHorizontalImageScroll: "left" | "right";
  sizeOfHorizontalScrollImages: "small" | "medium" | "large";
  selectionOfImages: SanityImageAssetDocument[];
  centerTextContent: string | undefined;
  title: string;
  _type: "horizontalScrollImages";
  _key: string;
};

type VerticalScrollImageType = {
  selectionOfImages: SanityImageAssetDocument[];
  title: string;
  _type: "verticalScrollImages";
  _key: string;
};

type InfoSectionType = {
  _type: "infoSection";
  _key: string;
  title: string;
  keyInfoBlocks: KeyInfoBlockType[];
  button: ButtonWithLinkType;
  sectionText: PortableTextBlock[];
  centerTextContent: string | undefined;
};

type TaglineType = {
  taglineText: string;
  _key: string;
  _type: "tagline";
  centerTextContent: string | undefined;
  marginBottom: "normal" | "small" | undefined;
};

type ButtonWithLinkType = {
  _type: "buttonWithLink";
  text: string | undefined;
  isExternalLink: boolean | undefined;
  internalLink: string | null | undefined;
  externalLink: string | null | undefined;
};

type KeyInfoBlockType = {
  title: string;
  _type: "keyInfoBlock";
  details: string[];
  _key: string;
};

type HomepageComponentTypes =
  | ParallaxImageHeaderHomeType
  | TaglineHomeType
  | HorizontalScrollImageHomeType
  | InfoSectionHomeType;

type TextColumn = {
  columnText: string[];
  _type: "textColumns";
  _key: string;
};

type BookingSection = {
  title: string;
  _type: "bookingSection";
  _key: string;
  bookingCards: BookingOption[];
};

type DropdownItemType = {
  _type: "dropdownItem";
  dropdownContent: PortableTextBlock[];
  dropdownTitle: string;
  _key: string;
};

type FAQSectionType = {
  _type: "faqSection";
  faqItem: dropdownItem[];
  _key: string;
};

type PageComponentTypes =
  | ParallaxImageHeaderType
  | TaglineType
  | HorizontalScrollImageType
  | InfoSectionType
  | BookingSection
  | FAQSection
  | TextColumn
  | VerticalScrollImageType
  | CreativeProjectType[]
  | TeamMemberCards[];

type HomepageDataType = {
  _type: "home";
  title: string;
  pageBuilderHome: HomepageComponentTypes[];
  s;
  slug: string;
  _rev: string;
};

type PageDataType = {
  _type: "page";
  title: string;
  pageBuilder: PageComponentTypes[];
  slug: string;
  _rev: string;
};

type SocialLink = {
  _key: string;
  title: string;
  _type: string;
  link: string;
  linkType: string;
};

type ContactPageData = {
  googleEmbedMap: string;
  _id: string;
  location: PortableTextBlock[];
  locationImages: SanityImageAssetDocument[];
  _type: "contact";
  socialLinks: SocialLink[];
};

type MemberCardType = {
  name: string | null;
  headshot: null | SanityImageAssetDocument;
  description: string | null;
  role: string[];
};

type TermsAndConditionsData = {
  termsAndConditionsBlock: PortableTextBlock[] | PortableTextBlock | undefined;
};

type CreativeProjectType = {
  title: string;
  color: string;
  images: SanityImageAssetDocument[];
  description: PortableTextBlock[];
  backgroundColor: {
    a: number;
    b: number;
    r: number;
    g: number;
    _type: "rgbaColor";
  };
  link: { url: string; _type: string };
};

type TeamMemberCards = {
  role: string[];
  headshot: { _type: "image"; asset: SanityImageAssetDocument[] };
  _type: "teamMemberCard";
  name: string;
  _key: string;
};
