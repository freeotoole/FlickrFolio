import SinglePhoto from '@/app/components/SinglePhoto'

interface Params {
  id: string
}

export default async function PhotoPage({ params }: { params: Params }) {
  return <SinglePhoto params={params} />
}
