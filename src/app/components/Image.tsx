'use client'

import { useState } from 'react'
import NextImage from 'next/image'

import Icon from '@/app/components/Icon'

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

  let aspect: string = ''
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
        className={`group ${props.hover ? 'contents overflow-hidden' : 'contents'}`}
      >
        <NextImage
          width={props.width}
          height={props.height}
          src={props.src}
          alt={props.alt}
          className={`${props.className} h-full w-full object-contain  ${
            props.hover ? 'transition-transform duration-700' : ''
          }`}
          loading={props.lazy ? 'lazy' : 'eager'}
          sizes={props.sizes}
          quality={quality}
        />
        {props.hover && (
          <figcaption
            aria-hidden="true"
            className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-2 bg-black/40 p-6 text-white opacity-0 transition duration-500 group-hover:opacity-100 group-hover:backdrop-contrast-150 group-hover:backdrop-saturate-[.25] sm:flex"
          >
            <Icon name="Eye" size={64} />
            <span className="text-sm uppercase ">{props.alt}</span>
          </figcaption>
        )}
      </figure>
    </>
  )
}

export default Image
