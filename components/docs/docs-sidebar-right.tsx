'use client'

import * as React from 'react'
import { List, PanelRightClose } from 'lucide-react'

import { NavUser } from '@/components/nav-user'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { docsCopy } from '@/config/docs/copy'
import { DOCS_SHELL } from '@/config/docs/layout'
import {
  IMPLEMENTATION_ROADMAP_BASELINE_WEEKS,
  IMPLEMENTATION_ROADMAP_PROGRESS_BY_HEADING_ID,
  isImplementationRoadmapSlug,
} from '@/config/docs/implementation-roadmap-progress'
import type { DocPageResponse } from '@/lib/docs/types'
import { cn } from '@/lib/utils'
import { useDocsUIStore } from '@/lib/stores/docs-ui-store'

export function DocsSidebarRight({
  page,
  slugPath = '',
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  page: Pick<DocPageResponse, 'headings'> | undefined
  /** Used to show roadmap schedule bars on the implementation page */
  slugPath?: string
}) {
  const tocVisible = useDocsUIStore((s) => s.tocVisible)
  const toggleToc = useDocsUIStore((s) => s.toggleToc)
  const roadmapToc = isImplementationRoadmapSlug(slugPath)

  const [activeHeadingId, setActiveHeadingId] = React.useState<string | null>(
    null
  )

  React.useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash
      const next = hash?.startsWith('#') ? hash.slice(1) : ''
      setActiveHeadingId(next || null)
    }

    setFromHash()
    window.addEventListener('hashchange', setFromHash)

    const ids = page?.headings?.map((h) => h.id).filter(Boolean) ?? []
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) {
      return () => window.removeEventListener('hashchange', setFromHash)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0)
          )

        const topMost = visible[0]?.target as HTMLElement | undefined
        const id = topMost?.id
        if (id) setActiveHeadingId(id)
      },
      {
        // Prefer the heading currently nearest the top of the reading column.
        root: null,
        threshold: [0, 1],
        rootMargin: '-96px 0px -70% 0px',
      }
    )

    for (const el of elements) observer.observe(el)

    return () => {
      window.removeEventListener('hashchange', setFromHash)
      observer.disconnect()
    }
  }, [page?.headings])

  if (!tocVisible) {
    return (
      <div
        className={cn(
          'sticky top-0 hidden h-svh bg-reading-surface lg:flex lg:flex-col lg:items-center lg:pt-4',
          DOCS_SHELL.rightRailViewportGutter,
          DOCS_SHELL.tocCollapsedSizing
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-8"
          onClick={toggleToc}
          aria-label={docsCopy.toc.show}
        >
          <PanelRightClose className="size-4 rotate-180" />
        </Button>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'sticky top-0 hidden h-svh min-w-0 bg-reading-surface lg:flex lg:flex-col',
        DOCS_SHELL.rightRailViewportGutter,
        DOCS_SHELL.tocRailSizing
      )}
    >
      <Sidebar
        collapsible="none"
        className="flex h-full min-h-0 min-w-0 w-full flex-col bg-reading-surface"
        {...props}
      >
        <SidebarHeader
          className={cn(
            'h-14 shrink-0 gap-0 p-0 py-2',
            DOCS_SHELL.railInsetX
          )}
        >
          <div className="flex h-full min-w-0 items-center justify-between gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-2 text-sm font-medium">
              <List className="size-4 shrink-0 text-reading-muted" />
              <span className="break-words whitespace-normal">
                {docsCopy.toc.title}
              </span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 shrink-0"
              onClick={toggleToc}
              aria-label={docsCopy.toc.hide}
            >
              <PanelRightClose className="size-4" />
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent
          className={cn(
            'min-h-0 min-w-0 flex-1 gap-0 p-0',
            DOCS_SHELL.railInsetX
          )}
        >
          <ScrollArea className="h-[calc(100svh-3.5rem)] min-w-0">
            {roadmapToc ? (
              <p className="mt-2 w-full max-w-full rounded-md bg-reading-soft/70 py-1.5 text-[10px] leading-snug break-words text-reading-muted">
                {docsCopy.toc.roadmapLegend}
              </p>
            ) : null}
            <SidebarMenu className="w-full min-w-0 py-3">
              {page?.headings?.length ? (
                page.headings.map((h) => {
                  const progress = roadmapToc
                    ? IMPLEMENTATION_ROADMAP_PROGRESS_BY_HEADING_ID[h.id]
                    : undefined
                  const barPct = progress
                    ? Math.min(
                        100,
                        (progress.durationWeeks /
                          IMPLEMENTATION_ROADMAP_BASELINE_WEEKS) *
                          100
                      )
                    : 0
                  return (
                    <SidebarMenuItem
                      key={h.id}
                      className="group/menu-item min-w-0"
                    >
                    {/**
                     * NOTE: `SidebarMenuButton` applies `[&>span:last-child]:truncate`.
                     * We override on our label span so TOC entries wrap.
                     */}
                      <SidebarMenuButton
                        asChild
                        size="sm"
                        className="h-auto min-w-0 py-1.5"
                      >
                        <a
                          href={`#${h.id}`}
                          className={cn(
                          'group/toc-link relative block w-full min-w-0 max-w-full rounded-md text-reading-muted transition-colors duration-150 hover:bg-reading-soft/60 hover:text-reading-accent',
                          // Active: minimal right-border indicator + subtle background.
                          activeHeadingId === h.id &&
                            'bg-reading-soft/70 text-reading-accent',
                            h.level === 3 && 'pl-3'
                          )}
                        >
                        <span
                          aria-hidden
                          className={cn(
                            'pointer-events-none absolute inset-y-1 right-0 w-[2px] rounded-full bg-transparent',
                            activeHeadingId === h.id && 'bg-reading-accent/70'
                          )}
                        />
                          <span
                            className={cn(
                              // Override SidebarMenuButton's `[&>span:last-child]:truncate`
                              // so headings wrap instead of ellipsizing.
                              '!overflow-visible !whitespace-normal min-w-0 text-left leading-snug break-words',
                              h.level === 3
                                ? 'text-xs font-normal'
                                : 'text-sm'
                            )}
                          >
                            {h.text}
                          </span>
                        </a>
                      </SidebarMenuButton>
                      {progress ? (
                        <div className="min-w-0 pb-2.5 pt-0.5">
                          <div className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-1 gap-y-0.5 pl-0.5 text-[10px] leading-tight text-reading-muted">
                            <span className="min-w-0 max-w-full font-medium break-words text-reading-prose/90">
                              {progress.durationLabel}
                            </span>
                            <span className="shrink-0 tabular-nums text-reading-muted/85">
                              {progress.weekRangeLabel}
                            </span>
                          </div>
                          {progress.durationWeeks > 0 ? (
                            <div
                              className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-reading-muted/20"
                              aria-hidden
                            >
                              <div
                                className="h-full min-w-[4px] rounded-full bg-reading-accent/55 transition-[width] duration-300"
                                style={{ width: `${barPct}%` }}
                              />
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </SidebarMenuItem>
                  )
                })
              ) : (
                <p className="max-w-full text-xs break-words text-muted-foreground">
                  {docsCopy.toc.empty}
                </p>
              )}
            </SidebarMenu>
          </ScrollArea>
          <div className="min-w-0 pt-3 pb-2">
            <NavUser user={docsCopy.sampleReader} />
          </div>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </div>
  )
}
