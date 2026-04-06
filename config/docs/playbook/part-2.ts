import type { DocPage } from '@/lib/docs/types'

export const playbookPart2: Record<string, DocPage> = {
  'playbook/modules': {
    slug: 'playbook/modules',
    title: 'Module architecture',
    markdown: `## Each feature is a module

\`\`\`text
modules/
├── auth/
├── users/
├── roles/
├── projects/
├── tasks/
├── reports/
└── ...
\`\`\`

## Inside a module

\`\`\`text
users/
├── pages/
├── components/
├── services/
├── hooks/
└── types.ts
\`\`\`

## Benefits

- **Scalable** — teams can own modules.
- **Maintainable** — boundaries are obvious.
- **SaaS-ready** — enable or ship modules per plan or tenant.

## Multi-tenant architecture

You ship **one** product: a **platform layer** (shared UI shell, \`components/\`, \`services/\`, and a small \`tenant/\` area for context hooks and types). After login, **tenant context** (id, plan, feature flags, branding) is injected once; every feature module reads it and calls **tenant-aware** APIs — data stays isolated per customer without duplicating \`modules/\` per org.

Keep **shared** pieces in \`components/\` and \`services/apiClient\`; keep **user-domain** logic inside \`modules/users\`.`,
  },
  'playbook/permissions': {
    slug: 'playbook/permissions',
    title: 'Permission-based UI',
    markdown: `## This is what makes a PMS feel “enterprise”

Permissions should drive **buttons**, **routes**, **menu items**, and **row actions**—not ad-hoc checks.

## Roles config

\`\`\`ts
const roles = {
  admin: ['user.create', 'user.delete', 'project.manage', ...],
  manager: ['user.view', 'task.assign', ...],
  user: ['task.view', 'task.update_own', ...],
}
\`\`\`

## Permission wrapper

\`\`\`tsx
<CanAccess permission="user.create">
  <Button>Add user</Button>
</CanAccess>
\`\`\`

## Where to apply

- Primary and secondary actions.
- Sidebar and header menus.
- Route guards (redirect or fallback).
- Table row menus and bulk actions.

## Implementation tip

Resolve permissions once (after auth / bootstrap) and expose a hook:

\`const can = usePermission('user.create')\`

The wrapper \`<CanAccess>\` should read from the same source—**single truth**.

## Permissions and tenants

In multi-tenant SaaS, resolve **who can do what** only after you know the **tenant** and user. Keep permission **string keys** stable in components; load the effective role → permission map from bootstrap or your API so each org can differ without branching JSX.`,
  },
  'playbook/api-layer': {
    slug: 'playbook/api-layer',
    title: 'API layer',
    markdown: `## Clean separation

\`\`\`text
services/
├── apiClient.ts    → axios/fetch instance, interceptors, base URL
├── userService.ts
├── projectService.ts
└── ...
\`\`\`

## Rule

**No API calls inside presentational components.**

Components receive **data** and **callbacks**. Containers / hooks / thunks call services.

## Tenant-aware client

Put **auth and tenant headers** (and shared error handling) in **one API client** with interceptors. Services stay dumb about *which* org is active — they only describe *what* to fetch; the client adds context on every outbound request.

## With Redux Toolkit

Use **thunks** (or RTK Query) as the bridge:

1. UI dispatches an action.
2. Thunk calls \`userService.list(filters)\`.
3. Slice updates \`status\`, \`entities\`, \`error\`.

## Why

- Easier testing (mock services, not components).
- One place for auth headers, errors, and retries.
- Swappable backend without rewriting screens.`,
  },
  'playbook/state': {
    slug: 'playbook/state',
    title: 'State management',
    markdown: `## Redux Toolkit for global PMS state

Typical split:

\`\`\`text
store/
├── slices/
│   ├── authSlice.ts
│   ├── userSlice.ts
│   ├── uiSlice.ts
│   └── ...
└── index.ts
\`\`\`

## What belongs globally

- **Auth** — session, user, token refresh.
- **Cross-cutting UI** — sidebar, theme, locale.
- **Shared caches** — reference data used in many modules.

## What can stay local

- Form drafts scoped to one screen.
- Wizard steps inside one feature.

Use **module-level** state only when it truly does not belong in the global store.

## Alternative patterns

Some teams pair **TanStack Query** for server state with **Redux** (or Zustand) for auth and UI. The rule stays the same: **server cache** vs **client session** — don’t duplicate the same data in two places without a strategy.`,
  },
  'playbook/core-ui': {
    slug: 'playbook/core-ui',
    title: 'Reusable core UI',
    markdown: `## Build once, reuse everywhere

These are the “gold” components for a PMS:

| Component | Role |
| --- | --- |
| \`DynamicTable\` | Columns, sorting, pagination from config |
| \`FormBuilder\` | Fields driven by schema/config |
| \`FilterBar\` | Standard filters + chips + apply |
| \`ModalWrapper\` | Size, title, footer actions, loading |
| \`EmptyState\` | Title, description, CTA |
| \`StatusBadge\` | Mapped colors for workflow states |
| \`ActionMenu\` | Row actions with permission checks |

## FormBuilder idea

\`\`\`tsx
<FormBuilder
  fields={[
    { name: 'email', type: 'text', label: 'Email', required: true },
    { name: 'role', type: 'select', options: roleOptions },
  ]}
  onSubmit={handleSubmit}
/>
\`\`\`

## Principle

If you build a second similar screen without reusing these, stop and merge patterns.`,
  },
}
