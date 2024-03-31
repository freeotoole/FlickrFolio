/* eslint-disable react/no-unescaped-entities */

import Icon from '@/app/components/Icon'

export default function About() {
  return (
    <div className="prose ml-10 pb-10 pt-10 lg:prose-lg">
      <h1 className="text-primary-500">
        <span className="text-primary-500">Flickr</span>
        <span className="text-secondary-500">Feed</span> is meticulously
        designed to offer a seamless and sophisticated platform for showcasing
        your photography.
      </h1>
      <p className="lead">
        With an intuitive interface, customizable features, and zero cost,
        FlickrFolio is the ultimate solution for photographers of all levels.
      </p>

      <h2 className="text-primary-500">Simplified Showcase</h2>

      <p className="">
        Connect effortlessly to your Flickr account and unlock a world of
        possibilities. FlickrFolio creates a minimalist, infinite scrolling web
        gallery that elegantly displays your photos and albums. Whether you're a
        professional seeking a sleek portfolio or an amateur looking to share
        your passion, FlickrFolio caters to your needs with grace.
      </p>
      <h2 className="flex items-center gap-3 text-primary-500">
        Open Source <Icon name="GitHub" className=" text-secondary-500" />
      </h2>

      <p>
        FlickrFolio is more than just a tool—it's a collaborative project. As an
        open-source endeavor, the source code and documentation is available on{' '}
        <a href="https://github.com/freeotoole/FlickrFolio">GitHub</a>, inviting
        contributions, issue reports, and feature suggestions from the
        community. Join us in shaping the future of photography display on the
        web.
      </p>

      <p className="py-10 text-center">
        <a
          className="rounded-lg border-[pink] bg-secondary-600 px-10 py-4 text-white no-underline hover:bg-secondary-700"
          href="https://github.com/freeotoole/FlickrFolio"
        >
          Check it out on GitHub
        </a>
      </p>

      <p>
        Experience the elegance, simplicity, and freedom of FlickrFolio today.
        Showcase your photos like never before, and let your creativity shine.
      </p>
    </div>
  )
}
