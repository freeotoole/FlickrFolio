'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

import Icon from '@/app/components/Icon'
import { settings } from '@/app/settings'

const HeroBanner = () => {
  //   useEffect(() => {
  //     console.log('HeroBanner mounted, make some animations here')
  //     return () => {
  //       console.log('HeroBanner unmounted - remove any listeners here')
  //     }
  //   }, [])

  return (
    <div className="justify center relative flex items-center bg-cover">
      <div
        // style={{ textShadow: '2px 2px 10px 2px rgba(0,0,0,0.75)' }}
        className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 px-6 py-20 text-center lg:px-20 "
      >
        <h1 className="uppercase tracking-wide clamp-text-2xl">
          <Link
            href="/"
            className="inline-flex flex-wrap items-center justify-center gap-1 text-primary-500"
          >
            <span>{settings.siteName}</span>
            <div className="flex">
              {/* <Icon className="text-secondary-600" name="Aperture" /> */}
              <Icon className="text-primary-500" name="Aperture" />
            </div>
          </Link>
        </h1>
        <p className="lede leading-loose clamp-text-base">
          Web Developer by day, photo enthusiast by night and always a geek!
          When I&apos;m not untangling code and chasing pixel perfection, you
          can catch me obsessing over the perfect exposure and trying to
          convince my camera that it&apos;s not a mouse (apparently, autofocus
          disagrees).
        </p>
      </div>
    </div>
  )
}

export default HeroBanner
