'use client'

import { Console } from 'console'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
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
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)

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

  const getMorePhotos = () => {
    console.log('get more photos')
    // setSize(page + 1)
    setSize(size + 1)
  }

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

  const columnClasses = 'grid gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
  // const columnClasses = 'columns-1 gap-2 lg:columns-2 xl:columns-3'

  const isPortrait = (width: number, height: number) => {
    return height > width
  }
  console.log('Gallery', { data, photos, totalPages, size, isLoading })
  return (
    <>
      <section className="py-4">
        <div className={columnClasses}>
          {photos &&
            photos.map((photo: FlickrImageProps, i: number) => (
              <Link
                key={photo.id}
                className={`relative block ${isPortrait(photo.width_l, photo.height_l) ? 'lg:row-span-2 ' : ''}`}
                href={`/${props.album ? 'albums/' + props.album : 'photos'}/${photo.id}`} // if album route to albums/albumId/photoId
              >
                <Image
                  className="relative w-full object-cover"
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
      <p className="mt-10 border-t py-4 text-center">
        {isLastPage ? (
          <span>You have reached the end!</span>
        ) : (
          <button
            onClick={() => getMorePhotos()}
            className="mx-auto mt-4 flex items-center gap-4 bg-gray-200 px-6 py-2 text-center text-gray-700"
          >
            Load more <Icon name="Loader" className="animate-spin " size={24} />
          </button>
        )}
      </p>
    </>
  )
}

export default Gallery
