import type { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: 'Корочки.есть | Регистрация'
}
export default function LayoutRegister({children}:{children:React.ReactNode}){
 return <main className='min-h-screen w-full px-2.5 flex items-center justify-center'>
   {children}
 </main>
}