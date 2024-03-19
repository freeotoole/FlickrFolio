'use client'

import { useEffect, useState } from 'react'
import NextImage from 'next/image'

export type ImageProps = {
  alt: string
  className?: string
  hover?: boolean
  lazy?: boolean
  sizes?: string
  src: string
  width: number
  height: number
  quality?: number
}

type Aspect = {
  landscape: string
  portrait: string
}

type Settings = {
  forceAspect?: Aspect | null
}

// TODO: Move settings to global
const settings: Settings = {
  // forceAspect: {
  //   landscape: 'aspect-[3/2]',
  //   portrait: 'aspect-[2/3]',
  // },
}

const Image = (props: ImageProps) => {
  const [loading, setLoading] = useState(false)
  const [quality, setQuality] = useState(props.quality || 80)

  let aspect: String = ''
  if ('forceAspect' in settings) {
    if (props.width === props.height) {
      aspect = 'aspect-square'
    } else if (props.width > props.height) {
      aspect = settings.forceAspect?.landscape as string
    } else {
      aspect = settings.forceAspect?.portrait as string
    }
  }

  return (
    <>
      <figure
        className={`group ${props.hover ? 'block overflow-hidden' : 'contents'}`}
      >
        <NextImage
          width={props.width}
          height={props.height}
          src={props.src}
          alt={props.alt}
          className={`${props.className} h-full w-full object-contain  ${
            props.hover
              ? 'transition-transform duration-700 sm:group-hover:scale-125'
              : ''
          }`}
          loading={props.lazy ? 'lazy' : 'eager'}
          sizes={props.sizes}
          quality={quality}
        />
        {props.hover && (
          <figcaption
            aria-hidden="true"
            className="absolute inset-0 hidden flex-col items-center justify-center gap-2 bg-black/50 p-6 text-white opacity-0 transition duration-500 group-hover:opacity-100 sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye icon text-5xl"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <span className="text-sm uppercase ">{props.alt}</span>
          </figcaption>
        )}
      </figure>
    </>
  )
}

export default Image
