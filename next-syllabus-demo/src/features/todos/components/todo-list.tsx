import type { Todo } from "@/types"
import { TodoItem } from "@/features/todos/components/todo-item"

interface TodoListProps {
  todos: Todo[]
}

// Server Component — receives data from parent page
export function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-zinc-300 p-8 text-center text-zinc-500 dark:border-zinc-600">
        No todos yet. Add one above!
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
