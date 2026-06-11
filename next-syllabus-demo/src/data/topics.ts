import type { Topic } from "@/types"

// All 36 syllabus topics with demo route mappings
export const topics: Topic[] = [
  { id: 1, slug: "web-javascript-prerequisites", title: "Web and JavaScript Prerequisites", level: "beginner", demoRoute: "/about", concepts: ["HTML", "CSS", "ES modules", "async/await"] },
  { id: 2, slug: "introduction-to-nextjs", title: "Introduction to Next.js", level: "beginner", demoRoute: "/", concepts: ["SSR", "SSG", "ISR", "App Router"] },
  { id: 3, slug: "environment-setup", title: "Environment Setup", level: "beginner", demoRoute: "/about", concepts: ["create-next-app", "package.json", "TypeScript"] },
  { id: 4, slug: "app-router-fundamentals", title: "App Router Fundamentals", level: "beginner", demoRoute: "/topics", concepts: ["page.tsx", "layout.tsx", "loading.tsx", "error.tsx"] },
  { id: 5, slug: "pages-layouts-templates", title: "Pages, Layouts, and Templates", level: "beginner", demoRoute: "/topics", concepts: ["nested layouts", "templates", "route groups"] },
  { id: 6, slug: "components-in-nextjs", title: "Components in Next.js", level: "beginner", demoRoute: "/demos/components", concepts: ["Server Components", "Client Components", "use client"] },
  { id: 7, slug: "props-and-data-passing", title: "Props and Data Passing", level: "beginner", demoRoute: "/demos/props", concepts: ["serializable props", "children", "server to client"] },
  { id: 8, slug: "styling-in-nextjs", title: "Styling in Next.js", level: "beginner", demoRoute: "/demos/styling", concepts: ["Tailwind", "CSS Modules", "dark mode"] },
  { id: 9, slug: "navigation-and-routing", title: "Navigation and Routing", level: "beginner", demoRoute: "/topics", concepts: ["Link", "useRouter", "redirect", "prefetch"] },
  { id: 10, slug: "fetching-data-basics", title: "Fetching Data Basics", level: "beginner", demoRoute: "/countries", concepts: ["async pages", "server fetch", "loading states"] },
  { id: 11, slug: "forms-and-user-input", title: "Forms and User Input", level: "beginner", demoRoute: "/contact", concepts: ["controlled inputs", "form action", "validation"] },
  { id: 12, slug: "client-components-hooks", title: "Client Components and Hooks", level: "intermediate", demoRoute: "/demos/hooks", concepts: ["useState", "useEffect", "useMemo", "useCallback"] },
  { id: 13, slug: "server-components-deep-dive", title: "Server Components Deep Dive", level: "intermediate", demoRoute: "/demos/components", concepts: ["no hooks", "file system", "streaming"] },
  { id: 14, slug: "data-fetching-patterns", title: "Data Fetching Patterns", level: "intermediate", demoRoute: "/demos/caching", concepts: ["parallel fetch", "cache", "revalidate"] },
  { id: 15, slug: "route-handlers", title: "Route Handlers (API Routes)", level: "intermediate", demoRoute: "/api/health", concepts: ["GET", "POST", "JSON responses"] },
  { id: 16, slug: "dynamic-routes-params", title: "Dynamic Routes and Params", level: "intermediate", demoRoute: "/topics/4", concepts: ["[id]", "generateStaticParams", "notFound"] },
  { id: 17, slug: "search-params-url-state", title: "Search Params and URL State", level: "intermediate", demoRoute: "/topics?level=beginner", concepts: ["searchParams", "useSearchParams", "nuqs"] },
  { id: 18, slug: "middleware", title: "Middleware", level: "intermediate", demoRoute: "/dashboard", concepts: ["matcher", "redirects", "auth checks"] },
  { id: 19, slug: "environment-variables", title: "Environment Variables", level: "intermediate", demoRoute: "/about", concepts: ["NEXT_PUBLIC_", "server-only secrets"] },
  { id: 20, slug: "error-handling", title: "Error Handling", level: "intermediate", demoRoute: "/demos/error", concepts: ["error.tsx", "notFound", "try/catch"] },
  { id: 21, slug: "loading-suspense", title: "Loading States and Suspense", level: "intermediate", demoRoute: "/countries", concepts: ["loading.tsx", "Suspense", "skeletons"] },
  { id: 22, slug: "metadata-seo", title: "Metadata and SEO", level: "intermediate", demoRoute: "/blog", concepts: ["generateMetadata", "sitemap", "robots"] },
  { id: 23, slug: "server-actions", title: "Server Actions", level: "advanced", demoRoute: "/todos", concepts: ["use server", "form actions", "revalidatePath"] },
  { id: 24, slug: "caching-revalidation", title: "Caching and Revalidation", level: "advanced", demoRoute: "/demos/caching", concepts: ["ISR", "revalidateTag", "no-store"] },
  { id: 25, slug: "authentication-basics", title: "Authentication Basics", level: "advanced", demoRoute: "/login", concepts: ["sessions", "protected routes", "cookies"] },
  { id: 26, slug: "authentication-authjs", title: "Authentication with Auth.js", level: "advanced", demoRoute: "/login", concepts: ["NextAuth", "providers", "getServerSession"] },
  { id: 27, slug: "project-architecture", title: "Next.js Project Architecture", level: "advanced", demoRoute: "/about", concepts: ["feature folders", "lib/", "components/"] },
  { id: 28, slug: "typescript-nextjs", title: "TypeScript with Next.js", level: "advanced", demoRoute: "/topics/28", concepts: ["typed params", "typed actions", "shared types"] },
  { id: 29, slug: "advanced-typescript", title: "Advanced TypeScript with Next.js", level: "advanced", demoRoute: "/todos", concepts: ["Zod", "discriminated unions", "type-safe actions"] },
  { id: 30, slug: "security-best-practices", title: "Security Best Practices", level: "advanced", demoRoute: "/about", concepts: ["input validation", "CSRF", "CSP headers"] },
  { id: 31, slug: "testing", title: "Testing", level: "advanced", demoRoute: "/about", concepts: ["Vitest", "RTL", "testing actions"] },
  { id: 32, slug: "performance-optimization", title: "Image, Font, and Performance", level: "advanced", demoRoute: "/demos/performance", concepts: ["next/image", "next/font", "dynamic imports"] },
  { id: 33, slug: "build-deployment", title: "Build and Deployment", level: "production", demoRoute: "/about", concepts: ["npm run build", "Docker", "Vercel"] },
  { id: 34, slug: "monitoring-maintenance", title: "Monitoring and Maintenance", level: "production", demoRoute: "/about", concepts: ["logging", "error monitoring", "analytics"] },
  { id: 35, slug: "real-world-projects", title: "Real World Project Practice", level: "production", demoRoute: "/", concepts: ["blog", "dashboard", "weather", "CRUD"] },
  { id: 36, slug: "capstone-project", title: "Capstone Project", level: "production", demoRoute: "/", concepts: ["full-stack", "auth", "deploy"] },
]

export function getTopicById(id: number): Topic | undefined {
  return topics.find((topic) => topic.id === id)
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug)
}



