import type { Metadata } from "next"
import { ServerGreeting } from "@/components/demos/server-greeting"
import { ClientClock } from "@/components/demos/client-clock"

export const metadata: Metadata = {
  title: "Components Demo",
  description: "Server vs Client components in Next.js",
}

// Server vs Client components — Topics 6 & 13
export default function ComponentsDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Server vs Client Components</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Server Components are the default. Add &apos;use client&apos; only when you need hooks or browser APIs.
      </p>
      <ServerGreeting name="Next.js Student" />
      <ClientClock />
    </div>
  )
}
