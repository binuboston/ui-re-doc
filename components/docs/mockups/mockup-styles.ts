import { cn } from '@/lib/utils'

/** Shared low-fi chrome — static skeleton (non-interactive). */
export const mockupStyles = {
  frame: cn(
    'rounded-xl border border-dashed border-reading-code-border bg-reading-soft/40 p-4 md:p-5'
  ),
  caption: 'mt-3 text-center text-xs text-reading-muted',
  hint: 'mb-3 text-xs text-reading-muted',
  box: cn(
    'rounded-md border border-reading-code-border bg-reading-surface/80',
    'min-h-[2.5rem]'
  ),
  label: 'text-[10px] font-medium uppercase tracking-wide text-reading-muted',
  line: 'h-2 rounded-sm bg-reading-code-border/80',
  arrow: 'text-reading-muted',
} as const
