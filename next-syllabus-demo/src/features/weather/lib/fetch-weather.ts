import type { WeatherData } from "@/types"
import { CACHE_TAGS } from "@/lib/constants"

// Mock weather service — Topic 35: Weather app with external API
// Replace with real API key via WEATHER_API_KEY env var
export async function fetchWeather(city: string): Promise<WeatherData> {
  const apiKey = process.env.WEATHER_API_KEY

  if (apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    const response = await fetch(url, {
      next: { revalidate: 600, tags: [CACHE_TAGS.weather] },
      cache: "force-cache",
    })

    if (response.ok) {
      const data = await response.json()
      return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0]?.description ?? "Unknown",
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      }
    }
  }

  // Fallback mock data for demo without API key
  const mockData: Record<string, WeatherData> = {
    london: { city: "London", temperature: 12, description: "partly cloudy", humidity: 72, windSpeed: 4.5 },
    tokyo: { city: "Tokyo", temperature: 18, description: "clear sky", humidity: 55, windSpeed: 3.2 },
    "new york": { city: "New York", temperature: 8, description: "light rain", humidity: 80, windSpeed: 6.1 },
  }

  const key = city.toLowerCase()
  return mockData[key] ?? {
    city,
    temperature: 20,
    description: "sunny (mock data)",
    humidity: 60,
    windSpeed: 5.0,
  }
}
