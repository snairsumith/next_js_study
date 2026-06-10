import { describe, it, expect } from "vitest"
import { z } from "zod"

// Server Action validation test — Topic 31
const todoSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
})

describe("todo validation", () => {
  it("accepts valid title", () => {
    const result = todoSchema.safeParse({ title: "Learn Next.js" })
    expect(result.success).toBe(true)
  })

  it("rejects empty title", () => {
    const result = todoSchema.safeParse({ title: "" })
    expect(result.success).toBe(false)
  })

  it("rejects title over 200 chars", () => {
    const result = todoSchema.safeParse({ title: "a".repeat(201) })
    expect(result.success).toBe(false)
  })
})
