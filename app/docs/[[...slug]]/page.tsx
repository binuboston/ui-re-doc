import { redirect } from 'next/navigation'

import { DocsView } from '@/components/docs/docs-view'
import { docPath, DOC_ROUTE } from '@/config/docs/slugs'

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  if (!slug?.length) {
    redirect(docPath(DOC_ROUTE.defaultEntry))
  }

  return <DocsView />
}
