import Link from "next/link"
import type { BlogPost } from "@/types"
import { formatDate } from "@/lib/utils"

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-2 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mb-2 text-xl font-semibold">
        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
          {post.title}
        </Link>
      </h2>
      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
      <p className="text-xs text-zinc-500">
        {post.author} · {formatDate(post.publishedAt)}
      </p>
    </article>
  )
}
