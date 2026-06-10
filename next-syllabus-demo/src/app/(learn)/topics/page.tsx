import Link from "next/link"
import { Suspense } from "react"
import { topics } from "@/data/topics"
import { TopicFilters } from "@/features/topics/components/topic-filters"
import { Skeleton } from "@/components/ui/skeleton"
import type { TopicLevel } from "@/types"

interface TopicsPageProps {
  searchParams: Promise<{ level?: string; q?: string }>
}

// Topics list with search params — Topics 16 & 17
export default async function TopicsPage({ searchParams }: TopicsPageProps) {
  const params = await searchParams
  const levelFilter = params.level as TopicLevel | undefined
  const query = params.q?.toLowerCase()

  let filtered = topics
  if (levelFilter) filtered = filtered.filter((t) => t.level === levelFilter)
  if (query) filtered = filtered.filter((t) => t.title.toLowerCase().includes(query))

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Syllabus Topics</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Filter by level or search — URL state via searchParams (Topic 17)
      </p>

      <Suspense fallback={<Skeleton className="mt-4 h-10 w-full" />}>
        <TopicFilters />
      </Suspense>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((topic) => (
          <Link
            key={topic.id}
            href={`/topics/${topic.id}`}
            className="rounded-xl border border-zinc-200 p-4 transition-shadow hover:shadow-md dark:border-zinc-700"
          >
            <span className="text-xs font-medium uppercase text-blue-600">{topic.level}</span>
            <h2 className="mt-1 font-semibold">
              {topic.id}. {topic.title}
            </h2>
            <div className="mt-2 flex flex-wrap gap-1">
              {topic.concepts.slice(0, 3).map((c) => (
                <span key={c} className="rounded bg-zinc-100 px-2 py-0.5 text-xs dark:bg-zinc-800">{c}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-zinc-500">No topics match your filters.</p>
      )}
    </div>
  )
}
