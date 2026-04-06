'use client'

import { DocsStoreRehydrate } from '@/components/docs-store-rehydrate'
import { QueryProvider } from '@/components/docs/query-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <DocsStoreRehydrate />
      <QueryProvider>{children}</QueryProvider>
      <Toaster />
    </ThemeProvider>
  )
}
