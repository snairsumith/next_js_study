// Environment variable validation — Topics 19 & 30

export function getEnv() {
  return {
    // Public vars are exposed to the browser (NEXT_PUBLIC_ prefix)
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    appName: process.env.NEXT_PUBLIC_APP_NAME ?? "SyllabusHub",

    // Server-only secrets — never expose to client
    authSecret: process.env.AUTH_SECRET ?? "dev-secret-change-in-production",
    weatherApiKey: process.env.WEATHER_API_KEY ?? "",
    nodeEnv: process.env.NODE_ENV ?? "development",
  }
}
