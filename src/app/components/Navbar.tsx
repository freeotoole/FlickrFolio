import path from 'path'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { settings } from '../settings'

type Layout = 'horizontal' | 'vertical'

interface NavbarProps {
  layout: Layout
  siteDescription?: string
}

const Navbar: React.FC<NavbarProps> = ({ layout }) => {
  const pathname = usePathname()
  // TODO: Possibly refactor to create path array and test position
  const isActive = (slug: string) => {
    return pathname.includes(slug)
  }
  return (
    <nav className={`navbar flex-1 ${layout}`}>
      <div className="min-h-[50vh] text-right">
        <h1 className="my-8 text-xl font-normal uppercase tracking-wide">
          <Link href="/">Free&apos;s Photogram</Link>
        </h1>

        <nav className="w-full">
          <ul className="">
            <li>
              <Link
                className={`block py-2 hover:font-semibold ${isActive('/photos') ? 'font-semibold' : ''}`}
                href="/photos"
              >
                Show Latest
              </Link>
            </li>
            {Object.values(settings.albums).map((album, i) => (
              <li key={i}>
                <Link
                  className={`block py-2 hover:font-semibold ${isActive(`/albums/${album.slug}`) ? 'font-semibold' : ''}`}
                  href={`/albums/${album.slug}`}
                >
                  {album.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
