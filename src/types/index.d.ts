import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";
import { Slug } from "sanity";

type TextArray = string[];

type Image = {
  src: string;
  alt: string;
};

type Images = Image[];

type KeyInfoBlockType = {
  title: string;
  details: string[];
  _key: string;
  _type: "keyInfoBlock"
};

type BookingOption = {
  bookingImage: SanityImageAssetDocument
  bookingInfoBlock: KeyInfoBlockType[];
  _type: 'bookingCard';
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
  text: string;
  _key: string;
  _type: "taglineHome";
  centerTextContent: string | undefined;
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
};

type ButtonWithLinkType = {
  _type: "buttonWithLink";
  text: string;
};

type KeyInfoBlockType = {
  title: string;
  _type: "keyInfoBlock";
  details: string[];
  _key: string;
};

type HomepageComponentTypes = (
  | ParallaxImageHeaderHomeType
  | TaglineHomeType
  | HorizontalScrollImageHomeType
  | InfoSectionHomeType
);

type TextColumn = {
  columnText: string[];
  _type: "textColumns";
  _key: string
}

type BookingSection = {
  title: string;
  _type: "bookingSection";
  _key: string;
  bookingCards: BookingOption[]
}

type DropdownItemType = {
  _type: "dropdownItem";
  dropdownContent: PortableTextBlock[]
  dropdownTitle: string;
  _key: string;
}

type FAQSectionType = {
  _type: "faqSection";
  faqItem: dropdownItem[];
  _key: string;
}

type PageComponentTypes = (
  | ParallaxImageHeaderType
  | TaglineType
  | HorizontalScrollImageType
  | InfoSectionType
  | BookingSection
  | FAQSection
  | TextColumn
);

type HomepageDataType = {
  _type: "home",
  title: string;
  pageBuilderHome: HomepageComponentTypes[];s
  slug: string;
  _rev: string;
}

type PageDataType = {
  _type: "page",
  title: string;
  pageBuilder: PageComponentTypes[];
  slug: string;
  _rev: string;
}