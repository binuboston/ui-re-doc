import type { DocSection } from '@/lib/docs/types'

/**
 * Single source of truth for documentation navigation.
 * Page bodies: `config/docs/playbook/` (merged in `lib/docs/registry.ts`).
 */
export const docsNavManifest: DocSection[] = [
  {
    id: 'playbook',
    title: 'PMS frontend playbook',
    emoji: '🚀',
    pages: [
      { slug: 'playbook/mindset', title: 'Mindset first' },
      { slug: 'playbook/foundation', title: 'Project foundation' },
      { slug: 'playbook/template-refactoring', title: 'Template refactoring' },
      { slug: 'playbook/design-system', title: 'Design system layer' },
      { slug: 'playbook/modules', title: 'Module architecture' },
      { slug: 'playbook/permissions', title: 'Permission-based UI' },
      { slug: 'playbook/api-layer', title: 'API layer' },
      { slug: 'playbook/state', title: 'State management' },
      { slug: 'playbook/core-ui', title: 'Reusable core UI' },
      { slug: 'playbook/tables', title: 'Data table standard' },
      { slug: 'playbook/ux-states', title: 'Loading, empty & errors' },
      { slug: 'playbook/routing', title: 'Routing strategy' },
      { slug: 'playbook/performance', title: 'Performance' },
      { slug: 'playbook/code-quality', title: 'Code quality rules' },
      { slug: 'playbook/testing', title: 'Testing' },
      { slug: 'playbook/sellable', title: 'Sellable product' },
      { slug: 'playbook/mistakes', title: 'Common mistakes' },
      {
        slug: 'playbook/implementation-roadmap',
        title: 'Implementation roadmap',
      },
    ],
  },
]
