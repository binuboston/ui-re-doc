import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { STORAGE_KEYS } from '@/config/docs/storage-keys'

type DocsUIState = {
  expandedSections: Record<string, boolean>
  toggleSection: (sectionId: string) => void
  setSectionOpen: (sectionId: string, open: boolean) => void
  /** Right sidebar (TOC) visibility on large screens */
  tocVisible: boolean
  setTocVisible: (visible: boolean) => void
  toggleToc: () => void
}

export const useDocsUIStore = create<DocsUIState>()(
  persist(
    (set, get) => ({
      expandedSections: {},
      toggleSection: (sectionId) =>
        set({
          expandedSections: {
            ...get().expandedSections,
            [sectionId]: !get().expandedSections[sectionId],
          },
        }),
      setSectionOpen: (sectionId, open) =>
        set({
          expandedSections: { ...get().expandedSections, [sectionId]: open },
        }),
      tocVisible: true,
      setTocVisible: (visible) => set({ tocVisible: visible }),
      toggleToc: () => set({ tocVisible: !get().tocVisible }),
    }),
    {
      name: STORAGE_KEYS.docsUi,
      skipHydration: true,
      partialize: (s) => ({
        expandedSections: s.expandedSections,
        tocVisible: s.tocVisible,
      }),
    }
  )
)
