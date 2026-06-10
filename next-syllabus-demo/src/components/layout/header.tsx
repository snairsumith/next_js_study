import Link from "next/link"
import { NavLink } from "@/components/layout/nav-link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { getSession } from "@/features/auth/lib/session"
import { logoutAction } from "@/features/auth/actions/login-action"
import { APP_NAME } from "@/lib/constants"

const navItems = [
  { href: "/topics", label: "Topics" },
  { href: "/blog", label: "Blog" },
  { href: "/countries", label: "Countries" },
  { href: "/weather", label: "Weather" },
  { href: "/todos", label: "Todos" },
  { href: "/demos/components", label: "Demos" },
]

export async function Header() {
  const session = await getSession()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-blue-600">
          {APP_NAME}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {session ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400"
              >
                {session.name}
              </Link>
              <form action={logoutAction}>
                <button type="submit" className="text-sm text-red-500 hover:text-red-700">
                  Logout
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
