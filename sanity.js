import { sanityClient } from "@sanity/client";

const client = sanityClient({
  projectId: "lo1iyvsq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
