import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'
import Navbar from '@/app/components/Navbar'

interface Params {
  album: string
}

export default async function AlbumsPage({ params }: { params: Params }) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const userId = process.env.NEXT_PUBLIC_USER_ID
  // flickr.photosets.getPhotos&photoset_id=${params.album}

  const photosetUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getPhotos&photoset_id=${params.album}&user_id=${userId}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=12`
  const photosetResponse = await fetch(photosetUrl, {
    next: { revalidate: 300 },
  })

  const infoUrl = `https://www.flickr.com/services/rest?method=flickr.photosets.getInfo&photoset_id=${params.album}&format=json&nojsoncallback=1&api_key=${apiKey}`
  const infoResponse = await fetch(infoUrl, {
    next: { revalidate: 300 },
  })

  const [album, info] = await Promise.all([
    photosetResponse.json(),
    infoResponse.json(),
  ])

  // const data = { photosetResponse, infoResponse }
  // flickr.photosets.getInfo
  // TODO: pass isAlbum to Gallery to use photosets.context?
  // Better yet, use path?
  // flickr.photosets.getContext

  if (!album) {
    return <div>Loading...</div>
  }
  return (
    <div className="md:grid-cols-sidebar relative grid gap-6 px-4">
      <GlobalSidebar />
      <div className="relative items-start justify-items-start py-4">
        {<Gallery photos={album?.photoset?.photo} album={params.album} />}
        {/* {JSON.stringify(info)} */}
      </div>
    </div>
  )
}
