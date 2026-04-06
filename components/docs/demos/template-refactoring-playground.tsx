'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Filter, LayoutGrid, MoreHorizontal, PanelRight, Table2 } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DEMO_CARDS,
  DEMO_DIALOG,
  DEMO_DRAWER,
  DEMO_FILTER_STATUS_OPTIONS,
  DEMO_FILTERS,
  DEMO_FILTER_ALL,
  DEMO_FORM,
  DEMO_MEMBER_ROLES,
  DEMO_PLAYGROUND,
  DEMO_PROJECT_ROWS,
  DEMO_ROLE_LABELS,
  DEMO_STATUS_BADGE_VARIANT,
  DEMO_TABLE,
  DEMO_TABS,
  DEMO_TOAST,
  type DemoProjectRow,
  type DemoProjectStatus,
  type DemoTabId,
} from '@/config/demos/template-refactoring'
import {
  demoMemberFormSchema,
  type DemoMemberFormValues,
} from '@/config/demos/template-refactoring.schema'
import { docsTableRowActionsAria } from '@/config/docs/copy'
import { cn } from '@/lib/utils'

const TAB_ICONS: Record<DemoTabId, React.ComponentType<{ className?: string }>> =
  {
    cards: LayoutGrid,
    table: Table2,
    form: LayoutGrid,
    overlays: PanelRight,
    filters: Filter,
  }

function statusBadge(status: DemoProjectStatus) {
  return (
    <Badge variant={DEMO_STATUS_BADGE_VARIANT[status]} className="capitalize">
      {status}
    </Badge>
  )
}

export function TemplateRefactoringPlayground() {
  return (
    <section
      className="mt-12 border-t border-reading-code-border pt-10"
      aria-labelledby={DEMO_PLAYGROUND.headingId}
    >
      <div className="mb-6">
        <h2
          id={DEMO_PLAYGROUND.headingId}
          className="text-xl font-semibold tracking-tight text-reading-prose"
        >
          {DEMO_PLAYGROUND.sectionTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-reading-muted">
          {DEMO_PLAYGROUND.sectionDescription}
        </p>
      </div>

      <Tabs defaultValue={DEMO_TABS.defaultId} className="w-full min-w-0">
        <TabsList className="mb-4 h-auto w-full flex-wrap justify-start gap-1 bg-reading-soft p-1 sm:w-auto">
          {DEMO_TABS.items.map((tab) => {
            const Icon = TAB_ICONS[tab.id]
            const showIcon = tab.id !== 'form'
            return (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(showIcon && 'gap-1.5')}
              >
                {showIcon ? (
                  <Icon className="size-3.5" aria-hidden />
                ) : null}
                {tab.label}
              </TabsTrigger>
            )
          })}
        </TabsList>

        <TabsContent value="cards" className="mt-0 outline-none">
          <CardsDemo />
        </TabsContent>
        <TabsContent value="table" className="mt-0 outline-none">
          <TableDemo />
        </TabsContent>
        <TabsContent value="form" className="mt-0 outline-none">
          <FormDemo />
        </TabsContent>
        <TabsContent value="overlays" className="mt-0 outline-none">
          <OverlaysDemo />
        </TabsContent>
        <TabsContent value="filters" className="mt-0 outline-none">
          <FiltersDemo />
        </TabsContent>
      </Tabs>
    </section>
  )
}

function CardsDemo() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {DEMO_CARDS.map((card, index) => (
        <Card
          key={index}
          className="border-reading-code-border bg-card shadow-sm transition-shadow hover:shadow-md"
        >
          <CardHeader className="pb-2">
            <CardDescription>{card.description}</CardDescription>
            <CardTitle className="text-3xl tabular-nums">{card.value}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {card.body}
          </CardContent>
          {card.cta ? (
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full">
                {card.cta}
              </Button>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  )
}

function TableDemo() {
  return (
    <Card className="border-reading-code-border">
      <CardHeader>
        <CardTitle className="text-base">{DEMO_TABLE.title}</CardTitle>
        <CardDescription>{DEMO_TABLE.description}</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[100px]">{DEMO_TABLE.columns.id}</TableHead>
              <TableHead>{DEMO_TABLE.columns.project}</TableHead>
              <TableHead>{DEMO_TABLE.columns.owner}</TableHead>
              <TableHead>{DEMO_TABLE.columns.status}</TableHead>
              <TableHead className="w-[70px] text-right">
                {DEMO_TABLE.columns.actions}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DEMO_PROJECT_ROWS.map((row: DemoProjectRow) => (
              <TableRow key={row.id}>
                <TableCell className="font-mono text-xs text-muted-foreground">
                  {row.id}
                </TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.owner}</TableCell>
                <TableCell>{statusBadge(row.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        aria-label={docsTableRowActionsAria(row.name)}
                      >
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuLabel>{DEMO_TABLE.menu.label}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() =>
                          toast.message(DEMO_TOAST.table.title, {
                            description: DEMO_TOAST.editDescription(row.name),
                          })
                        }
                      >
                        {DEMO_TABLE.menu.edit}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() =>
                          toast.message(DEMO_TOAST.table.title, {
                            description: DEMO_TOAST.archiveDescription(row.name),
                          })
                        }
                      >
                        {DEMO_TABLE.menu.archive}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function FormDemo() {
  const form = useForm<DemoMemberFormValues>({
    resolver: zodResolver(demoMemberFormSchema),
    defaultValues: {
      displayName: '',
      workEmail: '',
      role: DEMO_FORM.defaultRole,
    },
  })

  function onSubmit(values: DemoMemberFormValues) {
    toast.success(DEMO_TOAST.formSuccessTitle, {
      description: DEMO_TOAST.formSuccessDescription(
        values.displayName,
        values.workEmail,
        values.role
      ),
    })
  }

  return (
    <Card className="border-reading-code-border">
      <CardHeader>
        <CardTitle className="text-base">{DEMO_FORM.title}</CardTitle>
        <CardDescription>
          {DEMO_FORM.descriptionLead}{' '}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            {DEMO_FORM.descriptionCodeLabel}
          </code>{' '}
          {DEMO_FORM.descriptionTrail}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md space-y-4"
          >
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{DEMO_FORM.fields.displayName.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={DEMO_FORM.fields.displayName.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="workEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{DEMO_FORM.fields.workEmail.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={DEMO_FORM.fields.workEmail.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {DEMO_FORM.fields.workEmail.description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{DEMO_FORM.fields.role.label}</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={DEMO_FORM.fields.role.placeholder}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {DEMO_MEMBER_ROLES.map((role) => (
                        <SelectItem key={role} value={role}>
                          {DEMO_ROLE_LABELS[role]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{DEMO_FORM.submit}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function OverlaysDemo() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">{DEMO_DIALOG.trigger}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{DEMO_DIALOG.title}</DialogTitle>
            <DialogDescription>{DEMO_DIALOG.description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2 py-2">
            <label className="text-sm font-medium" htmlFor="demo-field">
              {DEMO_DIALOG.fieldLabel}
            </label>
            <Input
              id="demo-field"
              placeholder={DEMO_DIALOG.fieldPlaceholder}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{DEMO_DIALOG.cancel}</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={() =>
                  toast.success(DEMO_TOAST.dialogSavedTitle, {
                    description: DEMO_TOAST.dialogSavedDescription,
                  })
                }
              >
                {DEMO_DIALOG.save}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">{DEMO_DRAWER.trigger}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{DEMO_DRAWER.title}</DrawerTitle>
            <DrawerDescription>{DEMO_DRAWER.description}</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-1 flex-col gap-3 px-4 text-sm text-muted-foreground">
            <p>{DEMO_DRAWER.bodyLead}</p>
            <ul className="list-inside list-disc space-y-1">
              {DEMO_DRAWER.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <DrawerFooter>
            <Button
              onClick={() =>
                toast.message(DEMO_TOAST.drawerActionTitle, {
                  description: DEMO_TOAST.drawerActionDescription,
                })
              }
            >
              {DEMO_DRAWER.apply}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">{DEMO_DRAWER.close}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

function FiltersDemo() {
  const [query, setQuery] = React.useState('')
  const [status, setStatus] = React.useState<string>(DEMO_FILTER_ALL)

  const filtered = React.useMemo(() => {
    return DEMO_PROJECT_ROWS.filter((row) => {
      const q = query.trim().toLowerCase()
      const matchesQ =
        !q ||
        row.name.toLowerCase().includes(q) ||
        row.owner.toLowerCase().includes(q) ||
        row.id.toLowerCase().includes(q)
      const matchesS = status === DEMO_FILTER_ALL || row.status === status
      return matchesQ && matchesS
    })
  }, [query, status])

  return (
    <Card className="border-reading-code-border">
      <CardHeader>
        <CardTitle className="text-base">{DEMO_FILTERS.title}</CardTitle>
        <CardDescription>{DEMO_FILTERS.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="grid w-full gap-1.5 sm:max-w-xs">
            <span className="text-sm font-medium text-foreground">
              {DEMO_FILTERS.searchLabel}
            </span>
            <Input
              placeholder={DEMO_FILTERS.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={DEMO_FILTERS.searchAria}
            />
          </div>
          <div className="grid w-full gap-1.5 sm:w-44">
            <span className="text-sm font-medium text-foreground">
              {DEMO_FILTERS.statusLabel}
            </span>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger aria-label={DEMO_FILTERS.statusAria}>
                <SelectValue placeholder={DEMO_FILTERS.statusPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {DEMO_FILTER_STATUS_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setQuery('')
                setStatus(DEMO_FILTER_ALL)
                toast.message(DEMO_TOAST.filtersCleared)
              }}
            >
              {DEMO_FILTERS.reset}
            </Button>
          </div>
        </div>

        <ul
          className={cn(
            'divide-y divide-reading-code-border rounded-lg border border-reading-code-border bg-reading-surface'
          )}
          aria-live="polite"
          aria-label={DEMO_FILTERS.filteredListLabel}
        >
          {filtered.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-reading-muted">
              {DEMO_FILTERS.empty}
            </li>
          ) : (
            filtered.map((row) => (
              <li
                key={row.id}
                className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 transition-colors hover:bg-reading-row-hover"
              >
                <div>
                  <p className="font-medium text-reading-prose">{row.name}</p>
                  <p className="text-xs text-reading-muted">
                    {row.id} · {row.owner}
                  </p>
                </div>
                {statusBadge(row.status)}
              </li>
            ))
          )}
        </ul>
        <p className="text-xs text-reading-muted">
          {DEMO_FILTERS.summary(filtered.length, DEMO_PROJECT_ROWS.length)}
        </p>
      </CardContent>
    </Card>
  )
}
