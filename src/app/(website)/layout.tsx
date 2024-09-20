import type { Metadata } from "next";
import "@/styles/global.scss";
import CSSEnhancements from "@/utils/CSSEnhancements";
import Navbar from "@/components/nav/Navbar";
import { navItems } from "@/utils/constants";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import MouseTrackGradient from "@/components/background/MouseTrackGradient";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Button from "@/components/global/Button";
import LandingPage from "@/components/landing/LandingPage";
import NavbarWrapper from "@/components/nav/NavbarWrapper";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { MouseEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import DisablePreview from "@/components/global/DisablePreview";
import { sanityFetch } from "@/sanity/config/client";
import { fetchSiteMetadata } from "@/sanity/queries";
import { SiteMeta } from "@/types";
import openGraph from "@/sanity/schemaTypes/objects/opengraph";

const mFont = localFont({
  src: [{ path: "./fonts/m.ttf", style: "regular" }],
  preload: true,
  variable: "--mFont",
});

const nhFont = localFont({
  src: [
    { path: "./fonts/nh/nhdr.ttf", style: "normal", weight: "400" },
    { path: "./fonts/nh/nhdri.ttf", style: "italic", weight: "400" },
    { path: "./fonts/nh/nhdb.ttf", style: "normal", weight: "600" },
    { path: "./fonts/nh/nhdbi.ttf", style: "italic", weight: "600" },
    { path: "./fonts/nh/nhdl.ttf", style: "normal", weight: "200" },
    { path: "./fonts/nh/nhdli.ttf", style: "italic", weight: "200" },
    { path: "./fonts/nh/nhdm.ttf", style: "normal", weight: "500" },
    { path: "./fonts/nh/nhdmi.ttf", style: "italic", weight: "500" },
    { path: "./fonts/nh/nhdt.ttf", style: "normal", weight: "300" },
    { path: "./fonts/nh/nhdti.ttf", style: "italic", weight: "300" },
    { path: "./fonts/nh/nhdxt.ttf", style: "normal", weight: "20" },
    { path: "./fonts/nh/nhdxti.ttf", style: "italic", weight: "200" },
    { path: "./fonts/nh/nhdxxt.ttf", style: "normal", weight: "100" },
    { path: "./fonts/nh/nhdxxti.ttf", style: "italic", weight: "100" },
  ],
  preload: true,
  variable: "--nhFont",
});

const hvFont = localFont({
  src: [
    {
      path: "./fonts/hv/hv.ttf",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--hvFont",
});

export async function generateMetadata() {
  const metadata: SiteMeta = await sanityFetch({
    query: fetchSiteMetadata,
    tags: ["home"],
  });

  return {
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    title: {
      template: "%s | " + metadata.title,
      default: metadata.title,
    },
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      images: metadata.ogImage.url,
      title: metadata.ogTitle,
      type: metadata.ogType,
      description: metadata.ogDescription,
      publishedTime: metadata._updatedAt,
      authors: ["Patch Studio"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nhFont.variable} ${hvFont.variable} ${mFont.variable}`}
    >
      <body>
        <MouseTrackGradient />
        <CSSEnhancements />
        <NavbarWrapper />
        {children}
        <Footer pages={navItems} />
        {draftMode().isEnabled ? <VisualEditing /> : null}
        {draftMode().isEnabled ? <DisablePreview /> : null}
        {draftMode().isEnabled === false ? <LandingPage /> : null}
      </body>
    </html>
  );
}
