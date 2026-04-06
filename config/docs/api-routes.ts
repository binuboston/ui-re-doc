/** Client-side fetch paths for documentation API routes. */
export const DOCS_API_ROUTES = {
  tree: '/api/docs',
  page: (slugPath: string) => {
    const encoded = slugPath
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/')
    return `/api/docs/${encoded}`
  },
} as const
