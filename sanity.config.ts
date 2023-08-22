import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { apiVersion } from "./sanity/lib/client";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: "3qh8c1bt",
  dataset: "production",
  schema,
  plugins: [
    deskTool(),
    vercelDeployTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
