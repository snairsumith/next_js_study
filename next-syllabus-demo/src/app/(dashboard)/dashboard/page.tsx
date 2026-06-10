import Link from "next/link"
import { getSession } from "@/features/auth/lib/session"
import { getTodos } from "@/features/todos/lib/todo-store"

// Dashboard — Topic 35
export default async function DashboardPage() {
  const session = await getSession()
  const todos = await getTodos()
  const pending = todos.filter((t) => !t.completed).length

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Welcome back, {session?.name}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <p className="text-sm text-zinc-500">Role</p>
          <p className="text-2xl font-bold capitalize">{session?.role}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <p className="text-sm text-zinc-500">Pending Todos</p>
          <p className="text-2xl font-bold">{pending}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
          <p className="text-sm text-zinc-500">Total Todos</p>
          <p className="text-2xl font-bold">{todos.length}</p>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/todos" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Manage Todos
        </Link>
        {session?.role === "admin" && (
          <Link href="/admin" className="rounded-lg border border-zinc-300 px-4 py-2 hover:bg-zinc-100 dark:border-zinc-600">
            Admin Panel
          </Link>
        )}
      </div>
    </div>
  )
}
