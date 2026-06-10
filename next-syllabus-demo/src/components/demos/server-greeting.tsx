// Server Component — runs only on server (Topic 6 & 13)
export function ServerGreeting({ name }: { name: string }) {
  const serverTime = new Date().toISOString()

  return (
    <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
      <p className="text-sm font-medium text-green-800 dark:text-green-300">
        Server Component
      </p>
      <p>Hello, {name}! Rendered at {serverTime}</p>
      <p className="mt-1 text-xs text-green-600 dark:text-green-400">
        This timestamp is generated on the server — no client JavaScript needed.
      </p>
    </div>
  )
}
