import Link from 'next/link'

import Icon from '@/app/components/Icon'

export default function Connect() {
  return (
    <div className="mt-auto border-t bg-gray-100 py-10 md:bg-transparent md:py-6 ">
      <ul className="flex justify-center gap-8 text-2xl">
        <li>
          <Link href="#" target="_blank">
            <Icon name="Mail" />
            <span className="sr-only">Email</span>
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <Icon name="Instagram" />
            <span className="sr-only">Follow me on Insta</span>
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <Icon name="Linkedin" />
            <span className="sr-only">Find me on LinkedIn</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
