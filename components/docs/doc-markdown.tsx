'use client'

import { Link2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { docsCopy } from '@/config/docs/copy'
import { slugifyHeading } from '@/lib/docs/markdown'
import { cn } from '@/lib/utils'

const linkStyles = cn(
  'font-medium text-reading-accent underline decoration-reading-accent/35 underline-offset-[5px] transition-colors duration-200',
  'hover:text-reading-accent-fg hover:decoration-reading-accent',
  'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reading-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-reading-surface'
)

function HeadingAnchor({
  id,
  label,
}: {
  id: string
  label: string
}) {
  return (
    <a
      href={`#${id}`}
      className={cn(
        'mt-1 shrink-0 text-reading-muted opacity-0 transition-all duration-200',
        'group-hover:opacity-100 group-focus-within:opacity-100',
        'hover:text-reading-accent focus-visible:opacity-100',
        'focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reading-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-reading-surface'
      )}
      aria-label={`${docsCopy.markdown.linkToSectionPrefix} ${label}`}
    >
      <Link2 className="size-4" aria-hidden />
    </a>
  )
}

export function DocMarkdown({ source }: { source: string }) {
  return (
    <div
      className={cn(
        'doc-reading max-w-none',
        '[&_strong]:font-semibold [&_strong]:text-reading-prose'
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              className="mb-3 scroll-mt-24 text-3xl font-semibold tracking-tight text-reading-prose"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => {
            const text = String(children)
            const id = slugifyHeading(text)
            return (
              <h2
                id={id}
                className={cn(
                  'group scroll-mt-24 border-b border-reading-code-border pb-2 text-2xl font-semibold tracking-tight text-reading-prose',
                  'mt-12 flex items-start gap-2 first:mt-0',
                  'border-l-2 border-transparent pl-1 transition-[border-color,padding] duration-200',
                  'hover:border-reading-accent hover:pl-3'
                )}
                {...props}
              >
                <HeadingAnchor id={id} label={text} />
                <span className="min-w-0 flex-1 leading-snug">{children}</span>
              </h2>
            )
          },
          h3: ({ children, ...props }) => {
            const text = String(children)
            const id = slugifyHeading(text)
            return (
              <h3
                id={id}
                className={cn(
                  'group scroll-mt-24 text-xl font-semibold tracking-tight text-reading-prose',
                  'mt-10 flex items-start gap-2',
                  'border-l-2 border-transparent pl-1 transition-[border-color,padding] duration-200',
                  'hover:border-reading-accent/70 hover:pl-3'
                )}
                {...props}
              >
                <HeadingAnchor id={id} label={text} />
                <span className="min-w-0 flex-1 leading-snug">{children}</span>
              </h3>
            )
          },
          p: ({ children, ...props }) => (
            <p className="mt-4 leading-7 text-reading-muted" {...props}>
              {children}
            </p>
          ),
          a: ({ href, children, ...props }) => {
            const external = href?.startsWith('http')
            return (
              <a
                href={href}
                className={linkStyles}
                {...(external
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
                {...props}
              >
                {children}
              </a>
            )
          },
          ul: ({ children, ...props }) => (
            <ul
              className="mt-4 list-disc space-y-2 pl-6 text-reading-muted marker:text-reading-muted"
              {...props}
            >
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol
              className="mt-4 list-decimal space-y-2 pl-6 text-reading-muted marker:text-reading-muted"
              {...props}
            >
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="leading-7 [&>p]:mt-0" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote
              className={cn(
                'my-6 border-l-2 border-reading-accent bg-reading-soft py-3 pl-4 pr-3 text-reading-muted',
                'rounded-r-md transition-colors duration-200 hover:bg-reading-soft-hover'
              )}
              {...props}
            >
              {children}
            </blockquote>
          ),
          hr: ({ ...props }) => (
            <hr
              className="my-10 border-0 border-t border-reading-code-border"
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const isBlock = /\blanguage-/.test(className || '')
            if (isBlock) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code
                className={cn(
                  'rounded-md border border-reading-code-border bg-reading-code-bg px-1.5 py-0.5 font-mono text-[0.9em] text-reading-prose',
                  'transition-colors duration-200 hover:border-reading-muted/50'
                )}
                {...props}
              >
                {children}
              </code>
            )
          },
          pre: ({ children, ...props }) => (
            <pre
              className={cn(
                'group mt-4 overflow-x-auto rounded-lg border border-reading-code-border bg-reading-code-bg p-4 text-sm leading-relaxed text-reading-prose',
                'shadow-none transition-[box-shadow,border-color] duration-200',
                'hover:border-reading-muted/45 hover:shadow-sm'
              )}
              {...props}
            >
              {children}
            </pre>
          ),
          table: ({ children, ...props }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-reading-code-border bg-reading-surface transition-colors duration-200 hover:border-reading-muted/35">
              <table
                className="w-full border-collapse text-left text-sm text-reading-muted"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
          thead: ({ children, ...props }) => (
            <thead className="border-b border-reading-code-border bg-reading-soft" {...props}>
              {children}
            </thead>
          ),
          tbody: ({ children, ...props }) => (
            <tbody
              className="[&_tr]:transition-colors [&_tr]:duration-150 [&_tr:hover]:bg-reading-row-hover"
              {...props}
            >
              {children}
            </tbody>
          ),
          th: ({ children, ...props }) => (
            <th
              className="border-b border-reading-code-border px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-reading-prose"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td
              className="border-b border-reading-code-border/70 px-3 py-2.5 text-reading-muted"
              {...props}
            >
              {children}
            </td>
          ),
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}
