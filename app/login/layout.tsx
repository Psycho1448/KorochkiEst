import type { Metadata } from 'next';
import React from 'react'
export const metadata:Metadata ={
  title:'Корочки.есть | Вход'
}
export default function LayoutLogin({children}:{children:React.ReactNode}) {
 return <main className='min-h-screen flex flex-col justify-center w-full px-2.5 items-center'>
   {children}
 </main>
}