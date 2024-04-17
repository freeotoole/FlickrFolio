import PortfolioItem from '@/app/components/homepage/PortfolioItem'
import MacBook from '@/app/components/MacBook'
import NoiseBackdrop from '../NoiseBackdrop'

export default function Portfolio() {
  return (
    <section className="bg-gray-100 2xl:max-w-screen-2xl">
      <div className=" pt-10 md:pt-12 lg:pt-16">
        <h2 className="mx-auto mb-10 max-w-5xl px-10 text-center text-4xl  text-gray-500 lg:mb-0">
          Outside of work, I love keeping up with new technologies. Here are a
          few of my projects:
        </h2>
        <PortfolioItem
          className="!pt-0"
          title="FlickrFolio"
          tags={['nextjs', 'typescript', 'tailwindcss']}
          primaryCta={{
            label: 'See it in action',
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
                With my passion for photography, I wanted to share my photos
                with family and friends without the distraction of Flickr's
                social media driven interface.
              </p>
              <p>
                I used Nextjs app router to prefetch, aggregate and cache seven
                separate <strong>Flickr API</strong> endpoints. Efficiently
                delivering images using <strong>next/image</strong>'s
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
      </div>

      <div className="relative bg-blue-300/40">
        <PortfolioItem
          className=""
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
        <NoiseBackdrop />
      </div>
      <PortfolioItem
        className=" "
        title="Tailwind text clamp"
        tags={['tailwindcss', 'npm']}
        description={
          <p className="text-xl">
            Tailwind plugin to dynamically scale typographic rhythm based on
            screen width.
          </p>
        }
        primaryCta={{
          label: 'View on npm',
          href: 'https://www.npmjs.com/package/@onthetools/tailwind-text-clamp',
        }}
        secondaryCta={{
          label: 'Check it out on GitHub',
          href: 'https://github.com/freeotoole/tailwind-text-clamp',
          target: '_blank',
        }}
      >
        <div className="flex flex-col gap-4 text-sm">
          <p>
            I'm a huge fan of using the font scales over at{' '}
            <a href="https://www.typescale.com" target="_blank">
              typescale.com
            </a>{' '}
            to define typographic rhythm. My favourite scale for larger screens
            and print has always been the "augmented fourth" (1.414) but I've
            found that if I use this scale at smaller screen size, the rhythm
            scale is too large.
          </p>
          <p className="">
            This plugin allows you to define different type scales at minimum
            and maximum tailwind screen sizes ensuring a relevant type hierarchy
            at any screen size.
          </p>
        </div>
      </PortfolioItem>
    </section>
  )
}
