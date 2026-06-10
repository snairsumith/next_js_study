import { getEnv } from "@/lib/env"

export function Footer() {
  const env = getEnv()

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 py-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500">
        <p>
          {env.appName} — Next.js Syllabus Demo · Topics 1–36
        </p>
        <p className="mt-1 text-xs">
          Env: {env.nodeEnv} · Built with App Router, Server Components & Server Actions
        </p>
      </div>
    </footer>
  )
}
