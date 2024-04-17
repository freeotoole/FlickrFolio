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

  // get Medium and Large sizes from sizes array
  const size = {
    md: sizes.size.find((size: SizeProps) => size.label === 'Medium'),
    lg:
      sizes.size.find((size: SizeProps) => size.label === 'Large 2048') ||
      sizes.size.find((size: SizeProps) => size.label === 'Large 1600') ||
      sizes.size.find((size: SizeProps) => size.label === 'Large'),
  }

  const isPortrait = size.lg?.height > size.lg?.width
  const layoutStyles = `${isPortrait ? ' h-[calc(100vh-4rem)] flex-wrap ' : 'flex-col'} `

  return (
    <div>
      <div className="relative max-w-4xl pr-4">
        <article className="">
          <div
            className={`align-start relative flex w-full justify-items-start gap-x-10 ${layoutStyles}`}
          >
            <Image
              src={`https://live.staticflickr.com/${singlePhoto?.photo?.server}/${params.id}_${singlePhoto?.photo?.originalsecret}_k.jpg`}
              width={size.lg?.width || size.md?.width}
              height={size.lg?.height || size.md?.height}
              alt=""
            />
            <div
              className={`${isPortrait ? 'flex flex-col justify-center' : ''}`}
            >
              <ImageNavigation prev={prev} next={next} />
              <div
                className={` ${isPortrait ? 'order-first flex max-w-sm flex-col gap-y-4 ' : 'max-w-4xl gap-x-10 py-6 lg:flex lg:flex-wrap'}`}
              >
                <h2
                  className={`text-2xl text-black ${isPortrait ? '' : `shrink-0 basis-64  lg:basis-80 ${singlePhoto?.photo?.description._content ? 'lg:text-right' : ''}`}`}
                >
                  {singlePhoto?.photo?.title._content}
                </h2>
                <div
                  className={`text-sm ${isPortrait ? '' : 'max-w-xl flex-1 pt-2 text-gray-600'}`}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: singlePhoto?.photo?.description._content,
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
