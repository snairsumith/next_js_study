import { cookies } from "next/headers"
import type { SessionUser } from "@/types"
import { DEMO_USERS } from "@/lib/constants"

const SESSION_COOKIE = "syllabus-session"

// Simple cookie-based session — Topics 25 & 26 (Auth.js alternative for demo)
export async function createSession(user: SessionUser) {
  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  })
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  if (!session?.value) return null

  try {
    return JSON.parse(session.value) as SessionUser
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export function validateCredentials(email: string, password: string): SessionUser | null {
  const entries = Object.values(DEMO_USERS)
  const match = entries.find((u) => u.email === email && u.password === password)
  if (!match) return null

  return {
    id: match.email,
    email: match.email,
    name: match.role === "admin" ? "Admin User" : "Demo User",
    role: match.role,
  }
}
