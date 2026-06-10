import type { Metadata } from "next"
import { fetchCountries } from "@/features/countries/lib/fetch-countries"

export const metadata: Metadata = {
  title: "Caching Demo",
}

// Caching strategies — Topics 14 & 24
async function CachedData() {
  const start = Date.now()
  const countries = await fetchCountries()
  const elapsed = Date.now() - start

  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
      <p>Fetched {countries.length} countries in {elapsed}ms</p>
      <p className="mt-1 text-sm text-zinc-500">
        Cached with revalidate: 3600s and tag &quot;countries&quot;
      </p>
    </div>
  )
}

async function FreshData() {
  const start = Date.now()
  const response = await fetch("https://openholidaysapi.org/Countries", {
    cache: "no-store",
  })
  const data = await response.json()
  const elapsed = Date.now() - start

  return (
    <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
      <p>Fetched {data.length} countries (no-store) in {elapsed}ms</p>
      <p className="mt-1 text-sm text-zinc-500">Always fresh — opts out of Data Cache</p>
    </div>
  )
}

export default async function CachingDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Caching & Revalidation</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Compare cached vs no-store fetching. Reload to see cache in action.
      </p>
      <CachedData />
      <FreshData />
    </div>
  )
}
