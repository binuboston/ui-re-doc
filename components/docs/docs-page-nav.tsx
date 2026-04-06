'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

import {
  docsCopy,
  docsPageNavAria,
  docsPageNavNextAria,
  docsPageNavPrevAria,
} from '@/config/docs/copy'
import { docPath } from '@/config/docs/slugs'
import type { DocPageMeta } from '@/lib/docs/types'
import { cn } from '@/lib/utils'

const linkClass = cn(
  'group flex max-w-full flex-col gap-0.5 rounded-lg border border-reading-code-border bg-reading-surface p-4 text-left',
  'transition-[background-color,border-color,transform] duration-200',
  'hover:border-reading-muted/40 hover:bg-reading-soft hover:shadow-sm',
  'active:scale-[0.99]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reading-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-reading-surface'
)

type DocsPageNavProps = {
  prev: DocPageMeta | null
  next: DocPageMeta | null
  currentTitle: string
}

export function DocsPageNav({ prev, next, currentTitle }: DocsPageNavProps) {
  if (!prev && !next) return null

  return (
    <nav
      className="mt-12 border-t border-reading-code-border pt-8"
      aria-label={docsPageNavAria(currentTitle)}
    >
      <h2 className="sr-only">{docsCopy.pageNav.sectionSrOnly}</h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4">
        <div className="min-h-[4.5rem] min-w-0 flex-1 sm:max-w-[50%]">
          {prev ? (
            <Link
              href={docPath(prev.slug)}
              rel="prev"
              className={cn(linkClass, 'h-full sm:pr-6')}
              aria-label={docsPageNavPrevAria(prev.title)}
            >
              <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-reading-muted">
                <ChevronLeft
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
                  aria-hidden
                />
                {docsCopy.pageNav.previous}
              </span>
              <span className="line-clamp-2 font-semibold text-reading-prose">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="sr-only">{docsCopy.pageNav.noPreviousSr}</span>
          )}
        </div>
        <div className="min-h-[4.5rem] min-w-0 flex-1 sm:max-w-[50%] sm:text-right">
          {next ? (
            <Link
              href={docPath(next.slug)}
              rel="next"
              className={cn(
                linkClass,
                'h-full sm:ml-auto sm:items-end sm:pl-6 sm:text-right'
              )}
              aria-label={docsPageNavNextAria(next.title)}
            >
              <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-reading-muted sm:flex-row-reverse">
                {docsCopy.pageNav.next}
                <ChevronRight
                  className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
              <span className="line-clamp-2 font-semibold text-reading-prose sm:text-right">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="sr-only">{docsCopy.pageNav.noNextSr}</span>
          )}
        </div>
      </div>
    </nav>
  )
}
