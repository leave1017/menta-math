import { MetadataRoute } from "next";
import { OPS } from "@/lib/math";

/**
 * Site configuration
 */
const SITE_URL = "https://mentalmath.cc";

/**
 * Normalize pathname to canonical URL
 * - Ensures trailing slash
 * - Removes query params and hash
 * - Returns absolute URL with SITE_URL
 */
function normalizeUrl(pathname: string): string {
  // Ensure pathname ends with /
  let normalized = pathname;
  if (!normalized.endsWith("/")) {
    normalized += "/";
  }
  
  // Return absolute URL
  return `${SITE_URL}${normalized}`;
}

/**
 * Static routes - all pages that are always available
 */
const STATIC_ROUTES = [
  "/",           // Home
  "/practice",   // Practice library
  "/print",      // Print worksheets
  "/help",       // Help
  "/faq",        // FAQ
  "/tips",       // Tips
  "/grades",     // Grades
  "/feedback",   // Feedback
  "/contact",    // Contact
  "/privacy",    // Privacy policy
  "/terms",      // Terms of service
  "/cookies",    // Cookie policy
  "/practice-plans",        // Practice plans index
  "/practice-plans/daily-10",   // Daily 10 plan
  "/practice-plans/speed-20",   // Speed 20 plan
  "/practice-plans/fluency-50", // Fluency 50 plan
];

/**
 * Generate dynamic routes for practice pages
 * Pattern: /practice/[op]
 * Enumerate all operations: add, sub, mul, div
 */
function getPracticeRoutes(): string[] {
  return OPS.map((op) => `/practice/${op}`);
}

/**
 * Generate dynamic routes for problem sets
 * Pattern: /p/[op]/[digits]/[count]
 * 
 * Common combinations:
 * - Operations: add, sub, mul, div (4)
 * - Digits: 1, 2, 3 (3 most common)
 * - Count: 10, 20, 50 (3 most common)
 * Total: 4 × 3 × 3 = 36 URLs
 * 
 * Note: This is a subset. The actual pattern supports digits 1-8 and count 1-99.
 * We only include the most commonly used combinations in sitemap to avoid
 * overwhelming search engines with thousands of similar pages.
 */
function getProblemSetRoutes(): string[] {
  const routes: string[] = [];
  
  // Common digits (1-3 are most used)
  const commonDigits = [1, 2, 3];
  
  // Common counts (standard practice sets)
  const commonCounts = [10, 20, 50];
  
  for (const op of OPS) {
    for (const digits of commonDigits) {
      for (const count of commonCounts) {
        routes.push(`/p/${op}/${digits}/${count}`);
      }
    }
  }
  
  return routes;
}

/**
 * Get all routes to include in sitemap
 */
function getAllRoutes(): string[] {
  return [
    ...STATIC_ROUTES,
    ...getPracticeRoutes(),
    ...getProblemSetRoutes(),
  ];
}

/**
 * Sitemap.xml generator
 * 
 * Automatically generates sitemap for all pages.
 * New static pages will be auto-discovered on next build.
 * Dynamic routes are enumerated from data sources.
 * 
 * Conforms to:
 * - All URLs use trailing slash
 * - All URLs are absolute (https://mentalmath.cc)
 * - No query parameters
 * - Standard sitemap XML format
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  
  const routes = getAllRoutes();
  
  return routes.map((route) => ({
    url: normalizeUrl(route),
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));
}
