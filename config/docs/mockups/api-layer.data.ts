/**
 * API layer low-fi mockup — UI → services → client → network.
 * Rendering: `mockup-preset-body.tsx` (`api-layer-board`).
 */

export const API_LAYER_MOCKUP = {
  intro: {
    hint: 'Presentational components never call fetch. Hooks and containers invoke services; the shared API client owns HTTP, headers, and errors.',
  },
  requestContext: {
    caption: 'Request context (API client)',
    hint: 'Attach once in interceptors so every service method stays clean — especially in multi-tenant SaaS.',
    headers: [
      { id: 'tenant', label: 'X-Tenant-Id' },
      { id: 'auth', label: 'Authorization' },
      { id: 'json', label: 'Content-Type' },
    ],
  },
  layers: [
    {
      id: 'ui',
      label: 'UI layer',
      subtitle: 'Components · hooks',
      detail: 'Callbacks and state only — no raw HTTP in dumb UI.',
    },
    {
      id: 'svc',
      label: 'Services',
      subtitle: 'userService · projectService · …',
      detail: 'Thin typed functions: build path, call apiClient, return data.',
    },
    {
      id: 'api',
      label: 'API client',
      subtitle: 'apiClient.ts',
      detail: 'Base URL, timeouts, interceptors, unified error shape.',
    },
    {
      id: 'net',
      label: 'Backend',
      subtitle: 'REST / GraphQL',
      detail: 'Tenant-scoped responses; versioned routes.',
    },
  ],
} as const
