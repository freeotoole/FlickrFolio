'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import useSWRInfinite from 'swr/infinite'

// import { Transition } from '@headlessui/react'
import Image from '@/app/components/Image'
import { settings } from '@/app/settings'
import { FlickrImageProps } from '@/app/types/image'

interface GalleryProps {
  options?: any
  title?: string
  tags?: string
  subtitle?: string
  children?: React.ReactNode[]
  album?: string
}

const Gallery = (props: GalleryProps) => {
  const isLastPage = false
  const getMorePhotos = async () => {
    console.log('get more photos')
  }

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
    // console.log('SWR props', isLoading, data, error)
  }, [isLoading, data, error])

  if (!data) return null
  let totalPages = 1
  let photos = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].photos) {
      photos.push(...data[i].photos.photo)
      totalPages = data[i].photos.pages
    } else {
      photos.push(...data[i].photoset.photo)
      totalPages = data[i].photoset.pages
    }
  }

  return (
    <>
      <section className="py-4">
        <div className="columns-1 gap-2 lg:columns-2 xl:columns-3">
          {photos &&
            photos.map((photo: FlickrImageProps, i: number) => (
              <Link
                key={photo.id}
                className="relative mb-2 block"
                href={`/${props.album ? 'albums/' + props.album : 'photos'}/${photo.id}`} // if album route to albums/albumId/photoId
              >
                <Image
                  className="relative w-full"
                  src={photo.url_l}
                  width={600}
                  height={400}
                  alt={photo.title}
                  hover
                />
              </Link>
            ))}
        </div>
      </section>
      <p className="text-center">
        {isLastPage ? (
          <span>You have reached the end!</span>
        ) : (
          <button
            onClick={() => getMorePhotos()}
            className="mx-auto mt-4 bg-gray-200 px-6 py-2 text-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            Load more
          </button>
        )}
      </p>
    </>
  )
}

export default Gallery
