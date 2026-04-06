import { NextResponse } from 'next/server'

import { listDocPagesMeta } from '@/lib/docs/registry'

export async function GET() {
  return NextResponse.json({ sections: listDocPagesMeta() })
}
