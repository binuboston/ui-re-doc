'use client'

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
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { docsCopy } from '@/config/docs/copy'
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

  if (!tocVisible) {
    return (
      <div className="sticky top-0 hidden h-svh w-10 shrink-0 border-l border-reading-code-border bg-reading-surface lg:flex lg:flex-col lg:items-center lg:pt-4">
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
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh w-56 shrink-0 border-l border-reading-code-border bg-reading-surface lg:flex"
      {...props}
    >
      <SidebarHeader className="h-14 shrink-0 border-b border-sidebar-border px-3">
        <div className="flex h-full items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <List className="size-4 text-reading-muted" />
            {docsCopy.toc.title}
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
      <SidebarContent className="px-0">
        <ScrollArea className="h-[calc(100svh-3.5rem)]">
          {roadmapToc ? (
            <p className="mx-2 mt-2 rounded-md border border-reading-code-border/60 bg-reading-soft/50 px-2 py-1.5 text-[10px] leading-snug text-reading-muted">
              {docsCopy.toc.roadmapLegend}
            </p>
          ) : null}
          <SidebarMenu className="px-2 py-3">
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
                  <SidebarMenuItem key={h.id} className="group/menu-item">
                    <SidebarMenuButton
                      asChild
                      size="sm"
                      className="h-auto py-1.5"
                    >
                      <a
                        href={`#${h.id}`}
                        className={cn(
                          'text-reading-muted transition-colors duration-150 hover:text-reading-accent',
                          h.level === 3 ? 'pl-3 text-xs font-normal' : 'text-sm'
                        )}
                      >
                        <span className="line-clamp-2 text-left">{h.text}</span>
                      </a>
                    </SidebarMenuButton>
                    {progress ? (
                      <div className="px-2 pb-2.5 pt-0.5">
                        <div className="flex items-baseline justify-between gap-1 pl-0.5 text-[10px] leading-tight text-reading-muted">
                          <span className="font-medium text-reading-prose/90">
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
              <p className="px-2 text-xs text-muted-foreground">
                {docsCopy.toc.empty}
              </p>
            )}
          </SidebarMenu>
        </ScrollArea>
        <SidebarSeparator className="mx-0" />
        <div className="p-2">
          <NavUser user={docsCopy.sampleReader} />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
