import type { MetadataRoute } from "next";
import { sessions } from "@/lib/data";

const BASE_URL = "https://fithero.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/programs", "/pricing", "/booking", "/about", "/contact"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const programRoutes = sessions.map((session) => ({
    url: `${BASE_URL}/programs/${session.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...programRoutes];
}
