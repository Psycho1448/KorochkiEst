'use client'

import React from 'react'
import {PendingContext} from '@/context/PendingContext'
import Error from 'next/error'

export default function usePendingContext(){
  const context = React.useContext(PendingContext)
  if(!context) throw new Error({title:'Ошибка', statusCode:500})
 return context
}