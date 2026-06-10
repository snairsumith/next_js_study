import { Suspense } from "react"
import { fetchWeather } from "@/features/weather/lib/fetch-weather"
import { WeatherSearch } from "@/features/weather/components/weather-search"
import { Skeleton } from "@/components/ui/skeleton"
import type { PageProps } from "@/types"

interface WeatherDisplayProps {
  city: string
}

async function WeatherDisplay({ city }: WeatherDisplayProps) {
  const weather = await fetchWeather(city)

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
      <h2 className="text-2xl font-bold">{weather.city}</h2>
      <p className="mt-2 text-5xl font-light">{weather.temperature}°C</p>
      <p className="mt-1 capitalize text-zinc-600 dark:text-zinc-400">{weather.description}</p>
      <div className="mt-4 flex gap-6 text-sm text-zinc-500">
        <span>Humidity: {weather.humidity}%</span>
        <span>Wind: {weather.windSpeed} m/s</span>
      </div>
    </div>
  )
}

// Weather with searchParams — Topics 17 & 35
export default async function WeatherPage({ searchParams }: PageProps<Record<string, never>, { city?: string }>) {
  const params = await searchParams
  const city = params.city ?? "London"

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-3xl font-bold">Weather</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Search by city — URL state via ?city= (Topic 17)
      </p>

      <WeatherSearch defaultCity={city} />

      <Suspense key={city} fallback={<Skeleton className="mt-6 h-40" />}>
        <WeatherDisplay city={city} />
      </Suspense>
    </div>
  )
}
