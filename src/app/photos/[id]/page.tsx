'use client'

import { useEffect, useState } from 'react'
// import ErrorPage from 'next/error'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'

import Image from '@/app/components/Image'
import { FlickrImageProps } from '@/app/types/image'

interface Params {
  id: string
}

interface ImageProps {
  photo: FlickrImageProps
  prevphoto: { id: string }
  nextphoto: { id: string }
}

export default function Single({ params }: { params: Params }) {
  const [singlePhoto, setSinglePhoto] = useState<ImageProps | null>(null)
  const fetchPost = async (id: string) => {
    const res = await fetch(`/api/photos/${id}`)
    const data = await res.json()
    data && setSinglePhoto(data)
  }

  // can I do this without the useEffect?
  useEffect(() => {
    fetchPost(params.id)
  }, [params.id])

  // navigate in reverse order
  const prev = singlePhoto?.nextphoto?.id
  const next = singlePhoto?.prevphoto?.id

  return (
    <div>
      {!singlePhoto ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <p className="text-4xl">Loading...</p>
        </div>
      ) : (
        <div className="relative h-screen px-6">
          <article className="md:grid-cols-sidebar relative grid gap-10">
            <div className="flex flex-col">
              <div className="flex flex-1 flex-col">
                <Link className="block py-4 " href="/photos">
                  Back to photos
                </Link>
                <div className="mb-6 mt-auto flex justify-between gap-6 border-b border-gray-300 text-sm dark:border-gray-500">
                  {!!prev && (
                    <Link
                      href={`/photos/${prev}`}
                      className="flex items-center gap-2 px-4 py-2"
                    >
                      <ArrowLeft /> Prev
                    </Link>
                  )}

                  {!!next && (
                    <Link
                      href={`/photos/${next}`}
                      className="flex items-center gap-2 px-4 py-2"
                    >
                      Next <ArrowRight />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex-1 ">
                <h1 className="mb-8 text-3xl">
                  {singlePhoto?.photo?.title._content}
                </h1>
                <p className="leading-loose">
                  {singlePhoto?.photo?.description._content}
                </p>
              </div>
            </div>
            <div className="relative h-screen w-full items-start justify-items-start py-6">
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
