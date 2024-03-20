import Gallery from '../components/Gallery'
import Navbar from '../components/Navbar'

// Should I be using serversideprops here?
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#getserversideprops-or-api-routes

export default async function PostsPage() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const userId = process.env.NEXT_PUBLIC_USER_ID

  // flickr.photosets.getPhotos&photoset_id=${albums[album].id}
  const photosetUrl = `https://www.flickr.com/services/rest?method=flickr.people.getPublicPhotos&user_id=${userId}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=12`

  const res = await fetch(photosetUrl, {
    next: { revalidate: 60 },
  })

  const data = await res.json()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="md:grid-cols-sidebar relative grid gap-6 p-6">
      <div className="flex flex-col">
        <Navbar layout="horizontal" />
        <h2>Albums landing page</h2>
        {/* <div className="border-t border-gray-300 py-6 text-right">
          <p>
            ️️️Web Developer by day, photo enthusiast by night and always a
            geek! When I&apos;m not untangling code and chasing pixel
            perfection, you can catch me obsessing over the perfect exposure and
            trying to convince my camera that it&apos;s not a mouse (apparently,
            autofocus disagrees).
          </p>
        </div> */}
      </div>
      <div className="relative items-start justify-items-start">
        {<Gallery photos={data.photos?.photo} />}
      </div>
    </div>
  )
}
