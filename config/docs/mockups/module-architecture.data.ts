/**
 * Module architecture mockup — multi-tenant SaaS framing.
 * Rendering: `mockup-preset-body.tsx` (`module-architecture`).
 */

export const MODULE_ARCHITECTURE_MOCKUP = {
  platform: {
    caption: 'Platform layer',
    hint: 'Single deploy and one codebase; tenant is resolved at runtime (host, token, or subdomain).',
  },
  /** App-wide code — no customer row in the database */
  shared: {
    caption: 'Shared',
    folders: [
      { id: 'sh-comp', label: 'components/' },
      { id: 'sh-svc', label: 'services/' },
      { id: 'sh-tenant', label: 'tenant/' },
    ],
  },
  /** Shown between platform and feature modules */
  tenantContext: {
    caption: 'Tenant context',
    hint: 'After auth / bootstrap — modules and the API client all read the same tenant id, plan, flags, and branding.',
    tenants: [
      { id: 't-a', label: 'Org A', slug: 'acme-corp' },
      { id: 't-b', label: 'Org B', slug: 'contoso-ltd' },
    ],
    bridge: 'Same feature modules below — different data & flags per org',
  },
  modulesBlock: {
    title: 'modules/',
    hint: 'Same feature tree for every customer; isolation is enforced in services and APIs — not by copying folders per tenant.',
    modules: [
      { id: 'auth', label: 'auth/' },
      { id: 'users', label: 'users/' },
      { id: 'roles', label: 'roles/' },
      { id: 'proj', label: 'projects/' },
      { id: 'tasks', label: 'tasks/' },
      { id: 'rep', label: 'reports/' },
    ],
  },
  insideEach: {
    caption: 'Typical inner layout (each module)',
    folders: [
      'pages/',
      'components/',
      'services/',
      'hooks/',
      'types.ts',
    ] as const,
  },
} as const
