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
  const [post, setPost] = useState<ImageProps | null>(null)

  // move as clientFetchSingle
  const clientFetchSingle = async (album: string, id: string) => {
    // console.log('album', album, 'id', id)
    const res = await fetch(`/api/photos/${id}?album=${album}`)
    const post = await res.json()
    post && setPost(post)
  }

  useEffect(() => {
    clientFetchSingle(params.album, params.id)
  }, [params.album, params.id])

  // navigate in reverse order
  const prev = post?.nextphoto?.id
  const next = post?.prevphoto?.id

  return (
    <div>
      {!post ? (
        <div className="flex h-screen w-screen items-center justify-center">
          <p className="text-4xl">Loading...</p>
        </div>
      ) : (
        <div className="relative h-screen px-6">
          <article className="relative grid gap-10 md:grid-cols-sidebar">
            <GlobalSidebar
              title={'client fetch' + post?.photo?.title._content}
              description={post?.photo?.description._content}
              navigation={{ prev, next }}
            />
            {/* <div className="flex flex-col">
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
                <h1 className="mb-8 text-3xl">{post?.photo?.title._content}</h1>
                <p className="leading-loose">
                  {post?.photo?.description._content}
                </p>
              </div>
            </div> */}
            <div className="relative h-screen w-full items-start justify-items-start py-6">
              <Image
                className="object-left "
                src={`https://live.staticflickr.com/${post?.photo?.server}/${params.id}_${post?.photo?.originalsecret}_k.jpg`}
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
