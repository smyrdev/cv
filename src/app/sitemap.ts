import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Generated at build time; `output: 'export'` has no server to revalidate on.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
