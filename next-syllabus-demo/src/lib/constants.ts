// App-wide constants — Topic 27

export const APP_NAME = "SyllabusHub"
export const APP_DESCRIPTION = "A comprehensive Next.js demo covering all 36 syllabus topics"

export const DEMO_USERS = {
  user: { email: "user@demo.com", password: "demo123", role: "user" as const },
  admin: { email: "admin@demo.com", password: "admin123", role: "admin" as const },
}

export const PROTECTED_ROUTES = ["/dashboard", "/admin"]
export const AUTH_ROUTES = ["/login"]

export const CACHE_TAGS = {
  todos: "todos",
  weather: "weather",
  countries: "countries",
} as const
