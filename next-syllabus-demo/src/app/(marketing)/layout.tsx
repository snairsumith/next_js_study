// Route group layout — Topic 5 (parentheses don't affect URL)
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-layout">
      {children}
    </div>
  )
}
