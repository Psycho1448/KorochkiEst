'use client'
import React from 'react'
import {PendingContext} from '@/context/PendingContext'

export default function PendingProvider({children}:{children:React.ReactNode}) {
  const [pending, setPending] = React.useTransition()
  const value= {
    pending: pending,
    setPending: setPending,
  }
 return <PendingContext.Provider value={value}>{children}</PendingContext.Provider>
}