/**
 * All copy and sample data for the Template refactoring interactive demo.
 * UI components should import from here — no duplicate literals.
 */

export const DEMO_TABS = {
  defaultId: 'cards',
  items: [
    { id: 'cards', label: 'Cards' },
    { id: 'table', label: 'Table' },
    { id: 'form', label: 'Form' },
    { id: 'overlays', label: 'Modal & drawer' },
    { id: 'filters', label: 'Filters' },
  ],
} as const

export type DemoTabId = (typeof DEMO_TABS.items)[number]['id']

export const DEMO_PLAYGROUND = {
  sectionTitle: 'Live component examples',
  sectionDescription:
    'Shadcn building blocks you can reuse with props and config instead of one-off screens. Open each tab and try the controls.',
  headingId: 'playground-heading',
} as const

export const DEMO_PROJECT_ROWS = [
  {
    id: 'PRJ-204',
    name: 'Website redesign',
    owner: 'Alex Morgan',
    status: 'active',
  },
  {
    id: 'PRJ-198',
    name: 'Mobile app MVP',
    owner: 'Jordan Lee',
    status: 'paused',
  },
  {
    id: 'PRJ-211',
    name: 'Billing integration',
    owner: 'Sam Rivera',
    status: 'active',
  },
  {
    id: 'PRJ-187',
    name: 'Analytics dashboard',
    owner: 'Alex Morgan',
    status: 'archived',
  },
] as const

export type DemoProjectRow = (typeof DEMO_PROJECT_ROWS)[number]
export type DemoProjectStatus = DemoProjectRow['status']

export const DEMO_STATUS_BADGE_VARIANT: Record<
  DemoProjectStatus,
  'default' | 'secondary' | 'outline'
> = {
  active: 'default',
  paused: 'secondary',
  archived: 'outline',
}

export const DEMO_CARDS = [
  {
    description: 'Open tasks',
    value: '24',
    body: 'Across 6 active projects this week.',
    cta: null as string | null,
  },
  {
    description: 'Due this week',
    value: '7',
    body: 'Three need approval from a manager.',
    cta: null as string | null,
  },
  {
    description: 'Team velocity',
    value: '+12%',
    body: 'Compared to last sprint average.',
    cta: 'View report' as string | null,
  },
] as const

export const DEMO_TABLE = {
  title: 'Dynamic table pattern',
  description:
    'Same table shell—columns and row actions come from config.',
  columns: {
    id: 'ID',
    project: 'Project',
    owner: 'Owner',
    status: 'Status',
    actions: 'Actions',
  },
  menu: {
    label: 'Actions',
    edit: 'Edit project',
    archive: 'Archive',
  },
} as const

export const DEMO_MEMBER_ROLES = ['admin', 'manager', 'contributor'] as const
export type DemoMemberRole = (typeof DEMO_MEMBER_ROLES)[number]

export const DEMO_ROLE_LABELS: Record<DemoMemberRole, string> = {
  admin: 'Admin',
  manager: 'Manager',
  contributor: 'Contributor',
}

export const DEMO_FORM = {
  title: 'Config-driven form',
  descriptionLead: 'One',
  descriptionCodeLabel: 'Form',
  descriptionTrail:
    'pattern; fields array can be passed as props in real apps.',
  fields: {
    displayName: { label: 'Display name', placeholder: 'Jamie Doe' },
    workEmail: {
      label: 'Work email',
      placeholder: 'you@company.com',
      description: 'Used for notifications and SSO matching.',
    },
    role: { label: 'Role', placeholder: 'Select role' },
  },
  submit: 'Save member',
  defaultRole: 'contributor' satisfies DemoMemberRole,
} as const

export const DEMO_FORM_VALIDATION = {
  displayNameMin: 'At least 2 characters',
  workEmail: 'Valid email required',
} as const

export const DEMO_DIALOG = {
  trigger: 'Open dialog',
  title: 'Quick edit',
  description:
    'Modal pattern for focused tasks—confirmations, short forms, or destructive actions with an extra step.',
  fieldLabel: 'Label',
  fieldPlaceholder: 'Type something…',
  cancel: 'Cancel',
  save: 'Save changes',
} as const

export const DEMO_DRAWER = {
  trigger: 'Open drawer',
  title: 'Record details',
  description:
    'Drawer pattern for secondary detail panels—especially on small screens or when the main view should stay visible.',
  bodyLead:
    'Use the same field components inside; only the shell changes (dialog vs drawer).',
  bullets: ['Timeline of updates', 'Attached files', 'Comments thread'] as const,
  apply: 'Apply',
  close: 'Close',
} as const

export const DEMO_FILTERS = {
  title: 'Filter bar',
  description:
    'Wire these controls to URL search params or your store—keep UI dumb and driven by state.',
  filteredListLabel: 'Filtered projects',
  searchLabel: 'Search',
  searchPlaceholder: 'Project, owner, or ID…',
  searchAria: 'Filter by search',
  statusLabel: 'Status',
  statusPlaceholder: 'Status',
  statusAria: 'Filter by status',
  reset: 'Reset',
  empty: 'No rows match. Try another search or status.',
  summary: (shown: number, total: number) =>
    `Showing ${shown} of ${total} demo rows.`,
} as const

export const DEMO_FILTER_ALL = 'all' as const

export const DEMO_FILTER_STATUS_OPTIONS = [
  { value: DEMO_FILTER_ALL, label: 'All statuses' },
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'archived', label: 'Archived' },
] as const

export const DEMO_TOAST = {
  table: { title: 'Demo' },
  editDescription: (name: string) => `Edit ${name}`,
  archiveDescription: (name: string) => `Archive ${name}`,
  formSuccessTitle: 'Form valid',
  formSuccessDescription: (displayName: string, email: string, role: string) =>
    `${displayName} · ${email} · ${role}`,
  dialogSavedTitle: 'Saved',
  dialogSavedDescription: 'Dialog demo submit',
  drawerActionTitle: 'Drawer',
  drawerActionDescription: 'Primary action',
  filtersCleared: 'Filters cleared',
} as const
