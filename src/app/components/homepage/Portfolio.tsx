import PortfolioItem from '@/app/components/homepage/PortfolioItem'
import MacBook from '@/app/components/MacBook'

export default function Portfolio() {
  return (
    <section className="bg-gray-100 pt-10 md:pt-12 lg:pt-16 2xl:max-w-screen-2xl">
      <h2 className="mx-auto mb-10 max-w-5xl px-10 text-center text-5xl leading-tight text-gray-500 lg:mb-0">
        Outside of work, I love keeping up with new technologies. Here are a few
        of my latest projects:
      </h2>
      <PortfolioItem
        className="md:py-4 lg:py-10"
        title="FlickrFolio"
        tags={['nextjs', 'typescript', 'tailwindcss']}
        primaryCta={{
          label: 'View project',
          href: 'https://flickr-folio.vercel.app',
          target: '_blank',
        }}
        secondaryCta={{
          label: 'View on GitHub',
          href: 'https://github.com/freeotoole/FlickrFolio',
          target: '_blank',
        }}
        description={
          <>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec nisl in nunc ultricies.
            </p>
            <p>
              Nextjs app router to prefetch, aggregate and cache{' '}
              <strong>seven</strong> separate Flickr API endpoints. Efficient
              image delivery using <strong>next/image</strong>&apos;s
              server-side caching, automated <strong>WebP</strong> generation
              and <strong>lazy loading</strong>.
            </p>
          </>
        }
      >
        {/* pass the props into macbook */}
        <div className="relative -mt-20 w-[150%] max-w-6xl px-10 md:-left-[20%] md:mt-0 md:w-[75vw]">
          <MacBook />
        </div>
      </PortfolioItem>

      <PortfolioItem
        className="bg-blue-200 "
        title="CSS Macbook Mockup"
        tags={['css', 'npm']}
        alternate
        description={
          <>
            <p className="text-xl">
              Scrollable CSS-only mockup to showcase your websites and design.
            </p>
            <p>
              No images (apart from your screenshot), no JavaScript, just
              semantic HTML5 & pure CSS. Can you find the{' '}
              <strong title="HINT: try the menu.">easter egg</strong>?
            </p>
          </>
        }
      >
        <div className="relative px-10">
          <MacBook />
        </div>
      </PortfolioItem>

      <PortfolioItem
        className=""
        title="Tailwind text clamp"
        tags={['tailwindcss', 'npm']}
        description={
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            nisl in nunc ultricies.
          </p>
        }
        primaryCta={{
          label: 'View on npm',
          href: 'https://www.npmjs.com/package/@onthetools/tailwind-text-clamp',
        }}
      ></PortfolioItem>
    </section>
  )
}
