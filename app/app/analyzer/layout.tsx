import { AppShell } from "@/components/layouts/AppShell"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'AI Analyzer | AI Web Page Analyzer',
  description: `Empower your website analysis with AI's advanced capabilities.Let AI delve into any site, extracting valuable data and performing tasks effortlessly.Unlock powerful insights and optimize your website effortlessly with AI technology.`,
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppShell withoutFooter>
      <div className="flex w-full">
        {children}
      </div>
    </AppShell>

  )
}
