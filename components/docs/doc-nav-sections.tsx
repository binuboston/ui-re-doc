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
import { docPath } from '@/config/docs/slugs'
import type { DocSection } from '@/lib/docs/types'
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
      <SidebarGroup>
        <SidebarGroupLabel>{docsCopy.nav.loadingGroupLabel}</SidebarGroupLabel>
        <SidebarGroupContent className="space-y-2 px-2">
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
          <SidebarGroup key={section.id}>
            <Collapsible
              open={open}
              onOpenChange={(next) => setSectionOpen(section.id, next)}
            >
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex w-full items-center gap-1.5 rounded-md text-left text-xs font-medium outline-none hover:bg-sidebar-accent/50 [&[data-state=open]>svg]:rotate-90">
                  <ChevronRight className="size-3.5 shrink-0 transition-transform" />
                  <span className="mr-1">{section.emoji}</span>
                  <span className="truncate">{section.title}</span>
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.pages.map((page) => {
                      const href = docPath(page.slug)
                      const active =
                        pathname === href || pathname.startsWith(`${href}/`)
                      return (
                        <SidebarMenuItem key={page.slug}>
                          <SidebarMenuButton asChild isActive={active}>
                            <Link href={href}>
                              <span className="truncate">{page.title}</span>
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
