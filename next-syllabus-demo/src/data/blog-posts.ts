import type { BlogPost } from "@/types"

// Local blog data — Topic 35: Blog with MDX/CMS pattern (static content demo)
export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-app-router",
    title: "Getting Started with the App Router",
    excerpt: "Learn file-based routing, layouts, and server components in Next.js.",
    content: "The App Router uses the app directory for routes. Each folder maps to a URL segment. page.tsx defines UI, layout.tsx wraps shared UI, and special files like loading.tsx handle states.",
    author: "Training Team",
    publishedAt: "2025-01-15",
    tags: ["routing", "beginner"],
  },
  {
    slug: "server-actions-crud",
    title: "Building CRUD with Server Actions",
    excerpt: "Create, read, update, and delete data without writing API routes.",
    content: "Server Actions let you run server-side logic from forms. Mark functions with use server, validate input with Zod, and revalidate paths after mutations.",
    author: "Training Team",
    publishedAt: "2025-02-01",
    tags: ["server-actions", "advanced"],
  },
  {
    slug: "caching-strategies",
    title: "Caching Strategies in Next.js",
    excerpt: "Understand request memoization, data cache, and ISR.",
    content: "Next.js caches fetch requests by default. Use revalidate for time-based updates, revalidateTag for on-demand updates, and cache no-store for always-fresh data.",
    author: "Training Team",
    publishedAt: "2025-03-10",
    tags: ["caching", "performance"],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
