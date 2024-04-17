'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Icon from '@/app/components/Icon'
import NoiseBackdrop from '../NoiseBackdrop'

const HeroBanner = () => {
  //   useEffect(() => {
  //     console.log('HeroBanner mounted, make some animations here')
  //     return () => {
  //       console.log('HeroBanner unmounted - remove any listeners here')
  //     }
  //   }, [])

  return (
    <div className="justify center relative flex flex-col bg-gradient-to-t from-blue-300/10 via-blue-200/40 to-blue-300/30 px-6  text-gray-950  selection:bg-yellow-200 selection:text-black sm:pl-6 md:bg-gradient-to-tl md:pl-10 lg:flex-row 2xl:max-w-screen-2xl">
      <div className="z-10 mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center gap-10 pb-[75vw] pt-20 sm:pb-[50vw] md:pb-20 md:pr-[20vw]">
        <h1 className="text-shadow-light-md text-6xl font-semibold tracking-tighter">
          Hi, my name is Free.
        </h1>
        <div className="text-shadow-light flex flex-col gap-4">
          <p className="text-2xl font-semibold  tracking-tight">
            I craft accessible and engaging responsive web interfaces using
            HTML, CSS, and JavaScript.
          </p>

          <p className="text-lg">
            Bridging design and development; I collaboratively deliver{' '}
            <span className="whitespace-nowrap">on-brand</span>, performant
            digital experiences for the modern web.
          </p>
        </div>
        <div className="flex gap-4 text-xs uppercase">
          <Link
            className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-950 hover:text-yellow-200"
            href="https://www.linkedin.com/in/freeotoole"
          >
            <Icon name="Linkedin" strokeWidth={1} size={24} /> Reach out
          </Link>
          <Link
            className="flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-950 hover:text-yellow-200"
            href="https://github.com/freeotoole"
          >
            <Icon name="GitHub" strokeWidth={2} size={24} /> Peep my code
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10 mt-auto max-w-xl mix-blend-luminosity">
        <Image
          className="-scale-x-100 "
          src="/images/me.png"
          width={873}
          height={932}
          alt="Photograph of me"
          objectFit="contain"
          objectPosition="right bottom"
        />
      </div>
      <NoiseBackdrop />
    </div>
  )
}

export default HeroBanner
