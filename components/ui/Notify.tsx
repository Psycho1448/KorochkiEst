'use client'
import useNotifyContext from '@/hooks/useNotifyContext'

export default function Notify(){
  const {message, isNotify} = useNotifyContext()
 return <div className={`absolute translate-y-30 max-w-40 break-all p-2.5 rounded-md transition-opacity duration-300 ease-out ${isNotify?'opacity-100':'opacity-0'} ${message.includes('Ошибка:')?'bg-red-500 dark:bg-red-600':'bg-green-500 dark:bg-green-600'}`}>
   <p className='font-medium text-white text-center'>{message}</p>
  </div>
}