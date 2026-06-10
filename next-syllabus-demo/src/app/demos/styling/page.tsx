import type { Metadata } from "next"
import { StyledCard } from "@/components/demos/styled-card"

export const metadata: Metadata = {
  title: "Styling Demo",
}

// Styling approaches — Topic 8
export default function StylingDemoPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Styling in Next.js</h1>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Tailwind CSS (utility classes)</h2>
        <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          Gradient card with Tailwind utilities
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold">CSS Modules (scoped styles)</h2>
        <StyledCard />
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Responsive Design</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-red-100 p-4 text-center dark:bg-red-900">Mobile first</div>
          <div className="rounded-lg bg-green-100 p-4 text-center dark:bg-green-900">sm: 2 cols</div>
          <div className="rounded-lg bg-blue-100 p-4 text-center dark:bg-blue-900">lg: 3 cols</div>
        </div>
      </section>
    </div>
  )
}
