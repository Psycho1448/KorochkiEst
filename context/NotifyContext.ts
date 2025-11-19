'use client'
import React from 'react'
export interface INotifyContext{
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
  isNotify: boolean
  setIsNotify: React.Dispatch<React.SetStateAction<boolean>>
}
export const NotifyContext = React.createContext<INotifyContext|null>(null)