import { NextResponse } from 'next/server'

import { fetchPublicPhotos } from '@/app/apiUtils'

export async function GET() {
  try {
    const data = await fetchPublicPhotos()
    return NextResponse.json(data.photos)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error - people.getPublicPhotos fetch failed' },
      { status: 500 }
    )
  }
}
