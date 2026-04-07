import type { DocPage } from '@/lib/docs/types'

export const brandGuidelineDocPages: Record<string, DocPage> = {
  'brand-guideline/style-showcase': {
    slug: 'brand-guideline/style-showcase',
    title: 'UI style showcase',
    markdown: `## Complete UI style preview

This page renders a **live style board** using your current design tokens and component primitives.

## What you will see

- All key semantic color tokens in rendered swatches
- Typography hierarchy from display to caption + mono
- Real controls (buttons + badges) using standard variants

## How to use this page

1. Validate visual consistency after token or branding changes.
2. Check light/dark parity for major surfaces and controls.
3. Use examples here as implementation reference for feature modules.
`,
  },
  'brand-guideline/overview': {
    slug: 'brand-guideline/overview',
    title: 'Brand overview',
    markdown: `## Brand intent

The product brand should feel **confident, modern, and operationally clear**.

- **Primary brand expression**: clean surfaces, strong hierarchy, purposeful accents.
- **Voice in UI**: direct, helpful, low-noise language.
- **Interaction quality**: predictable states, clear active context, no visual clutter.

## Core identity anchors

- **Primary accent (logo mark)**: \`#5539D9\` (violet)
- **Product chrome / trust accent**: \`#005A77\` (teal)
- **Primary typeface**: Quicksand (UI + product copy)
- **Monospace**: Geist Mono (technical/code values)

## Standard adoption rules

1. Every new screen must use semantic tokens; avoid raw hex in feature code.
2. Every interactive element must support: default, hover, active, focus, disabled.
3. Every module must preserve spacing rhythm and typography scale.
4. Accessibility is part of the definition of done (contrast + keyboard + focus).

## Deliverables this guideline governs

- Brand marks and logo placement
- Color tokens and semantic usage
- Typography system and content hierarchy
- Layout rhythm, spacing, radius, borders, and elevation
- Component state behavior

## Real examples

### App shell header

\`\`\`tsx
<header className="h-14 px-3 bg-background text-foreground">
  <img src="/praszo-icon.svg" alt="Praszo" width={28} height={28} />
  <span className="text-sm font-semibold">Project Management</span>
</header>
\`\`\`

### Primary action

\`\`\`tsx
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Create Project
</Button>
\`\`\`
`,
  },
  'brand-guideline/logo-usage': {
    slug: 'brand-guideline/logo-usage',
    title: 'Logo usage',
    markdown: `## Approved logo assets

- **Primary mark**: \`/public/praszo-icon.svg\`
- **Favicon / app icon source**: same master SVG

## Placement standards

### Product shell (required)

- Left sidebar header uses logo mark in a neutral tile.
- Keep logo vertically centered with adjacent text block.
- Do not place additional decorative outlines beyond the approved container style.

### Minimum sizing

- **Compact contexts** (sidebar/header): 24-32px
- **Medium contexts** (cards/modals): 40-64px
- **Marketing / splash**: 64px+

## Clear space

- Minimum clear space on all sides = **0.5x logo width**
- Never allow text, border, or icon overlays inside this zone.

## Background rules

- Prefer neutral/solid backgrounds.
- On dark surfaces, keep sufficient contrast around logo edges.
- Do not place logo directly on busy photos/patterns without a backing container.

## Do / don't

### Do
- Use original aspect ratio.
- Use source asset directly (no redraw).
- Keep brand violet intact.

### Don't
- Stretch/squash.
- Rotate, skew, add shadows/glows.
- Recolor the logo mark arbitrarily.

## Real examples

### Correct

\`\`\`tsx
<div className="flex size-8 items-center justify-center rounded-md bg-white shadow-sm">
  <img src="/praszo-icon.svg" alt="Praszo" width={32} height={32} />
</div>
\`\`\`

### Incorrect

\`\`\`tsx
// Wrong: recolored + stretched logo
<img
  src="/praszo-icon.svg"
  alt="Praszo"
  style={{ width: 56, height: 28, filter: 'hue-rotate(180deg)' }}
/>
\`\`\`
`,
  },
  'brand-guideline/colors': {
    slug: 'brand-guideline/colors',
    title: 'Color palette',
    markdown: `## Brand palette (source)

| Token | Hex | Intended meaning | Usage |
| --- | --- | --- | --- |
| Brand Violet | \`#5539D9\` | Product identity / primary brand | Primary CTAs, selected states, brand highlights |
| Brand Teal | \`#005A77\` | Product chrome / trust | Header/meta theme color, secondary emphasis, structural accents |
| Surface White | \`#FFFFFF\` | Base surface | Cards, panels, content backgrounds |
| Ink Dark | \`#141A21\` | Primary readable text | Headlines and high-emphasis text |

## Current semantic token mapping

| Semantic token | Meaning | Direction |
| --- | --- | --- |
| \`--primary\` | Main action + active states | Violet-leaning |
| \`--sidebar-primary\` | Shell anchor/accent | Teal-leaning |
| \`--accent\` | Soft supportive emphasis | Teal/violet tint |
| \`--reading-accent\` | In-content emphasis | Violet-leaning |
| \`--border\` | Surface separators | Low-contrast neutral tint |

## Usage standards

### Primary color rules

- Use \`primary\` for:
  - Main CTA buttons
  - Current navigation context
  - High-value interaction highlights
- Avoid using \`primary\` for passive decorative blocks.

### Teal usage rules

- Use for shell-level identity and structural emphasis.
- Avoid mixing many teal shades in one component; rely on token scale.

### Neutral + semantic rules

- Surfaces stay neutral first; color is a signal, not decoration.
- Semantic colors must always correspond to semantic meaning:
  - success, warning, destructive, info

## Accessibility standards

- Text on colored backgrounds must meet WCAG contrast.
- Focus rings must be clearly visible against both light and dark surfaces.
- Do not encode status using color only; pair with text/icon.

## Implementation standard

- In components, use semantic classes (\`bg-primary\`, \`text-muted-foreground\`, etc.).
- Avoid raw hex in JSX/CSS except in global token definition files.

## Real examples

### Button states

\`\`\`tsx
<button
  className="
    rounded-md px-3 py-2 text-sm font-medium
    bg-primary text-primary-foreground
    hover:bg-primary/90
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    disabled:opacity-50 disabled:pointer-events-none
  "
>
  Save Changes
</button>
\`\`\`

### Info card with semantic colors

\`\`\`tsx
<div className="rounded-lg border border-border bg-card p-4">
  <p className="text-card-foreground">Project is on track.</p>
  <p className="text-muted-foreground text-sm">Updated 5 minutes ago</p>
</div>
\`\`\`

### Status chips

| Status | Token class | Example |
| --- | --- | --- |
| Done | \`text-emerald-700 bg-emerald-50\` | Success state chip |
| At risk | \`text-amber-700 bg-amber-50\` | Warning state chip |
| Blocked | \`text-destructive bg-destructive/10\` | Error state chip |
`,
  },
  'brand-guideline/typography': {
    slug: 'brand-guideline/typography',
    title: 'Typography',
    markdown: `## Typeface stack

- **Primary UI font**: Quicksand
- **Monospace font**: Geist Mono
- **Fallback strategy**: system sans/mono stacks

## Typography roles

| Role | Purpose | Typical use |
| --- | --- | --- |
| Display | Landmark messaging | Hero or major section banners |
| H1/H2/H3 | Content hierarchy | Page sections and subsections |
| Body | Default reading text | Paragraphs, descriptions |
| Label | Control labels | Inputs, badges, compact UI |
| Caption | Supporting context | Helper text, metadata |
| Mono | Technical values | IDs, code, formatted data |

## Type scale standard (recommended)

| Token role | Size | Line height | Weight |
| --- | --- | --- | --- |
| Display | 36-40px | 1.15-1.2 | 600-700 |
| H1 | 30-32px | 1.2-1.3 | 600 |
| H2 | 24-28px | 1.25-1.35 | 600 |
| H3 | 20-22px | 1.3-1.4 | 600 |
| Body L | 16-18px | 1.5-1.65 | 400-500 |
| Body M | 14-16px | 1.5-1.6 | 400-500 |
| Label | 12-14px | 1.35-1.5 | 500-600 |
| Caption | 11-12px | 1.3-1.4 | 400-500 |

## Content hierarchy rules

- Keep exactly one logical H1 per page (it may be visually hidden in some shells).
- Never jump heading levels (H2 -> H4).
- Keep body text readable: avoid long lines without width constraints.

## Product usage rules

- Avoid arbitrary font-size overrides in feature components.
- Use shared layout tokens/classes for title and body text.
- Use mono only for technical or machine-like values.

## Real examples

### Page hierarchy

\`\`\`tsx
<h1 className="text-3xl font-semibold tracking-tight">Project roadmap</h1>
<p className="mt-2 text-base text-muted-foreground">
  Milestones, ownership, and current delivery risk.
</p>

<h2 className="mt-10 text-2xl font-semibold">Upcoming milestones</h2>
<h3 className="mt-6 text-xl font-semibold">Q2 release train</h3>
\`\`\`

### Dense table typography

\`\`\`tsx
<th className="text-xs font-semibold uppercase tracking-wide">Owner</th>
<td className="text-sm text-foreground">Binu B</td>
<td className="font-mono text-xs text-muted-foreground">PRJ-2026-042</td>
\`\`\`
`,
  },
  'brand-guideline/ui-rules': {
    slug: 'brand-guideline/ui-rules',
    title: 'UI rules',
    markdown: `## Layout system

### Spacing rhythm

- Use tokenized spacing only (no one-off random values).
- Keep shell gutters consistent across header, sidebars, and content.
- Maintain balanced vertical rhythm between section blocks.

### Container behavior

- Prevent horizontal overflow by default (\`min-w-0\` in flex children).
- Prefer wrap strategies over forced truncation for nav/documentation labels.
- Reserve truncation for constrained utility surfaces only (chips, tiny counters).

## Component standards

### State completeness (required)

Every interactive component must support:

- default
- hover
- active/pressed
- focus-visible
- disabled
- error (when applicable)

### Surface + border standards

- Minimal borders, clear structure.
- Use elevation and contrast intentionally, not decoratively.
- Active context can use subtle background + slim accent edge.

## Motion standards

- Keep durations short and functional.
- Prefer transition of opacity/color/transform only.
- Respect reduced-motion preferences for all non-essential animation.

## Content behavior standards

- No clipped critical content.
- Long labels should wrap gracefully where reading value is high.
- If truncation is unavoidable, provide discoverability (tooltip/expand pattern).

## QA checklist before release

- [ ] Color contrast validated
- [ ] Keyboard focus visible on all controls
- [ ] No layout shift/jump between SSR and hydration
- [ ] No text overflow in sidebars and dense views
- [ ] Light/dark theme parity for key states

## Real examples

### Sidebar item (active with minimal right indicator)

\`\`\`tsx
<a
  className="
    relative block rounded-md px-2 py-1.5
    bg-reading-soft/70 text-reading-accent
  "
>
  <span className="absolute inset-y-1 right-0 w-[2px] rounded-full bg-reading-accent/70" />
  <span className="text-sm leading-snug break-words whitespace-normal">
    Modules & navigation
  </span>
</a>
\`\`\`

### Anti-overflow pattern for rails

\`\`\`tsx
<SidebarContent className="min-w-0">
  <div className="min-w-0">
    <span className="break-words whitespace-normal">
      Very long section title that should wrap instead of clipping...
    </span>
  </div>
</SidebarContent>
\`\`\`
`,
  },
}

