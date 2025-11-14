'use client'
import {HeaderContext} from '@/context/HeaderContext'
import React from 'react'
import Error from 'next/error'

export default function useHeaderContext(){
  const context = React.useContext(HeaderContext)
  if(!context) {
    throw new Error({statusCode:500, title:'useHeaderContext', hostname:'useHeaderContext'})
  }
 return context
}