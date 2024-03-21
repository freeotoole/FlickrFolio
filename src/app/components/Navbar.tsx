import React from 'react'
import Link from 'next/link'

type Layout = 'horizontal' | 'vertical'

interface NavbarProps {
  layout: Layout
  siteDescription?: string
}

const Navbar: React.FC<NavbarProps> = ({ layout }) => {
  return (
    <nav className={`navbar flex-1 ${layout}`}>
      <div className="min-h-[50vh] text-right">
        <h1 className="my-8 text-xl font-normal uppercase tracking-wide">
          <Link href="/">Free&apos;s Photogram</Link>
        </h1>

        <nav className="w-full">
          <ul className="">
            <li>
              <Link className="block py-2 font-semibold" href="/photos">
                Show Latest
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 hover:font-semibold"
                href="/albums/72177720313681808"
              >
                Film
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:font-semibold" href="#">
                Album Two
              </Link>
            </li>
            <li>
              <Link className="block py-2 hover:font-semibold" href="#">
                Album Three
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
