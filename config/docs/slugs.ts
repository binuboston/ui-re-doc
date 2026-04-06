/** Documentation route slug segments — single source for defaults and demo registration. */
export const DOC_ROUTE = {
  /** First segment for all doc pages */
  basePath: 'docs',
  defaultEntry: 'playbook/mindset',
  demoPages: {
    templateRefactoring: 'playbook/template-refactoring',
  },
} as const

export function docPath(slugPath: string): string {
  return `/${DOC_ROUTE.basePath}/${slugPath}`
}
