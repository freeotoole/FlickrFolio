import { fetchPhotoset, fetchPhotosetInfo } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'
import { settings } from '@/app/settings'

interface Params {
  album: string
}

export default async function AlbumsPage({ params }: { params: Params }) {
  // get album id from settings
  console.log('params', params)

  const albumId = settings.albums[params.album]?.id
  const album = await fetchPhotoset(albumId)
  const info = await fetchPhotosetInfo(albumId)

  if (!album) {
    return <div>Loading...</div>
  }
  return (
    <div className="relative grid gap-6 px-4 md:grid-cols-sidebar">
      <GlobalSidebar
        title={info?.photoset?.title?._content}
        description={info?.photoset?.description?._content}
      />
      <div className="relative items-start justify-items-start">
        {/* {JSON.stringify(settings.albums)} */}
        {
          <Gallery
            photos={album?.photoset?.photo}
            album={settings.albums[params.album]?.slug}
          />
        }
      </div>
    </div>
  )
}
