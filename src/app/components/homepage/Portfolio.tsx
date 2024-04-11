import PortfolioItem from '@/app/components/homepage/PortfolioItem'
import MacBook from '@/app/components/MacBook'

export default function Portfolio() {
  return (
    <section className="">
      <PortfolioItem
        className="overflow-hidden md:py-4 lg:py-10"
        title="FlickrFolio"
        tags={['nextjs', 'typescript', 'tailwindcss']}
        primaryCta={{
          label: 'View project',
          href: 'https://flickr-folio.vercel.app',
        }}
        secondaryCta={{
          label: 'View on GitHub',
          href: 'https://github.com/freeotoole/FlickrFolio',
        }}
        description={
          <>
            <p className="clamp-text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec nisl in nunc ultricies.
            </p>
            <p>
              Nextjs app router to prefetch, aggregate and cache{' '}
              <strong>seven</strong> separate Flickr API endpoints. Efficient
              image delivery using next/image&apos;s server-side caching,
              automated <strong>WebP</strong> generation and{' '}
              <strong>lazy loading</strong>.
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
        className="bg-gray-100 "
        title="CSS Macbook Mockup"
        tags={['css', 'npm']}
        alternate
        description={
          <>
            <p className="clamp-text-base">
              Scrollable CSS-only mockup to showcase your websites and design.
            </p>
            <p>
              No images (apart from your screenshot), no JavaScript, just
              semantic HTML5 & pure CSS. Can you find the{' '}
              <strong title="Try the menu.">easter egg</strong>?
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            nisl in nunc ultricies.
          </p>
        }
      ></PortfolioItem>
    </section>
  )
}
