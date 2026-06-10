import { NextResponse } from "next/server"
import { z } from "zod"
import { getTodos, addTodo } from "@/features/todos/lib/todo-store"
import { logger } from "@/lib/logger"

const createSchema = z.object({
  title: z.string().min(1).max(200),
})

// Route Handlers CRUD — Topic 15
export async function GET() {
  const todos = await getTodos()
  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = createSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const todo = await addTodo(parsed.data.title)
    return NextResponse.json(todo, { status: 201 })
  } catch (error) {
    logger.error("POST /api/todos failed", { error: String(error) })
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
