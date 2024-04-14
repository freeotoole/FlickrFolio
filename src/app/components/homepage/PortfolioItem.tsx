import Link from 'next/link'

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
      <div className="mx-auto grid max-w-6xl items-center gap-20 px-4 sm:px-6 md:grid-cols-2 md:px-10 ">
        <div className="ml-auto flex flex-col gap-6">
          {tags && (
            <ul className="mb-10 flex gap-4 text-sm font-semibold">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className="rounded-full border bg-gray-200 px-3 py-px text-black"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="flex flex-col gap-6">{description}</div>
          {(primaryCta || secondaryCta) && (
            <p className="mr-auto flex items-center gap-6 text-sm font-semibold">
              {primaryCta && (
                <Link
                  {...primaryCta}
                  className="rounded-full bg-gray-600 px-6 py-3 text-white"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  {...secondaryCta}
                  className="text-blue-600 hover:underline"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </p>
          )}
        </div>
        <div className={`relative pt-10 ${alternate ? 'order-first' : ''}`}>
          {children}
        </div>
      </div>
    </article>
  )
}
