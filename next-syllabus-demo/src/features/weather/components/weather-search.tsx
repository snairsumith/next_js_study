"use client"

import { useRouter, useSearchParams } from "next/navigation"

interface WeatherSearchProps {
  defaultCity: string
}

export function WeatherSearch({ defaultCity }: WeatherSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const city = formData.get("city") as string
    const params = new URLSearchParams(searchParams.toString())
    params.set("city", city)
    router.push(`/weather?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        name="city"
        defaultValue={defaultCity}
        placeholder="Enter city..."
        className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-600 dark:bg-zinc-800"
        aria-label="City name"
      />
      <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Search
      </button>
    </form>
  )
}
