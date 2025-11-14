'use client'
import {contactsData} from '@/data/contactsData'
import useHeaderContext from '@/hooks/useHeaderContext'
import SwitcherThemes from '@/components/shared/SwitcherThemes'

export default function Footer(){
  const {width} = useHeaderContext()
  return <footer className='bg-white dark:bg-[#212121] w-full flex p-2.5 justify-center'>
   <div className='w-full flex max-w-300 justify-between items-center'>
     <div className='text-neutral-500 dark:text-neutral-400 font-medium gap-2.5'>
       <p className='text-neutral-700 dark:text-neutral-200'>Связаться с нами</p>
       <div className='flex flex-col gap-1.25 '>
         {contactsData.map((contact, index) => {
           return <p key={index} className='text-sm'>{contact.contact}</p>
         })}
       </div>
     </div>
     {width>768&&<SwitcherThemes/>}
   </div>
 </footer>
}