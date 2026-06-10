import type { MetadataRoute } from "next"
import { getEnv } from "@/lib/env"

// robots.txt — Topic 22
export default function robots(): MetadataRoute.Robots {
  const { appUrl } = getEnv()

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/dashboard", "/admin", "/api/"] },
    sitemap: `${appUrl}/sitemap.xml`,
  }
}
