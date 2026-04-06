import type { DocPage } from '@/lib/docs/types'

export const playbookPart3: Record<string, DocPage> = {
  'playbook/tables': {
    slug: 'playbook/tables',
    title: 'Data table standard',
    markdown: `## Inconsistent tables kill PMS UX

Define **one** table standard and reuse it:

### Pagination

Server-side or client-side—pick per entity, but the **UI pattern** is the same.

### Sorting

Column config declares sortable fields and default order.

### Filtering

Filters live in \`FilterBar\` or column headers; state is lifted to the route or store.

### Column config

\`\`\`ts
const columns = [
  { id: 'name', header: 'Name', sortable: true },
  { id: 'status', header: 'Status', cell: StatusBadge },
]
\`\`\`

## Outcome

Users learn the product once; every module feels familiar.`,
  },
  'playbook/ux-states': {
    slug: 'playbook/ux-states',
    title: 'Loading, empty & errors',
    markdown: `## The boring work that separates pros from demos

Standardize three states everywhere data loads.

### Loading

Use **skeletons** that match the final layout (table skeleton, form skeleton)—not a single global spinner.

### Empty

\`\`\`tsx
if (!data.length) return <EmptyState title="No users yet" action={<Button>Add</Button>} />
\`\`\`

### Error

- User-facing message (clear, actionable).
- Log / track technical detail separately.
- Retry when it makes sense.

## Pattern

\`\`\`tsx
if (loading) return <TableSkeleton />
if (error) return <ErrorState onRetry={refetch} />
if (!rows.length) return <EmptyState ... />
return <DynamicTable ... />
\`\`\``,
  },
  'playbook/routing': {
    slug: 'playbook/routing',
    title: 'Routing strategy',
    markdown: `## Centralize routes

\`\`\`ts
export const routes = [
  { path: '/users', module: 'users', permission: 'user.view' },
  { path: '/projects', module: 'projects', permission: 'project.view' },
]
\`\`\`

## Combine with permissions

- Build the sidebar from **route config** filtered by permissions.
- Guard each route: if the user lacks \`permission\`, redirect or show 403.

## Benefits

- No mystery links in the UI.
- Easy to add feature flags or tenant-specific modules later.`,
  },
  'playbook/performance': {
    slug: 'playbook/performance',
    title: 'Performance',
    markdown: `## Practical checklist

- **Lazy load** heavy routes and large modules.
- **Memoize** expensive selectors and list children when profiling shows benefit.
- Avoid **unnecessary re-renders** — stable props, colocated state, split contexts.

## Don’t optimize blindly

Measure first (React DevTools, profiler). PMS products usually hurt more from **waterfall requests** and **unbounded lists** than from micro-optimizations.

Paginate tables, virtualize very long lists, and batch API reads where the backend allows.`,
  },
  'playbook/code-quality': {
    slug: 'playbook/code-quality',
    title: 'Code quality rules',
    markdown: `## Team rules that keep the codebase sellable

- **No hardcoded strings** in UI — use i18n keys or a constants map.
- **No inline styles** for product chrome — use theme tokens / utility classes.
- **No direct API calls in dumb components** — services + thunks/hooks.
- **Reuse before creating** — search for \`DynamicTable\` / \`FormBuilder\` patterns first.

## Reviews

Enforce these in PR review. They compound into velocity and trust.`,
  },
  'playbook/testing': {
    slug: 'playbook/testing',
    title: 'Testing',
    markdown: `## Basic level is enough to start

- **Component tests** for critical primitives (optional but valuable).
- **Manual QA checklist per module** before release — repeatable, written down.

## What to prioritize

1. Permission matrix smoke test (each role sees expected UI).
2. Core flows: login, create entity, assign task, export report.
3. Regression on table filters and pagination.

Automate later where ROI is clear.`,
  },
  'playbook/sellable': {
    slug: 'playbook/sellable',
    title: 'Sellable product',
    markdown: `## Make the frontend product-ready

- **Config-driven branding** — logo, colors, app name from tenant config.
- **Multi-tenant-ready structure** — tenant id on API calls, feature flags per plan.
- **Environment configs** — dev / staging / prod URLs and flags without code changes.

## Buyer perception

Cohesive UI + predictable behavior + clear permissions reads as **finished software**, not a template.`,
  },
  'playbook/mistakes': {
    slug: 'playbook/mistakes',
    title: 'Common mistakes',
    markdown: `## Avoid these

- Copy-pasting template pages instead of extracting patterns.
- Hardcoding roles and strings across the app.
- Skipping a real **design system** (everything becomes one-off).
- Building one-off components instead of **reusable** ones.
- Mixing **business rules** into shared UI components.

## If you are starting from “no foundation, fully hardcoded”

This playbook is the antidote: **config**, **permissions**, **modules**, **services**, **core UI**, and **central routing** turn the codebase into something you can grow and sell.

## Final advice

Think like a **frontend architect**: systems, boundaries, and reuse—not a gallery of screens.`,
  },
}
