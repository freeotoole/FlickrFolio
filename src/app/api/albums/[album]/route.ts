import { NextRequest, NextResponse } from 'next/server'

import { fetchPhotoset } from '@/app/apiUtils'

interface Params {
  album: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { album } = context.params
  const page: number = Number(request.nextUrl.searchParams.get('page')) || 1

  try {
    const photoResponse = await fetchPhotoset(album, page)
    return NextResponse.json(photoResponse.photoset)
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
