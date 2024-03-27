import { fetchPhotoWithContext } from '@/app/apiUtils'
import GlobalSidebar from '@/app/components/GlobalSidebar'
import Image from '@/app/components/Image'
import { settings } from '@/app/settings'
import { FlickrImageProps } from '@/app/types/image'
import { ParamProps } from '@/app/types/page'

interface ImageProps {
  photo: FlickrImageProps
  prevphoto: { id: string }
  nextphoto: { id: string }
}

export const preload = (id: string, album?: string) => {
  const albumId = settings.albums[album ?? '']?.id
  void fetchPhotoWithContext(id, albumId)
}
export default async function Single({ params }: { params: ParamProps }) {
  const albumId = settings.albums[params.album ?? '']?.id
  const singlePhoto: ImageProps = await fetchPhotoWithContext(
    params.id,
    albumId
  )

  // navigate in reverse order for latest photos
  const prev = params.album
    ? singlePhoto?.prevphoto?.id
    : singlePhoto?.nextphoto?.id
  const next = params.album
    ? singlePhoto?.nextphoto?.id
    : singlePhoto?.prevphoto?.id

  // preload next and previous photos
  preload(prev, albumId)
  preload(next, albumId)

  return (
    <div>
      {!singlePhoto ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <p className="text-4xl">Loading...</p>
        </div>
      ) : (
        <div className="relative h-screen px-4">
          <article className="relative grid gap-10 md:grid-cols-sidebar">
            <GlobalSidebar
              title={singlePhoto?.photo?.title._content}
              description={singlePhoto?.photo?.description._content}
              navigation={{ prev, next }}
            />
            <div className="relative h-screen w-full items-start justify-items-start py-4">
              <Image
                className="object-left"
                src={`https://live.staticflickr.com/${singlePhoto?.photo?.server}/${params.id}_${singlePhoto?.photo?.originalsecret}_k.jpg`}
                width={600}
                height={400}
                alt=""
              />
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
