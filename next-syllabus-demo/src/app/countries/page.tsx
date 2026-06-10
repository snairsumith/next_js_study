import Link from "next/link"
import { Suspense } from "react"
import { fetchCountries } from "@/features/countries/lib/fetch-countries"
import { CountriesSkeleton } from "@/features/countries/components/countries-skeleton"

// Server-side data fetching — Topics 10, 13, 21
async function CountriesGrid() {
  const countries = await fetchCountries()

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {countries.map((country) => (
        <Link
          key={country.isoCode}
          href={`/countries/${country.isoCode}`}
          className="rounded-lg border border-zinc-200 p-3 text-center font-semibold transition-colors hover:bg-blue-600 hover:text-white dark:border-zinc-700"
        >
          {country.isoCode}
        </Link>
      ))}
    </div>
  )
}

export default function CountriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Countries</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Fetched on the server with caching — click a code for details
      </p>
      <Suspense fallback={<CountriesSkeleton />}>
        <CountriesGrid />
      </Suspense>
    </div>
  )
}
