import type { DocPage } from '@/lib/docs/types'

/**
 * Project Management BRD (Business Requirements Document)
 *
 * These pages describe the product modules and expected behavior at a level that
 * supports planning, estimation, and implementation sequencing.
 */
export const brdDocPages: Record<string, DocPage> = {
  'brd/overview': {
    slug: 'brd/overview',
    title: 'BRD overview',
    markdown: `## Purpose

Define **what the Project Management application must do**, for whom, and how success is measured. This BRD is the functional baseline for implementation planning and QA.

## Users

- **Org owner / admin**: configure organization, workspaces, billing, security.
- **Project manager**: plan work, assign tasks, track progress, manage scope.
- **Team member**: execute tasks, update status, log time, collaborate.
- **Client / stakeholder** (optional): read-only visibility, approvals, feedback.
- **Finance / operations** (optional): budgets, invoices, utilization, cost tracking.

## Success metrics

- **Delivery predictability**: higher on-time completion, fewer missed dependencies.
- **Cycle time**: tasks move faster from backlog → done.
- **Visibility**: accurate status reporting, fewer “where is this?” questions.
- **Quality**: fewer reopenings/defects due to unclear acceptance criteria.

## Scope boundaries (for clarity)

- This BRD focuses on **core project workflows** (projects, tasks, collaboration, reporting). Advanced integrations (SSO, Jira/GitHub, time tracking, invoicing) can be delivered in phases.
`,
  },

  'brd/modules': {
    slug: 'brd/modules',
    title: 'Modules & navigation',
    markdown: `## Modules (MVP → full product)

### 1) Authentication & organization
- Login, session handling
- Org/workspace context (timezone, locale, branding)
- User management: invite, roles, deactivation

### 2) Dashboard
- My work (assigned tasks, due soon, mentions)
- Team overview (at-risk projects, blockers)
- Quick actions (new project, new task)

### 3) Projects
- Project list + status (active/on-hold/completed)
- Project overview: goals, milestones, health, team
- Project settings (workflow, templates)

### 4) Tasks (work items)
- Backlog + prioritization
- Kanban/board + list views
- Task details: assignee, due date, labels, checklists
- Subtasks, dependencies, blocking
- Bulk actions

### 5) Planning (optional MVP → Phase 2)
- Milestones, sprints/iterations
- Capacity & workload
- Roadmap view (timeline)

### 6) Collaboration
- Comments, mentions, activity feed
- Attachments
- Notifications (in-app, email)

### 7) Time tracking & costs (optional)
- Timesheets, time entries per task/project
- Billable vs non-billable
- Cost rates, utilization

### 8) Billing (optional)
- Subscription plan, seats, invoices
- Client billing (optional: project invoicing)

## Navigation principles

- One **shell**, multiple **modules**. The shell shows a stable left nav; the module owns its internal routes.
- Feature availability is **config + permissions** driven (plan, flags, roles).
- “Module entry” pages must be bookmarkable and have deterministic URLs.
`,
  },

  'brd/roles-permissions': {
    slug: 'brd/roles-permissions',
    title: 'Roles & permissions',
    markdown: `## Roles

- **Org admin**: full access to org settings, users, billing, audit.
- **Project manager**: create/manage projects, workflows, assignments, reporting.
- **Member**: work on tasks, update status, comment, attach files.
- **Guest/Client** (optional): read-only (or limited comment/approve) access.

## Permission model

### Permission unit

Define permissions as \`{ resource, action }\` pairs:

- **Resources**: projects, tasks, comments, files, time, reports, settings, users
- **Actions**: view, create, edit, delete, finalize, refund, export, manage

### Rules

- UI must not rely on “hidden buttons”. It must **not render** actions the user cannot take.
- APIs must enforce the same permissions server-side.
- All sensitive changes must be auditable (who, what, when).

## Audit logging (minimum)

- Project lifecycle (create, archive, delete)
- Role/permission changes, user invites/removals
- Workflow/status changes for tasks
- Time entry edits (if enabled)
- Billing changes (if enabled)
`,
  },

  'brd/scheduling': {
    slug: 'brd/scheduling',
    title: 'Planning & scheduling',
    markdown: `## Core workflows

### Create project plan
- Define milestones and target dates
- Break down into epics → tasks (or import)
- Set owners and success criteria

### Sprint / iteration planning (optional)
- Select backlog items
- Estimate work (points/hours)
- Validate capacity vs workload

### Dependencies & blockers
- Mark blocking relationships
- Promote blocked items to the dashboard

## Capacity rules (if enabled)

- Team working days / holidays
- Member capacity (hours/points)
- Over-allocation warnings

## Outputs

- Roadmap (timeline)
- Sprint board (if enabled)
- Workload view (by member)
`,
  },

  'brd/patients': {
    slug: 'brd/patients',
    title: 'Projects & work items',
    markdown: `## Project record

- Name, description, status, owner
- Team members & roles
- Milestones and target dates
- Linked documents and activity history

## Work item (task) record

- Title, description, status, priority
- Assignee(s), due date, labels
- Checklist/subtasks
- Dependencies (blocks / blocked by)
- Attachments, comments, mentions

## Search & lists

- Global search (project/task/comment)
- Filters (status, assignee, due date, label, priority)
`,
  },

  'brd/billing-payments': {
    slug: 'brd/billing-payments',
    title: 'Billing, time & costs',
    markdown: `## Time tracking (optional)

- Log time on tasks/projects
- Billable vs non-billable
- Timesheet approvals (optional)

## Cost tracking (optional)

- Internal cost rates (per user/role)
- Budget vs actual (per project)

## Billing (optional)

- Subscription billing (seats/plan)
- Optional client invoicing from billable time
- Exportable ledger (CSV)
`,
  },

  'brd/reporting-settings': {
    slug: 'brd/reporting-settings',
    title: 'Reporting & settings',
    markdown: `## Reporting (minimum)

- Project health (on track/at risk/off track)
- Throughput (done per week), cycle time, WIP
- Workload and utilization (if time tracking enabled)
- Delivery predictability (planned vs done per sprint)
- Exports

## Settings (minimum)

- Organization profile (name, timezone, branding)
- Project templates / workflows (statuses, fields)
- Users & roles
- Notifications (mentions, assignments, due dates)
- Branding (logo, colors)
`,
  },
}

