/**
 * Low-fidelity mockup definitions — add or edit presets here only.
 * `DocPageLowFiMockup` renders from `MOCKUP_PLAN_BY_SLUG`.
 */

export type MockupPreset =
  | { kind: 'pillars'; items: { id: string; label: string }[] }
  | { kind: 'app-shell'; sidebarLines: number; header: boolean; mainZones: number }
  | { kind: 'block-grid'; cols: number; items: { id: string; label: string }[] }
  | { kind: 'token-row'; tokens: { id: string; label: string }[] }
  /** Rich design-token showcase (design system playbook page) */
  | { kind: 'design-system-board' }
  | { kind: 'module-grid'; items: { id: string; label: string }[] }
  /** Feature modules + shared layer + typical inner folders */
  | { kind: 'module-architecture' }
  | {
      kind: 'perm-matrix'
      roles: string[]
      resources: string[]
    }
  /** Roles × permission keys with grant/deny cells + legend */
  | { kind: 'permission-ui-board' }
  | { kind: 'layer-stack'; layers: { id: string; label: string }[] }
  /** UI → services → apiClient → network + request context strip */
  | { kind: 'api-layer-board' }
  | { kind: 'flow-horizontal'; steps: { id: string; label: string }[] }
  | { kind: 'shelf'; slots: { id: string; label: string }[] }
  | { kind: 'table-skeleton'; columns: string[]; rowCount: number }
  | { kind: 'state-trio'; states: { id: string; label: string }[] }
  | { kind: 'route-nodes'; nodes: { id: string; label: string }[] }
  | { kind: 'timeline'; bars: { id: string; label: string }[] }
  | { kind: 'checklist'; items: { id: string; label: string }[] }
  | { kind: 'pyramid'; levels: { id: string; label: string }[] }
  | { kind: 'tenant-columns'; columns: { id: string; label: string; lines: number }[] }
  | { kind: 'pitfall-cards'; items: { id: string; label: string }[] }

export type DocMockupDefinition = {
  /** Shown under the mockup frame */
  caption: string
  preset: MockupPreset
}
