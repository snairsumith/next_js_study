import type { Metadata } from "next"
import { getEnv } from "@/lib/env"

export const metadata: Metadata = {
  title: "About",
  description: "Project architecture, environment setup, and deployment info",
}

// About page — Topics 3, 19, 27, 33, 34
export default function AboutPage() {
  const env = getEnv()

  const architecture = [
    { folder: "src/app/", purpose: "Routes, layouts, pages, API handlers" },
    { folder: "src/components/", purpose: "Shared UI components" },
    { folder: "src/features/", purpose: "Feature-based modules (auth, todos, blog)" },
    { folder: "src/lib/", purpose: "Utilities, env, logger, constants" },
    { folder: "src/types/", purpose: "Shared TypeScript interfaces" },
    { folder: "src/data/", purpose: "Static data and JSON stores" },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">About SyllabusHub</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        This project demonstrates every topic in the Next.js syllabus (Topics 1–36) in one cohesive application.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Project Architecture</h2>
        <div className="mt-4 space-y-2">
          {architecture.map((item) => (
            <div key={item.folder} className="flex gap-4 rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <code className="shrink-0 font-mono text-sm text-blue-600">{item.folder}</code>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.purpose}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Environment Variables</h2>
        <div className="mt-4 rounded-lg bg-zinc-100 p-4 font-mono text-sm dark:bg-zinc-800">
          <p>NEXT_PUBLIC_APP_URL = {env.appUrl}</p>
          <p>NEXT_PUBLIC_APP_NAME = {env.appName}</p>
          <p>NODE_ENV = {env.nodeEnv}</p>
          <p className="mt-2 text-zinc-500">AUTH_SECRET = [server-only, hidden]</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Deployment</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-zinc-600 dark:text-zinc-400">
          <li><code>npm run build</code> — production build</li>
          <li><code>npm start</code> — preview production</li>
          <li>Dockerfile included for container deployment</li>
          <li>Deploy to Vercel, Netlify, or AWS</li>
        </ul>
      </section>
    </div>
  )
}
