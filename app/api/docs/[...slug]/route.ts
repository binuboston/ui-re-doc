import { NextResponse } from 'next/server'

import { extractHeadings } from '@/lib/docs/markdown'
import { getDocPageBySlug } from '@/lib/docs/registry'

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await context.params
  const path = slug.join('/')
  const page = getDocPageBySlug(path)

  if (!page) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const headings = extractHeadings(page.markdown)

  return NextResponse.json({
    slug: page.slug,
    title: page.title,
    markdown: page.markdown,
    headings,
  })
}
