import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nitsof.com";
  const defaultLastModified = new Date("2026-05-17T00:00:00.000Z");
  return [
    { url: `${base}/`, lastModified: defaultLastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/carrier-rates`, lastModified: defaultLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/carrier-rates/faq`, lastModified: defaultLastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified: defaultLastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
