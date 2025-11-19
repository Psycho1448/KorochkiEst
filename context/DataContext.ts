'use client'
import {createContext} from 'react'
import {IJWTPayload} from '@/lib/jwt'
export const DataContext = createContext<IJWTPayload | null>(null)