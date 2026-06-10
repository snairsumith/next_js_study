"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { z } from "zod"
import { addTodo, deleteTodo, toggleTodo } from "@/features/todos/lib/todo-store"
import { CACHE_TAGS } from "@/lib/constants"

const todoSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
})

// Server Actions — Topic 23
export async function createTodoAction(formData: FormData): Promise<void> {
  const parsed = todoSchema.safeParse({ title: formData.get("title") })
  if (!parsed.success) return

  await addTodo(parsed.data.title)
  revalidatePath("/todos")
  revalidateTag(CACHE_TAGS.todos, "max")
}

export async function toggleTodoAction(id: string) {
  await toggleTodo(id)
  revalidatePath("/todos")
  revalidateTag(CACHE_TAGS.todos, "max")
}

export async function deleteTodoAction(id: string) {
  await deleteTodo(id)
  revalidatePath("/todos")
  revalidateTag(CACHE_TAGS.todos, "max")
}
