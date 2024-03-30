import Gallery from '@/app/components/Gallery'
import { settings } from '@/app/settings'

interface Params {
  album: string
}

export default async function AlbumsPage({ params }: { params: Params }) {
  const albumId = settings.albums[params.album]?.id

  return (
    <div className="">
      <Gallery album={params.album} />
    </div>
  )
}
