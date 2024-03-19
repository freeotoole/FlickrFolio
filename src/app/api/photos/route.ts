import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const userId = process.env.NEXT_PUBLIC_USER_ID

  const flickrUrl = `https://www.flickr.com/services/rest?method=flickr.people.getPublicPhotos&user_id=${userId}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=12`
  const res = await fetch(flickrUrl, {
    next: { revalidate: 60 },
  })
  const data = await res.json()
  // console.log('data', data)

  return NextResponse.json(data.photos)
}
