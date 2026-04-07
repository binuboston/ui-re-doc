import type { DocMockupDefinition } from '@/config/docs/mockups/types'

/**
 * One mockup per playbook slug — adjust labels and structure without touching UI code.
 */
export const MOCKUP_PLAN_BY_SLUG: Record<string, DocMockupDefinition> = {
  'playbook/mindset': {
    caption:
      'Config, permissions, components — three levers that keep one product sellable at scale',
    preset: {
      kind: 'pillars',
      items: [
        { id: 'config', label: 'Config-driven' },
        { id: 'perm', label: 'Permission-driven' },
        { id: 'comp', label: 'Component-driven' },
      ],
    },
  },
  'playbook/foundation': {
    caption:
      'Tenant-ready shell: header, nav, main — same frame for every customer, content from config',
    preset: {
      kind: 'app-shell',
      sidebarLines: 5,
      header: true,
      mainZones: 3,
    },
  },
  'playbook/template-refactoring': {
    caption:
      'Follow the template README for a clean start, then unify blocks — one visual language across modules and tenants',
    preset: {
      kind: 'block-grid',
      cols: 3,
      items: [
        { id: 't', label: 'Table' },
        { id: 'f', label: 'Form' },
        { id: 'm', label: 'Modal' },
        { id: 'c', label: 'Card' },
        { id: 'fi', label: 'Filters' },
        { id: 'ta', label: 'Tabs' },
      ],
    },
  },
  'playbook/design-system': {
    caption:
      'Palette, type, spacing, radius, and primitives — one system, every screen',
    preset: {
      kind: 'design-system-board',
    },
  },
  'playbook/modules': {
    caption:
      'Sellable multi-tenant SaaS: shared platform + tenant context; one module tree, data scoped per org',
    preset: {
      kind: 'module-architecture',
    },
  },
  'playbook/permissions': {
    caption:
      'Multi-tenant: tenant context first, then role × permission grants — same hook across menus, routes, and actions',
    preset: {
      kind: 'permission-ui-board',
    },
  },
  'playbook/api-layer': {
    caption:
      'Tenant-aware client: shared headers in one place; UI calls services, services call apiClient',
    preset: {
      kind: 'api-layer-board',
    },
  },
  'playbook/state': {
    caption:
      'Auth → cache → UI: global slices compose; local state only when it does not belong in the store',
    preset: {
      kind: 'flow-horizontal',
      steps: [
        { id: 'auth', label: 'Auth slice' },
        { id: 'cache', label: 'Server cache' },
        { id: 'ui', label: 'UI state' },
      ],
    },
  },
  'playbook/core-ui': {
    caption:
      'Core UI shelf: primitives you reuse everywhere — fewer one-offs, faster tenant-specific screens',
    preset: {
      kind: 'shelf',
      slots: [
        { id: 'tbl', label: 'Table' },
        { id: 'frm', label: 'Form' },
        { id: 'mod', label: 'Modal' },
        { id: 'flt', label: 'Filters' },
        { id: 'emp', label: 'Empty' },
      ],
    },
  },
  'playbook/tables': {
    caption:
      'Toolbar + sortable headers + footer — one dense table pattern for every org',
    preset: {
      kind: 'table-skeleton',
      columns: ['Name', 'Status', 'Owner', '···'],
      rowCount: 4,
    },
  },
  'playbook/ux-states': {
    caption:
      'Loading, data, empty — honest states for SaaS (new tenants often start empty)',
    preset: {
      kind: 'state-trio',
      states: [
        { id: 'load', label: 'Loading' },
        { id: 'ok', label: 'Data' },
        { id: 'empty', label: 'Empty' },
      ],
    },
  },
  'playbook/routing': {
    caption:
      'Central routes with permission / feature gates before render — same flow per tenant',
    preset: {
      kind: 'route-nodes',
      nodes: [
        { id: 'r1', label: '/users' },
        { id: 'r2', label: '/projects' },
        { id: 'r3', label: '/tasks' },
        { id: 'r4', label: '/reports' },
      ],
    },
  },
  'playbook/performance': {
    caption:
      'Bundle → render → data: prioritize what users feel; measure across tenant traffic',
    preset: {
      kind: 'timeline',
      bars: [
        { id: 'b1', label: 'Bundle' },
        { id: 'b2', label: 'Render' },
        { id: 'b3', label: 'Data' },
      ],
    },
  },
  'playbook/code-quality': {
    caption:
      'PR checklist — same quality bar for every contributor on a sellable codebase',
    preset: {
      kind: 'checklist',
      items: [
        { id: 'q1', label: 'No raw API in UI' },
        { id: 'q2', label: 'Reuse primitives' },
        { id: 'q3', label: 'Tokens not hex' },
        { id: 'q4', label: 'Config for strings' },
      ],
    },
  },
  'playbook/testing': {
    caption:
      'Test pyramid: many unit, some integration, few E2E — safe releases for all tenants',
    preset: {
      kind: 'pyramid',
      levels: [
        { id: 'e2e', label: 'E2E (few)' },
        { id: 'int', label: 'Integration' },
        { id: 'unit', label: 'Unit (many)' },
      ],
    },
  },
  'playbook/sellable': {
    caption:
      'Per-tenant config: branding, entitlements, envs — one binary, many customer faces',
    preset: {
      kind: 'tenant-columns',
      columns: [
        { id: 'brand', label: 'Branding', lines: 3 },
        { id: 'feat', label: 'Features', lines: 4 },
        { id: 'env', label: 'Envs', lines: 2 },
      ],
    },
  },
  'playbook/mistakes': {
    caption:
      'Anti-patterns that erode resale value — catch them in review before they spread',
    preset: {
      kind: 'pitfall-cards',
      items: [
        { id: 'p1', label: 'Copy-paste screens' },
        { id: 'p2', label: 'Hardcoded roles' },
        { id: 'p3', label: 'God components' },
      ],
    },
  },
  'playbook/implementation-roadmap': {
    caption:
      'Baseline ~12 weeks in three pillars; overlap phases to compress — checklists mirror nav order',
    preset: {
      kind: 'pillars',
      items: [
        { id: 'm1', label: 'Months 1 · Foundations' },
        { id: 'm2', label: 'Months 2 · Product surfaces' },
        { id: 'm3', label: 'Months 3 · Harden & ship' },
      ],
    },
  },
}

export function getMockupForSlug(slugPath: string): DocMockupDefinition | null {
  return MOCKUP_PLAN_BY_SLUG[slugPath] ?? null
}
