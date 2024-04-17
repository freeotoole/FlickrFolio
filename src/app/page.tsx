import Link from 'next/link'

import HeroBanner from '@/app/components/homepage/HeroBanner'
import Icon from '@/app/components/Icon'
import AboutMe from './components/homepage/AboutMe'
import Portfolio from './components/homepage/Portfolio'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <AboutMe />
      <Portfolio />
      <footer className="bg-gray-600 px-10 py-16  text-white  2xl:max-w-screen-2xl">
        <div className="grid w-full grid-cols-1 gap-x-20 gap-y-4 text-gray-200 md:grid-cols-3 ">
          <div className="w-full text-sm ">
            <h3 className="mb-1 block text-3xl font-semibold leading-loose">
              Hi again.
            </h3>
            <p className="mb-2 text-xl">
              Thanks for making it to the end of the page!
            </p>
          </div>
          <div className="md:col-span-2 ">
            <p className="md:max-w-md">
              If you've reading this you're probably recruiting for a{' '}
              <span className="whitespace-nowrap">front end</span>{' '}
              developer&#8253; If so, and you think I'd' be a good fit for your
              team I'd love to hear about the role.
            </p>
            <p>
              <Link
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-950 hover:text-yellow-200"
                href="https://www.linkedin.com/in/freeotoole"
              >
                <Icon name="Linkedin" strokeWidth={1} size={24} />
                Reach out on LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-black px-10 text-gray-400  2xl:max-w-screen-2xl">
        <p className=" py-4 text-right text-xs text-gray-300">
          &copy; Free O'Toole {new Date().getFullYear()}
        </p>
      </div>
      {/* <Gallery /> */}
    </div>
  )
}
