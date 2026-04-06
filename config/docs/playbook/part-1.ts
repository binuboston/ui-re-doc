import type { DocPage } from '@/lib/docs/types'

export const playbookPart1: Record<string, DocPage> = {
  'playbook/mindset': {
    slug: 'playbook/mindset',
    title: 'Mindset first',
    markdown: `## Where most teams fail

Before writing screens, decide what you are building. A PMS frontend should not be a pile of pages—it should be a **system of reusable patterns**.

## How a serious PMS should feel

### Config-driven

Behavior and navigation come from configuration (routes, roles, feature flags, tenant settings)—not from copying JSX.

### Permission-driven

The same layout shows different actions and menus depending on what the user may do. Permissions are data, not \`if (user.email === ...)\` scattered in components.

### Component-driven

One table, one form pattern, one modal shell—parameterized by props and config. You extend the system; you do not fork \`UserTable\` into \`ProductTable\`.

## Rule of thumb

Never mix **feature logic** with **reusable UI**. Smart containers compose dumb, reusable building blocks.`,
  },
  'playbook/foundation': {
    slug: 'playbook/foundation',
    title: 'Project foundation',
    markdown: `## Folder architecture (monorepo feel)

Organize the frontend so features scale like products, not demos:

\`\`\`text
src/
├── app/           → routes, providers, root layout
├── modules/       → feature modules (heart of the PMS)
├── components/    → shared, reusable UI only
├── layouts/       → dashboard shells
├── hooks/         → shared hooks
├── services/      → API clients & domain calls
├── store/         → global state (e.g. Redux Toolkit)
├── utils/         → pure helpers
├── config/        → roles, routes, constants
└── theme/         → design tokens & MUI (or DS) setup
\`\`\`

## Non-negotiable rule

**Never mix feature logic with reusable components.**

- \`components/\` = generic: buttons, tables, inputs, shells.
- \`modules/users/\` = user-specific pages, wiring, and feature components.

## Why this matters

- Onboarding new developers is faster.
- Permissions and routing stay consistent.
- You can sell the same shell to multiple tenants with different config.`,
  },
  'playbook/template-refactoring': {
    slug: 'playbook/template-refactoring',
    title: 'Template refactoring',
    markdown: `## Purchased templates are usually wrong for PMS

They tend to be **overloaded**, **hardcoded**, and **not scalable** out of the box.

## Step 1 — Strip

- Remove demo pages and unused widgets.
- Delete dead routes and sample data.

## Step 2 — Identify building blocks

Extract patterns you will use everywhere:

- Table
- Form
- Modal / drawer
- Card
- Filters
- Tabs

Scroll to **Live component examples** below this page to try shadcn versions of each block—cards, data table with row actions, form validation, dialog and drawer, and a working filter bar.

## Step 3 — Generalize

### Bad

\`UserTable.jsx\`, \`ProductTable.jsx\`, copy-paste columns.

### Good

\`\`\`tsx
<DynamicTable
  columns={columnConfig}
  data={rows}
  actions={rowActions}
/>
\`\`\`

## Outcome

Every new entity (projects, tasks, invoices) reuses the same machinery with different **config**, not different **components**.`,
  },
  'playbook/design-system': {
    slug: 'playbook/design-system',
    title: 'Design system layer',
    markdown: `## Use your UI strength deliberately

A design system is not “nice CSS.” It is the contract for how the product looks and behaves.

## Theme system (example: MUI)

Define once, consume everywhere:

- **Colors** — semantic tokens (primary, error, surface), not random hex in JSX.
- **Typography** — scale for titles, body, captions.
- **Spacing** — consistent rhythm (e.g. 8px grid).
- **Border radius** — one family of radii.

## UI guidelines

Document and enforce:

- Button variants (primary, secondary, danger, ghost).
- Input styles (density, error states).
- Table density and row hover.
- **Empty states** — illustration + one clear CTA.

## What you gain

- **Consistency** across modules.
- **Sellable** polish: buyers notice cohesion.
- Faster iteration: designers and devs share the same vocabulary.

> Stack note: MUI is a common choice for enterprise PMS; the same principles apply if you use shadcn, Chakra, or custom tokens—the **layer** matters more than the library name.`,
  },
}
