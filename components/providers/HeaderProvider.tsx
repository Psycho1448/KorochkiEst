'use client'
import React, {useEffect} from 'react'
import {HeaderContext} from '@/context/HeaderContext'
import {usePathname} from 'next/navigation'

export default function HeaderProvider({children}:{children:React.ReactNode}){
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false)
  const [width, setWidth] = React.useState(0)
  const pathname = usePathname()
  const value ={
    isOpenMenu:isOpenMenu,
    setIsOpenMenu:setIsOpenMenu,
    width:width
  }
  useEffect(() => {
    function resize(){
      setWidth(window.innerWidth)
      if(width > 768){
        setIsOpenMenu(false)
      }
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {window.removeEventListener('resize', resize)}
  }, [width])
  useEffect(() => {
    if(isOpenMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [isOpenMenu])
  useEffect(() => {
    function handleNavigate(){
      setIsOpenMenu(false)
    }
    handleNavigate()
  }, [pathname])
  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}