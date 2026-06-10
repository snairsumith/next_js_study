import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost } from "@/data/blog-posts"
import { formatDate } from "@/lib/utils"
import type { PageProps } from "@/types"

// Catch-all route [...slug] — Topic 16
export async function generateMetadata({ params }: PageProps<{ slug: string[] }>): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug[0])
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  }
}

export default async function BlogPostPage({ params }: PageProps<{ slug: string[] }>) {
  const { slug } = await params
  const post = getBlogPost(slug[0])

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">← Back to blog</Link>
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">
        {post.author} · {formatDate(post.publishedAt)}
      </p>
      <div className="mt-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {post.content}
      </div>
      {slug.length > 1 && (
        <p className="mt-4 text-sm text-zinc-500">
          Catch-all segments: {slug.join(" / ")}
        </p>
      )}
    </article>
  )
}
