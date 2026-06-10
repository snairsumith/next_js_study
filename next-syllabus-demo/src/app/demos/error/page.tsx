"use client"

import { useState } from "react"

// Error handling demo — Topic 20
export default function ErrorDemoPage() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error("Demo error — caught by error.tsx boundary")
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-8 text-center">
      <h1 className="text-3xl font-bold">Error Handling Demo</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Click below to trigger the route error boundary
      </p>
      <button
        type="button"
        onClick={() => setShouldError(true)}
        className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Trigger Error
      </button>
    </div>
  )
}
