import React from 'react'
import * as Icons from 'react-feather'

export interface IconProps {
  className?: string
  name: keyof typeof Icons
  strokeWidth?: number
  size?: number
  color?: string
  hover?: {
    color?: string
    strokeWidth?: number
    size?: number
  }
}

const Icon: React.FC<IconProps> = ({
  name,
  strokeWidth,
  size,
  color,
  className,
}) => {
  const IconComponent = Icons[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" doesn't exist in Feather Icons`)
    return null
  }

  return (
    <IconComponent
      className={`${!size ? 'h-[1em] w-[1em] flex-shrink-0' : ''} ${className || ''}`}
      strokeWidth={strokeWidth || 1}
      size={size || undefined}
      color={color || 'currentColor'}
    />
  )
}

export default Icon
