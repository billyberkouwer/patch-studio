import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemaTypes";
import { media } from "sanity-plugin-media";
import {
  RiBook2Line,
  RiBrushLine,
  RiCameraLine,
  RiContactsBookLine,
  RiContactsLine,
  RiHome2Line,
  RiSettings2Line,
} from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { presentationTool } from "sanity/presentation";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { colorInput } from "@sanity/color-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["home", "contact", "bookings", "studio"]);

export const structure = (S: any, context: any) => {
  return S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "page",
        title: "Custom Pages",
        S,
        context,
        icon: RiPagesLine,
      }),
      S.listItem()
        .title("Home")
        .id("home")
        .icon(RiHome2Line)
        .child(
          S.document().schemaType("home").documentId("home").title("Home")
        ),
      S.listItem()
        .title("Contact")
        .id("contact")
        .icon(RiContactsBookLine)
        .child(
          S.document()
            .schemaType("contact")
            .documentId("contact")
            .title("Contact")
        ),
      S.listItem()
        .title("Studio")
        .id("studio")
        .icon(RiCameraLine)
        .child(
          S.document().schemaType("studio").documentId("studio").title("Studio")
        ),
      S.listItem()
        .title("Terms and Conditions")
        .id("termsAndConditions")
        .icon(RiBook2Line)
        .child(
          S.document()
            .schemaType("termsAndConditions")
            .documentId("termsAndConditions")
            .title("Terms and Conditions")
        ),
      S.divider(),
      S.listItem()
        .title("Creative Projects")
        .icon(RiBrushLine)
        .child(S.documentTypeList("creativeProject")),
      S.divider(),
      S.listItem()
        .title("Site Meta")
        .id("site-meta")
        .icon(RiSettings2Line)
        .child(
          S.document()
            .schemaType("siteMeta")
            .documentId("site-meta")
            .title("Site Meta")
        ),
      S.listItem()
        .title("Bookings")
        .id("bookings")
        .icon(RiSettings2Line)
        .child(
          S.document()
            .schemaType("bookings")
            .documentId("bookings")
            .title("Bookings")
        ),
    ]);
};

export default defineConfig({
  basePath: "/admin",
  name: "default",
  title: "patch-studio",
  projectId: projectId,
  scheduledPublishing: {
    enabled: false,
  },
  dataset: dataset,
  plugins: [
    structureTool({ structure }),
    // visionTool(),
    colorInput(),
    media(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes, // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
