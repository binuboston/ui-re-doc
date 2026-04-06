'use client'

import { BookOpen } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import { DocNavSections } from '@/components/docs/doc-nav-sections'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { DOCS_BRANDING } from '@/config/docs/branding'
import { fetchDocsTree } from '@/lib/docs/fetch-docs'
import { docsQueryKeys } from '@/lib/docs/query-keys'

export function DocsSidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { data, isPending } = useQuery({
    queryKey: docsQueryKeys.tree(),
    queryFn: fetchDocsTree,
  })

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <BookOpen className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              {DOCS_BRANDING.sidebarTitle}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {DOCS_BRANDING.sidebarSubtitle}
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <DocNavSections sections={data?.sections} isLoading={isPending} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
