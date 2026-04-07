import type { DocPage } from '@/lib/docs/types'

/**
 * PMS BRD (Business Requirements Document)
 *
 * These pages describe the product modules and expected behavior at a level that
 * supports planning, estimation, and implementation sequencing.
 */
export const brdDocPages: Record<string, DocPage> = {
  'brd/overview': {
    slug: 'brd/overview',
    title: 'BRD overview',
    markdown: `## Purpose

Define **what the PMS must do**, for whom, and how success is measured. This BRD is the functional baseline for implementation planning and QA.

## Users

- **Practice admin/owner**: configure the practice, manage staff, view reports.
- **Front desk / reception**: register patients, schedule, check-in/out, collect payments.
- **Provider**: view schedule, document encounters, complete clinical workflows.
- **Billing**: invoicing, claims (if applicable), reconciliation, aging follow-up.
- **Patient (optional portal)**: view appointments, forms, invoices, payments.

## Success metrics

- **Scheduling**: fewer no-shows, faster rescheduling, higher utilization.
- **Front desk throughput**: reduced check-in time, fewer data entry errors.
- **Billing**: shorter days sales outstanding (DSO), fewer claim denials.
- **Clinical**: faster note completion, better data capture, auditability.

## Scope boundaries (for clarity)

- This BRD focuses on **core PMS workflows**. Integrations (payment processor, SMS gateway, insurance clearinghouse) are referenced as capabilities but can be delivered in phases.
`,
  },

  'brd/modules': {
    slug: 'brd/modules',
    title: 'Modules & navigation',
    markdown: `## Modules (MVP → full product)

### 1) Authentication & tenant
- Login, session handling
- Practice/tenant context (timezone, locale, branding)
- User management: invite, role assignment, deactivation

### 2) Dashboard
- Today summary (appointments, outstanding tasks, unpaid invoices)
- Quick actions

### 3) Patients (CRM)
- Patient profile (demographics, contacts, consents)
- Attachments & documents
- Insurance (if applicable)

### 4) Scheduling
- Calendar by provider/location/room
- Appointment types, availability, time-off
- Reschedule/cancel/no-show workflows

### 5) Encounters / clinical docs
- Visit notes (templates + free text)
- Attachments
- Finalize/lock + audit history (optional by regulation)

### 6) Billing & payments
- Price list / services
- Invoice lifecycle: draft → issued → paid/partially paid → refunded/void
- Receipts, reconciliation

### 7) Reporting
- Revenue, collections, aging
- Utilization, cancellations, no-shows
- Exports

### 8) Settings
- Practice profile, branding
- Services, users, permissions
- Notifications, integrations

## Navigation principles

- One **shell**, multiple **modules**. The shell shows a stable left nav; the module owns its internal routes.
- Feature availability is **config + permissions** driven (tenant plan, flags, roles).
- “Module entry” pages must be bookmarkable and have deterministic URLs.
`,
  },

  'brd/roles-permissions': {
    slug: 'brd/roles-permissions',
    title: 'Roles & permissions',
    markdown: `## Roles

- **Admin**: full access to configuration, users, financials, reporting.
- **Manager**: operational access + reporting; limited system settings.
- **Front desk**: patients + scheduling + payments (limited billing actions).
- **Provider**: schedule + encounter documentation; limited patient edits.
- **Billing**: invoices/claims/reconciliation; limited clinical access.
- **Patient** (portal): own appointments, forms, invoices, payments.

## Permission model

### Permission unit

Define permissions as \`{ resource, action }\` pairs:

- **Resources**: patients, appointments, encounters, invoices, payments, reports, settings, users
- **Actions**: view, create, edit, delete, finalize, refund, export, manage

### Rules

- UI must not rely on “hidden buttons”. It must **not render** actions the user cannot take.
- APIs must enforce the same permissions server-side.
- All sensitive changes must be auditable (who, what, when).

## Audit logging (minimum)

- Patient edits (demographics, insurance, attachments)
- Appointment lifecycle (create/reschedule/cancel/no-show)
- Invoice/payment lifecycle (issue/pay/refund/void)
- Encounter finalize/lock (if enabled)
`,
  },

  'brd/scheduling': {
    slug: 'brd/scheduling',
    title: 'Scheduling',
    markdown: `## Core workflows

### Create appointment
- Select patient (or create patient)
- Choose provider + location/room
- Select service/type (drives duration + required fields)
- Confirm time slot (availability rules)
- Confirm notifications (reminder policy)

### Reschedule
- Preserve reason + original slot (audit)
- Optionally notify patient

### Cancel / no-show
- Capture reason
- Apply policy (fees, restrictions) if configured

## Availability rules

- Provider working hours + breaks
- Location/room constraints
- Service duration + buffer time
- Time-off blocks and holidays

## Outputs

- Day/week views, filters by provider/location
- Printable schedule (optional)
`,
  },

  'brd/patients': {
    slug: 'brd/patients',
    title: 'Patients',
    markdown: `## Patient record

- Identity: name, DOB, gender (as applicable), identifiers
- Contact: phone/email/address
- Emergency contact
- Consents (marketing + clinical, depending on region)
- Documents: uploads (IDs, referrals, forms)

## Patient lifecycle

- Create patient
- Merge duplicates
- Archive / inactive status

## Search & lists

- Fast search (name, phone, ID)
- Filters (status, last visit, tags)
`,
  },

  'brd/billing-payments': {
    slug: 'brd/billing-payments',
    title: 'Billing & payments',
    markdown: `## Invoice model

- **Line items**: service, unit price, qty, discount/adjustment
- **Totals**: subtotal, tax (optional), total due, balance
- **Status**: draft / issued / partially paid / paid / void

## Payment model

- Payment methods: cash/card/online (depending on integrations)
- Refunds: full/partial with reason codes
- Receipts: printable + downloadable

## Reconciliation

- Daily close-out report (payments collected by method)
- Exportable ledger (CSV)
`,
  },

  'brd/reporting-settings': {
    slug: 'brd/reporting-settings',
    title: 'Reporting & settings',
    markdown: `## Reporting (minimum)

- Revenue (daily/weekly/monthly)
- Collections vs outstanding
- Aging buckets
- No-shows/cancellations
- Provider utilization

## Settings (minimum)

- Practice profile (name, address, timezone)
- Services / appointment types
- Users & roles
- Notifications (reminders, templates)
- Branding (logo, colors)
`,
  },
}

