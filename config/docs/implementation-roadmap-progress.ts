import { slugifyHeading } from '@/lib/docs/markdown'

/** Total weeks for relative bar width in the TOC (12-week baseline). */
export const IMPLEMENTATION_ROADMAP_BASELINE_WEEKS = 12

export type RoadmapTocProgress = {
  /** For bar width (capped visually); use 0 to hide bar */
  durationWeeks: number
  /** e.g. "2 weeks" */
  durationLabel: string
  /** e.g. "W1–2" */
  weekRangeLabel: string
}

const SEGMENTS: Array<
  RoadmapTocProgress & { headingText: string }
> = [
  {
    headingText: 'How to use this page',
    durationWeeks: 0,
    durationLabel: 'Guide',
    weekRangeLabel: '—',
  },
  {
    headingText: 'Timeline overview',
    durationWeeks: 0,
    durationLabel: 'Phases A–C',
    weekRangeLabel: 'W1–12',
  },
  {
    headingText: 'Compressed 8-week track',
    durationWeeks: 0,
    durationLabel: 'Fast path',
    weekRangeLabel: '8 wk',
  },
  {
    headingText: 'Mindset first',
    durationWeeks: 1,
    durationLabel: '1 week',
    weekRangeLabel: 'W1',
  },
  {
    headingText: 'Project foundation',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W1–2',
  },
  {
    headingText: 'Template refactoring',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W2–3',
  },
  {
    headingText: 'Design system layer',
    durationWeeks: 3,
    durationLabel: '3 weeks',
    weekRangeLabel: 'W2–4',
  },
  {
    headingText: 'Module architecture',
    durationWeeks: 3,
    durationLabel: '3 weeks',
    weekRangeLabel: 'W3–5',
  },
  {
    headingText: 'Permission-based UI',
    durationWeeks: 3,
    durationLabel: '3 weeks',
    weekRangeLabel: 'W4–6',
  },
  {
    headingText: 'API layer',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W3–5',
  },
  {
    headingText: 'State management',
    durationWeeks: 3,
    durationLabel: '3 weeks',
    weekRangeLabel: 'W5–7',
  },
  {
    headingText: 'Reusable core UI',
    durationWeeks: 4,
    durationLabel: '4 weeks',
    weekRangeLabel: 'W5–8',
  },
  {
    headingText: 'Data table standard',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W6–8',
  },
  {
    headingText: 'Loading, empty & errors',
    durationWeeks: 3,
    durationLabel: '3 weeks',
    weekRangeLabel: 'W6–9',
  },
  {
    headingText: 'Routing strategy',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W7–9',
  },
  {
    headingText: 'Performance',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W8–10',
  },
  {
    headingText: 'Code quality rules',
    durationWeeks: 1,
    durationLabel: 'Ongoing',
    weekRangeLabel: 'W1–12',
  },
  {
    headingText: 'Testing',
    durationWeeks: 3,
    durationLabel: '3 weeks',
    weekRangeLabel: 'W9–12',
  },
  {
    headingText: 'Sellable product',
    durationWeeks: 2,
    durationLabel: '2 weeks',
    weekRangeLabel: 'W10–12',
  },
  {
    headingText: 'Common mistakes',
    durationWeeks: 1,
    durationLabel: '1 week',
    weekRangeLabel: 'W12+',
  },
  {
    headingText: 'Summary checklist (copy-paste)',
    durationWeeks: 0,
    durationLabel: 'Reference',
    weekRangeLabel: '—',
  },
]

/** Heading `id` (from `slugifyHeading`) → schedule row for TOC */
export const IMPLEMENTATION_ROADMAP_PROGRESS_BY_HEADING_ID: Record<
  string,
  RoadmapTocProgress
> = Object.fromEntries(
  SEGMENTS.map(({ headingText, ...rest }) => [
    slugifyHeading(headingText),
    {
      durationWeeks: rest.durationWeeks,
      durationLabel: rest.durationLabel,
      weekRangeLabel: rest.weekRangeLabel,
    },
  ])
)

export function isImplementationRoadmapSlug(slugPath: string): boolean {
  return slugPath === 'playbook/implementation-roadmap'
}
