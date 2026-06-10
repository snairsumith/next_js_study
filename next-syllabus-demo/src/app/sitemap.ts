import type { MetadataRoute } from "next"
import { topics } from "@/data/topics"
import { blogPosts } from "@/data/blog-posts"
import { getEnv } from "@/lib/env"

// Sitemap — Topic 22
export default function sitemap(): MetadataRoute.Sitemap {
  const { appUrl } = getEnv()

  const staticPages = ["", "/topics", "/blog", "/countries", "/weather", "/todos", "/login", "/about", "/contact"].map(
    (path) => ({
      url: `${appUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  )

  const topicPages = topics.map((topic) => ({
    url: `${appUrl}/topics/${topic.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${appUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...topicPages, ...blogPages]
}
