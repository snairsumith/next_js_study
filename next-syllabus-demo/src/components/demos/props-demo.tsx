import { ServerGreeting } from "@/components/demos/server-greeting"
import { ClientClock } from "@/components/demos/client-clock"
import { Counter } from "@/components/ui/counter"

interface PropsDemoProps {
  title: string
  description: string
}

// Composing server + client — Topic 7
export function PropsDemo({ title, description }: PropsDemoProps) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>

      {/* Server passes serializable props to client */}
      <ServerGreeting name="Student" />
      <ClientClock />
      <Counter initialCount={5} label="useState + useMemo + useCallback" />
    </section>
  )
}
