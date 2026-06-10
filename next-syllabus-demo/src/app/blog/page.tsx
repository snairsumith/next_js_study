import type { Metadata } from "next"
import { blogPosts } from "@/data/blog-posts"
import { PostCard } from "@/features/blog/components/post-card"

export const metadata: Metadata = {
  title: "Blog",
  description: "Next.js blog demo with dynamic routes and SEO",
}

// Blog listing — Topic 35
export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Static blog posts with dynamic slug routes — Topic 16 & 22
      </p>
      <div className="mt-6 flex flex-col gap-4">
        {blogPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
