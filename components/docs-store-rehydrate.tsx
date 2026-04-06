'use client'

import { useEffect } from 'react'

import { useDocsUIStore } from '@/lib/stores/docs-ui-store'

/**
 * Applies persisted docs UI after mount so server HTML matches the first client render
 * (avoids hydration mismatches from localStorage).
 */
export function DocsStoreRehydrate() {
  useEffect(() => {
    void useDocsUIStore.persist.rehydrate()
  }, [])
  return null
}
