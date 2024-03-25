import { NextRequest, NextResponse } from 'next/server'

import { fetchPhoto, fetchPhotoContext } from '@/app/apiUtils'

interface Params {
  id: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params
  try {
    const photoResponse = await fetchPhoto(id)
    const contextResponse = await fetchPhotoContext(id)
    const data = { ...photoResponse, ...contextResponse }
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
