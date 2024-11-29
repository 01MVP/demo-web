import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "01MVP - 从0到1，让创意快速变成产品",
  description: "01MVP 通过 AI 驱动的工具和创造者社区，帮助创造者用最短时间打造最小可行产品（MVP）。",
  icons: {
    icon: "/01mvp-logo.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
