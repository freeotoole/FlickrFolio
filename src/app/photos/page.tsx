import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '../components/GlobalSidebar'

export default async function PhotosPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="">
      <GlobalSidebar />
      <div className=" md:ml-[var(--sidebar-width)]">
        <Gallery />
      </div>
    </div>
  )
}
