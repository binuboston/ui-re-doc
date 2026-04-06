import type { DocPage } from '@/lib/docs/types'

import { playbookPart1 } from '@/config/docs/playbook/part-1'
import { playbookPart2 } from '@/config/docs/playbook/part-2'
import { playbookPart3 } from '@/config/docs/playbook/part-3'
import { playbookPart4 } from '@/config/docs/playbook/part-4'

export const playbookDocPages: Record<string, DocPage> = {
  ...playbookPart1,
  ...playbookPart2,
  ...playbookPart3,
  ...playbookPart4,
}
