import SinglePhoto from '@/app/components/SinglePhoto'

interface Params {
  id: string
}

export default async function AlbumPhotoPage({ params }: { params: Params }) {
  // console.log('params', params)

  return <SinglePhoto params={params} />
}
