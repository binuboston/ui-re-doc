/**
 * Documentation “reading” theme tokens.
 *
 * All values are defined once in CSS: `app/globals.css` (`:root` / `.dark`).
 * Use Tailwind utilities: `text-reading-prose`, `bg-reading-soft`, etc.
 *
 * This map is for references, dynamic `style` hooks, or documentation only.
 */
export const readingCssVars = {
  surface: '--reading-surface',
  prose: '--reading-prose',
  muted: '--reading-muted',
  accent: '--reading-accent',
  accentFg: '--reading-accent-fg',
  soft: '--reading-soft',
  softHover: '--reading-soft-hover',
  codeBg: '--reading-code-bg',
  codeBorder: '--reading-code-border',
  rowHover: '--reading-row-hover',
  navActiveBg: '--reading-nav-active-bg',
  navActiveBorder: '--reading-nav-active-border',
} as const
