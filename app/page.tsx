import { redirect } from 'next/navigation'

import { docPath, DOC_ROUTE } from '@/config/docs/slugs'

export default function Home() {
  redirect(docPath(DOC_ROUTE.defaultEntry))
}
