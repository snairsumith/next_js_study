"use client"

// Root error boundary — Topic 20
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Application Error</h2>
          <p className="mt-2 text-zinc-600">{error.message}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
