export function extractHeadings(
  markdown: string
): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = []
  for (const line of markdown.split('\n')) {
    const trimmed = line.trim()
    const m = /^(#{2,3})\s+(.+)$/.exec(trimmed)
    if (!m) continue
    const level = m[1].length
    const text = m[2].trim()
    const id = slugifyHeading(text)
    headings.push({ id, text, level })
  }
  return headings
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
