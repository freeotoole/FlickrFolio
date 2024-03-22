import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons'

const ImageNavigation = ({ prev, next }: { prev?: string; next?: string }) => {
  const path = usePathname()

  // return null if no navigation items
  if (!prev && !next) {
    return null
  }

  const prevPath = prev && path.replace(/\/\d+$/, `/${prev}`)
  const nextPath = next && path.replace(/\/\d+$/, `/${next}`)

  return (
    <nav>
      <ul className="flex">
        {!!prevPath && (
          <li>
            <Link className="flex items-center gap-2 py-3 pr-4" href={prevPath}>
              <ArrowLeft />
              Previous
            </Link>{' '}
          </li>
        )}
        {!!nextPath && (
          <li className="ml-auto">
            <Link className="flex items-center gap-2 py-3 pl-4" href={nextPath}>
              Next <ArrowRight />
            </Link>{' '}
          </li>
        )}
      </ul>
    </nav>
  )
}

export default ImageNavigation
