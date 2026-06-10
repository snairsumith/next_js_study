import type { Metadata } from "next"
import { getTodos } from "@/features/todos/lib/todo-store"
import { TodoForm } from "@/features/todos/components/todo-form"
import { TodoList } from "@/features/todos/components/todo-list"

export const metadata: Metadata = {
  title: "Todos",
  description: "CRUD app with Server Actions and Zod validation",
}

// Todo CRUD — Topics 23, 29, 35
export default async function TodosPage() {
  const todos = await getTodos()

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-3xl font-bold">Todos</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Full CRUD with Server Actions — no API routes needed
      </p>

      <div className="mt-6">
        <TodoForm />
      </div>

      <div className="mt-4">
        <TodoList todos={todos} />
      </div>
    </div>
  )
}
