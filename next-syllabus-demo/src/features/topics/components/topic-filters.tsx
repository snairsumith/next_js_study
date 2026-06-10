"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"

// URL state with search params — Topic 17
export function TopicFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentLevel = searchParams.get("level") ?? ""
  const currentQuery = searchParams.get("q") ?? ""

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set(key, value)
    else params.delete(key)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <input
        type="search"
        placeholder="Search topics..."
        defaultValue={currentQuery}
        onChange={(e) => updateParams("q", e.target.value)}
        className="rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-600 dark:bg-zinc-800"
        aria-label="Search topics"
      />
      <select
        value={currentLevel}
        onChange={(e) => updateParams("level", e.target.value)}
        className="rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-600 dark:bg-zinc-800"
        aria-label="Filter by level"
      >
        <option value="">All levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="production">Production</option>
      </select>
    </div>
  )
}
