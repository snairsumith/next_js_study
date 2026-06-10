import Link from "next/link"
import { notFound } from "next/navigation"
import { getTopicById } from "@/data/topics"
import type { PageProps } from "@/types"

// Intercepting route — Topic 5 (modal overlay on client navigation)
export default async function TopicModal({ params }: PageProps<{ topicId: string }>) {
  const { topicId } = await params
  const topic = getTopicById(Number(topicId))
  if (!topic) notFound()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-bold">{topic.title}</h2>
          <Link href="/topics" className="text-zinc-500 hover:text-zinc-700" aria-label="Close modal">
            ✕
          </Link>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Intercepting route modal — navigate from /topics to see this overlay.
        </p>
        <Link
          href={`/topics/${topic.id}`}
          className="mt-4 inline-block text-sm text-blue-600 hover:underline"
        >
          View full page →
        </Link>
      </div>
    </div>
  )
}
