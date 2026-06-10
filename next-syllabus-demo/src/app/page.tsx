import Image from "next/image"
import Link from "next/link"
import { topics } from "@/data/topics"
import { groupByLevel } from "@/lib/utils"

// Home page — Topics 2, 35, 36 (Capstone overview)
export default function HomePage() {
  const grouped = groupByLevel(topics)

  const features = [
    { href: "/topics", title: "36 Topics", desc: "Browse the full syllabus with live demos" },
    { href: "/todos", title: "Todo CRUD", desc: "Server Actions with Zod validation" },
    { href: "/countries", title: "Countries API", desc: "Server-side data fetching & caching" },
    { href: "/weather", title: "Weather App", desc: "Search params & external API" },
    { href: "/blog", title: "Blog", desc: "Dynamic routes & SEO metadata" },
    { href: "/dashboard", title: "Dashboard", desc: "Protected routes with middleware auth" },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <section className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-center">
        <Image src="/next.svg" alt="Next.js" width={120} height={24} className="dark:invert" priority />
        <div>
          <h1 className="text-4xl font-bold tracking-tight">SyllabusHub</h1>
          <p className="mt-2 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            A single Next.js project demonstrating all 36 syllabus topics — from App Router basics to production deployment.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Feature Demos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="rounded-xl border border-zinc-200 p-5 transition-shadow hover:shadow-md dark:border-zinc-700"
            >
              <h3 className="font-semibold text-blue-600">{f.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Syllabus Overview</h2>
        {Object.entries(grouped).map(([level, items]) => (
          <div key={level} className="mb-6">
            <h3 className="mb-2 text-lg font-medium capitalize">{level} ({items.length} topics)</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topics/${topic.id}`}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs hover:bg-blue-100 dark:bg-zinc-800 dark:hover:bg-blue-900"
                >
                  {topic.id}. {topic.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
