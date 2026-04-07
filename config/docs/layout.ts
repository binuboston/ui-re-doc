/**
 * Layout utility classes — Tailwind tokens referenced once.
 */
export const DOCS_LAYOUT = {
  articleMaxWidth: 'max-w-3xl',
  articleMaxWidthWithDemo: 'max-w-4xl',
  docPageTitle:
    'scroll-mt-24 text-3xl font-semibold tracking-tight text-reading-prose',
} as const

/**
 * Docs shell: symmetric rails + viewport rhythm.
 *
 * - **railInsetX** — horizontal inset from each rail’s inner edge to its text
 *   (left nav, right TOC). Matches the main header row (`px-3`).
 * - **articlePadX / articlePadY** — reading column padding (same breakpoints as before).
 * - **rightRailViewportGutter** — space from the right rail to the viewport edge,
 *   mirroring the article’s outer horizontal padding so the layout isn’t “stuck” to the screen.
 * - **tocRailSizing** — TOC column width: wider than legacy `w-56` so wrapped headings stay readable.
 */
export const DOCS_SHELL = {
  railInsetX: 'px-3',
  /** Header row inside SidebarInset — keep in sync with `railInsetX`. */
  mainHeaderInsetX: 'px-3',
  articlePadX: 'px-4 md:px-8 lg:px-12',
  articlePadY: 'py-8 md:py-10',
  rightRailViewportGutter: 'pe-4 md:pe-8 lg:pe-12',
  /** Expanded TOC column: min/max + cap so small viewports still fit. */
  tocRailSizing:
    'w-[min(18rem,calc(100vw-2rem))] min-w-[12rem] max-w-[18rem] shrink-0',
  tocCollapsedSizing: 'w-10 shrink-0',
} as const
