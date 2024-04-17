import Link from 'next/link'

import Icon from '../Icon'

type CallToAction = {
  label: string
  href: string
  title?: string
  target?: string
}

interface PortfolioItemTitleProps {
  title: string
  tags?: string[]
  children?: React.ReactNode
  description: React.ReactNode
  className?: string
  alternate?: boolean
  primaryCta?: CallToAction
  secondaryCta?: CallToAction
}
export default function PortfolioItem({
  title,
  tags,
  children,
  description,
  className,
  alternate,
  primaryCta,
  secondaryCta,
}: PortfolioItemTitleProps) {
  return (
    <article className={`py-10 md:py-16 lg:py-20 ${className}`}>
      <div
        className={`mx-auto grid  items-center gap-20 px-4 sm:px-6 md:px-10  ${children ? ' max-w-6xl md:grid-cols-2 ' : 'max-w-2xl '} `}
      >
        <div className="ml-auto flex flex-col gap-4">
          {tags && (
            <ul className="mb-6 flex gap-4 text-sm font-semibold">
              {tags.map((tag, i) => (
                <li key={i} className="flex items-center gap-1 text-gray-600">
                  <Icon name="Layers" className="text-blue-600" /> {tag}
                </li>
              ))}
            </ul>
          )}
          <h2 className="text-shadow-light text-3xl font-semibold">{title}</h2>
          <div className="text-shadow-light flex flex-col gap-4">
            {description}
          </div>
          {(primaryCta || secondaryCta) && (
            <p className=" mr-auto flex items-center gap-6 text-sm font-semibold">
              {primaryCta && (
                <Link
                  {...primaryCta}
                  className="rounded-full bg-gray-600 px-6 py-3 text-white hover:bg-gray-800 hover:text-yellow-200"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  {...secondaryCta}
                  className="text-blue-600 underline hover:no-underline"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </p>
          )}
        </div>
        {children && (
          <div className={`relative pt-10 ${alternate ? 'order-first' : ''}`}>
            {children}
          </div>
        )}
      </div>
    </article>
  )
}
