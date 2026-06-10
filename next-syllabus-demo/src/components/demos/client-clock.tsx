"use client"

import { useState, useEffect } from "react"

// Client Component — needs browser APIs (Topic 6 & 12)
export function ClientClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    function updateTime() {
      setTime(new Date().toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
        Client Component
      </p>
      <p>Live clock: {time ?? "Loading..."}</p>
      <p className="mt-1 text-xs text-blue-600 dark:text-blue-400">
        Uses useState + useEffect — requires &apos;use client&apos; directive.
      </p>
    </div>
  )
}
