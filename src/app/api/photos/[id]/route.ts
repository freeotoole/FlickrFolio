import { NextRequest, NextResponse } from 'next/server'

interface Params {
  id: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params
  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  try {
    // get photo and prev/next context
    const photoUrl = `https://www.flickr.com/services/rest?method=flickr.photos.getInfo&photo_id=${id}&format=json&nojsoncallback=1&api_key=${apiKey}`
    const photo = await fetch(photoUrl, {
      next: { revalidate: 300 },
    })

    const contextUrl = `https://www.flickr.com/services/rest?method=flickr.photos.getContext&photo_id=${id}&format=json&nojsoncallback=1&api_key=${apiKey}`
    const ctx = await fetch(contextUrl, {
      next: { revalidate: 300 },
    })

    const [imageResponse, ctxResponse] = await Promise.all([
      photo.json(),
      ctx.json(),
    ])
    const data = { ...imageResponse, ...ctxResponse }
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
