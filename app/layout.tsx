import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { AppProviders } from '@/components/app-providers'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#005A77',
}

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Product documentation and API reference',
  icons: {
    icon: [{ url: '/praszo-icon.svg', type: 'image/svg+xml' }],
    apple: '/praszo-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <AppProviders>{children}</AppProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
