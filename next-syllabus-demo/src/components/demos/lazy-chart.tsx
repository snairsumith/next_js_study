"use client"

// Dynamically imported client component — Topic 32
export function LazyChart() {
  const data = [40, 65, 30, 80, 55, 70, 45]

  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="mb-3 text-sm font-medium">Dynamic Import Chart (mock)</p>
      <div className="flex h-32 items-end gap-1">
        {data.map((value, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-blue-500 transition-all hover:bg-blue-600"
            style={{ height: `${value}%` }}
            title={`${value}%`}
          />
        ))}
      </div>
    </div>
  )
}
