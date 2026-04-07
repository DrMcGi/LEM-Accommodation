import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lem-accommodation.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...properties.map((property) => ({
      url: `${siteUrl}/properties/${property.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}