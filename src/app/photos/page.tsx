import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '../components/GlobalSidebar'

export default async function PhotosPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="relative grid gap-6 px-4 md:grid-cols-sidebar">
      <GlobalSidebar title="Latest photos" />
      <div className="relative items-start justify-items-start">
        {<Gallery />}
      </div>
    </div>
  )
}
