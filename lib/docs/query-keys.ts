export const docsQueryKeys = {
  all: ['docs'] as const,
  tree: () => [...docsQueryKeys.all, 'tree'] as const,
  page: (slugPath: string) => [...docsQueryKeys.all, 'page', slugPath] as const,
}
