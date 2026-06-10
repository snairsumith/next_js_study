import type { Metadata } from "next"
import { Counter } from "@/components/ui/counter"
import { ClientClock } from "@/components/demos/client-clock"

export const metadata: Metadata = {
  title: "Hooks Demo",
}

// Client hooks demo — Topic 12
export default function HooksDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Client Hooks</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        useState, useEffect, useMemo, useCallback, useRef — client components only.
      </p>
      <Counter initialCount={0} label="useState + useMemo + useCallback" />
      <ClientClock />
    </div>
  )
}
