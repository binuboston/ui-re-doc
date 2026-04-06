'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { DocsSidebarLeft } from '@/components/docs/docs-sidebar-left'
import { DocsSidebarRight } from '@/components/docs/docs-sidebar-right'
import { DocMarkdown } from '@/components/docs/doc-markdown'
import { DocPageLowFiMockup } from '@/components/docs/mockups/doc-page-low-fi-mockup'
import { DocsPageNav } from '@/components/docs/docs-page-nav'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { docsCopy } from '@/config/docs/copy'
import { DOCS_LAYOUT } from '@/config/docs/layout'
import { cn } from '@/lib/utils'
import { fetchDocPage } from '@/lib/docs/fetch-docs'
import { docsQueryKeys } from '@/lib/docs/query-keys'
import { getAdjacentDocPages } from '@/lib/docs/doc-order'
import { docPageDemos } from '@/lib/docs/page-demos'
import { defaultDocSlug } from '@/lib/docs/registry'

function slugPathFromParams(slug: string | string[] | undefined): string {
  if (Array.isArray(slug) && slug.length) return slug.map(decodeURIComponent).join('/')
  if (typeof slug === 'string' && slug.length) return decodeURIComponent(slug)
  return defaultDocSlug
}

export function DocsView() {
  const params = useParams<{ slug?: string | string[] }>()
  const slugPath = slugPathFromParams(params.slug)
  const { prev: prevPage, next: nextPage } = getAdjacentDocPages(slugPath)
  const PageDemo = docPageDemos[slugPath]

  const { data, isPending, isError, error } = useQuery({
    queryKey: docsQueryKeys.page(slugPath),
    queryFn: () => fetchDocPage(slugPath),
    retry: false,
  })

  return (
    <SidebarProvider>
      <DocsSidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    {docsCopy.breadcrumb.root}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {data?.title ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="line-clamp-1">
                        {data.title}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : null}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex min-w-0 flex-1">
          <article className="min-w-0 flex-1 bg-reading-surface px-4 py-8 md:px-8 md:py-10 lg:px-12">
            {isPending ? (
              <div
                className={cn('mx-auto space-y-4', DOCS_LAYOUT.articleMaxWidth)}
              >
                <Skeleton className="h-10 w-2/3" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-40 w-full" />
              </div>
            ) : isError ? (
              <div
                className={cn(
                  'mx-auto rounded-lg border border-destructive/40 bg-destructive/5 p-6 text-sm',
                  DOCS_LAYOUT.articleMaxWidth
                )}
              >
                <p className="font-medium text-destructive">
                  {docsCopy.article.errorTitle}
                </p>
                <p className="mt-2 text-muted-foreground">
                  {error instanceof Error
                    ? error.message
                    : docsCopy.article.unknownErrorDetail}
                </p>
              </div>
            ) : data ? (
              <div
                className={cn(
                  'mx-auto w-full min-w-0',
                  PageDemo
                    ? DOCS_LAYOUT.articleMaxWidthWithDemo
                    : DOCS_LAYOUT.articleMaxWidth
                )}
              >
                <h1 className={DOCS_LAYOUT.docPageTitle}>{data.title}</h1>
                <DocPageLowFiMockup slugPath={slugPath} />
                <DocMarkdown source={data.markdown} />
                {PageDemo ? <PageDemo /> : null}
                <DocsPageNav
                  prev={prevPage}
                  next={nextPage}
                  currentTitle={data.title}
                />
              </div>
            ) : null}
          </article>
          <DocsSidebarRight page={data} slugPath={slugPath} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
