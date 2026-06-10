import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

// Skeleton UI — Topic 21
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-700",
        className
      )}
      aria-hidden="true"
    />
  )
}
