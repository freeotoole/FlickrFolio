'use client'

import { useEffect, useState } from 'react'
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
  const [fadeIn, setFadeIn] = useState(false)
  const [quality, setQuality] = useState(props.quality || 80)

  useEffect(() => {
    // console.log('fadeIn', fadeIn)
    // setFadeIn(true)
    setTimeout(() => {
      setFadeIn(true)
    }, 1)
  }, [fadeIn])

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
  const figCaptionStyles = `
    absolute inset-0 z-20 hidden flex-col items-center justify-center sm:flex
    p-6 text-white opacity-0 transition duration-500  
    group-hover:opacity-100 group-hover:backdrop-contrast-200 
    before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-gray-800/70 before:bg-mix-blend-mode-multiply
`

  return (
    <>
      <figure className={`group contents `}>
        <NextImage
          width={props.width}
          height={props.height}
          src={props.src}
          alt={props.alt}
          className={`${props.className} h-full w-full object-contain transition duration-700 ease-in-out   ${fadeIn ? 'opacity-100' : 'opacity-0'} `}
          loading={props.lazy ? 'lazy' : 'eager'}
          sizes={props.sizes}
          quality={quality}
        />
        {props.hover && (
          <figcaption aria-hidden="true" className={figCaptionStyles}>
            <Icon name="Eye" size={52} />
            <span className="text-sm uppercase ">{props.alt}</span>
          </figcaption>
        )}
      </figure>
    </>
  )
}

export default Image
