'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// import { Aperture } from 'react-feather'

import Icon from '@/app/components/Icon'
import { settings } from '../settings'
import Connect from './Connect'

type Layout = 'horizontal' | 'vertical'

interface NavbarProps {
  layout?: Layout
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

  const [isOpen, setIsOpen] = useState(false)

  // const layoutClasses = {
  //   horizontal: 'flex flex-col md:flex-row md:justify-between md:items-center',
  //   vertical: 'flex flex-col',
  // }

  const navStyles = `
    fixed flex flex-col right-0 top-0 h-screen w-4/5 max-w-md z-20 bg-white pt-8
    transform bg-white text-lg shadow-2xl transition-transform duration-300 ease-in-out
    md:relative md:w-auto md:flex-1 md:h-full md:shadow-none md:transition-none md:translate-x-0
      `

  const navItemStyles =
    'group flex items-center md:justify-end gap-2 py-1.5 hover:font-semibold hover:underline hover:text-black'
  const navActiveStyles = 'font-semibold !text-rose-600 '

  return (
    <nav className={`NAVBAR flex flex-1 flex-col  md:text-right`}>
      <div className="NAVHEADER my-8 flex items-center px-4">
        <h1 className="text-base font-normal uppercase tracking-wide md:ml-auto">
          <Link href="/" className="inline-flex flex-wrap items-center gap-2">
            Free&apos;s Photogram <Icon className="text-xl" name="Aperture" />
          </Link>
        </h1>
        <button
          className="ml-auto p-2 text-xl md:hidden"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          <Icon name="Menu" />
        </button>
      </div>
      <div
        className={`SLIDENAV ${navStyles} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="mb-6 flex flex-col">
          <button
            className="ml-auto p-2 md:hidden"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <Icon name="X" />
          </button>

          <ul className="px-6">
            <li className="hover:border-blue-300">
              <Link
                className={`${navItemStyles} ${isActive('/photos') || pathname === '/' ? navActiveStyles : ''}`}
                href="/photos"
              >
                Latest Photos{' '}
                <Icon
                  name="Camera"
                  className={`group-hover:stroke-2 ${isActive('/photos') ? 'stroke-2' : ''}`}
                />
              </Link>
            </li>
            <li className="group text-gray-600">
              <span
                className={`inline-flex items-center gap-2 py-1.5 group-hover:font-semibold ${isActive('/albums') ? 'font-semibold' : ''}`}
              >
                Albums{' '}
                <Icon
                  name="Film"
                  className={`group-hover:stroke-2 ${isActive('/albums') ? 'stroke-2' : ''}`}
                />
              </span>
              <ul className="-ml-2 -mr-4 from-rose-100 via-transparent pr-6 group-hover:bg-gradient-to-r">
                {Object.values(settings.albums).map((album, i) => {
                  const active = isActive(`/albums/${album.slug}`)
                  return (
                    <li key={i}>
                      <Link
                        className={`group inline-flex items-center gap-2 py-1 text-gray-600 hover:font-semibold hover:text-black hover:underline  ${active ? 'font-semibold text-rose-600' : ''}`}
                        href={`/albums/${album.slug}`}
                      >
                        {/* {album.icon && (
                            <Icon
                              name={album.icon}
                              className={`group-hover:stroke-2 ${active ? 'stroke-2' : ''}`}
                            />
                          )} */}
                        - {album.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li className=" hover:border-blue-300">
              <Link
                href="/about"
                className={`${navItemStyles} ${isActive('/about') ? navActiveStyles : ''}`}
              >
                About
                <Icon
                  name="User"
                  className={`group-hover:stroke-2 ${isActive('/about') ? 'stroke-2' : ''}`}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <Connect />
      </div>
      {isOpen && (
        <div className="fixed left-0 right-0 top-0 z-10 block h-screen translate-x-0 bg-black/30 md:hidden"></div>
      )}
    </nav>
  )
}

export default Navbar
