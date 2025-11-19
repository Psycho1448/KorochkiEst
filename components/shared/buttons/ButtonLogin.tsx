import Link from 'next/link'
import React from 'react'
import useHeaderContext from '@/hooks/useHeaderContext'

export default function ButtonLogin(){
  const {setIsOpenMenu} = useHeaderContext()
 return <Link onClick={()=>setIsOpenMenu(false)} href={'/login'} className='transition-colors duration-300 ease-out after:transition-opacity after:duration-300 after:ease-out bg-violet-500 dark:bg-violet-600 px-2.5 py-2.5 rounded-md text-white font-medium relative after:absolute after:inset-0 after:outline-2 after:outline-violet-500 dark:after:outline-violet-600 after:rounded-md after:blur-[5px] after:opacity-0 hover:after:opacity-100 text-center hover:bg-violet-400 active:bg-violet-600 dark:hover:bg-violet-500 dark:active:bg-violet-700 active:after:opacity-100 select-none'>Войти</Link>
}