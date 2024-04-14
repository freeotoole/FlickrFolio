// import Gallery from '@/app/components/Gallery'

import HeroBanner from '@/app/components/homepage/HeroBanner'
import AboutMe from './components/homepage/AboutMe'
import Portfolio from './components/homepage/Portfolio'

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <HeroBanner />
      <AboutMe />
      <Portfolio />
      <footer className=" border-t-2 border-yellow-200 bg-gray-600 py-10 pl-20 text-white 2xl:max-w-screen-2xl">
        <h3>Footer things go down hurr</h3>
      </footer>
      {/* <Gallery /> */}
    </div>
  )
}
