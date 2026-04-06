import { docsNavManifest } from '@/config/docs/nav.manifest'
import { playbookDocPages } from '@/config/docs/playbook'
import { DOC_ROUTE } from '@/config/docs/slugs'
import type { DocPage } from '@/lib/docs/types'

const pages: Record<string, DocPage> = {
  ...playbookDocPages,
}

export const docsSections = docsNavManifest

export const defaultDocSlug = DOC_ROUTE.defaultEntry

export function getDocPageBySlug(slugPath: string): DocPage | null {
  return pages[slugPath] ?? null
}

export function listDocPagesMeta() {
  return docsNavManifest
}
