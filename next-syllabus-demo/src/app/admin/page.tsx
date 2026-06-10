import { redirect } from "next/navigation"
import { getSession } from "@/features/auth/lib/session"
import { topics } from "@/data/topics"

// Admin panel with role-based access — Topic 35
export default async function AdminPage() {
  const session = await getSession()
  if (!session) redirect("/login")
  if (session.role !== "admin") redirect("/dashboard")

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Role-based access — only admins can see this page
      </p>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Syllabus Stats</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-4">
          {(["beginner", "intermediate", "advanced", "production"] as const).map((level) => (
            <div key={level} className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
              <p className="text-sm capitalize text-zinc-500">{level}</p>
              <p className="text-xl font-bold">
                {topics.filter((t) => t.level === level).length}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
