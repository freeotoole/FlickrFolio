'use client'

import React, { useContext } from 'react'

import Navbar from '@/app/components/Navbar'
import { GlobalSidebarContext } from '@/app/LayoutContext'
import { GlobalSidebarProps } from '@/app/types/global-sidebar'
import ImageNavigation from './ImageNavigation'

const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  title,
  description,
  album,
  navigation,
}) => {
  const context = useContext(GlobalSidebarContext)
  title = title || context?.title || ''
  description = description || context?.description || ''
  return (
    <div className="sticky top-0 flex h-screen flex-col">
      <Navbar layout="vertical" />

      {/* {navigation && <ImageNavigation {...navigation} />} */}

      {(title || description) && (
        <aside className="flex flex-1 flex-col gap-4 border-t border-gray-300 py-6 text-right">
          {title && <h2 className="text-3xl">{title}</h2>}
          {description && <p>{description}</p>}
        </aside>
      )}
    </div>
  )
}

export default GlobalSidebar
