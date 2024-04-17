import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Head from 'next/head'

// Yanone_Kaffeesatz | Space_Grotesk

import Navbar from '@/app/components/Navbar'

import './globals.css'

const sans = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    "Free O'Toole - Front End Developer | UX Engineer | Accessibility Advocate",
  description:
    'UX Engineer & Accessibility Advocate with 18+ years of experience developing visually stunning, accessible, semantic, & performant cross-platform websites and applications.',
  openGraph: {
    title:
      "Free O'Toole - Front End Developer | UX Engineer | Accessibility Advocate",
    description:
      'UX Engineer & Accessibility Advocate with 18+ years of experience developing visually stunning, accessible, semantic, & performant cross-platform websites and applications.',
  },
  // icons: [
  //   {
  //     rel: 'favicon',
  //     url: '/favicon.ico',
  //   },
  // ],
}
// add favicon
// favicon: '/favicon.ico',

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} font-light text-black`}>
        <div className="grid grid-cols-[var(--sidebar-width)_1fr]">
          <Navbar />
          <main className=" w-full ">{children}</main>
        </div>
      </body>
    </html>
  )
}
