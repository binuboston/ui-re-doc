/**
 * Low-fi design-system mockup content — edit labels and counts here.
 * Visual mapping lives in `mockup-preset-body.tsx` (`DS_SWATCH`).
 */

export type DesignSystemChromeKind =
  | 'button-solid'
  | 'button-ghost'
  | 'icon-button'
  | 'input'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'badge'
  | 'toggle'
  | 'link'
  | 'segmented'

export type DesignSystemChromeItem = {
  id: string
  label: string
  kind: DesignSystemChromeKind
}

export const DESIGN_SYSTEM_MOCKUP = {
  sections: {
    colors: 'Color roles',
    typography: 'Typography scale',
    spacing: 'Spacing steps',
    radii: 'Radius scale',
    chrome: 'Core primitives',
  },
  /** Maps to background/border styles in the renderer */
  swatches: [
    { id: 'bg', label: 'Canvas', tone: 'canvas' as const },
    { id: 'surface', label: 'Surface', tone: 'surface' as const },
    { id: 'muted', label: 'Muted', tone: 'muted' as const },
    { id: 'line', label: 'Border', tone: 'line' as const },
    { id: 'accent', label: 'Accent', tone: 'accent' as const },
    { id: 'danger', label: 'Danger', tone: 'danger' as const },
  ],
  typeRows: [
    {
      id: 'd1',
      label: 'Display',
      sample: 'Design system',
      textClass:
        'text-xl font-semibold tracking-tight text-reading-prose sm:text-2xl',
    },
    {
      id: 'd2',
      label: 'Title',
      sample: 'Section title',
      textClass: 'text-base font-semibold leading-snug text-reading-prose',
    },
    {
      id: 'd3',
      label: 'Body',
      sample:
        'Body copy explains interface patterns and how teams apply tokens in product work.',
      textClass: 'text-sm leading-relaxed text-reading-prose',
    },
    {
      id: 'd4',
      label: 'Body',
      sample:
        'A second paragraph keeps the same size for comfortable reading density.',
      textClass: 'text-sm leading-relaxed text-reading-prose/90',
    },
    {
      id: 'd5',
      label: 'Caption',
      sample: 'Caption · metadata',
      textClass: 'text-xs text-reading-muted',
    },
  ],
  /** `gapClass` must match `label` px via Tailwind scale: 4→gap-1 … 48→gap-12 */
  spacingSteps: [
    { id: 's1', label: '4', gapClass: 'gap-1' },
    { id: 's2', label: '8', gapClass: 'gap-2' },
    { id: 's3', label: '16', gapClass: 'gap-4' },
    { id: 's4', label: '24', gapClass: 'gap-6' },
    { id: 's5', label: '32', gapClass: 'gap-8' },
    { id: 's6', label: '48', gapClass: 'gap-12' },
  ],
  radiusSteps: [
    { id: 'r0', label: 'none', roundedClass: 'rounded-none' },
    { id: 'r1', label: 'sm', roundedClass: 'rounded-sm' },
    { id: 'r2', label: 'md', roundedClass: 'rounded-md' },
    { id: 'r3', label: 'lg', roundedClass: 'rounded-lg' },
    { id: 'r4', label: 'xl', roundedClass: 'rounded-xl' },
    { id: 'r5', label: 'pill', roundedClass: 'rounded-full' },
  ],
  /**
   * Low-fi chrome samples — `kind` is rendered in `mockup-preset-body.tsx`
   * (`renderDesignSystemChromeItem`). Edit rows freely; each `kind` must be listed in
   * `DesignSystemChromeKind`.
   */
  chrome: [
    { id: 'c1', kind: 'button-solid', label: 'Primary' },
    { id: 'c2', kind: 'icon-button', label: 'Icon' },
    { id: 'c3', kind: 'select', label: 'Select' },
    { id: 'c4', kind: 'checkbox', label: 'Remember' },
    { id: 'c5', kind: 'textarea', label: 'Message' },
    { id: 'c6', kind: 'link', label: 'Learn more' },
  ] satisfies ReadonlyArray<DesignSystemChromeItem>,
} as const

export type DesignSystemSwatchTone =
  (typeof DESIGN_SYSTEM_MOCKUP.swatches)[number]['tone']
