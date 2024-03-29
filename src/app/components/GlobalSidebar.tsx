'use client'

import { log } from 'console'
import React, { useContext } from 'react'
import Link from 'next/link'

import Navbar from '@/app/components/Navbar'
import { GlobalSidebarContext } from '@/app/LayoutContext'
import { GlobalSidebarProps } from '@/app/types/global-sidebar'
import Icon from './Icon'
import ImageNavigation from './ImageNavigation'

const GlobalSidebar: React.FC<GlobalSidebarProps> = ({ navigation }) => {
  const context = useContext(GlobalSidebarContext)
  const title = context?.title || ''
  const description = context?.description || ''

  console.log('context', context)

  return (
    <div className="top-0 flex flex-col border-r md:fixed md:h-screen md:w-[var(--sidebar-width)]">
      <Navbar />

      {/* {navigation && <ImageNavigation {...navigation} />} */}
    </div>
  )
}

export default GlobalSidebar
