"use client"

import { useState, useCallback, useMemo, useRef } from "react"

interface CounterProps {
  initialCount?: number
  label?: string
}

// Client hooks demo — Topic 12
export function Counter({ initialCount = 0, label = "Count" }: CounterProps) {
  const [count, setCount] = useState(initialCount)
  const renderCount = useRef(0)
  renderCount.current += 1

  const doubled = useMemo(() => count * 2, [count])

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount((c) => c - 1)
  }, [])

  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="mb-2 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold">{count}</p>
      <p className="text-sm text-zinc-500">Doubled: {doubled} · Renders: {renderCount.current}</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={handleDecrement}
          className="rounded-lg border px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          −
        </button>
        <button
          type="button"
          onClick={handleIncrement}
          className="rounded-lg bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
        >
          +
        </button>
      </div>
    </div>
  )
}
