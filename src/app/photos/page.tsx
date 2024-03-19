import Gallery from '../components/gallery/Gallery'
import Navbar from '../components/navbar/Navbar'

export default async function PostsPage() {
  const res = await fetch('http://localhost:3013/api/photos')
  const data = await res.json()

  return (
    <div className="md:grid-cols-sidebar relative grid gap-6 p-6">
      <div className="flex flex-col">
        <Navbar layout="horizontal" />
        <div className="border-t border-gray-300 py-6 text-right">
          <p>
            ️️️Web Developer by day, photo enthusiast by night and always a
            geek! When I&apos;m not untangling code and chasing pixel
            perfection, you can catch me obsessing over the perfect exposure and
            trying to convince my camera that it&apos;s not a mouse (apparently,
            autofocus disagrees).
          </p>
        </div>
      </div>
      <div className="relative items-start justify-items-start">
        {data.photo && <Gallery photos={data.photo} />}
      </div>
    </div>
  )
}
