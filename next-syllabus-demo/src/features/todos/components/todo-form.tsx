import { createTodoAction } from "@/features/todos/actions/todo-actions"

// Form with Server Action — no client JS needed (Topic 11 & 23)
export function TodoForm() {
  return (
    <form action={createTodoAction} className="flex gap-2">
      <input
        name="title"
        type="text"
        required
        placeholder="Add a new todo..."
        className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 dark:border-zinc-600 dark:bg-zinc-800"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  )
}
