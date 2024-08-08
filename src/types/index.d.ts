import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";

type TextArray = string[];

type StringArray = string[];

type Image = {
  src: string;
  alt: string;
};

type Images = Image[];

type ShootDetails = {
  title: string;
  details: StringArray;
};

type BookingOption = {
  name: string;
  image: Image;
  shootDetails: ShootDetails[];
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
  text: string;
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
  | ParallaxImageHeaderType
  | TaglineType
  | HorizontalScrollImageType
  | InfoSectionType
);

type HomepageDataType = {
  _type: "home",
  title: string;
  pageBuilder: HomepageComponentTypes[];
  slug: string;
  _rev: string;
}
