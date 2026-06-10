import { getSession } from "@/features/auth/lib/session"

export default async function SettingsPage() {
  const session = await getSession()

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-4 space-y-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-700">
        <div>
          <label className="text-sm text-zinc-500">Name</label>
          <p className="font-medium">{session?.name}</p>
        </div>
        <div>
          <label className="text-sm text-zinc-500">Email</label>
          <p className="font-medium">{session?.email}</p>
        </div>
        <div>
          <label className="text-sm text-zinc-500">Role</label>
          <p className="font-medium capitalize">{session?.role}</p>
        </div>
      </div>
    </div>
  )
}
