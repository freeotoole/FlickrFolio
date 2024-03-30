// import { fetchPhotosetInfo } from '@/app/apiUtils'

import Navbar from '@/app/components/Navbar'

export default async function GlobalSidebar() {
  // Future Feature: Fetch album info from Flickr to build album navigation
  // const albums = ['72177720313681808', '72177720314817024', '72177720313143179']
  // const response = await Promise.all(
  //   albums.map((albumId) => fetchPhotosetInfo(albumId))
  // )

  // const albumList = response.map((item) => ({
  //   title: item.photoset.title._content,
  //   description: item.photoset.description._content,
  //   photosetId: item.photoset.id,
  // }))

  // albums={albumList}
  return (
    <div className="top-0 flex flex-col border-r md:fixed md:h-screen md:w-[var(--sidebar-width)]">
      <Navbar />
    </div>
  )
}
