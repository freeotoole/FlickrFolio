'use client'

import React, { useContext } from 'react'

import Navbar from '@/app/components/Navbar'
import { GlobalSidebarContext } from '@/app/LayoutContext'
import { GlobalSidebarProps } from '@/app/types/global-sidebar'
import ImageNavigation from './ImageNavigation'

const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  title,
  description,
  navigation,
}) => {
  const context = useContext(GlobalSidebarContext)
  title = title || context?.title || ''
  description = description || context?.description || ''
  return (
    <div className="top-0 flex flex-col md:sticky md:h-screen">
      <Navbar layout="vertical" />

      {navigation && <ImageNavigation {...navigation} />}

      {(title || description) && (
        <aside className="flex flex-col gap-4 border-t border-gray-300 py-6 md:flex-1 md:text-right">
          {title && <h2 className="text-3xl">{title}</h2>}
          {description && <p>{description}</p>}
        </aside>
      )}
    </div>
  )
}

export default GlobalSidebar
