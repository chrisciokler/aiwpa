import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Home | AI Web Page Analyzer',
  description: `Empower your website analysis with AI's advanced capabilities.Let AI delve into any site, extracting valuable data and performing tasks effortlessly.Unlock powerful insights and optimize your website effortlessly with AI technology.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}