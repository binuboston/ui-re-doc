import {
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronRight,
  Lock,
} from 'lucide-react'
import * as React from 'react'

import {
  DESIGN_SYSTEM_MOCKUP,
  type DesignSystemChromeItem,
  type DesignSystemSwatchTone,
} from '@/config/docs/mockups/design-system-board.data'
import { MODULE_ARCHITECTURE_MOCKUP } from '@/config/docs/mockups/module-architecture.data'
import { API_LAYER_MOCKUP } from '@/config/docs/mockups/api-layer.data'
import { PERMISSION_UI_MOCKUP } from '@/config/docs/mockups/permissions-ui.data'
import type { MockupPreset } from '@/config/docs/mockups/types'
import { mockupStyles } from '@/components/docs/mockups/mockup-styles'
import { cn } from '@/lib/utils'

const DS_SWATCH: Record<DesignSystemSwatchTone, string> = {
  canvas:
    'bg-reading-surface border-2 border-reading-code-border shadow-inner',
  surface: 'bg-reading-soft/90 border border-reading-code-border',
  muted: 'bg-reading-muted/30 border border-reading-muted/45',
  line: 'bg-transparent border-2 border-dashed border-reading-code-border',
  accent: 'bg-reading-accent/50 border border-reading-accent/80',
  danger: 'bg-destructive/25 border border-destructive/50',
}

function DsSection({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-reading-code-border/70 bg-reading-surface/50 p-3 md:p-3.5',
        className
      )}
    >
      <p className={cn(mockupStyles.label, 'mb-2.5 tracking-wide')}>{title}</p>
      {children}
    </div>
  )
}

function renderDesignSystemChromeItem(c: DesignSystemChromeItem) {
  switch (c.kind) {
    case 'button-solid':
      return (
        <div
          key={c.id}
          className="flex h-8 items-center rounded-md border border-reading-prose/40 bg-reading-prose/30 px-3 text-[10px] font-medium text-reading-prose"
          aria-hidden
        >
          {c.label}
        </div>
      )
    case 'button-ghost':
      return (
        <div
          key={c.id}
          className="flex h-8 items-center rounded-md border border-dashed border-reading-code-border bg-transparent px-3 text-[10px] text-reading-muted"
          aria-hidden
        >
          {c.label}
        </div>
      )
    case 'icon-button':
      return (
        <div
          key={c.id}
          className="flex size-8 shrink-0 items-center justify-center rounded-md border border-reading-code-border bg-reading-soft shadow-sm"
          aria-hidden
        >
          <span className="sr-only">{c.label}</span>
          <div className="size-3 rounded-sm bg-reading-muted/45" />
        </div>
      )
    case 'input':
      return (
        <div
          key={c.id}
          className="h-8 w-[min(100%,11rem)] rounded-md border border-reading-code-border bg-reading-surface px-2"
          aria-hidden
        >
          <div className={cn(mockupStyles.line, 'mt-2.5 h-2 w-2/3')} />
        </div>
      )
    case 'select':
      return (
        <div
          key={c.id}
          className="flex h-8 w-[min(100%,10.5rem)] shrink-0 items-center justify-between gap-2 rounded-md border border-reading-code-border bg-reading-surface px-2"
          aria-hidden
        >
          <span className="min-w-0 truncate text-[10px] text-reading-muted">
            {c.label}
          </span>
          <ChevronDown
            className="size-3 shrink-0 text-reading-muted opacity-70"
            aria-hidden
          />
        </div>
      )
    case 'textarea':
      return (
        <div
          key={c.id}
          className="flex h-[4.25rem] w-[min(100%,11rem)] flex-col rounded-md border border-reading-code-border bg-reading-surface p-2"
          aria-hidden
        >
          <span className="sr-only">{c.label}</span>
          <div className={cn(mockupStyles.line, 'h-2 w-full')} />
          <div className={cn(mockupStyles.line, 'mt-2 h-2 w-[92%]')} />
          <div className={cn(mockupStyles.line, 'mt-2 h-2 w-3/5')} />
        </div>
      )
    case 'checkbox':
      return (
        <div
          key={c.id}
          className="flex max-w-[12rem] items-center gap-2"
          aria-hidden
        >
          <div className="size-3.5 shrink-0 rounded border border-reading-code-border bg-reading-surface" />
          <span className="min-w-0 truncate text-[10px] text-reading-muted">
            {c.label}
          </span>
        </div>
      )
    case 'badge':
      return (
        <div
          key={c.id}
          className="rounded-full border border-reading-muted/50 bg-reading-muted/15 px-2.5 py-0.5 text-[9px] text-reading-muted"
          aria-hidden
        >
          {c.label}
        </div>
      )
    case 'toggle':
      return (
        <div
          key={c.id}
          className="relative h-5 w-9 shrink-0 rounded-full border border-reading-code-border bg-reading-soft"
          aria-hidden
        >
          <span className="sr-only">{c.label}</span>
          <div className="absolute top-0.5 left-0.5 size-3.5 rounded-full bg-reading-muted/50" />
        </div>
      )
    case 'link':
      return (
        <span
          key={c.id}
          className="cursor-default text-[10px] font-medium text-reading-accent underline decoration-reading-accent/50 underline-offset-2"
          aria-hidden
        >
          {c.label}
        </span>
      )
    case 'segmented':
      return (
        <div
          key={c.id}
          className="inline-flex h-7 shrink-0 overflow-hidden rounded-md border border-reading-code-border text-[9px] shadow-sm"
          aria-hidden
        >
          <span className="sr-only">{c.label}</span>
          <div className="flex w-[1.85rem] items-center justify-center border-r border-reading-code-border bg-reading-accent/35 font-medium text-reading-prose">
            A
          </div>
          <div className="flex w-[1.85rem] items-center justify-center border-r border-reading-code-border bg-reading-soft text-reading-muted">
            B
          </div>
          <div className="flex w-[1.85rem] items-center justify-center bg-reading-soft text-reading-muted">
            C
          </div>
        </div>
      )
    default: {
      const _exhaustive: never = c.kind
      return _exhaustive
    }
  }
}

function WireBox({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <div
      style={style}
      className={cn(
        mockupStyles.box,
        'flex flex-col justify-center gap-1.5 p-2.5',
        className
      )}
    >
      {children}
    </div>
  )
}

/** Mini UI chrome by block name — used by template + core-ui mockups */
function BlockTypePreview({ label }: { label: string }) {
  const L = label.toLowerCase()
  if (L.includes('tab')) {
    return (
      <div className="mt-2 w-full space-y-1" aria-hidden>
        <div className="flex gap-1 border-b border-reading-code-border/55 pb-1">
          <div className="h-1.5 w-7 rounded-sm bg-reading-accent/45" />
          <div className="h-1.5 w-6 rounded-sm bg-reading-muted/30" />
          <div className="h-1.5 w-6 rounded-sm bg-reading-muted/30" />
        </div>
        <div className={cn(mockupStyles.line, 'h-2 w-full')} />
      </div>
    )
  }
  if (L.includes('filter')) {
    return (
      <div className="mt-2 flex w-full flex-wrap gap-1" aria-hidden>
        <div className="h-2 w-9 rounded-full bg-reading-muted/40" />
        <div className="h-2 w-11 rounded-full bg-reading-muted/35" />
        <div className="h-2 w-7 rounded-full border border-dashed border-reading-code-border/55" />
      </div>
    )
  }
  if (L.includes('modal')) {
    return (
      <div className="mt-2 flex w-full justify-center" aria-hidden>
        <div className="w-[88%] space-y-1 rounded-md border border-reading-code-border bg-reading-soft/60 p-1.5 shadow-sm">
          <div className={cn(mockupStyles.line, 'mx-auto h-1.5 w-1/3')} />
          <div className={cn(mockupStyles.line, 'h-2 w-full')} />
        </div>
      </div>
    )
  }
  if (L.includes('card')) {
    return (
      <div
        className="mt-2 w-full rounded-md border border-reading-code-border/75 bg-reading-soft/45 p-1.5 shadow-inner"
        aria-hidden
      >
        <div className={cn(mockupStyles.line, 'h-1.5 w-1/3')} />
        <div className={cn(mockupStyles.line, 'mt-1 h-2 w-full')} />
      </div>
    )
  }
  if (L.includes('table')) {
    return (
      <div className="mt-2 w-full space-y-1" aria-hidden>
        <div className="flex gap-0.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-sm bg-reading-muted/45"
            />
          ))}
        </div>
        {Array.from({ length: 3 }).map((_, r) => (
          <div key={r} className="flex gap-0.5">
            {Array.from({ length: 4 }).map((_, c) => (
              <div
                key={c}
                className="h-1.5 flex-1 rounded-sm bg-reading-code-border/45"
              />
            ))}
          </div>
        ))}
      </div>
    )
  }
  if (L.includes('form')) {
    return (
      <div className="mt-2 w-full space-y-1.5" aria-hidden>
        <div className={cn(mockupStyles.line, 'h-2 w-full')} />
        <div className={cn(mockupStyles.line, 'h-2 w-[88%]')} />
        <div className={cn(mockupStyles.line, 'h-5 w-full opacity-90')} />
      </div>
    )
  }
  return (
    <div
      className={cn(mockupStyles.line, 'mx-auto mt-2 w-2/3')}
      aria-hidden
    />
  )
}

export function MockupPresetBody({ preset }: { preset: MockupPreset }) {
  switch (preset.kind) {
    case 'pillars':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Three levers for a sellable product: behavior from config, access
              from permissions, speed from shared UI primitives — not one-off
              screens.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {preset.items.map((item, i) => (
              <WireBox
                key={item.id}
                className="min-h-[5.75rem] border-reading-code-border/90 bg-linear-to-b from-reading-surface/95 to-reading-soft/50"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={mockupStyles.label}>{item.label}</span>
                  <span
                    className="flex size-5 shrink-0 items-center justify-center rounded-full bg-reading-accent/25 text-[9px] font-bold tabular-nums text-reading-accent"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                </div>
                <div className="space-y-1.5 pt-1" aria-hidden>
                  <div className={cn(mockupStyles.line, 'w-full')} />
                  <div className={cn(mockupStyles.line, 'w-4/5')} />
                </div>
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'app-shell':
      return (
        <div className="flex flex-col gap-2.5 rounded-lg border border-reading-code-border/80 bg-linear-to-b from-reading-soft/45 to-reading-surface/30 p-2.5 shadow-inner sm:p-3">
          <p className="text-[9px] leading-snug text-reading-muted">
            One shell for every tenant: header, navigation, and main regions
            swap content from config — not forked layouts per customer.
          </p>
          {preset.header ? (
            <div
              className={cn(
                mockupStyles.box,
                'flex h-9 w-full items-center gap-2 border-reading-code-border/85 px-3 py-2'
              )}
              aria-hidden
            >
              <div className="size-2 shrink-0 rounded-sm bg-reading-accent/40" />
              <div className={cn(mockupStyles.line, 'h-2 w-[28%] max-w-[7rem]')} />
              <div className="ml-auto flex gap-1.5">
                <div className={cn(mockupStyles.line, 'h-2 w-8')} />
                <div className={cn(mockupStyles.line, 'h-2 w-8')} />
              </div>
            </div>
          ) : null}
          <div className="flex gap-2">
            <div className="flex w-[28%] shrink-0 flex-col gap-1">
              <span className="text-[8px] font-medium uppercase tracking-wide text-reading-muted">
                Nav
              </span>
              <div
                className={cn(
                  mockupStyles.box,
                  'flex min-h-[6.5rem] flex-col gap-2 border-reading-code-border/85 p-2'
                )}
                aria-hidden
              >
                {Array.from({ length: preset.sidebarLines }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      mockupStyles.line,
                      'w-full',
                      i === 0 && 'bg-reading-accent/35 opacity-100'
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-[8px] font-medium uppercase tracking-wide text-reading-muted">
                Main
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                {Array.from({ length: preset.mainZones }).map((_, i) => (
                  <WireBox
                    key={i}
                    className="min-h-[3.25rem] flex-1 border-reading-code-border/85 bg-reading-surface/60"
                  >
                    <div
                      className={cn(mockupStyles.line, 'w-full')}
                      aria-hidden
                    />
                    <div
                      className={cn(mockupStyles.line, 'w-5/6')}
                      aria-hidden
                    />
                  </WireBox>
                ))}
              </div>
            </div>
          </div>
        </div>
      )

    case 'block-grid':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Standardize demo noise into reusable blocks — same table, form,
              and dialog patterns across modules so every screen feels like one
              product.
            </p>
          </div>
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${preset.cols}, minmax(0, 1fr))`,
            }}
          >
            {preset.items.map((item) => (
              <WireBox
                key={item.id}
                className="min-h-[5.5rem] border-reading-code-border/85 bg-reading-surface/50"
              >
                <span className={cn(mockupStyles.label, 'text-center')}>
                  {item.label}
                </span>
                <BlockTypePreview label={item.label} />
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'design-system-board':
      return (
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <DsSection title={DESIGN_SYSTEM_MOCKUP.sections.colors}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {DESIGN_SYSTEM_MOCKUP.swatches.map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={cn(
                        'size-11 shrink-0 shadow-sm sm:size-12',
                        DS_SWATCH[s.tone]
                      )}
                      aria-hidden
                    />
                    <span className="max-w-[4.5rem] text-center text-[9px] leading-tight text-reading-muted">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </DsSection>
            <DsSection title={DESIGN_SYSTEM_MOCKUP.sections.typography}>
              <div className="space-y-3">
                {DESIGN_SYSTEM_MOCKUP.typeRows.map((row) => (
                  <div
                    key={row.id}
                    className="flex gap-3 sm:items-start"
                  >
                    <span className="w-14 shrink-0 pt-0.5 text-[9px] text-reading-muted">
                      {row.label}
                    </span>
                    <p
                      className={cn(
                        'min-w-0 flex-1 hyphens-auto',
                        row.textClass
                      )}
                    >
                      {row.sample}
                    </p>
                  </div>
                ))}
              </div>
            </DsSection>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <DsSection title={DESIGN_SYSTEM_MOCKUP.sections.spacing}>
              <div className="space-y-2.5">
                {DESIGN_SYSTEM_MOCKUP.spacingSteps.map((step) => (
                  <div
                    key={step.id}
                    className="grid grid-cols-[minmax(2.5rem,2.75rem)_1fr] items-center gap-2.5 sm:grid-cols-[3rem_1fr]"
                  >
                    <div className="text-right">
                      <span className="text-[11px] font-semibold tabular-nums text-reading-prose">
                        {step.label}
                      </span>
                      <span className="block text-[8px] font-normal leading-none text-reading-muted">
                        px
                      </span>
                    </div>
                    <div className="rounded-lg border border-reading-code-border/65 bg-linear-to-b from-reading-surface/90 to-reading-soft/60 px-3 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                      <div className="flex min-h-9 items-center justify-center sm:min-h-10">
                        <div
                          className={cn(
                            'flex items-center justify-center',
                            step.gapClass
                          )}
                          aria-hidden
                        >
                          <div className="size-5 shrink-0 rounded-md border border-reading-accent/40 bg-reading-accent/55 shadow-sm sm:size-6" />
                          <div className="size-5 shrink-0 rounded-md border border-reading-accent/30 bg-reading-accent/35 shadow-sm sm:size-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DsSection>
            <div className="flex h-full min-h-0 flex-col gap-4">
              <DsSection title={DESIGN_SYSTEM_MOCKUP.sections.radii}>
                <div className="flex flex-wrap items-end justify-between gap-3 sm:justify-start">
                  {DESIGN_SYSTEM_MOCKUP.radiusSteps.map((r) => (
                    <div
                      key={r.id}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <div
                        className={cn(
                          'size-10 border-2 border-reading-code-border bg-reading-soft sm:size-11',
                          r.roundedClass
                        )}
                        aria-hidden
                      />
                      <span className="text-[9px] text-reading-muted">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </DsSection>
              <DsSection
                title={DESIGN_SYSTEM_MOCKUP.sections.chrome}
                className="flex min-h-0 flex-1 flex-col"
              >
                <div className="flex min-h-[5.5rem] flex-1 flex-wrap content-center items-center gap-2.5 md:min-h-0 md:gap-3">
                  {DESIGN_SYSTEM_MOCKUP.chrome.map((c) =>
                    renderDesignSystemChromeItem(c)
                  )}
                </div>
              </DsSection>
            </div>
          </div>
        </div>
      )

    case 'token-row':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2')}>
            <p className="text-[9px] text-reading-muted">
              Design-token swatches — use named roles from the system, not raw
              hex in components.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {preset.tokens.map((t) => (
              <WireBox
                key={t.id}
                className="h-14 w-16 shrink-0 items-center border-reading-code-border/85 bg-reading-surface/50 md:h-16 md:w-20"
              >
                <div
                  className="size-8 rounded-md border-2 border-dashed border-reading-code-border bg-reading-code-bg shadow-inner md:size-10"
                  aria-hidden
                />
                <span className={cn(mockupStyles.label, 'text-center')}>
                  {t.label}
                </span>
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'module-architecture':
      return (
        <div className="flex flex-col gap-3">
          <div
            className={cn(
              mockupStyles.box,
              'flex flex-col gap-2.5 p-2.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4'
            )}
          >
            <div className="min-w-0 shrink-0 sm:max-w-[44%]">
              <span className={cn(mockupStyles.label, 'block')}>
                {MODULE_ARCHITECTURE_MOCKUP.platform.caption}
              </span>
              <p className="mt-1.5 text-[9px] leading-snug text-reading-muted">
                {MODULE_ARCHITECTURE_MOCKUP.platform.hint}
              </p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="text-[9px] font-medium uppercase tracking-wide text-reading-muted">
                {MODULE_ARCHITECTURE_MOCKUP.shared.caption}
              </span>
              <div className="flex flex-wrap gap-2">
                {MODULE_ARCHITECTURE_MOCKUP.shared.folders.map((f) => (
                  <div
                    key={f.id}
                    className="rounded-md border border-reading-code-border/80 bg-reading-soft/50 px-2 py-1 font-mono text-[9px] text-reading-prose shadow-sm"
                    aria-hidden
                  >
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border-2 border-dashed border-reading-accent/40 bg-reading-accent/[0.06] p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:p-3">
            <div className="mb-2 flex flex-col gap-1">
              <span className={cn(mockupStyles.label, 'text-reading-prose/90')}>
                {MODULE_ARCHITECTURE_MOCKUP.tenantContext.caption}
              </span>
              <p className="text-[9px] leading-snug text-reading-muted">
                {MODULE_ARCHITECTURE_MOCKUP.tenantContext.hint}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {MODULE_ARCHITECTURE_MOCKUP.tenantContext.tenants.map((t) => (
                <div
                  key={t.id}
                  className={cn(
                    mockupStyles.box,
                    'flex flex-col gap-1.5 border-reading-accent/35 bg-reading-surface/90 p-2'
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold text-reading-prose">
                      {t.label}
                    </span>
                    <div
                      className="h-1.5 w-7 shrink-0 rounded-full bg-reading-accent/40"
                      aria-hidden
                    />
                  </div>
                  <span className="font-mono text-[8px] text-reading-muted">
                    {t.slug}
                  </span>
                  <div className="flex gap-1 pt-0.5" aria-hidden>
                    <div
                      className={cn(
                        mockupStyles.line,
                        'h-1.5 flex-1 opacity-60'
                      )}
                    />
                    <div
                      className={cn(
                        mockupStyles.line,
                        'h-1.5 flex-1 opacity-60'
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[8px] leading-tight text-reading-muted/90">
              {MODULE_ARCHITECTURE_MOCKUP.tenantContext.bridge}
            </p>
          </div>

          <div>
            <div className="mb-2">
              <p className="font-mono text-[10px] font-medium tracking-tight text-reading-muted">
                {MODULE_ARCHITECTURE_MOCKUP.modulesBlock.title}
              </p>
              <p className="mt-0.5 text-[9px] leading-snug text-reading-muted/90">
                {MODULE_ARCHITECTURE_MOCKUP.modulesBlock.hint}
              </p>
              <p className="mt-1 text-[8px] text-reading-muted/85">
                {MODULE_ARCHITECTURE_MOCKUP.insideEach.caption}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {MODULE_ARCHITECTURE_MOCKUP.modulesBlock.modules.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    mockupStyles.box,
                    'flex flex-col gap-2 border-reading-code-border/90 p-2.5'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="size-2 shrink-0 rounded-sm bg-reading-accent/50"
                      aria-hidden
                    />
                    <span className="truncate font-mono text-[10px] font-semibold text-reading-prose sm:text-[11px]">
                      {m.label}
                    </span>
                  </div>
                  <div
                    className="space-y-1 border-t border-reading-code-border/50 pt-2"
                    aria-hidden
                  >
                    {MODULE_ARCHITECTURE_MOCKUP.insideEach.folders.map(
                      (folder) => (
                        <div
                          key={`${m.id}-${folder}`}
                          className="flex items-center gap-1.5"
                        >
                          <div className="h-px w-2 shrink-0 bg-reading-muted/35" />
                          <span className="font-mono text-[8px] leading-tight text-reading-muted sm:text-[9px]">
                            {folder}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'module-grid':
      return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {preset.items.map((item) => (
            <WireBox key={item.id} className="min-h-[3.5rem]">
              <span className="font-mono text-[11px] text-reading-prose">
                {item.label}
              </span>
              <div className={cn(mockupStyles.line, 'w-full')} aria-hidden />
            </WireBox>
          ))}
        </div>
      )

    case 'permission-ui-board':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              {PERMISSION_UI_MOCKUP.intro.hint}
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-reading-accent/40 bg-reading-accent/[0.06] p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:p-3">
            <div className="mb-2 flex flex-col gap-1">
              <span className={cn(mockupStyles.label, 'text-reading-prose/90')}>
                {PERMISSION_UI_MOCKUP.tenantContext.caption}
              </span>
              <p className="text-[9px] leading-snug text-reading-muted">
                {PERMISSION_UI_MOCKUP.tenantContext.hint}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {PERMISSION_UI_MOCKUP.tenantContext.tenants.map((t) => (
                <div
                  key={t.id}
                  className={cn(
                    mockupStyles.box,
                    'flex flex-col gap-1.5 border-reading-accent/35 bg-reading-surface/90 p-2'
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold text-reading-prose">
                      {t.label}
                    </span>
                    <div
                      className="h-1.5 w-7 shrink-0 rounded-full bg-reading-accent/40"
                      aria-hidden
                    />
                  </div>
                  <span className="font-mono text-[8px] text-reading-muted">
                    {t.slug}
                  </span>
                  <div className="flex gap-1 pt-0.5" aria-hidden>
                    <div
                      className={cn(
                        mockupStyles.line,
                        'h-1.5 flex-1 opacity-60'
                      )}
                    />
                    <div
                      className={cn(
                        mockupStyles.line,
                        'h-1.5 flex-1 opacity-60'
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[8px] leading-tight text-reading-muted/90">
              {PERMISSION_UI_MOCKUP.tenantContext.bridge}
            </p>
          </div>

          <div>
            <div className="mb-2">
              <span className={cn(mockupStyles.label, 'block text-reading-prose/90')}>
                {PERMISSION_UI_MOCKUP.matrixSection.caption}
              </span>
              <p className="mt-1 text-[9px] leading-snug text-reading-muted">
                {PERMISSION_UI_MOCKUP.matrixSection.hint}
              </p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-reading-code-border/70 bg-linear-to-b from-reading-surface/90 to-reading-soft/40 p-2.5 shadow-inner">
              <div
                className="inline-grid gap-x-1 gap-y-1.5"
                style={{
                  gridTemplateColumns: `minmax(3.25rem,auto) repeat(${PERMISSION_UI_MOCKUP.actions.length}, minmax(3.25rem, 1fr))`,
                }}
              >
                <div />
                {PERMISSION_UI_MOCKUP.actions.map((a) => (
                  <div
                    key={a.id}
                    className="hyphens-auto px-0.5 pb-1 text-center font-mono text-[7px] leading-tight break-words text-reading-muted sm:text-[8px]"
                  >
                    {a.label}
                  </div>
                ))}
                {PERMISSION_UI_MOCKUP.roles.map((role, ri) => (
                  <React.Fragment key={role.id}>
                    <div
                      className={cn(
                        mockupStyles.label,
                        'flex items-center py-1.5 pr-2 normal-case'
                      )}
                    >
                      {role.label}
                    </div>
                    {PERMISSION_UI_MOCKUP.actions.map((action, ai) => {
                      const granted = PERMISSION_UI_MOCKUP.matrix[ri][ai]
                      const id = `${role.id}-${action.id}`
                      return (
                        <div
                          key={id}
                          className={cn(
                            'flex min-h-10 min-w-10 items-center justify-center rounded-md border p-1',
                            granted
                              ? 'border-reading-accent/45 bg-reading-accent/18 shadow-sm'
                              : 'border border-dashed border-reading-code-border/55 bg-reading-muted/[0.06]'
                          )}
                          aria-hidden
                        >
                          {granted ? (
                            <Check
                              className="size-3.5 shrink-0 text-reading-accent"
                              strokeWidth={2.75}
                              aria-hidden
                            />
                          ) : (
                            <span className="select-none text-[10px] font-light text-reading-muted/45">
                              —
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] text-reading-muted">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-flex size-6 items-center justify-center rounded-md border border-reading-accent/40 bg-reading-accent/15"
                aria-hidden
              >
                <Check
                  className="size-3 text-reading-accent"
                  strokeWidth={2.75}
                  aria-hidden
                />
              </span>
              Allowed
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className="inline-flex size-6 items-center justify-center rounded-md border border-dashed border-reading-code-border/60 bg-transparent"
                aria-hidden
              >
                <span className="text-[10px] text-reading-muted/45">—</span>
              </span>
              Denied / hidden
            </span>
          </div>
        </div>
      )

    case 'perm-matrix':
      return (
        <div className="flex flex-col gap-2 rounded-lg border border-reading-code-border/70 bg-reading-surface/40 p-2 shadow-inner">
          <p className="text-[9px] leading-snug text-reading-muted">
            Roles × resources — each cell is a policy slot (compact matrix
            preset).
          </p>
          <div className="overflow-x-auto">
            <div
              className="inline-grid gap-1.5"
              style={{
                gridTemplateColumns: `auto repeat(${preset.resources.length}, minmax(2.5rem,1fr))`,
              }}
            >
              <div />
              {preset.resources.map((r) => (
                <div
                  key={r}
                  className={cn(mockupStyles.label, 'px-1 text-center')}
                >
                  {r}
                </div>
              ))}
              {preset.roles.map((role) => (
                <React.Fragment key={role}>
                  <div className={cn(mockupStyles.label, 'py-2 pr-2')}>
                    {role}
                  </div>
                  {preset.resources.map((res) => {
                    const id = `${role}-${res}`
                    return (
                      <WireBox
                        key={id}
                        className="min-h-9 min-w-9 border-reading-code-border/75 bg-reading-soft/40 p-1.5"
                      >
                        <span className="sr-only">
                          {role} — {res}
                        </span>
                        <div
                          className="m-auto size-2 rounded-sm bg-reading-accent/40"
                          aria-hidden
                        />
                      </WireBox>
                    )
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )

    case 'api-layer-board':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              {API_LAYER_MOCKUP.intro.hint}
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-reading-accent/35 bg-reading-accent/[0.05] p-2.5 sm:p-3">
            <div className="mb-2 flex flex-col gap-1">
              <span className={cn(mockupStyles.label, 'text-reading-prose/90')}>
                {API_LAYER_MOCKUP.requestContext.caption}
              </span>
              <p className="text-[9px] leading-snug text-reading-muted">
                {API_LAYER_MOCKUP.requestContext.hint}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {API_LAYER_MOCKUP.requestContext.headers.map((h) => (
                <div
                  key={h.id}
                  className="rounded-md border border-reading-accent/30 bg-reading-surface/90 px-2 py-1 font-mono text-[8px] text-reading-prose shadow-sm sm:text-[9px]"
                  aria-hidden
                >
                  {h.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-0">
            {API_LAYER_MOCKUP.layers.map((layer, i) => (
              <React.Fragment key={layer.id}>
                <div
                  className={cn(
                    mockupStyles.box,
                    'flex flex-col gap-1.5 border-reading-code-border/85 p-2.5 sm:p-3'
                  )}
                >
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                    <span className="text-[10px] font-semibold text-reading-prose">
                      {layer.label}
                    </span>
                    <span className="font-mono text-[8px] text-reading-muted sm:text-[9px]">
                      {layer.subtitle}
                    </span>
                  </div>
                  <p className="text-[8px] leading-snug text-reading-muted sm:text-[9px]">
                    {layer.detail}
                  </p>
                  <div
                    className={cn(mockupStyles.line, 'h-1.5 w-full opacity-75')}
                    aria-hidden
                  />
                </div>
                {i < API_LAYER_MOCKUP.layers.length - 1 ? (
                  <div className="flex justify-center py-1" aria-hidden>
                    <ChevronDown className="size-4 text-reading-muted/80" />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      )

    case 'layer-stack':
      return (
        <div className="flex flex-col gap-2">
          {preset.layers.map((layer) => (
            <WireBox
              key={layer.id}
              className="min-h-[2.85rem] border-reading-code-border/85 bg-reading-surface/50"
            >
              <span className={mockupStyles.label}>{layer.label}</span>
              <div className={cn(mockupStyles.line, 'w-full')} aria-hidden />
            </WireBox>
          ))}
        </div>
      )

    case 'flow-horizontal':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Global slices compose: auth and tenant context first, then cached
              server state, then UI-only state. Modules keep local state only
              when it truly does not belong in the store.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-stretch">
            {preset.steps.map((step, i) => (
              <React.Fragment key={step.id}>
                <WireBox className="min-h-[4rem] flex-1 border-reading-code-border/85 bg-linear-to-b from-reading-surface/90 to-reading-soft/40">
                  <span className={mockupStyles.label}>{step.label}</span>
                  <p className="text-[8px] leading-snug text-reading-muted/90">
                    {step.id === 'auth'
                      ? 'Session · tenant · claims'
                      : step.id === 'cache'
                        ? 'TanStack / RTK Query shape'
                        : 'Panels, selection, UI flags'}
                  </p>
                  <div className={cn(mockupStyles.line, 'mt-auto w-full')} aria-hidden />
                </WireBox>
                {i < preset.steps.length - 1 ? (
                  <ChevronRight
                    className={cn(
                      mockupStyles.arrow,
                      'mx-auto size-4 shrink-0 self-center sm:mx-0'
                    )}
                    aria-hidden
                  />
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      )

    case 'shelf':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Core UI kit: build each primitive once — tables, forms, modals,
              empty states — then compose every module from the same shelf.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {preset.slots.map((slot) => (
              <WireBox
                key={slot.id}
                className="h-[4.75rem] min-w-[4.75rem] flex-1 basis-[30%] border-reading-code-border/85 bg-reading-surface/50"
              >
                <span className={mockupStyles.label}>{slot.label}</span>
                <BlockTypePreview label={slot.label} />
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'table-skeleton':
      return (
        <div className="flex flex-col gap-2 rounded-lg border border-reading-code-border/75 bg-linear-to-b from-reading-surface/95 to-reading-soft/35 p-2.5 shadow-inner sm:p-3">
          <p className="text-[9px] leading-snug text-reading-muted">
            Toolbar, column headers, dense rows, footer — one pattern for sort,
            filter, and pagination across tenants.
          </p>
          <div
            className="flex flex-wrap items-center justify-between gap-2 border-b border-reading-code-border/65 pb-2"
            aria-hidden
          >
            <div className="flex flex-wrap gap-1.5">
              <div className="h-2 w-16 rounded-sm bg-reading-muted/40" />
              <div className="h-2 w-12 rounded-sm bg-reading-muted/35" />
            </div>
            <div className="flex gap-1">
              <div className="h-5 w-5 rounded border border-reading-code-border/70 bg-reading-surface/80" />
              <div className="h-5 w-5 rounded border border-reading-code-border/70 bg-reading-surface/80" />
            </div>
          </div>
          <div className="flex gap-2 border-b border-reading-code-border/55 pb-2">
            {preset.columns.map((col, ci) => (
              <div key={col} className="flex flex-1 items-center gap-0.5">
                <span
                  className={cn(mockupStyles.label, 'text-left normal-case')}
                >
                  {col}
                </span>
                {ci < preset.columns.length - 1 ? (
                  <ChevronDown
                    className="size-2.5 shrink-0 text-reading-muted/50"
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>
          {Array.from({ length: preset.rowCount }).map((_, ri) => (
            <div key={ri} className="flex gap-2">
              {preset.columns.map((col, ci) => {
                const id = `r${ri}-c${ci}`
                return (
                  <WireBox
                    key={id}
                    className="min-h-8 flex-1 border-reading-code-border/70 bg-reading-surface/50 p-1.5"
                  >
                    <div
                      className={cn(
                        mockupStyles.line,
                        'h-2 w-full',
                        ci === preset.columns.length - 1 && 'w-3/5 opacity-70'
                      )}
                      aria-hidden
                    />
                  </WireBox>
                )
              })}
            </div>
          ))}
          <div
            className="flex items-center justify-between gap-2 border-t border-reading-code-border/55 pt-2"
            aria-hidden
          >
            <div className={cn(mockupStyles.line, 'h-1.5 w-20')} />
            <div className="flex gap-1">
              <div className={cn(mockupStyles.line, 'h-1.5 w-6')} />
              <div className={cn(mockupStyles.line, 'h-1.5 w-6')} />
              <div className={cn(mockupStyles.line, 'h-1.5 w-6')} />
            </div>
          </div>
        </div>
      )

    case 'state-trio':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Every data surface needs three honest states: skeleton while
              loading, real rows when data exists, empty or error when there is
              nothing to show — especially important in multi-tenant SaaS where
              new orgs start empty.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {preset.states.map((s) => (
              <WireBox
                key={s.id}
                className={cn(
                  'min-h-[5.5rem]',
                  s.id === 'load' &&
                    'border-reading-accent/35 bg-reading-accent/[0.04]',
                  s.id === 'empty' && 'border-dashed border-reading-muted/50',
                  s.id === 'ok' && 'border-reading-code-border/85 bg-reading-surface/55'
                )}
              >
                <span className={mockupStyles.label}>{s.label}</span>
                {s.id === 'load' ? (
                  <div className="mt-2 space-y-2" aria-hidden>
                    <div className={cn(mockupStyles.line, 'animate-pulse')} />
                    <div
                      className={cn(mockupStyles.line, 'w-4/5 animate-pulse')}
                    />
                  </div>
                ) : s.id === 'empty' ? (
                  <div
                    className="mt-3 flex flex-col items-center gap-1"
                    aria-hidden
                  >
                    <div className="size-8 rounded-full border-2 border-dashed border-reading-code-border" />
                    <div className={cn(mockupStyles.line, 'w-2/3')} />
                  </div>
                ) : (
                  <div className="mt-2 space-y-1" aria-hidden>
                    <div className={cn(mockupStyles.line, 'w-full')} />
                    <div className={cn(mockupStyles.line, 'w-full')} />
                    <div className={cn(mockupStyles.line, 'w-3/4')} />
                  </div>
                )}
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'route-nodes':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Central route config: each path can require auth, tenant feature
              flags, or permission keys. Locks mean &quot;gate before
              render&quot; — same pattern for every customer.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {preset.nodes.map((node, i) => (
              <React.Fragment key={node.id}>
                <WireBox className="min-h-11 min-w-[4.75rem] shrink-0 border-reading-accent/25 bg-reading-soft/40 px-2 py-1.5">
                  <span className="font-mono text-[10px] font-medium text-reading-prose">
                    {node.label}
                  </span>
                  <div
                    className="mt-1 h-0.5 w-full rounded-full bg-reading-accent/25"
                    aria-hidden
                  />
                </WireBox>
                {i < preset.nodes.length - 1 ? (
                  <>
                    <ChevronRight
                      className="size-4 shrink-0 text-reading-muted/75"
                      aria-hidden
                    />
                    <div
                      className="flex flex-col items-center gap-0.5 rounded-md border border-dashed border-reading-accent/40 bg-reading-accent/[0.07] px-1 py-0.5"
                      aria-hidden
                    >
                      <Lock className="size-3 text-reading-accent/70" />
                      <span className="text-[6px] font-medium uppercase tracking-wide text-reading-muted">
                        gate
                      </span>
                    </div>
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      )

    case 'timeline':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Prioritize what users feel first: shrink the bundle, stabilize
              render, then tighten data — measure each layer; multi-tenant load
              patterns make cheap wins compound.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-2">
            {preset.bars.map((bar, i) => (
              <WireBox
                key={bar.id}
                className={cn(
                  'min-h-[4.25rem] border-reading-code-border/85 bg-reading-surface/50 sm:min-h-0 sm:w-full sm:flex-1',
                  i === 0 && 'sm:pt-4',
                  i === 1 && 'sm:pt-2',
                  i === 2 && 'sm:pt-0'
                )}
              >
                <span className={mockupStyles.label}>{bar.label}</span>
                <div
                  className={cn(
                    'mt-auto w-full rounded-sm bg-linear-to-t from-reading-accent/50 to-reading-accent/15 shadow-inner',
                    i === 0 && 'h-8 sm:h-10',
                    i === 1 && 'h-8 sm:h-14',
                    i === 2 && 'h-8 sm:h-[4.5rem]'
                  )}
                  aria-hidden
                />
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'checklist':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Turn team rules into a repeatable PR checklist — same bar for every
              contributor so the codebase stays sellable as you scale.
            </p>
          </div>
          <ul className="space-y-2 rounded-lg border border-reading-code-border/70 bg-reading-surface/40 p-2.5">
            {preset.items.map((item) => (
              <li key={item.id}>
                <WireBox className="min-h-10 flex-row items-center gap-3 border-reading-code-border/75 bg-reading-soft/30 py-2">
                  <div
                    className="size-4 shrink-0 rounded border-2 border-reading-code-border/80 bg-reading-surface/90 shadow-inner"
                    aria-hidden
                  />
                  <span className="text-[11px] leading-snug text-reading-prose">
                    {item.label}
                  </span>
                </WireBox>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'pyramid':
      return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              Many fast unit tests, fewer integration tests, a thin slice of E2E
              for critical paths — pyramid keeps CI honest for every tenant
              release.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            {preset.levels.map((level, i) => (
              <WireBox
                key={level.id}
                className={cn(
                  'min-h-10 border-reading-code-border/85',
                  i === 0 && 'bg-reading-accent/10',
                  i === 1 && 'bg-reading-soft/60',
                  i === preset.levels.length - 1 &&
                    'bg-linear-to-b from-reading-soft/80 to-reading-surface/50'
                )}
                style={{ width: `${36 + i * 20}%` }}
              >
                <span className={mockupStyles.label}>{level.label}</span>
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'tenant-columns':
      return (
        <div className="flex flex-col gap-3">
          <div className="rounded-lg border-2 border-dashed border-reading-accent/40 bg-reading-accent/[0.06] p-2.5 sm:p-3">
            <span className={cn(mockupStyles.label, 'text-reading-prose/90')}>
              Per-tenant delivery
            </span>
            <p className="mt-1 text-[9px] leading-snug text-reading-muted">
              Same deploy: branding, feature entitlements, and environment URLs
              differ per customer — configured, not forked.
            </p>
            <div className="mt-2 flex flex-wrap gap-2" aria-hidden>
              <div className="rounded-md border border-reading-accent/35 bg-reading-surface/90 px-2 py-1 font-mono text-[8px] text-reading-prose">
                tenant.config
              </div>
              <div className="rounded-md border border-reading-accent/35 bg-reading-surface/90 px-2 py-1 font-mono text-[8px] text-reading-prose">
                featureFlags
              </div>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {preset.columns.map((col) => (
              <WireBox
                key={col.id}
                className="min-h-[7.5rem] border-reading-code-border/85 bg-linear-to-b from-reading-surface/90 to-reading-soft/40"
              >
                <div className="mb-1 border-b border-reading-accent/25 pb-1.5">
                  <span className={mockupStyles.label}>{col.label}</span>
                </div>
                <div className="mt-2 flex flex-col gap-1.5" aria-hidden>
                  {Array.from({ length: col.lines }).map((_, li) => (
                    <div
                      key={li}
                      className={cn(
                        mockupStyles.line,
                        'w-full',
                        li === 0 && 'bg-reading-accent/30 opacity-100'
                      )}
                    />
                  ))}
                </div>
              </WireBox>
            ))}
          </div>
        </div>
      )

    case 'pitfall-cards':
      return (
        <div className="flex flex-col gap-3">
          <div className={cn(mockupStyles.box, 'border-dashed p-2.5')}>
            <p className="text-[9px] leading-relaxed text-reading-muted">
              These patterns quietly kill velocity and resale value — name them,
              ban them in review, and replace with config + primitives.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {preset.items.map((item) => (
              <WireBox
                key={item.id}
                className="min-h-[4.75rem] border border-dashed border-destructive/35 bg-destructive/[0.05]"
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle
                    className="mt-0.5 size-3.5 shrink-0 text-destructive/80"
                    aria-hidden
                  />
                  <span className="text-[11px] font-medium leading-snug text-reading-prose">
                    {item.label}
                  </span>
                </div>
                <div
                  className={cn(
                    mockupStyles.line,
                    'mt-2 w-full opacity-50'
                  )}
                  aria-hidden
                />
              </WireBox>
            ))}
          </div>
        </div>
      )

    default: {
      const _x: never = preset
      return _x
    }
  }
}
