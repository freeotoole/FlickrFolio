'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import useSWRInfinite from 'swr/infinite'

// import { Transition } from '@headlessui/react'
import Image from '@/app/components/Image'
import { settings } from '@/app/settings'
import { FlickrImageProps } from '@/app/types/image'
import Icon from './Icon'

interface GalleryProps {
  options?: any
  title?: string
  tags?: string
  subtitle?: string
  children?: React.ReactNode[]
  album?: string
}

const Gallery = (props: GalleryProps) => {
  const [isLastPage, setIsLastPage] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, inView } = useInView()
  const fetcher = (url: any) => {
    performance.mark('fetch-start')
    return fetch(url).then((r) => {
      performance.mark('fetch-end')
      return r.json()
    })
  }

  const albumId = settings.albums[props.album ?? '']?.id
  const apiUrl = albumId ? `/api/albums/${albumId}` : '/api/photos'

  // check for album and fetch photoset or photos
  const { data, error, size, setSize, isLoading, mutate } = useSWRInfinite(
    (index) => `${apiUrl}?page=${index + 1}`,
    fetcher
  )

  useEffect(() => {
    setLoading(
      isLoading ||
        (size > 0 && data && typeof data[size - 1] === 'undefined') ||
        false
    )
    const totalPages = data ? data[0].pages : 0
    setIsLastPage((data && data.length >= totalPages) || false)
  }, [isLoading, data, size])

  useEffect(() => {
    if (!isLastPage && inView) {
      setSize(size + 1)
    }
  }, [inView, isLastPage])

  if (!data) return null
  let photos = []
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      photos.push(...data[i].photo)
    }
  }

  const columnClasses = 'grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'

  const isPortrait = (width: number, height: number) => {
    return height > width
  }

  return (
    <>
      <section className="">
        <div className={columnClasses}>
          {photos &&
            photos.map((photo: FlickrImageProps, i: number) => (
              <Link
                key={photo.id}
                className={`group relative block overflow-hidden
                ${isPortrait(photo.width_l, photo.height_l) ? 'lg:row-span-2 ' : ''}`}
                href={`/${props.album ? 'albums/' + props.album : 'photos'}/${photo.id}`} // if album route to albums/albumId/photoId
              >
                <Image
                  className="relative h-full !w-full object-cover"
                  src={photo.url_l}
                  width={photo.width_l}
                  height={photo.height_l}
                  alt={photo.title}
                  hover
                />
              </Link>
            ))}
        </div>
      </section>
      <div ref={ref} className="mt-4 py-6">
        {isLastPage ? (
          <div className="flex items-center justify-center gap-2">
            <Icon name="Meh" className="text-4xl" />
            <span>No more photos here!</span>
          </div>
        ) : (
          <>
            {loading && (
              <div className="">
                <Icon name="Loader" className="mx-auto animate-spin text-4xl" />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Gallery
