import { MetadataRoute } from "next";

/**
 * Site configuration
 */
const SITE_URL = "https://mentalmath.cc";

/**
 * Robots.txt generator
 * 
 * Allows all crawlers to access all pages.
 * Points to sitemap.xml for better indexing.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
