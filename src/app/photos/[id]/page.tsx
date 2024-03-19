'use client'

import { useEffect, useState } from 'react'
import next from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'

import Image from '@/app/components/image/Image'
import { FlickrImageProps } from '@/app/types/image'

interface Params {
  id: string
}

interface Post {
  params: Params
  photo: Pick<
    FlickrImageProps,
    'title' | 'description' | 'server' | 'secret' | 'originalsecret'
  >
  prevphoto: { id: string }
  nextphoto: { id: string }
}

export default function SinglePost({ params }: Post) {
  const [post, setPost] = useState<Post | null>(null)

  const fetchPost = async (id: string) => {
    const res = await fetch(`http://localhost:3013/api/photos/${id}`)
    const post = await res.json()
    post && setPost(post)
  }

  useEffect(() => {
    fetchPost(params.id)
  }, [params.id])

  const { title, description, server, originalsecret } = post?.photo || {}
  // navigate in reverse order
  const prev = post?.nextphoto?.id
  const next = post?.prevphoto?.id
  return (
    <div>
      {!post ? (
        <p>Loading...</p>
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
                <h1 className="mb-8 text-3xl">{title && title._content}</h1>
                <p className="leading-loose">
                  {description && description._content}
                </p>
              </div>
            </div>
            <div className="relative h-screen w-full items-start justify-items-start py-6">
              <Image
                className="object-left "
                src={`https://live.staticflickr.com/${server}/${params.id}_${originalsecret}_k.jpg`}
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
