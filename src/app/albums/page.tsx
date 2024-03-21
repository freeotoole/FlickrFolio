import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'

export default async function PostsPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="md:grid-cols-sidebar relative grid gap-6 p-6">
      <GlobalSidebar title="Albums root page" />
      <div className="relative items-start justify-items-start">
        {<Gallery photos={data.photos?.photo} />}
      </div>
    </div>
  )
}
