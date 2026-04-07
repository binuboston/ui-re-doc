import type { ComponentType } from 'react'

import { BrandGuidelineStyleShowcase } from '@/components/docs/demos/brand-guideline-style-showcase'
import { TemplateRefactoringPlayground } from '@/components/docs/demos/template-refactoring-playground'
import { DOC_ROUTE } from '@/config/docs/slugs'

/** Optional interactive demo below markdown for a doc slug. */
export const docPageDemos: Partial<Record<string, ComponentType>> = {
  [DOC_ROUTE.demoPages.templateRefactoring]: TemplateRefactoringPlayground,
  'brand-guideline/overview': BrandGuidelineStyleShowcase,
  'brand-guideline/style-showcase': BrandGuidelineStyleShowcase,
}
