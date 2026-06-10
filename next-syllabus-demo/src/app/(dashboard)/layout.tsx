import { redirect } from "next/navigation"
import { getSession } from "@/features/auth/lib/session"

// Protected dashboard layout — Topics 18 & 25
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session) redirect("/login")

  return (
    <div className="dashboard-layout">
      <div className="border-b border-green-200 bg-green-50 px-4 py-2 text-center text-sm text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
        Protected Area — logged in as {session.name} ({session.role})
      </div>
      {children}
    </div>
  )
}
