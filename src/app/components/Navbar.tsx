'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// import { Aperture } from 'react-feather'

import Icon from '@/app/components/Icon'
import { settings } from '../settings'

type Layout = 'horizontal' | 'vertical'

interface NavbarProps {
  layout: Layout
  // siteDescription?: string
  siteTitle?: string
  hideTitle?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ layout, hideTitle }) => {
  const pathname = usePathname()
  // TODO: Possibly refactor to create path array and test position
  const isActive = (slug: string) => {
    return pathname.includes(slug)
  }

  // const layoutClasses = {
  //   horizontal: 'flex flex-col md:flex-row md:justify-between md:items-center',
  //   vertical: 'flex flex-col',
  // }

  return (
    <nav className={`navbar md:flex-1 `}>
      <div className="md:min-h-[50vh] md:text-right">
        {!hideTitle && (
          <h1 className="my-8 text-xl font-normal uppercase tracking-wide">
            <Link
              href="/"
              className=" inline-flex flex-nowrap items-center gap-1"
            >
              Free&apos;s Photogram{' '}
              <Icon className="text-3xl" name="Aperture" />
            </Link>
          </h1>
        )}
        <nav className="w-full">
          <ul className="">
            {pathname !== '/' && (
              <li>
                <Link
                  className={`group inline-flex items-center gap-1 py-2 hover:font-semibold ${isActive('/photos') ? 'font-semibold' : ''}`}
                  href="/photos"
                >
                  <Icon
                    name="Camera"
                    className={`group-hover:stroke-2 ${isActive('/photos') ? 'stroke-2' : ''}`}
                  />
                  Latest Photos
                </Link>
              </li>
            )}

            {Object.values(settings.albums).map((album, i) => {
              const active = isActive(`/albums/${album.slug}`)
              return (
                <li key={i}>
                  <Link
                    className={`group inline-flex items-center gap-1 py-2 hover:font-semibold  ${active ? 'font-semibold' : ''}`}
                    href={`/albums/${album.slug}`}
                  >
                    {album.icon && (
                      <Icon
                        name={album.icon}
                        className={`group-hover:stroke-2 ${active ? 'stroke-2' : ''}`}
                      />
                    )}
                    {album.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
