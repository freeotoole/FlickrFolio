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
        style={{ textShadow: '2px 2px 10px 2px rgba(0,0,0,0.75)' }}
        className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12  p-20 text-center "
      >
        <h1 className="clamp-text-2xl uppercase tracking-wide">
          <Link
            href="/"
            className=" inline-flex flex-wrap items-center justify-center gap-1"
          >
            <span>Free&apos;s Photogram</span>
            <Icon className="text-[1.5em]" name="Aperture" />
          </Link>
        </h1>
        <p className="lede clamp-text-base leading-loose">
          Web Developer by day, photo enthusiast by night and always a geek!
          When I&apos;m not untangling code and chasing pixel perfection, you
          can catch me obsessing over the perfect exposure and trying to
          convince my camera that it&apos;s not a mouse (apparently, autofocus
          disagrees).
        </p>

        <nav className="hidden w-full">
          <h2 className="font-semibold">Check out some albums</h2>
          <ul className="flex items-center justify-center gap-12">
            {Object.values(settings.albums).map((album, i) => {
              return (
                <li key={i}>
                  <Link
                    className={`group inline-flex items-center gap-1 py-2 hover:font-semibold  `}
                    href={`/albums/${album.slug}`}
                  >
                    {album.icon && (
                      <Icon
                        name={album.icon}
                        className={`text-2xl group-hover:stroke-2`}
                      />
                    )}
                    {album.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        {/* <div className="">
            <p className="font-semibold">Or scroll for latest</p>
            <Icon name="ChevronsDown" className="mx-auto text-5xl" />
          </div> */}
      </div>
    </div>
  )
}

export default HeroBanner
