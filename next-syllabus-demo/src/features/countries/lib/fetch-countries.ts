import type { Country } from "@/types"
import { CACHE_TAGS } from "@/lib/constants"
import { logger } from "@/lib/logger"

const API_URL = "https://openholidaysapi.org/Countries"

// Server-side fetch with caching — Topics 10, 14, 24
export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(API_URL, {
    next: { revalidate: 3600, tags: [CACHE_TAGS.countries] },
  })

  if (!response.ok) {
    logger.error("Failed to fetch countries", { status: response.status })
    throw new Error("Failed to fetch countries")
  }

  return response.json()
}

export async function fetchCountryByCode(code: string): Promise<Country | null> {
  const countries = await fetchCountries()
  return countries.find((c) => c.isoCode.toLowerCase() === code.toLowerCase()) ?? null
}

export function getCountryName(country: Country): string {
  const english = country.name.find((n) => n.language === "EN")
  return english?.text ?? country.isoCode
}
