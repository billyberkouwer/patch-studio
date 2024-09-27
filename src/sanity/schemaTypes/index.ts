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
import { verticalScrollImages } from "./components/shootPages/verticalScrollImages";
import { contactPage } from "./pages/contact";
import { contactLinks } from "./objects/contactLinks";
import { sectionHeader } from "./components/shootPages/sectionHeader";
import basic from "./objects/opengraph/basic";
import optional from "./objects/opengraph/optional";
import openGraph from "./objects/opengraph";
import Locales from "./objects/locale";
import WebManifest from "./objects/manifest";
import Meta from "./objects/meta";
import SiteSettings from "./objects/siteSettings";
import GoogleAnalytics from "./objects/googleAnalytics";
import { pageMeta } from "./documents/pageMeta";
import SiteMeta from "./documents/siteMeta";
import { bookingsPage } from "./pages/bookings";
import { creativeProject } from "./components/studio/creativeProject";
import { creativeProjects } from "./components/studio/creativeProjects";
import { pageBuilderStudio } from "./components/studio/pageBuilderStudio";
import { studioPage } from "./pages/studio";
import { teamMemberCards } from "./components/studio/teamMemberCards";
import { teamMemberCard } from "./components/studio/teamMemberCard";
import {  termsAndConditions } from "./pages/termsAndConditions";
import { imageHeader } from "./components/studio/imageHeader";

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
  verticalScrollImages,
  contactPage,
  contactLinks,
  sectionHeader,
  openGraph,
  Locales,
  SiteMeta,
  WebManifest,
  Meta,
  SiteSettings,
  GoogleAnalytics,
  pageMeta,
  basic,
  optional,
  bookingsPage,
  creativeProject,
  creativeProjects,
  pageBuilderStudio,
  studioPage,
  teamMemberCard,
  teamMemberCards,
  termsAndConditions,
  imageHeader,
];
