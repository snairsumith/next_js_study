import type { Metadata } from "next"
import { PropsDemo } from "@/components/demos/props-demo"

export const metadata: Metadata = {
  title: "Props Demo",
}

export default function PropsDemoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <PropsDemo
        title="Props & Data Passing"
        description="Server components pass serializable props to client components. Event handlers require client components."
      />
    </div>
  )
}
