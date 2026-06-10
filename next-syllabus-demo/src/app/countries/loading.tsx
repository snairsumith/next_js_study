import { CountriesSkeleton } from "@/features/countries/components/countries-skeleton"

export default function CountriesLoading() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <CountriesSkeleton />
    </div>
  )
}
