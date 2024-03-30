import { fetchPublicPhotos } from '@/app/apiUtils'

export default async function PostsPage() {
  const data = await fetchPublicPhotos()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="">
      <div className="">
        <div className="flex h-full items-center justify-center border bg-gray-100">
          <h2 className="text-2xl uppercase">Albums page to go here</h2>
        </div>
      </div>
    </div>
  )
}
