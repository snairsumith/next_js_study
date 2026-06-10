import { NextResponse } from "next/server"
import { fetchWeather } from "@/features/weather/lib/fetch-weather"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city") ?? "London"

  const weather = await fetchWeather(city)
  return NextResponse.json(weather)
}
