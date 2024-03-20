import React, { createContext, useEffect, useState } from 'react'

// import { usePathname, useSearchParams } from 'next/navigation'

import { GlobalSidebarProps } from '@/app/types/global-sidebar'

export const GlobalSidebarContext = createContext<
  GlobalSidebarProps | undefined
>(undefined)

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [layout, setLayout] = useState<GlobalSidebarProps>({
    album: '',
    title: '',
    description: '',
  })

  // Add any logic here to update the layout state

  return (
    <GlobalSidebarContext.Provider value={layout}>
      {children}
    </GlobalSidebarContext.Provider>
  )
}
