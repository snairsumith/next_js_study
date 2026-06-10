import Link from "next/link"
import { notFound } from "next/navigation"
import { fetchCountryByCode, getCountryName } from "@/features/countries/lib/fetch-countries"
import type { PageProps } from "@/types"

export async function generateMetadata({ params }: PageProps<{ countryCode: string }>) {
  const { countryCode } = await params
  const country = await fetchCountryByCode(countryCode)
  if (!country) return { title: "Country Not Found" }

  return { title: getCountryName(country) }
}

export default async function CountryDetailPage({ params }: PageProps<{ countryCode: string }>) {
  const { countryCode } = await params
  const country = await fetchCountryByCode(countryCode)

  if (!country) notFound()

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/countries" className="text-sm text-blue-600 hover:underline">← All countries</Link>
      <h1 className="mt-4 text-3xl font-bold">{getCountryName(country)}</h1>
      <p className="text-zinc-500">ISO Code: {country.isoCode}</p>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Names</h2>
        <ul className="mt-2 space-y-1">
          {country.name.map((n) => (
            <li key={n.language} className="text-sm">
              <span className="font-mono text-blue-600">{n.language}</span>: {n.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Official Languages</h2>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          {country.officialLanguages.join(", ") || "None listed"}
        </p>
      </section>
    </div>
  )
}
