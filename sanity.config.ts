import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemaTypes";
import { media } from "sanity-plugin-media";
import { RiHome2Line } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { presentationTool } from 'sanity/presentation';
import {
  orderRankField,
  orderRankOrdering,
  orderableDocumentListDeskItem,
} from "@sanity/orderable-document-list";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["home"]);

export const structure = (S: any, context: any) => {
  return S.list()
    .title("Content")
    .items(
      [
        orderableDocumentListDeskItem({ type: "page", title: "Pages", S, context, icon: RiPagesLine }),
        S.listItem().title("Home").id("home").icon(RiHome2Line).child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document().schemaType("home").documentId("home").title("Home")
        ),
      ]
    );
};

export default defineConfig({
  basePath: "/admin",
  name: "default",
  title: "patch-studio",
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool({ structure }), visionTool(), media(), presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),],
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
