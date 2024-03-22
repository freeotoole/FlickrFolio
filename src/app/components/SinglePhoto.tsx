import { fetchPhotoWithContext } from '@/app/apiUtils'
import GlobalSidebar from '@/app/components/GlobalSidebar'
import Image from '@/app/components/Image'
import { FlickrImageProps } from '@/app/types/image'

interface SingleProps {
  id: string
  album?: string
}

interface ImageProps {
  photo: FlickrImageProps
  prevphoto: { id: string }
  nextphoto: { id: string }
}

export default async function Single({ params }: { params: SingleProps }) {
  const singlePhoto: ImageProps = await fetchPhotoWithContext(params.id)

  // navigate in reverse order for latest photos
  const prev = singlePhoto?.nextphoto?.id
  const next = singlePhoto?.prevphoto?.id

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
                className="object-left "
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
