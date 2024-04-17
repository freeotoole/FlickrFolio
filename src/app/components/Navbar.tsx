'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Icon from '@/app/components/Icon'
import { settings } from '../settings'

type Layout = 'horizontal' | 'vertical'

interface NavbarProps {
  layout?: Layout
  // siteDescription?: string
  siteTitle?: string
  hideTitle?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ layout, hideTitle }) => {
  const pathname = usePathname()
  const isActive = useCallback(
    (slug: string) => {
      return pathname.includes(slug)
    },
    [pathname]
  ) // Add an empty array as the second argument to useCallback

  const [hasChildren, setHasChildren] = useState(false)

  useEffect(() => {
    setHasChildren(isActive('/photos') || isActive('/albums'))
  }, [isActive])
  const navActiveStyles = 'font-semibold !text-black'
  return (
    <header className="">
      <style jsx global>{`
        :root {
          --sidebar-width: ${hasChildren ? '5.5rem' : '3rem'};
        }
      `}</style>

      <div className="fixed h-screen w-[var(--sidebar-width)] py-10 text-xs">
        <nav
          className={`absolute bottom-0 top-0 border-r-4 border-blue-700 pt-10 uppercase ${hasChildren ? 'right-8' : 'right-0'}`}
        >
          <ul className="ml-auto flex h-full flex-col gap-2 ">
            <li className="vertical-lr space-word rotate-180 tracking-widest">
              <a
                href="/"
                className={`inline-block py-8 pl-2 pr-3 ${pathname === '/' ? 'bg-blue-700 text-white' : 'hover:bg-blue-100'}`}
              >
                Home
              </a>
            </li>
            <li className="vertical-lr space-word rotate-180 tracking-widest">
              <a
                href="/photos"
                className={`inline-block py-8  pl-2 pr-3 ${hasChildren ? 'bg-blue-700 text-white' : 'hover:bg-blue-100'}`}
              >
                My Photography
              </a>
            </li>
          </ul>
        </nav>

        {hasChildren && (
          <nav className="">
            <ul className="absolute bottom-0 right-0 top-0 z-10 flex w-8 flex-col-reverse items-center pt-10">
              <li className="vertical-rl space-word mb-auto rotate-180 tracking-widest">
                <Link
                  className={`group inline-flex items-center gap-2 py-1 text-gray-500  hover:underline  ${isActive('/photos') || pathname === '/' ? navActiveStyles : ''}`}
                  href="/photos"
                >
                  Latest Photos
                </Link>
              </li>
              {Object.values(settings.albums).map((album, i) => {
                const active = isActive(`/albums/${album.slug}`)
                return (
                  <li
                    key={i}
                    className="vertical-rl space-word rotate-180 tracking-widest"
                  >
                    <Link
                      className={`group inline-flex items-center gap-2 py-1    hover:underline  ${active ? 'font-semibold text-black' : 'text-gray-600'}`}
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
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
