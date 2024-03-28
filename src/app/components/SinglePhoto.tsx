import { fetchPhotoWithContext, fetchSizes } from '@/app/apiUtils'
import Image from '@/app/components/Image'
import ImageNavigation from '@/app/components/ImageNavigation'
import { settings } from '@/app/settings'
import { FlickrImageProps } from '@/app/types/image'
import { ParamProps } from '@/app/types/page'

interface ImageProps {
  photo: FlickrImageProps
  prevphoto: { id: string }
  nextphoto: { id: string }
}

interface SizeProps {
  label: string
  source: string
  width: string
  height: string
}

export const preload = (id: string, album?: string) => {
  const albumId = settings.albums[album ?? '']?.id
  void fetchPhotoWithContext(id, albumId)
}
export default async function Single({ params }: { params: ParamProps }) {
  const albumId = settings.albums[params.album ?? '']?.id
  // fetch in parallel
  const singlePhoto: ImageProps = await fetchPhotoWithContext(
    params.id,
    albumId
  )

  const { sizes } = await fetchSizes(params.id)

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

  // console.log('singlePhoto', singlePhoto)
  // get Medium and Large sizes from sizes array
  const size = {
    md: sizes.size.find((size: SizeProps) => size.label === 'Medium'),
    lg:
      sizes.size.find((size: SizeProps) => size.label === 'Large 2048') ||
      sizes.size.find((size: SizeProps) => size.label === 'Large 1600') ||
      sizes.size.find((size: SizeProps) => size.label === 'Large'),
  }
  return (
    <div>
      <div className="relative\">
        <article className="">
          <div className="align-start relative  w-full justify-items-start">
            <Image
              className=""
              src={`https://live.staticflickr.com/${singlePhoto?.photo?.server}/${params.id}_${singlePhoto?.photo?.originalsecret}_k.jpg`}
              width={size.lg?.width || size.md?.width}
              height={size.lg?.height || size.md?.height}
              alt=""
            />
            <ImageNavigation prev={prev} next={next} />
            {/* If portrait put details on right || underneath */}
            <div className="flex flex-wrap gap-10 py-6">
              <h2 className="shrink-0 basis-64 text-3xl lg:basis-80">
                {singlePhoto?.photo?.title._content}
              </h2>
              <div className="max-w-xl flex-1">
                <p>{singlePhoto?.photo?.description._content}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
