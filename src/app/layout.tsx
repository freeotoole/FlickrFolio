import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

// Yanone_Kaffeesatz | Space_Grotesk

import './globals.css'

const sans = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "FlickrFolio | A photo gallery by Free O'Toole",
  description:
    'Gallery website built with Next.js, Tailwind CSS and the Flickr API to display a user&apos;s photos and albums from Flickr.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} font-light leading-loose`}>
        {children}
      </body>
    </html>
  )
}
