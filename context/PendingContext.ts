'use client'
import React, {createContext} from 'react'
export interface IPendingContext {
  pending:boolean
  setPending: React.TransitionStartFunction
}
export const PendingContext = createContext<IPendingContext|null>(null);