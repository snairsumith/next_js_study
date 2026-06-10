// Nested layout for learning section — Topic 5
export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="learn-section">
      <div className="border-b border-blue-200 bg-blue-50 px-4 py-2 text-center text-sm text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
        Learning Section — layouts persist across navigation
      </div>
      {children}
    </div>
  )
}
