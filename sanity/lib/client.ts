export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const useCdn = true;
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || "";

export const client = {
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn,
};