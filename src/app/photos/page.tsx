import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'

export default async function PhotosPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="">
      <Gallery />
    </div>
  )
}
