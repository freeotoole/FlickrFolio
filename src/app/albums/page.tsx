import { fetchPublicPhotos } from '@/app/apiUtils'
import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '@/app/components/GlobalSidebar'

export default async function PostsPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="relative grid gap-6 px-6 md:grid-cols-sidebar">
      <GlobalSidebar />
      <div className="relative items-start justify-items-start p-6">
        {/* <Gallery photos={data.photos?.photo} /> */}
        <div className="flex h-full items-center justify-center border bg-gray-100">
          <h2 className=" text-2xl uppercase">Albums page to go here</h2>
        </div>
      </div>
    </div>
  )
}
