import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '@/sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'my-dev-website',
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
