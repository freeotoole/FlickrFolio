import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

// Yanone_Kaffeesatz | Space_Grotesk

import Navbar from '@/app/components/Navbar'

import './globals.css'

const sans = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "FlickrFolio | A photo gallery by Free O'Toole",
  description:
    'Gallery website built with Next.js, Tailwind CSS and the Flickr API to display a user&apos;s photos and albums from Flickr.',
  openGraph: {
    title: "FlickrFolio, by Free O'Toole",
    description:
      'Gallery website built with Next.js, Tailwind CSS and the Flickr API to display a user&apos;s photos and albums from Flickr.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="clamp-text-sm">
      <body className={`${sans.className} font-light text-black`}>
        <div className="grid grid-cols-[var(--sidebar-width)_1fr]">
          <Navbar />
          <main className="mt-10 w-full ">{children}</main>
        </div>
      </body>
    </html>
  )
}
