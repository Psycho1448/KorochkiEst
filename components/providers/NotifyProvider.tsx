'use client'
import {NotifyContext} from '@/context/NotifyContext'
import React, {useEffect} from 'react'

export default function NotifyProvider({children}:{children:React.ReactNode}) {
  const [message, setMessage] = React.useState<string>('QJJJJJE0')
  const [isNotify, setIsNotify] = React.useState<boolean>(false)
  const value = {
    message:message,
    setMessage:setMessage,
    isNotify:isNotify,
    setIsNotify:setIsNotify
  }
  useEffect(() => {
    if(isNotify){
      setTimeout(()=>{
        setIsNotify(false)
      },3000)
    }
  }, [isNotify])
 return <NotifyContext.Provider value={value}>{children}</NotifyContext.Provider>
}