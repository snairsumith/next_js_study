import { promises as fs } from "fs"
import path from "path"
import type { Todo } from "@/types"
import { logger } from "@/lib/logger"

// File-based store — Topic 13: Server file system access
const DATA_FILE = path.join(process.cwd(), "src/data/todos.json")

async function readTodos(): Promise<Todo[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(data) as Todo[]
  } catch {
    return []
  }
}

async function writeTodos(todos: Todo[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2))
}

export async function getTodos(): Promise<Todo[]> {
  return readTodos()
}

export async function addTodo(title: string): Promise<Todo> {
  const todos = await readTodos()
  const todo: Todo = {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  }
  todos.unshift(todo)
  await writeTodos(todos)
  logger.info("Todo created", { id: todo.id })
  return todo
}

export async function toggleTodo(id: string): Promise<Todo | null> {
  const todos = await readTodos()
  const index = todos.findIndex((t) => t.id === id)
  if (index === -1) return null

  todos[index].completed = !todos[index].completed
  await writeTodos(todos)
  return todos[index]
}

export async function deleteTodo(id: string): Promise<boolean> {
  const todos = await readTodos()
  const filtered = todos.filter((t) => t.id !== id)
  if (filtered.length === todos.length) return false

  await writeTodos(filtered)
  logger.info("Todo deleted", { id })
  return true
}
