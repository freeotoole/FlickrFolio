import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import HeroBanner from '@/app/components/HeroBanner'

export default async function Home() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <>
      <HeroBanner />
      <Gallery />
    </>
  )
}
