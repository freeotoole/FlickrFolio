/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link'

interface AboutMeProps {}
export default function AboutMe({}: AboutMeProps) {
  return (
    <section className="bg-blue-700 px-10 text-white 2xl:max-w-screen-2xl">
      <div className="mx-auto max-w-4xl py-20 text-center">
        <h2 className="mb-6 text-xl font-semibold uppercase tracking-widest ">
          About me
        </h2>

        <p className="mb-10 text-3xl !leading-normal">
          I have a passion for learning and collect hobbies like some people
          (me) collect records.
        </p>
        <p className="text-lg !leading-normal">
          I'm currently rediscovering the joy of{' '}
          <Link href="/albums/film" className="link-text text-yellow-300">
            analog photography
          </Link>{' '}
          with my collection of vintage 35mm cameras. I also enjoy playing
          guitar,{' '}
          <Link
            href="https://www.instagram.com/beef_lebowski/"
            className="link-text text-yellow-300"
          >
            competitive BBQ
          </Link>
          , roasting my own coffee beans and pulling the perfect espresso shot
          to ensure perfect caffeine to code ratio.
        </p>
      </div>
    </section>
  )
}
