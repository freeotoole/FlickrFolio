import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import { settings } from '@/app/settings'

export default async function PhotosPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="min-h-screen">
      <Gallery />
    </div>
  )
}
