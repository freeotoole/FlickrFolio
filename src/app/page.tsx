import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'
import HeroBanner from '@/app/components/HeroBanner'

export default async function Home() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <>
      <HeroBanner />
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
