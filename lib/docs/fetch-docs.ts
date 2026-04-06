import { DOCS_API_ROUTES } from '@/config/docs/api-routes'
import type { DocPageResponse, DocsTreeResponse } from '@/lib/docs/types'

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || res.statusText)
  }
  return res.json() as Promise<T>
}

export async function fetchDocsTree(): Promise<DocsTreeResponse> {
  const res = await fetch(DOCS_API_ROUTES.tree, { cache: 'no-store' })
  return parseJson<DocsTreeResponse>(res)
}

export async function fetchDocPage(slugPath: string): Promise<DocPageResponse> {
  const res = await fetch(DOCS_API_ROUTES.page(slugPath), { cache: 'no-store' })
  return parseJson<DocPageResponse>(res)
}
