/**
 * User-visible copy for the documentation shell.
 * Prefer importing from here instead of string literals in components.
 */

export const docsCopy = {
  breadcrumb: {
    root: 'Docs',
  },
  article: {
    errorTitle: 'Could not load page',
    unknownErrorDetail: 'Unknown error',
  },
  nav: {
    loadingGroupLabel: 'Documentation',
  },
  toc: {
    title: 'On this page',
    empty: 'No headings on this page.',
    show: 'Show table of contents',
    hide: 'Hide table of contents',
    roadmapLegend:
      'Each row: duration and week window. Bar width ≈ share of the 12-week baseline (edit in implementation-roadmap-progress.ts).',
  },
  pageNav: {
    sectionSrOnly: 'Adjacent pages',
    previous: 'Previous',
    next: 'Next',
    noPreviousSr: 'No previous page',
    noNextSr: 'No next page',
  },
  markdown: {
    linkToSectionPrefix: 'Link to section:',
  },
  mockup: {
    figureLabel: 'Low-fidelity page concept',
    structuralHint: 'Structural sketch — not a working UI.',
  },
  sampleReader: {
    name: 'Reader',
    email: 'you@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
} as const

export function docsPageNavAria(currentTitle: string): string {
  return `Previous and next pages after ${currentTitle}`
}

export function docsPageNavPrevAria(pageTitle: string): string {
  return `Previous documentation page: ${pageTitle}`
}

export function docsPageNavNextAria(pageTitle: string): string {
  return `Next documentation page: ${pageTitle}`
}

export function docsTableRowActionsAria(projectName: string): string {
  return `Actions for ${projectName}`
}
