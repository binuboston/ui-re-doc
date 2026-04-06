import { z } from 'zod'

import {
  DEMO_FORM_VALIDATION,
  DEMO_MEMBER_ROLES,
} from '@/config/demos/template-refactoring'

export const demoMemberFormSchema = z.object({
  displayName: z.string().min(2, DEMO_FORM_VALIDATION.displayNameMin),
  workEmail: z.string().email(DEMO_FORM_VALIDATION.workEmail),
  role: z.enum(DEMO_MEMBER_ROLES),
})

export type DemoMemberFormValues = z.infer<typeof demoMemberFormSchema>
