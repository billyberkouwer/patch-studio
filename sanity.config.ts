import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemaTypes";
import { media } from "sanity-plugin-media";

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
        S.listItem().title("Home").id("home").child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document().schemaType("home").documentId("home").title("Home")
        ),
        S.listItem()
          .title("Pages")
          .child(
            S.documentTypeList("page")
              .title("Page")
              .filter("_type == $type")
              .params({ type: "page" })
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
  plugins: [structureTool({ structure }), visionTool(), media()],
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
