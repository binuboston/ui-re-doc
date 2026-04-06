/**
 * Permission-based UI mockup — tenant context + role × permission matrix.
 * Rendering: `mockup-preset-body.tsx` (`permission-ui-board`).
 */

export const PERMISSION_UI_MOCKUP = {
  intro: {
    hint: 'usePermission() and <CanAccess /> share one resolved map. Build it after auth and tenant context — permission keys stay stable in code; effective grants depend on the active org.',
  },
  tenantContext: {
    caption: 'Tenant context',
    hint: 'Role → permission assignments are loaded for the signed-in tenant. UI checks never hardcode org-specific rules in JSX.',
    tenants: [
      { id: 't-a', label: 'Org A', slug: 'acme-corp' },
      { id: 't-b', label: 'Org B', slug: 'contoso-ltd' },
    ],
    bridge: 'Switch org → new effective grants; the matrix shows one tenant session',
  },
  matrixSection: {
    caption: 'Role × permission',
    hint: 'Example matrix for a single tenant session — buttons, menus, and routes all read this same structure.',
  },
  roles: [
    { id: 'admin', label: 'Admin' },
    { id: 'manager', label: 'Manager' },
    { id: 'user', label: 'User' },
  ],
  actions: [
    { id: 'view', label: 'user.view' },
    { id: 'create', label: 'user.create' },
    { id: 'delete', label: 'user.delete' },
  ],
  /**
   * Rows = roles (same order as `roles`), columns = actions.
   * true → allowed, false → denied / hidden in UI
   */
  matrix: [
    [true, true, true],
    [true, true, false],
    [true, false, false],
  ] as const,
} as const
