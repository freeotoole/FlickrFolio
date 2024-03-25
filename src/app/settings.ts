import { IconProps } from '@/app/components/Icon'

type Settings = {
  gap: 'sm' | 'md' | 'lg' | 'xl'
  columns: 2 | 3 | 4
  siteName: string | null
  siteDescription?: string | null
  colophon?: string | null
  albums: { [key: string]: Album }
  perPage: number
  gallery?: {
    title?: string
    subtitle?: string
    slug: string
  }
}

type Album = {
  id: string
  slug: string
  title: string
  subtitle: string
  icon?: IconProps['name']
}

// get this year from date
const year = new Date().getFullYear()

export const settings: Settings = {
  gap: 'md',
  columns: 3,
  siteName: "Free's photogram",
  siteDescription:
    "**FLICKR GALLERY** by [Free O'Toole](https://freeotoole.com)",
  colophon: `**© ${year}** | Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and the [Flickr API](https://www.flickr.com/services/api).`,
  albums: {
    film: {
      id: '72177720313681808',
      slug: 'film',
      title: 'Analogue adventures',
      subtitle: 'Shots from my various analog cameras',
      icon: 'Film',
    },
    cruise: {
      id: '72177720314817024',
      slug: 'cruise',
      title: 'Resilient Lady',
      subtitle:
        "My first cruise; Sydney to Hobart on VirginVoyage's Resilient Lady",
      icon: 'Anchor',
    },
  },
  perPage: 12,
  gallery: {
    title: 'My latest photos',
    subtitle:
      '8-bit gochujang photo booth gatekeep lomo, blog shoreditch tattooed. Celiac actually narwhal listicle, mukbang sus kinfolk pug banjo brunch.',
    slug: 'gallery',
  },
}
