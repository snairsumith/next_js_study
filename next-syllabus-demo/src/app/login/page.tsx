import type { Metadata } from "next"
import { LoginForm } from "@/features/auth/components/login-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Authentication demo with Server Actions and Zod",
}

// Login page — Topics 25 & 26
export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-12">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
        Cookie-based session auth with Server Actions
      </p>
      <div className="mt-8 w-full">
        <LoginForm />
      </div>
    </div>
  )
}
