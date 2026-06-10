// Shared types between server and client — Topic 28

export type TopicLevel = "beginner" | "intermediate" | "advanced" | "production"

export interface Topic {
  id: number
  slug: string
  title: string
  level: TopicLevel
  demoRoute: string
  concepts: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
}

export interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

export interface Country {
  isoCode: string
  name: { language: string; text: string }[]
  officialLanguages: string[]
}

export interface WeatherData {
  city: string
  temperature: number
  description: string
  humidity: number
  windSpeed: number
}

export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin"
  password: string
}

export interface SessionUser {
  id: string
  email: string
  name: string
  role: "user" | "admin"
}

// Discriminated union for UI states — Topic 29
export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string }

export interface PageProps<TParams = Record<string, string>, TSearch = Record<string, string | string[] | undefined>> {
  params: Promise<TParams>
  searchParams: Promise<TSearch>
}
