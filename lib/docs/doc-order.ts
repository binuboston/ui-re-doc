import { docsNavManifest } from '@/config/docs/nav.manifest'
import type { DocPageMeta } from '@/lib/docs/types'

/** Flat playbook order: sections in manifest order, then pages within each section. */
export function getFlatDocPages(): DocPageMeta[] {
  return docsNavManifest.flatMap((section) => section.pages)
}

export function getAdjacentDocPages(slugPath: string): {
  prev: DocPageMeta | null
  next: DocPageMeta | null
} {
  const flat = getFlatDocPages()
  const i = flat.findIndex((p) => p.slug === slugPath)
  if (i === -1) return { prev: null, next: null }
  return {
    prev: i > 0 ? flat[i - 1]! : null,
    next: i < flat.length - 1 ? flat[i + 1]! : null,
  }
}
