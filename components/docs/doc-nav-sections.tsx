'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { docsCopy } from '@/config/docs/copy'
import { DOCS_SHELL } from '@/config/docs/layout'
import { docPath } from '@/config/docs/slugs'
import type { DocSection } from '@/lib/docs/types'
import { cn } from '@/lib/utils'
import { useDocsUIStore } from '@/lib/stores/docs-ui-store'

export function DocNavSections({
  sections,
  isLoading,
}: {
  sections: DocSection[] | undefined
  isLoading: boolean
}) {
  const pathname = usePathname()
  const expandedSections = useDocsUIStore((s) => s.expandedSections)
  const setSectionOpen = useDocsUIStore((s) => s.setSectionOpen)

  if (isLoading) {
    return (
      <SidebarGroup
        className={cn('p-0 py-2', DOCS_SHELL.railInsetX)}
      >
        <SidebarGroupLabel className="px-0">
          {docsCopy.nav.loadingGroupLabel}
        </SidebarGroupLabel>
        <SidebarGroupContent className="space-y-2 px-0">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </SidebarGroupContent>
      </SidebarGroup>
    )
  }

  if (!sections?.length) return null

  return (
    <>
      {sections.map((section) => {
        const open = expandedSections[section.id] ?? true
        return (
          <SidebarGroup
            key={section.id}
            className={cn('p-0 py-2', DOCS_SHELL.railInsetX)}
          >
            <Collapsible
              open={open}
              onOpenChange={(next) => setSectionOpen(section.id, next)}
            >
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full min-w-0 items-center gap-1.5 rounded-md px-0 text-left text-xs font-medium outline-none hover:bg-sidebar-accent/50 [&[data-state=open]>svg]:rotate-90">
                  <ChevronRight className="size-3.5 shrink-0 transition-transform" />
                  <span className="mr-1 shrink-0">{section.emoji}</span>
                  <span className="min-w-0 break-words text-left whitespace-normal">
                    {section.title}
                  </span>
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className="px-0">
                  <SidebarMenu>
                    {section.pages.map((page) => {
                      const href = docPath(page.slug)
                      const active =
                        pathname === href || pathname.startsWith(`${href}/`)
                      return (
                        <SidebarMenuItem key={page.slug} className="min-w-0">
                          <SidebarMenuButton asChild isActive={active}>
                            <Link
                              href={href}
                              className="min-w-0 max-w-full"
                            >
                              <span className="min-w-0 break-words whitespace-normal">
                                {page.title}
                              </span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        )
      })}
    </>
  )
}
