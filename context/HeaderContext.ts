'use client'
import React from 'react'
export interface IHeaderContext {
  width:number
  setIsOpenMenu:React.Dispatch<React.SetStateAction<boolean>>
  isOpenMenu: boolean
}
export const HeaderContext = React.createContext<IHeaderContext | null>(null)