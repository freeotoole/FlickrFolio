import { NextRequest, NextResponse } from 'next/server'

import { fetchPhotoset } from '@/app/apiUtils'

interface Params {
  album: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { album } = context.params
  try {
    const photoResponse = await fetchPhotoset(album)
    return NextResponse.json(photoResponse)
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
