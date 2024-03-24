import { NextRequest, NextResponse } from 'next/server'

import { fetchPublicPhotos } from '@/app/apiUtils'

interface Params {
  page: number
}

export async function GET(request: NextRequest) {
  const page: number = Number(request.nextUrl.searchParams.get('page')) || 1
  try {
    const data = await fetchPublicPhotos(page)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      {
        error:
          'Internal Server Error - photos.getInfo and photos.getContext fetch failed',
      },
      { status: 500 }
    )
  }
}
