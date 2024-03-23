import Link from 'next/link'

import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'
import Icon from '@/app/components/Icon'
import { settings } from '@/app/settings'
import Navbar from './components/Navbar'

export default async function Home() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className="mx-auto flex max-w-2xl flex-col gap-12 px-6 py-32 text-center">
        <h1 className="text-4xl font-normal uppercase tracking-wide">
          <Link
            href="/"
            className=" inline-flex flex-nowrap items-center gap-1"
          >
            Free&apos;s Photogram <Icon className="text-5xl" name="Aperture" />
          </Link>
        </h1>
        <p className="lede text-lg leading-loose">
          Web Developer by day, photo enthusiast by night and always a geek!
          When I&apos;m not untangling code and chasing pixel perfection, you
          can catch me obsessing over the perfect exposure and trying to
          convince my camera that it&apos;s not a mouse (apparently, autofocus
          disagrees).
        </p>

        <nav className="w-full">
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
        <div className="">
          <p className="font-semibold">Or scroll for latest</p>
          <Icon name="ChevronsDown" className="mx-auto text-5xl" />
        </div>
      </div>
      <div className="relative grid gap-6 px-4 md:grid-cols-sidebar">
        <div className="">
          <GlobalSidebar />
        </div>
        <div className="relative items-start justify-items-start">
          {<Gallery photos={data.photos?.photo} />}
        </div>
      </div>
    </>
  )
}
