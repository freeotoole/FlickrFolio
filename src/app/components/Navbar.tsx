'use client'

import { useState } from 'react'
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

  const [isOpen, setIsOpen] = useState(false)

  // const layoutClasses = {
  //   horizontal: 'flex flex-col md:flex-row md:justify-between md:items-center',
  //   vertical: 'flex flex-col',
  // }

  const navStyles = `
    fixed flex flex-col right-0 top-0 h-screen w-4/5 max-w-md z-20 bg-white px-4 md:px-0 py-8
    transform bg-white text-lg shadow-2xl transition-transform duration-300 ease-in-out
    md:relative md:w-auto md:h-auto md:shadow-none md:transition-none md:translate-x-0
      `

  return (
    <nav className={`navbar md:flex-1`}>
      <div className="md:min-h-[50vh] md:text-right">
        {!hideTitle && (
          <div className="my-8 flex items-center ">
            <h1 className="text-base font-normal uppercase tracking-wide md:ml-auto">
              <Link
                href="/"
                className="inline-flex flex-wrap items-center gap-2"
              >
                Free&apos;s Photogram{' '}
                <Icon className="text-xl" name="Aperture" />
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
        )}
        <div
          className={`${navStyles} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className="flex h-full flex-col">
            <button
              className="ml-auto p-2 md:hidden"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Icon name="X" />
            </button>

            <ul className="">
              <li className="hover:border-blue-300">
                <Link
                  className={`group inline-flex items-center gap-2 py-1.5 font-semibold hover:underline ${isActive('/photos') || pathname === '/' ? 'font-semibold' : ''}`}
                  href="/photos"
                >
                  Latest Photos{' '}
                  <Icon
                    name="Camera"
                    className={`group-hover:stroke-2 ${isActive('/photos') ? 'stroke-2' : ''}`}
                  />
                </Link>
              </li>
              <li className=" hover:border-blue-300">
                <span className="inline-flex items-center gap-2 py-1.5 font-semibold ">
                  Albums{' '}
                  <Icon
                    name="Film"
                    className={`group-hover:stroke-2 ${isActive('/photos') ? 'stroke-2' : ''}`}
                  />
                  {/* <Icon name="ChevronDown" /> */}
                </span>
                <ul className="mr-6">
                  {Object.values(settings.albums).map((album, i) => {
                    const active = isActive(`/albums/${album.slug}`)
                    return (
                      <li key={i}>
                        <Link
                          className={`hover  group inline-flex items-center gap-2 py-1 text-gray-600 hover:font-normal  hover:text-black hover:underline  ${active ? 'font-semibold' : ''}`}
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
              <li className="  font-semibold hover:border-blue-300">
                <Link
                  href="/about"
                  className="inline-flex  items-center gap-2 py-1.5 font-semibold hover:underline"
                >
                  About
                  <Icon
                    name="User"
                    className={`group-hover:stroke-2 ${isActive('/photos') ? 'stroke-2' : ''}`}
                  />
                </Link>
              </li>
              {/* <li className="  font-semibold hover:border-blue-300">
                <span className="inline-flex items-center gap-2 py-1.5 font-semibold">
                  <Icon
                    name="Mail"
                    className={`group-hover:stroke-2 ${isActive('/photos') ? 'stroke-2' : ''}`}
                  />{' '}
                  Get in touch <Icon name="ChevronRight" />
                </span>
              </li> */}
            </ul>
            <form className="mt-10 flex hidden flex-col gap-4">
              <input
                className="block border px-2 py-1"
                placeholder="your name"
                type="text"
              />
              <input
                className="block border px-2 py-1"
                placeholder="email or phone"
                type="text"
              />
              <textarea
                className="h-32 border"
                name="name"
                id=""
                placeholder="Message"
              ></textarea>
            </form>
          </nav>
        </div>
        {isOpen && (
          <div className="fixed left-0 right-0 top-0 z-10 block h-screen translate-x-0 bg-black/30 md:hidden"></div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
