'use client'

import { useQuery } from '@tanstack/react-query'

import { DocNavSections } from '@/components/docs/doc-nav-sections'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { DOCS_BRANDING } from '@/config/docs/branding'
import { DOCS_SHELL } from '@/config/docs/layout'
import { cn } from '@/lib/utils'
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
    <Sidebar {...props}>
      <SidebarHeader
        className={cn('gap-1.5 p-0 py-2', DOCS_SHELL.railInsetX)}
      >
        <div className="flex min-w-0 items-center gap-2 py-1.5">
          <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-sm dark:bg-white">
            <img
              src={DOCS_BRANDING.logoSrc}
              alt={DOCS_BRANDING.logoAlt}
              width={32}
              height={32}
              className="size-8 object-contain"
            />
          </div>
          <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
            <span className="break-words font-semibold whitespace-normal">
              {DOCS_BRANDING.sidebarTitle}
            </span>
            <span className="break-words text-xs whitespace-normal text-muted-foreground">
              {DOCS_BRANDING.sidebarSubtitle}
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="min-h-0 gap-0 p-0">
        <DocNavSections sections={data?.sections} isLoading={isPending} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
