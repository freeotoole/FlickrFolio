import { fetchPhotoset, fetchPhotosetInfo } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'

interface Params {
  album: string
}

export default async function AlbumsPage({ params }: { params: Params }) {
  // HASFETCH - photosets.getPhotos & photosets.getInfo

  const info = await fetchPhotosetInfo(params.album)
  const album = await fetchPhotoset(params.album)

  if (!album) {
    return <div>Loading...</div>
  }
  return (
    <div className="relative grid gap-6 px-4 md:grid-cols-sidebar">
      <GlobalSidebar
        title={info?.photoset?.title?._content}
        description={info?.photoset?.description?._content}
      />
      <div className="relative items-start justify-items-start py-4">
        {<Gallery photos={album?.photoset?.photo} album={params.album} />}
        {/* {JSON.stringify(info)} */}
      </div>
    </div>
  )
}
