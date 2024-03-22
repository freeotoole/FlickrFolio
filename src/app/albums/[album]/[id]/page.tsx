'use client'

import { useEffect, useState } from 'react'

import GlobalSidebar from '@/app/components/GlobalSidebar'
import Image from '@/app/components/Image'
import { FlickrImageProps } from '@/app/types/image'

interface Params {
  album: string
  id: string
}

interface ImageProps {
  photo: FlickrImageProps
  prevphoto: { id: string }
  nextphoto: { id: string }
}

export default function Single({ params }: { params: Params }) {
  const [singlePhoto, setSinglePhoto] = useState<ImageProps | null>(null)

  // move as clientFetchSingle
  const clientFetchSingle = async (id: string, album: string) => {
    const res = await fetch(`/api/photos/${id}?album=${album}`)
    const post = await res.json()
    post && setSinglePhoto(post)
  }

  useEffect(() => {
    clientFetchSingle(params.id, params.album)
  }, [params.album, params.id])

  const prev = singlePhoto?.prevphoto?.id
  const next = singlePhoto?.nextphoto?.id

  return (
    <div>
      {!singlePhoto ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <p className="text-4xl">Loading...</p>
        </div>
      ) : (
        <div className="relative h-screen px-6">
          <article className="relative grid gap-10 md:grid-cols-sidebar">
            <GlobalSidebar
              title={singlePhoto?.photo?.title._content}
              description={singlePhoto?.photo?.description._content}
              navigation={{ prev, next }}
            />
            <div className="relative h-screen w-full items-start justify-items-start py-6">
              <Image
                className="object-left "
                src={`https://live.staticflickr.com/${singlePhoto?.photo?.server}/${params.id}_${singlePhoto?.photo?.originalsecret}_k.jpg`}
                width={600}
                height={400}
                alt=""
              />
              {/* <div>{JSON.stringify(post)}</div> */}
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
