import Gallery from '@/app/components/Gallery'
import GlobalSidebar from '../components/GlobalSidebar'

// Should I be using serversideprops here?
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#getserversideprops-or-api-routes

export default async function PostsPage() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const userId = process.env.NEXT_PUBLIC_USER_ID

  const flickrUrl = `https://www.flickr.com/services/rest?method=flickr.people.getPublicPhotos&user_id=${userId}&extras=description,tags,o_dims,url_l,url_k&format=json&nojsoncallback=1&api_key=${apiKey}&per_page=12`
  const res = await fetch(flickrUrl, {
    next: { revalidate: 60 },
  })

  const data = await res.json()

  if (!data.photos) {
    return <div>Loading...</div>
  }
  return (
    <div className="md:grid-cols-sidebar relative grid gap-6 px-6">
      <GlobalSidebar
        title="Test the title"
        description="️️️Web Developer by day, photo enthusiast by night and always a geek! When I'm not untangling code and chasing pixel perfection, you can catch me obsessing over the perfect exposure and trying to convince my camera that it's not a mouse (apparently, autofocus disagrees)."
      />
      <div className="relative items-start justify-items-start py-6">
        {<Gallery photos={data.photos?.photo} />}
      </div>
    </div>
  )
}
