'use client'
import {useContext} from 'react'
import {NotifyContext} from '@/context/NotifyContext'
import Error from 'next/error'

export default function useNotifyContext(){
  const context = useContext(NotifyContext)
  if(!context) throw new Error({title:'Ошибка', statusCode:500})
 return context
}