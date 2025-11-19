'use client'
import React, {ReactNode, useEffect} from 'react'
import {DataContext} from '@/context/DataContext'
import {IJWTPayload} from '@/lib/jwt'

export default function DataUserProvider({children}: {children: ReactNode}) {
  const [value, setValue] = React.useState<IJWTPayload|null>(null);
  useEffect(() => {
    async function getDataUser(){
      const req = await fetch('/api/getDataUser', {
        method:'GET',
      })
      const res = await req.json()
      if(res.user !== null){
        setValue(res.user.props)
      }
    }
    getDataUser()
  }, [])
 return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}