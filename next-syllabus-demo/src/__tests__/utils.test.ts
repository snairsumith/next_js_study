import { describe, it, expect } from "vitest"
import { cn, slugify, groupByLevel } from "@/lib/utils"

// Unit tests — Topic 31
describe("utils", () => {
  it("cn merges class names", () => {
    expect(cn("a", "b", false && "c")).toBe("a b")
  })

  it("slugify converts text to slug", () => {
    expect(slugify("Hello World!")).toBe("hello-world")
  })

  it("groupByLevel groups items", () => {
    const items = [
      { level: "beginner", id: 1 },
      { level: "beginner", id: 2 },
      { level: "advanced", id: 3 },
    ]
    const grouped = groupByLevel(items)
    expect(grouped.beginner).toHaveLength(2)
    expect(grouped.advanced).toHaveLength(1)
  })
})
