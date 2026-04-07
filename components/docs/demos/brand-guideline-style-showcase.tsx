'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const semanticSwatches = [
  { name: 'Background', cls: 'bg-background text-foreground border-border', token: '--background' },
  { name: 'Foreground', cls: 'bg-foreground text-background border-border', token: '--foreground' },
  { name: 'Primary', cls: 'bg-primary text-primary-foreground border-primary/25', token: '--primary' },
  { name: 'Secondary', cls: 'bg-secondary text-secondary-foreground border-secondary/30', token: '--secondary' },
  { name: 'Accent', cls: 'bg-accent text-accent-foreground border-accent/30', token: '--accent' },
  { name: 'Muted', cls: 'bg-muted text-muted-foreground border-border', token: '--muted' },
  { name: 'Card', cls: 'bg-card text-card-foreground border-border', token: '--card' },
  { name: 'Popover', cls: 'bg-popover text-popover-foreground border-border', token: '--popover' },
  { name: 'Destructive', cls: 'bg-destructive text-destructive-foreground border-destructive/40', token: '--destructive' },
  { name: 'Sidebar', cls: 'bg-sidebar text-sidebar-foreground border-sidebar-border', token: '--sidebar' },
  { name: 'Sidebar Primary', cls: 'bg-sidebar-primary text-sidebar-primary-foreground border-sidebar-border', token: '--sidebar-primary' },
  { name: 'Reading Accent', cls: 'bg-reading-accent text-reading-accent-fg border-reading-nav-active-border/50', token: '--reading-accent' },
] as const

export function BrandGuidelineStyleShowcase() {
  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Color system preview</CardTitle>
          <CardDescription>
            Real semantic tokens from the active theme. Use these classes instead of raw hex in feature components.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {semanticSwatches.map((swatch) => (
            <div key={swatch.name} className={`rounded-lg border p-3 ${swatch.cls}`}>
              <p className="text-sm font-semibold">{swatch.name}</p>
              <p className="mt-1 text-xs opacity-85">{swatch.token}</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="outline" className="bg-background/70 text-foreground">
                  Sample chip
                </Badge>
                <span className="text-xs">Aa 123</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Typography scale preview</CardTitle>
          <CardDescription>
            All core UI text tiers with realistic product content examples.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-4xl font-semibold tracking-tight text-foreground">
            Display: Project performance insights
          </p>
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            H1: Portfolio delivery dashboard
          </p>
          <p className="text-2xl font-semibold text-foreground">
            H2: Active projects by milestone
          </p>
          <p className="text-xl font-semibold text-foreground">
            H3: Sprint 14 readiness checklist
          </p>
          <p className="text-base leading-7 text-foreground">
            Body L: This quarter roadmap summarizes delivery confidence, dependency
            risk, and ownership accountability across all active streams.
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            Body M: Use this section for supporting details, assumptions, and
            operating notes.
          </p>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Label: status
          </p>
          <p className="text-xs text-muted-foreground">
            Caption: Last synchronized 2 minutes ago.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Mono: PRJ-2026-ALPHA / DEP-142 / user_7f2a91
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>UI control examples</CardTitle>
          <CardDescription>
            Standardized control styles and states using shared design tokens.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          <Button variant="outline">Outline action</Button>
          <Button variant="ghost">Ghost action</Button>
          <Button variant="destructive">Destructive action</Button>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </CardContent>
      </Card>
    </div>
  )
}

