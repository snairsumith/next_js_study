"use server"

import { redirect } from "next/navigation"
import { z } from "zod"
import { createSession, validateCredentials } from "@/features/auth/lib/session"
import { logger } from "@/lib/logger"

// Zod validation — Topics 29 & 30
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type LoginState = {
  errors?: { email?: string[]; password?: string[]; form?: string[] }
  success?: boolean
}

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  const user = validateCredentials(parsed.data.email, parsed.data.password)

  if (!user) {
    logger.warn("Failed login attempt", { email: parsed.data.email })
    return { errors: { form: ["Invalid email or password"] } }
  }

  await createSession(user)
  logger.info("User logged in", { email: user.email })
  redirect("/dashboard")
}

export async function logoutAction() {
  const { destroySession } = await import("@/features/auth/lib/session")
  await destroySession()
  redirect("/login")
}
