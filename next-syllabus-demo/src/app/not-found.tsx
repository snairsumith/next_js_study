import Link from "next/link"

// 404 page — Topics 4 & 20
export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg p-16 text-center">
      <h1 className="text-6xl font-bold text-zinc-300">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page not found</h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go home
      </Link>
    </div>
  )
}
