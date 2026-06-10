import type { Todo } from "@/types"
import { toggleTodoAction, deleteTodoAction } from "@/features/todos/actions/todo-actions"
import { cn } from "@/lib/utils"

interface TodoItemProps {
  todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-800">
      <form action={toggleTodoAction.bind(null, todo.id)}>
        <button
          type="submit"
          aria-label={todo.completed ? "Mark incomplete" : "Mark complete"}
          className={cn(
            "h-5 w-5 rounded border-2 transition-colors",
            todo.completed
              ? "border-green-500 bg-green-500"
              : "border-zinc-300 hover:border-blue-500 dark:border-zinc-500"
          )}
        />
      </form>

      <span
        className={cn(
          "flex-1 text-sm",
          todo.completed && "text-zinc-400 line-through"
        )}
      >
        {todo.title}
      </span>

      <form action={deleteTodoAction.bind(null, todo.id)}>
        <button
          type="submit"
          aria-label="Delete todo"
          className="text-sm text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </form>
    </li>
  )
}
