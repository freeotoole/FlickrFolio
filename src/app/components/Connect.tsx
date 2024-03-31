import Link from 'next/link'

import Icon from '@/app/components/Icon'

export default function Connect() {
  return (
    <div className="mt-auto border-t py-10 md:py-6 ">
      <ul className="flex justify-center gap-8 text-2xl">
        <li>
          <Link
            href="https://github.com/freeotoole/FlickrFolio"
            target="_blank"
          >
            <Icon name="GitHub" />
            <span className="sr-only">Download from GitHub</span>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/freeotoole" target="_blank">
            <Icon name="Linkedin" />
            <span className="sr-only">Find me on LinkedIn</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
