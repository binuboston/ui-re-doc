'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const toasterStyle = {
  '--normal-bg': 'var(--popover)',
  '--normal-text': 'var(--popover-foreground)',
  '--normal-border': 'var(--border)',
} as React.CSSProperties

/**
 * next-themes `useTheme()` is not stable on the server vs first client paint.
 * Sonner forwards `theme` to the DOM, which triggers hydration mismatches unless
 * we keep server + initial client output aligned (default light matches AppProviders).
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const theme: ToasterProps['theme'] = !mounted
    ? 'light'
    : resolvedTheme === 'dark'
      ? 'dark'
      : 'light'

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={toasterStyle}
      {...props}
    />
  )
}

export { Toaster }
