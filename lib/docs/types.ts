export type DocPageMeta = {
  slug: string
  title: string
}

export type DocSection = {
  id: string
  title: string
  emoji: string
  pages: DocPageMeta[]
}

export type DocPage = DocPageMeta & {
  markdown: string
}

export type DocsTreeResponse = {
  sections: DocSection[]
}

export type DocPageResponse = {
  slug: string
  title: string
  markdown: string
  headings: { id: string; text: string; level: number }[]
}
