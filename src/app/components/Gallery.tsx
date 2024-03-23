'use client'

import React from 'react'
import Link from 'next/link'

// import { Transition } from '@headlessui/react'
import Image from '@/app/components/Image'
import { FlickrImageProps } from '@/app/types/image'

// import { settings } from '../settings'

interface GalleryProps {
  photos: FlickrImageProps[]
  options?: any
  title?: string
  tags?: string
  subtitle?: string
  children?: React.ReactNode[]
  album?: string
}

const Gallery = (props: GalleryProps) => {
  return (
    <>
      <section className="py-4">
        <div className="columns-1 gap-2 lg:columns-2 xl:columns-3">
          {props.photos &&
            props.photos.map((photo: FlickrImageProps, i: number) => (
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
      {/* <p className="text-center">
        {isLastPage ? (
          <span>You have reached the end!</span>
        ) : (
          <button
            onClick={() => loadMore()}
            className="mx-auto mt-4 bg-gray-200 px-6 py-2 text-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
          >
            Load more
          </button>
        )}
      </p> */}
    </>
  )
}

export default Gallery
