import "@/styles/global.scss";
import CSSEnhancements from "@/utils/CSSEnhancements";
import { navItems } from "@/utils/constants";
import Footer from "@/components/footer/Footer";
import localFont from "next/font/local";
import MouseTrackGradient from "@/components/background/MouseTrackGradient";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import LandingPage from "@/components/landing/LandingPage";
import NavbarWrapper from "@/components/nav/NavbarWrapper";
import DisablePreview from "@/components/global/DisablePreview";
import { sanityFetch } from "@/sanity/config/client";
import { fetchSiteMetadata } from "@/sanity/queries";
import { SiteMeta } from "@/types";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    tags: ["siteMeta"],
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
      template: "%s | " + metadata?.title ?? undefined,
      default: metadata?.title ?? undefined,
    },
    keywords: metadata?.keywords ?? undefined,
    creator: "Patch Bell",
    publisher: "Patch Studio",
    description: metadata?.description ?? undefined,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      images: metadata?.ogImage?.url ?? undefined,
      title: metadata?.ogTitle ?? undefined,
      type: metadata?.ogType ?? "website",
      description: metadata?.ogDescription ?? undefined,
      publishedTime: metadata?._updatedAt ?? undefined,
      authors: ["Patch Studio"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata: SiteMeta = await sanityFetch({
    query: fetchSiteMetadata,
    tags: ["home"],
  });

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
        {metadata?.analyticsId ? (
          <GoogleAnalytics gaId={metadata?.analyticsId} />
        ) : null}
      </body>
    </html>
  );
}
