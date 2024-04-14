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
    <div className="justify center relative flex items-center bg-yellow-100 px-4 text-gray-950 selection:bg-yellow-300 selection:text-black sm:px-6 md:px-10 2xl:max-w-screen-2xl">
      <div className="mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-center gap-10 py-20">
        <h1 className="text-7xl font-semibold tracking-tighter">
          Hi, my name is Free.
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-semibold !leading-snug  tracking-tight">
            I craft accessible and engaging responsive web interfaces using
            HTML, CSS, and JavaScript.
          </p>

          <p className="text-lg leading-loose">
            Bridging design and development; I collaboratively deliver on-brand,
            performant digital experiences for the modern web.
          </p>
        </div>
        <div className="flex gap-4 ">
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
    </div>
  )
}

export default HeroBanner
