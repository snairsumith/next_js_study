import type { Metadata } from "next"
import Image from "next/image"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Performance Demo",
}

// Dynamic import with code splitting — Topic 32
const LazyChart = dynamic(
  () => import("@/components/demos/lazy-chart").then((m) => m.LazyChart),
  { loading: () => <Skeleton className="h-40" /> }
)

export default function PerformanceDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Performance Optimization</h1>

      <section>
        <h2 className="mb-2 text-lg font-semibold">next/image</h2>
        <div className="flex gap-4">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={37}
            className="dark:invert"
          />
        </div>
        <p className="mt-1 text-sm text-zinc-500">Automatic lazy loading, WebP, and size optimization</p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Dynamic Import (code splitting)</h2>
        <Suspense fallback={<Skeleton className="h-40" />}>
          <LazyChart />
        </Suspense>
      </section>
    </div>
  )
}
