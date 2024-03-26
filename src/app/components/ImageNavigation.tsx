import { useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Camera } from 'react-feather'

const ImageNavigation = ({ prev, next }: { prev?: string; next?: string }) => {
  const path = usePathname()
  const router = useRouter()

  // add animation on navigate - needs to be on single image page
  const prevPath = prev && path.replace(/\/\d+$/, `/${prev}`)
  const nextPath = next && path.replace(/\/\d+$/, `/${next}`)
  // add isLoading to context or something
  const navigate = useCallback(
    (direction: number) => {
      // console.log('navigate', direction)
      direction === -1 && prevPath && router.push(prevPath)
      direction === 1 && nextPath && router.push(nextPath)
    },
    [nextPath, prevPath, router]
  )

  useEffect(() => {
    // console.log('navigate')
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft') {
        navigate(-1)
      } else if (event.code === 'ArrowRight') {
        navigate(1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navigate])

  if (!prev && !next) {
    return null
  }

  return (
    <nav>
      <ul className="flex">
        {!!prevPath && (
          <li>
            <button
              className="flex items-center gap-2 py-3 pr-4"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft strokeWidth={1} />
              Previous
            </button>
          </li>
        )}
        {!!nextPath && (
          <li className="ml-auto">
            <button
              className="flex items-center gap-2 py-3 pl-4"
              onClick={() => navigate(1)}
            >
              Next <ArrowRight strokeWidth={1} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default ImageNavigation
