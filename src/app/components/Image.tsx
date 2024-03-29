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
    absolute inset-0 hidden flex-col items-center justify-center sm:flex
    p-6 text-white opacity-0 transition duration-700  
    group-hover:opacity-100 group-hover:backdrop-contrast-150 group-hover:backdrop-saturate-50 group-hover:backdrop-brightness-100
    before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-gradient-radial before:from-cyan-950/60 before:to-cyan-900/20
    `

  const imageStyles = `
  h-full w-full object-contain transition duration-700 ease-in-out 
  ${props.hover ? 'group-hover:scale-110' : ''}
  ${fadeIn ? 'opacity-100' : 'opacity-0'} 
  ${props.className} 
  `

  return (
    <>
      <figure className={` contents `}>
        <NextImage
          width={props.width}
          height={props.height}
          src={props.src}
          alt={props.alt}
          className={imageStyles}
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
