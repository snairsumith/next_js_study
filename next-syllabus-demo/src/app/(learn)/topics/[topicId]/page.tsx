import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTopicById } from "@/data/topics"
import type { PageProps } from "@/types"

// Dynamic route with generateStaticParams — Topics 16 & 22
export async function generateStaticParams() {
  const { topics } = await import("@/data/topics")
  return topics.map((topic) => ({ topicId: String(topic.id) }))
}

export async function generateMetadata({ params }: PageProps<{ topicId: string }>): Promise<Metadata> {
  const { topicId } = await params
  const topic = getTopicById(Number(topicId))
  if (!topic) return { title: "Topic Not Found" }

  return {
    title: topic.title,
    description: `Learn about ${topic.title} — ${topic.concepts.join(", ")}`,
  }
}

export default async function TopicDetailPage({ params }: PageProps<{ topicId: string }>) {
  const { topicId } = await params
  const topic = getTopicById(Number(topicId))

  if (!topic) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/topics" className="text-sm text-blue-600 hover:underline">
        ← Back to topics
      </Link>

      <span className="mt-4 block text-xs font-medium uppercase text-blue-600">{topic.level}</span>
      <h1 className="mt-1 text-3xl font-bold">
        Topic {topic.id}: {topic.title}
      </h1>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Key Concepts</h2>
        <ul className="mt-2 list-inside list-disc text-zinc-600 dark:text-zinc-400">
          {topic.concepts.map((concept) => (
            <li key={concept}>{concept}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Live Demo</h2>
        <Link
          href={topic.demoRoute}
          className="mt-2 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Open Demo →
        </Link>
      </section>
    </div>
  )
}
