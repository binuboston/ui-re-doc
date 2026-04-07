import type { DocPage } from '@/lib/docs/types'

/** Implementation planning — timeline aligned to sidebar nav order */
export const playbookPart4: Record<string, DocPage> = {
  'playbook/implementation-roadmap': {
    slug: 'playbook/implementation-roadmap',
    title: 'Implementation roadmap',
    markdown: `## How to use this page

Headings match the **playbook order in the right-hand nav** (and sidebar). On large screens, the **On this page** panel shows each section’s **duration** (e.g. *2 weeks*), **week window** (e.g. *W1–2*), and a **bar** whose length reflects that block’s share of a **12-week baseline** — edit values in \`config/docs/implementation-roadmap-progress.ts\` to match your plan.

Each section below lists a **target window** in prose and a **checklist** you can tick in source control or copy to your PM tool.

**Adjusting the calendar:** If you need **less than 3 months**, use the [Compressed 8-week track](#compressed-8-week-track) and merge overlapping work (same checklist items, shorter calendar).

---

## Timeline overview

| Phase | Weeks (baseline) | Focus |
| --- | --- | --- |
| A — Foundations | 1–3 | Shell, tokens, modules, API client, tenant context |
| B — Product surfaces | 4–7 | State, core UI, tables, UX states, routing |
| C — Quality & resale | 8–12 | Performance, rules, testing, sellable polish, audit |

---

## Compressed 8-week track

| Week block | Combine baseline weeks | Emphasis |
| --- | --- | --- |
| W1–2 | 1–3 (partial) | Foundation + design system skeleton + \`apiClient\` + first module |
| W3–4 | 3–5 | Modules layout + permissions hook + state slices |
| W5–6 | 5–8 | Core UI + tables + loading/empty + route table |
| W7–8 | 8–12 (thin) | Performance pass, checklist in CI, critical E2E, tenant config |

---

## Mindset first

**Target window:** Week 1 (ongoing).

- [ ] Agree principles: config-driven, permission-driven, component-driven (no one-off screens).
- [ ] Define “done” for MVP vs phase 2 (scope guard).
- [ ] Single owner for architecture decisions (or RFC process).

---

## Project foundation

**Target window:** Weeks 1–2.

- [ ] Repo layout: app shell, \`modules/\`, shared \`components/\`, \`services/\`, \`tenant/\` (context).
- [ ] Env + build pipeline (dev/stage/prod); secrets not in repo.
- [ ] Base routing shell renders; placeholder nav from config.

---

## Template refactoring

**Target window:** Weeks 2–3 (parallel with design system).

- [ ] Bring the project up using the **template README** (env, install, dev server) before refactoring.
- [ ] Inventory demo/template pages; list blocks to extract (table, form, modal, filters, tabs).
- [ ] Replace ad-hoc markup with shared primitives where possible.
- [ ] Document “before/after” for one pilot screen.

---

## Design system layer

**Target window:** Weeks 2–4.

- [ ] Tokens (color, type, spacing, radius) in code; no stray hex in features.
- [ ] Core primitives wired (buttons, inputs, badges) from tokens.
- [ ] Storybook or internal gallery (optional but recommended).

---

## Module architecture

**Target window:** Weeks 3–5.

- [ ] Feature folders under \`modules/<name>/\` with \`pages/\`, \`components/\`, \`services/\`, \`hooks/\`.
- [ ] No business logic trapped in unrelated modules; boundaries documented.
- [ ] New feature checklist: “which module owns this?”

---

## Permission-based UI

**Target window:** Weeks 4–6.

- [ ] Role → permission map from bootstrap/API; **tenant-scoped** where applicable.
- [ ] \`usePermission\` / \`<CanAccess>\` single source; used on actions, menus, routes.
- [ ] Denied UI is intentional (hide vs disabled — team rule).

---

## API layer

**Target window:** Weeks 3–5 (parallel with modules).

- [ ] \`apiClient\` with base URL, interceptors, **X-Tenant-Id** (or equivalent), auth header.
- [ ] Domain \`*Service.ts\` files; no \`fetch\` in presentational components.
- [ ] Normalized error shape for toasts and forms.

---

## State management

**Target window:** Weeks 5–7.

- [ ] Global slices: auth/session, server cache (e.g. TanStack Query), minimal UI slice.
- [ ] Rules for what stays **module-local** vs global.
- [ ] DevTools / logging policy for sensitive data.

---

## Reusable core UI

**Target window:** Weeks 5–8.

- [ ] Table shell, form shell, modal, empty state, filter bar — owned by design system / core package.
- [ ] Composition examples in one module as reference.
- [ ] Deprecate duplicate copies in modules.

---

## Data table standard

**Target window:** Weeks 6–8.

- [ ] Column config API; sort + filter + pagination pattern documented.
- [ ] Row actions wired to permissions.
- [ ] Sticky header / dense mode decisions (if needed).

---

## Loading, empty & errors

**Target window:** Weeks 6–9.

- [ ] Skeletons match final layout (table, form, cards).
- [ ] Empty states with primary action; copy reviewed for **new tenants**.
- [ ] Error boundary + toast strategy; retry for idempotent reads.

---

## Routing strategy

**Target window:** Weeks 7–9.

- [ ] Central route config; lazy routes for heavy modules.
- [ ] Guards: auth, permissions, **tenant feature flags** where needed.
- [ ] 404 / fallback routes.

---

## Performance

**Target window:** Weeks 8–10.

- [ ] Bundle analysis baseline; route-level code splitting verified.
- [ ] List virtualization for large tables (if in scope).
- [ ] Image/asset policy; caching headers understood.

---

## Code quality rules

**Target window:** Weeks 8–11 (continuous from week 1).

- [ ] ESLint/Prettier/TS strictness agreed; CI fails on lint.
- [ ] PR checklist (no raw API in UI, tokens, config for strings).
- [ ] Naming and folder conventions in \`CONTRIBUTING\` or internal doc.

---

## Testing

**Target window:** Weeks 9–12.

- [ ] Unit tests for services, hooks, pure UI logic.
- [ ] Integration tests for critical flows (auth, tenant switch, one main CRUD).
- [ ] **Few** E2E tests for revenue-critical paths; stable selectors.

---

## Sellable product

**Target window:** Weeks 10–12.

- [ ] Branding from **tenant config** (logo, colors, app name).
- [ ] Feature flags / plan entitlements drive modules and menus.
- [ ] Environment-specific config (URLs, feature toggles) documented.

---

## Common mistakes

**Target window:** Week 12 (audit) + ongoing in review.

- [ ] Review codebase against anti-patterns (copy-paste screens, hardcoded roles, god components).
- [ ] Track debt items; assign owners and dates.
- [ ] Retro: what to enforce in CI or templates next quarter.

---

## Summary checklist (copy-paste)

- [ ] **W1–3:** Shell, tenant context, apiClient, modules skeleton, tokens
- [ ] **W4–7:** Permissions, state, core UI, tables, UX states, routing
- [ ] **W8–12:** Performance, quality gates, testing pyramid, tenant sellable polish, mistake audit`,
  },
}
