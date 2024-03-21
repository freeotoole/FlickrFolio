import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'

export default async function Home() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="relative grid gap-6 px-6 md:grid-cols-sidebar">
      <GlobalSidebar description="️️️Web Developer by day, photo enthusiast by night and always a geek! When I'm not untangling code and chasing pixel perfection, you can catch me obsessing over the perfect exposure and trying to convince my camera that it's not a mouse (apparently, autofocus disagrees)." />
      <div className="relative items-start justify-items-start py-6">
        {<Gallery photos={data.photos?.photo} />}
      </div>
    </div>
  )
}
