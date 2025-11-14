'use client'
import Logo from '@/components/shared/Logo'
import MenuIcon from '@/components/icons/MenuIcon'
import useHeaderContext from '@/hooks/useHeaderContext'
import MenuMobile from '@/components/ui/MenuMobile'
import React from 'react'
import Link from 'next/link'
import {AnimatePresence} from 'framer-motion'
import ButtonLogin from '@/components/shared/buttons/ButtonLogin'

export default function Header(){
  const {width, setIsOpenMenu, isOpenMenu} = useHeaderContext()
 return <>
   <header className='bg-white dark:bg-[#212121] fixed w-full border-b border-neutral-300 dark:border-neutral-700 p-2.5 flex items-center justify-center z-101'>
     <div className='flex flex-row justify-between items-center max-w-300 w-full'>
       <Logo/>
       {width<=768
         ?
         <button onClick={()=>setIsOpenMenu(prevState => !prevState)}>
           <MenuIcon/>
         </button>
         :
         <ButtonLogin/>
       }

     </div>
   </header>
   <AnimatePresence>
     {isOpenMenu&&<MenuMobile/>}
   </AnimatePresence>
 </>
}