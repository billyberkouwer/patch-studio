import { button } from "./components/button";
import externalLink from "./objects/externalLink";
import { image } from "./objects/image";
import { imageArray } from "./objects/imageArray";
import internalLink from "./objects/internalLink";
import { keyInfoBlock } from "./objects/keyInfoBlock";
import { sizeOfObject } from "./objects/sizeOfObject";
import { page } from "./pages/page";
import { pageBuilderHome } from "./pages/pageBuilderHome";
import { directionOfScroll } from "./objects/directionOfScroll";
import { home } from "./pages/home";
import { centerTextContent } from "./objects/centerTextContent";
import { horizontalScrollImagesHome } from "./components/home/horizontalScrollImagesHome";
import { infoSectionHome } from "./components/home/infoSectionHome";
import { parallaxImageHeaderHome } from "./components/home/parallaxImageHeaderHome";
import { taglineHome } from "./components/home/taglineHome";
import { horizontalScrollImages } from "./components/shootPages/horizontalScrollImages";
import { parallaxImageHeader } from "./components/shootPages/parallaxImageHeader";
import { tagline } from "./components/shootPages/tagline";
import { infoSection } from "./components/shootPages/infoSection";
import { pageBuilder } from "./pages/pageBuilder";
import { faqSection } from "./components/shootPages/faqSection";
import { dropdownItem } from "./components/shootPages/dropdownItem";
import { bookingCard } from "./components/shootPages/bookingCard";
import { columnText } from "./components/shootPages/columnText";
import { bookingSection } from "./components/shootPages/bookingSection";

export const schemaTypes = [
  pageBuilderHome,
  pageBuilder,
  button,
  horizontalScrollImagesHome,
  infoSectionHome,
  parallaxImageHeaderHome,
  taglineHome,
  horizontalScrollImages,
  parallaxImageHeader,
  tagline,
  faqSection,
  dropdownItem,
  bookingCard,
  bookingSection,
  columnText,
  infoSection,
  image,
  imageArray,
  keyInfoBlock,
  sizeOfObject,
  page,
  internalLink,
  externalLink,
  directionOfScroll,
  home,
  centerTextContent,
];
