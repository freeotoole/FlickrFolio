// TODO: This is likely to not be required. Delete if not used.

import { NextRequest, NextResponse } from 'next/server'

interface Params {
  id: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params

  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  // HASFETCH - flickr.photos.getInfo & flickr.photos.getContext
  const photoUrl = `https://www.flickr.com/services/rest?method=flickr.photos.getInfo&photo_id=${id}&format=json&nojsoncallback=1&api_key=${apiKey}`
  const contextUrl = `https://www.flickr.com/services/rest?method=flickr.photos.getContext&photo_id=${id}&format=json&nojsoncallback=1&api_key=${apiKey}`
  // get photo and prev/next context
  const photo = await fetch(photoUrl, {
    next: { revalidate: 300 },
  })
  const ctx = await fetch(contextUrl, {
    next: { revalidate: 300 },
  })

  const imageData = await photo.json()
  const ctxData = await ctx.json()
  const data = { ...imageData, ...ctxData }

  return NextResponse.json(data)
}
