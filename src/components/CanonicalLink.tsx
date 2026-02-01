"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SITE_URL = "https://mentalmath.cc";

/**
 * Generates canonical URL for the current page
 * - Uses pathname only (no query params)
 * - Ensures trailing slash
 * - Returns absolute URL
 */
function generateCanonicalUrl(pathname: string): string {
  // Ensure pathname ends with /
  let normalizedPath = pathname;
  if (!normalizedPath.endsWith("/")) {
    normalizedPath += "/";
  }

  // Return absolute URL
  return `${SITE_URL}${normalizedPath}`;
}

/**
 * Canonical Link Component
 * 
 * Automatically generates and injects canonical URL for all pages.
 * - Removes query parameters (utm_*, ref, etc.)
 * - Ensures trailing slash
 * - Works for all existing and future pages
 * 
 * Usage: Add <CanonicalLink /> to root layout
 */
export function CanonicalLink() {
  const pathname = usePathname();

  useEffect(() => {
    // Generate canonical URL from current pathname
    const canonical = generateCanonicalUrl(pathname);

    // Update or create canonical link in head
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!linkElement) {
      // Create new canonical link if it doesn't exist
      linkElement = document.createElement("link");
      linkElement.rel = "canonical";
      document.head.appendChild(linkElement);
    }

    // Set the href
    linkElement.href = canonical;
  }, [pathname]);

  // Return null as this component only manipulates the DOM
  // The actual <link> tag is in the document head
  return null;
}
